"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "./lib/dictionaries";
import type { Locale } from "./lib/locales";

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

function googleMapsStatusMessage(
  error: unknown,
  copy: Dictionary["pickup"],
) {
  const message = error instanceof Error ? error.message : String(error ?? "");

  if (
    /ApiNotActivated|not been used|disabled|REQUEST_DENIED|RefererNotAllowed|referrer|billing/i.test(
      message,
    )
  ) {
    return copy.placesUnavailable;
  }

  return message || copy.mapLoadError;
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

function selectionFromPlace(
  place: google.maps.places.Place,
  copy: Dictionary["pickup"],
) {
  const location = place.location;

  if (!location) {
    return null;
  }

  const latitude = location.lat();
  const longitude = location.lng();
  const formattedAddress = place.formattedAddress ?? "";

  return {
    label: place.displayName || formattedAddress || copy.selectedPickupLocation,
    formattedAddress,
    placeId: place.id,
    latitude: toCoordinate(latitude),
    longitude: toCoordinate(longitude),
    mapsUrl: place.googleMapsURI ?? mapsUrl(latitude, longitude, place.id),
    source: "google_places_autocomplete" as const,
  };
}

function selectionFromGeocodeResult({
  copy,
  result,
  latitude,
  longitude,
  source,
}: {
  copy: Dictionary["pickup"];
  result: google.maps.GeocoderResult | undefined;
  latitude: number;
  longitude: number;
  source: "map_click" | "marker_drag";
}) {
  const formattedAddress = result?.formatted_address ?? "";

  return {
    label: formattedAddress || copy.pinnedPickupLocation,
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
  copy,
  locale,
  value,
  onChange,
}: {
  apiKey: string;
  copy: Dictionary["pickup"];
  locale: Locale;
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
    apiKey ? copy.initialStatus : copy.missingKeyStatus,
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
          placeholder: copy.autocompletePlaceholder,
          requestedLanguage: locale,
          requestedRegion: "es",
          locationBias: {
            center: defaultCenter,
            radius: 50000,
          },
        });

        autocompleteElement.className = "places-autocomplete-element";
        autocompleteElement.description = copy.autocompleteDescription;
        autocompleteHostRef.current.replaceChildren(autocompleteElement);

        const overlay = createPickupOverlay(defaultCenter, map);
        overlayRef.current = overlay;
        geocoderRef.current = new Geocoder();
        autocompleteElementRef.current = autocompleteElement;

        const handlePlaceSelect: EventListener = async (event) => {
          const selectEvent =
            event as google.maps.places.PlacePredictionSelectEvent;

          setStatus(copy.loadingPlaceDetails);

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
              setStatus(googleMapsStatusMessage(error, copy));
            }

            return;
          }

          if (!isMounted) {
            return;
          }

          const selection = selectionFromPlace(placeDetails.place, copy);

          if (!selection) {
            setStatus(copy.noMappedLocation);
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
          setStatus(copy.selectedFromPlaces);
        };

        autocompleteElement.addEventListener("gmp-select", handlePlaceSelect);
        domCleanups.push(() => {
          autocompleteElement.removeEventListener(
            "gmp-select",
            handlePlaceSelect,
          );
        });

        const handlePlacesError = () => {
          setStatus(copy.placesUnavailable);
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
          setStatus(copy.resolvingPinned);

          const response = await geocoderRef.current?.geocode({
            location: position,
          });
          const selection = selectionFromGeocodeResult({
            copy,
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
          setStatus(copy.selectedOnMap);
        }

        listeners.push(
          map.addListener("click", (event: google.maps.MapMouseEvent) => {
            if (event.latLng) {
              void selectMapPosition(event.latLng, "map_click");
            }
          }),
        );

        setStatus(copy.readyStatus);
      } catch (error) {
        setStatus(googleMapsStatusMessage(error, copy));
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
  }, [apiKey, copy, locale, onChange]);

  return (
    <fieldset className="booking-card pickup-map-card">
      <legend>{copy.legend}</legend>

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
        <span>{copy.searchLabel}</span>
        <div
          ref={autocompleteHostRef}
          className="places-autocomplete-host"
          aria-label={copy.searchAria}
        />
      </div>

      <div className="pickup-map-shell">
        <div ref={mapRef} className="pickup-map" aria-label={copy.mapAria} />
      </div>

      <div className="pickup-selection">
        <span>{value ? copy.selectedLabel : copy.pendingLabel}</span>
        <strong>{value?.label ?? copy.emptySelection}</strong>
        {value?.formattedAddress ? <p>{value.formattedAddress}</p> : null}
        <small>{status}</small>
      </div>
    </fieldset>
  );
}
