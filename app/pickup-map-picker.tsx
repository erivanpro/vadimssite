"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";

export type PickupSelection = {
  label: string;
  formattedAddress: string;
  placeId: string;
  latitude: string;
  longitude: string;
  mapsUrl: string;
  source: "google_places_autocomplete" | "map_click" | "marker_drag";
};

const defaultCenter = {
  lat: 36.5101,
  lng: -4.8824,
};

const placesUnavailableMessage =
  "Google Places autocomplete is unavailable for this API key. Enable Places API (New), billing, and this domain in Google Cloud, or click the map to set pickup.";

const mapStyles: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#111416" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#d8d2c6" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#111416" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#c9a86a" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2a2f31" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#121416" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#08242d" }],
  },
];

declare global {
  interface Window {
    __elUnicoGoogleMapsConfigured?: boolean;
  }
}

function configureMaps(apiKey: string) {
  const mapsNamespace = (
    window as unknown as {
      google?: { maps?: { importLibrary?: unknown } };
    }
  ).google?.maps;

  if (
    window.__elUnicoGoogleMapsConfigured ||
    typeof mapsNamespace?.importLibrary === "function"
  ) {
    window.__elUnicoGoogleMapsConfigured = true;
    return;
  }

  setOptions({
    key: apiKey,
    v: "weekly",
    authReferrerPolicy: "origin",
  });

  window.__elUnicoGoogleMapsConfigured = true;
}

function toCoordinate(value: number) {
  return value.toFixed(6);
}

function mapsUrl(latitude: number, longitude: number, placeId = "") {
  const query = `${latitude},${longitude}`;

  if (placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query,
    )}&query_place_id=${encodeURIComponent(placeId)}`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

function googleMapsStatusMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error ?? "");

  if (
    /ApiNotActivated|not been used|disabled|REQUEST_DENIED|RefererNotAllowed|referrer|billing/i.test(
      message,
    )
  ) {
    return placesUnavailableMessage;
  }

  return message || "Google Maps could not be loaded.";
}

function createPinElement() {
  const pin = document.createElement("span");
  const label = document.createElement("span");

  pin.className = "pickup-advanced-pin";
  pin.setAttribute("aria-hidden", "true");
  label.textContent = "M";
  pin.append(label);
  return pin;
}

function createPickupOverlay(
  initialPosition: google.maps.LatLngLiteral,
  map: google.maps.Map,
) {
  class PickupOverlay extends google.maps.OverlayView {
    private div: HTMLSpanElement | null = null;

    constructor(private position: google.maps.LatLngLiteral) {
      super();
    }

    onAdd() {
      this.div = createPinElement();
      this.getPanes()?.overlayMouseTarget.appendChild(this.div);
    }

    draw() {
      if (!this.div) {
        return;
      }

      const point = this.getProjection().fromLatLngToDivPixel(
        new google.maps.LatLng(this.position),
      );

      if (!point) {
        return;
      }

      this.div.style.left = `${point.x}px`;
      this.div.style.top = `${point.y}px`;
    }

    onRemove() {
      this.div?.remove();
      this.div = null;
    }

    setPosition(position: google.maps.LatLngLiteral) {
      this.position = position;
      this.draw();
    }
  }

  const overlay = new PickupOverlay(initialPosition);
  overlay.setMap(map);

  return overlay;
}

function selectionFromPlace(place: google.maps.places.Place) {
  const location = place.location;

  if (!location) {
    return null;
  }

  const latitude = location.lat();
  const longitude = location.lng();
  const formattedAddress = place.formattedAddress ?? "";

  return {
    label: place.displayName || formattedAddress || "Selected pickup location",
    formattedAddress,
    placeId: place.id,
    latitude: toCoordinate(latitude),
    longitude: toCoordinate(longitude),
    mapsUrl: place.googleMapsURI ?? mapsUrl(latitude, longitude, place.id),
    source: "google_places_autocomplete" as const,
  };
}

function selectionFromGeocodeResult({
  result,
  latitude,
  longitude,
  source,
}: {
  result: google.maps.GeocoderResult | undefined;
  latitude: number;
  longitude: number;
  source: "map_click" | "marker_drag";
}) {
  const formattedAddress = result?.formatted_address ?? "";

  return {
    label: formattedAddress || "Pinned pickup location",
    formattedAddress,
    placeId: result?.place_id ?? "",
    latitude: toCoordinate(latitude),
    longitude: toCoordinate(longitude),
    mapsUrl: mapsUrl(latitude, longitude, result?.place_id),
    source,
  };
}

export function PickupMapPicker({
  apiKey,
  value,
  onChange,
}: {
  apiKey: string;
  value: PickupSelection | null;
  onChange: (selection: PickupSelection | null) => void;
}) {
  const autocompleteHostRef = useRef<HTMLDivElement | null>(null);
  const autocompleteElementRef =
    useRef<google.maps.places.PlaceAutocompleteElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<google.maps.OverlayView | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);
  const [status, setStatus] = useState(
    apiKey ? "Load the map and select pickup." : "Google Maps API key is missing.",
  );

  useEffect(() => {
    if (!apiKey) {
      return;
    }

    let isMounted = true;
    const listeners: google.maps.MapsEventListener[] = [];
    const domCleanups: Array<() => void> = [];

    async function setupMap() {
      try {
        configureMaps(apiKey);

        const [{ Map }, { PlaceAutocompleteElement }, { Geocoder }] =
          await Promise.all([
            importLibrary("maps"),
            importLibrary("places"),
            importLibrary("geocoding"),
          ]);

        if (
          !isMounted ||
          !mapRef.current ||
          !autocompleteHostRef.current
        ) {
          return;
        }

        const map = new Map(mapRef.current, {
          center: defaultCenter,
          zoom: 12,
          disableDefaultUI: true,
          clickableIcons: false,
          gestureHandling: "cooperative",
          styles: mapStyles,
        });

        const autocompleteElement = new PlaceAutocompleteElement({
          placeholder: "Search hotel, residence, airport, or marina",
          requestedLanguage: "en",
          requestedRegion: "es",
          locationBias: {
            center: defaultCenter,
            radius: 50000,
          },
        });

        autocompleteElement.className = "places-autocomplete-element";
        autocompleteElement.description =
          "Search for the chauffeur pickup location.";
        autocompleteHostRef.current.replaceChildren(autocompleteElement);

        const overlay = createPickupOverlay(defaultCenter, map);
        overlayRef.current = overlay;
        geocoderRef.current = new Geocoder();
        autocompleteElementRef.current = autocompleteElement;

        const handlePlaceSelect: EventListener = async (event) => {
          const selectEvent =
            event as google.maps.places.PlacePredictionSelectEvent;

          setStatus("Loading selected place details...");

          let placeDetails: { place: google.maps.places.Place };

          try {
            const place = selectEvent.placePrediction.toPlace();
            placeDetails = await place.fetchFields({
              fields: [
                "id",
                "displayName",
                "formattedAddress",
                "location",
                "googleMapsURI",
              ],
            });
          } catch (error) {
            if (isMounted) {
              setStatus(googleMapsStatusMessage(error));
            }

            return;
          }

          if (!isMounted) {
            return;
          }

          const selection = selectionFromPlace(placeDetails.place);

          if (!selection) {
            setStatus("Choose a pickup result with a mapped location.");
            return;
          }

          const position = {
            lat: Number(selection.latitude),
            lng: Number(selection.longitude),
          };

          overlay.setPosition(position);
          map.panTo(position);
          map.setZoom(16);
          autocompleteElement.value =
            selection.formattedAddress || selection.label;
          onChange(selection);
          setStatus("Pickup selected from Google Places.");
        };

        autocompleteElement.addEventListener("gmp-select", handlePlaceSelect);
        domCleanups.push(() => {
          autocompleteElement.removeEventListener(
            "gmp-select",
            handlePlaceSelect,
          );
        });

        const handlePlacesError = () => {
          setStatus(placesUnavailableMessage);
        };

        autocompleteElement.addEventListener("gmp-error", handlePlacesError);
        domCleanups.push(() => {
          autocompleteElement.removeEventListener(
            "gmp-error",
            handlePlacesError,
          );
        });

        async function selectMapPosition(
          latLng: google.maps.LatLng,
          source: "map_click" | "marker_drag",
        ) {
          const latitude = latLng.lat();
          const longitude = latLng.lng();
          const position = { lat: latitude, lng: longitude };

          overlay.setPosition(position);
          map.panTo(position);
          setStatus("Resolving pinned location...");

          const response = await geocoderRef.current?.geocode({
            location: position,
          });
          const selection = selectionFromGeocodeResult({
            result: response?.results[0],
            latitude,
            longitude,
            source,
          });

          if (!isMounted) {
            return;
          }

          autocompleteElement.value =
            selection.formattedAddress || selection.label;
          onChange(selection);
          setStatus("Pickup selected on the map.");
        }

        listeners.push(
          map.addListener("click", (event: google.maps.MapMouseEvent) => {
            if (event.latLng) {
              void selectMapPosition(event.latLng, "map_click");
            }
          }),
        );

        setStatus("Search an address or click the map to set pickup.");
      } catch (error) {
        setStatus(googleMapsStatusMessage(error));
      }
    }

    void setupMap();

    return () => {
      isMounted = false;
      listeners.forEach((listener) => listener.remove());
      domCleanups.forEach((cleanup) => cleanup());
      overlayRef.current?.setMap(null);
      overlayRef.current = null;
      autocompleteElementRef.current?.remove();
      autocompleteElementRef.current = null;
    };
  }, [apiKey, onChange]);

  return (
    <fieldset className="booking-card pickup-map-card">
      <legend>Pickup location</legend>

      <input name="pickupLocation" type="hidden" value={value?.label ?? ""} />
      <input
        name="pickupFormattedAddress"
        type="hidden"
        value={value?.formattedAddress ?? ""}
      />
      <input name="pickupPlaceId" type="hidden" value={value?.placeId ?? ""} />
      <input
        name="pickupLatitude"
        type="hidden"
        value={value?.latitude ?? ""}
      />
      <input
        name="pickupLongitude"
        type="hidden"
        value={value?.longitude ?? ""}
      />
      <input name="pickupMapsUrl" type="hidden" value={value?.mapsUrl ?? ""} />
      <input name="pickupSource" type="hidden" value={value?.source ?? ""} />

      <div className="map-search-field">
        <span>Search with Google Places</span>
        <div
          ref={autocompleteHostRef}
          className="places-autocomplete-host"
          aria-label="Search pickup location"
        />
      </div>

      <div className="pickup-map-shell">
        <div ref={mapRef} className="pickup-map" aria-label="Pickup map" />
      </div>

      <div className="pickup-selection">
        <span>{value ? "Selected pickup" : "Pickup pending"}</span>
        <strong>{value?.label ?? "Search or choose a point on the map"}</strong>
        {value?.formattedAddress ? <p>{value.formattedAddress}</p> : null}
        <small>{status}</small>
      </div>
    </fieldset>
  );
}
