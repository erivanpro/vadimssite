import { type Locale, defaultLocale, isLocale } from "./locales";

const en = {
  metadata: {
    home: {
      title: "Marbella Private Experience | House Yacht Car",
      description:
        "A connected luxury experience across the private House, Yacht, and chauffeur Car service.",
    },
    terms: {
      title: "Terms and Conditions | Marbella Private Experience",
      description:
        "Terms and conditions for the Marbella Private Experience private House, Yacht, and Car experience.",
    },
    success: {
      title: "Reservation Confirmation | Marbella Private Experience",
      description:
        "Stripe payment confirmation for the Marbella Private Experience private House, Yacht, and Car experience.",
    },
  },
  common: {
    brandName: "Marbella Private Experience",
    brandSymbol: "M",
    reserve: "Reserve",
    terms: "Terms and conditions",
    returnHome: "Return home",
    homeAria: "Marbella Private Experience home",
    returnHomeAria: "Return to Marbella Private Experience",
    nav: {
      primaryAria: "Primary navigation",
      journeyAria: "Journey sections",
      mobileOpen: "Open menu",
      mobileClose: "Close menu",
      mobileTicketAria: "Book Ticket",
      languageSettingsAria: "Open language settings",
      languageCode: "EN",
    },
  },
  language: {
    modalAria: "Choose website language",
    modalEyebrow: "Language",
    modalTitle: "Choose your language.",
    modalText:
      "Select one language for the entire Marbella Private Experience website.",
    modalNote: "You can change this later from the language settings.",
    settingsLabel: "Language settings",
    settingsTitle: "Website language",
    settingsText: "Choose one language for this website.",
    currentLanguage: "Current language",
    closeSettings: "Close language settings",
    optionSelected: "Selected",
  },
  home: {
    navItems: [
      { id: "house", label: "House", href: "#house" },
      { id: "yacht", label: "Yacht", href: "#yacht" },
      { id: "car", label: "Car", href: "#car" },
    ],
    experienceStats: [
      {
        number: "01",
        id: "house",
        label: "House",
        text: "Architecture, wellness, entertainment, and private living",
      },
      {
        number: "02",
        id: "yacht",
        label: "Yacht",
        text: "Deck leisure, sea activities, dining, and guest spaces",
      },
      {
        number: "03",
        id: "car",
        label: "Car",
        text: "Craftsmanship, comfort, technology, and composed transfers",
      },
    ],
    metrics: {
      house: [
        {
          label: "Living",
          text: "Indoor and outdoor rooms built around the view",
        },
        { label: "Wellness", text: "Spa, sauna, recovery, and quiet rituals" },
        {
          label: "Entertainment",
          text: "Dining, music, games, and hosted evenings",
        },
        {
          label: "Architecture",
          text: "Stone, glass, water, terraces, and mountain light",
        },
      ],
      yacht: [
        {
          label: "Decks",
          text: "Sun, shade, lounge, jacuzzi, and open water access",
        },
        {
          label: "Leisure",
          text: "Swimming, tender moments, coastal cruising, and sunset hosting",
        },
        {
          label: "Dining",
          text: "Open-air service and intimate interior guest settings",
        },
        {
          label: "Stays",
          text: "Private salon and guest accommodation atmosphere",
        },
      ],
      car: [
        {
          label: "Comfort",
          text: "Quiet rear cabin with executive passenger space",
        },
        {
          label: "Craft",
          text: "Leather, stitching, trim, and soft-touch surfaces",
        },
        {
          label: "Technology",
          text: "Digital cockpit, navigation, lighting, and rear controls",
        },
        {
          label: "Performance",
          text: "Long-wheelbase composure with discreet power",
        },
      ],
    },
    moments: {
      house: [
        {
          eyebrow: "Architecture",
          title:
            "A hillside residence shaped by water, stone, glass, and light.",
          text: "The first chapter opens with a sculptural facade, broad terraces, and a pool that turns the house into a private resort from arrival to late evening.",
          alt: "Modern hillside house with pool, glass terraces, and mountain backdrop at dusk",
        },
        {
          eyebrow: "Indoor / outdoor",
          title: "Rooms dissolve into terraces, gardens, and the pool edge.",
          text: "Wide openings pull the landscape into the living room, so dining, conversation, and quiet mornings move naturally between interior comfort and open air.",
          alt: "Luxury living room opening directly onto the pool terrace",
        },
        {
          eyebrow: "Wellness",
          title:
            "A private recovery layer for sauna, spa, movement, and reset.",
          text: "Wellness is treated as part of daily life, not an amenity hidden away: warm timber, glass, gym areas, and spa rituals sit within the same private world.",
          alt: "Private sauna and wellness area inside the house",
        },
        {
          eyebrow: "Entertainment",
          title:
            "Evenings shift from piano and wine to games, dining, and poolside air.",
          text: "The house supports hosted nights with composed entertainment spaces, intimate lighting, and enough variety for guests to find their own rhythm.",
          alt: "Entertainment room with piano, dining, wine storage, and ambient lighting",
        },
      ],
      yacht: [
        {
          eyebrow: "Deck life",
          title:
            "The upper deck is staged for sun, shade, water, and conversation.",
          text: "A jacuzzi, lounge seating, sea air, and open horizons make the yacht feel like a private beach lounge moving with the coastline.",
          alt: "Yacht upper deck jacuzzi with sea and coastline view",
        },
        {
          eyebrow: "Onboard activity",
          title: "The day expands into swimming, tenders, and sunset movement.",
          text: "Decks are organized for active moments as much as stillness: water access, leisure equipment, and the transition from afternoon sun to evening light.",
          alt: "Yacht deck at sunset with water access and tender equipment",
        },
        {
          eyebrow: "Dining",
          title:
            "Meals happen close to the water, with every table framed by the horizon.",
          text: "Open-air dining keeps service relaxed and cinematic, while the interior salon gives guests a quieter place for late conversation.",
          alt: "Open-air yacht dining deck with table set toward the sea",
        },
        {
          eyebrow: "Guest spaces",
          title:
            "The interior keeps the same tone: polished, private, and unhurried.",
          text: "Salon and guest accommodation areas add depth to the charter, turning the yacht from a day platform into a complete private setting.",
          alt: "Luxury yacht interior salon with polished finishes and lounge seating",
        },
      ],
      car: [
        {
          eyebrow: "Comfort",
          title: "A quiet rear cabin composed for private transfers.",
          text: "The car chapter returns to high-resolution imagery that focuses on passenger calm, long-wheelbase space, soft surfaces, and chauffeur-grade privacy.",
          alt: "Mercedes S-Class rear cabin with premium passenger seating",
        },
        {
          eyebrow: "Craftsmanship",
          title:
            "Leather, stitching, trim, and lighting carry the same private tone.",
          text: "Close interior details show the material layer of the experience: seat texture, ambient light, polished controls, and a cabin designed to feel quiet.",
          alt: "Luxury Mercedes S-Class seat and interior craftsmanship detail",
        },
        {
          eyebrow: "Technology",
          title: "Digital controls and navigation sit inside a calm cockpit.",
          text: "Technology is presented as a discreet part of the service: cockpit displays, lighting, navigation, and rear comfort systems support the journey.",
          alt: "Mercedes S-Class dashboard technology and digital cockpit",
        },
        {
          eyebrow: "Arrival",
          title: "The exterior keeps the handover composed, dark, and precise.",
          text: "The final car images return to stance and arrival: black paint, chrome details, clean surfaces, and the calm confidence of a premium transfer.",
          alt: "Black Mercedes S-Class exterior detail with premium finish",
        },
      ],
    },
    galleryImages: [
      {
        label: "Pool terrace",
        alt: "House pool terrace at twilight with modern architecture",
      },
      {
        label: "Outdoor dining",
        alt: "Outdoor dining bar facing the pool and garden",
      },
      {
        label: "Wardrobe suite",
        alt: "Luxury walk-in wardrobe with soft lighting and seating",
      },
      {
        label: "Aerial estate",
        alt: "Aerial view of the private estate, pool, tennis court, and gardens",
      },
      { label: "Sea terrace", alt: "Bedroom terrace with sea and pool view" },
      {
        label: "Yacht profile",
        alt: "Luxury yacht cruising close to the coast",
      },
      {
        label: "Deck plan",
        alt: "Top-down yacht deck with pool and tender access",
      },
      {
        label: "Private dining",
        alt: "Interior yacht dining space with art and guest seating",
      },
      {
        label: "S-Class arrival",
        alt: "Black Mercedes S-Class staged for a private arrival",
      },
      {
        label: "Cockpit detail",
        alt: "Mercedes S-Class cockpit and dashboard detail",
      },
      {
        label: "Front profile",
        alt: "Black Mercedes S-Class front profile and lighting",
      },
    ],
    hero: {
      aria: "Marbella Private Experience private collection",
      imageAlt:
        "Marbella Private Experience modern private house with pool and mountain views at dusk",
      eyebrow: "Private collection / House / Yacht / Car",
      title: "Three luxury assets presented as one cinematic world.",
      copy: "A scroll-driven presentation for the residence, yacht, and chauffeur car. Each chapter reveals the lifestyle, details, and movement that make Marbella Private Experience feel private from door to dock.",
      exploreHouse: "Explore House",
      continueYacht: "Continue to Yacht",
      railLabel: "Scroll narrative",
      skipHouseAria: "Skip to House",
    },
    chapters: {
      house: {
        eyebrow: "01 / House",
        title:
          "A private residence that behaves like a full lifestyle resort.",
        text: "The house is the arrival chapter: architecture, pool terraces, entertaining rooms, wellness spaces, bedrooms, wardrobes, and indoor-outdoor living are revealed as one composed experience.",
        imageAlt: "Modern house pool terrace glowing at twilight",
      },
      yacht: {
        eyebrow: "02 / Yacht",
        title:
          "A floating private retreat for sun, water, dining, and nightfall.",
        text: "The yacht extends the residence into the sea: deck areas, onboard activities, lounge moments, dining, water access, and guest spaces unfold with the same high-service atmosphere.",
        imageAlt: "Luxury yacht underway near the coast",
      },
      car: {
        eyebrow: "03 / Car",
        title:
          "A composed S-Class transfer for comfort, craft, and arrival.",
        text: "The car chapter returns to premium still imagery for now, focusing on comfort, craftsmanship, technology, performance, interior calm, and the final arrival experience.",
        imageAlt:
          "Black Mercedes S-Class presented as the Marbella Private Experience chauffeur car",
      },
    },
    gallery: {
      aria: "Marbella Private Experience detail gallery",
      eyebrow: "Details in motion",
      title: "Every image works as part of the same private sequence.",
      text: "Architecture, terraces, decks, cabins, dining rooms, and sea moments are arranged as a continuous visual archive, with the car returned to the same image-led cinematic sequence.",
    },
    footer: {
      copy: "A private presentation across the House, Yacht, and chauffeur Car experience.",
      navigationAria: "Footer navigation",
      note: "Private access is subject to availability, guest verification, and final confirmation.",
    },
  },
  reservation: {
    eyebrow: "Reserve",
    title: "Reserve your private experience.",
    text: "Select your preferred date, arrival window, map-verified pickup, and guest essentials. The concierge team can use this request to prepare the House, Yacht, and Car journey.",
    paymentNote:
      "Payment is completed through Stripe. The preticket becomes active only after successful payment confirmation.",
    hiddenLocaleLabel: "Website language",
    status: {
      missingDate: "Choose a preferred booking date before payment.",
      missingPickup:
        "Select a pickup location from Google Places or the map.",
      openingCheckout: "Opening Stripe secure checkout...",
      unableCheckout: "Unable to start Stripe checkout.",
    },
    fields: {
      name: "Name",
      namePlaceholder: "Full name",
      age: "Age",
      idNumber: "ID number",
      idNumberPlaceholder: "Passport or national ID",
      email: "Email",
      emailPlaceholder: "name@example.com",
      foodAllergies: "Food allergies",
      foodAllergiesPlaceholder:
        "List allergies, dietary restrictions, or write none",
    },
    submit: {
      idle: "Pay and reserve my experience",
      loading: "Opening secure payment",
    },
  },
  bookingCalendar: {
    legend: "Booking calendar",
    preferredDate: "Preferred date",
    emptyDateLabel: "Select a preferred booking date",
    selectedAvailability:
      "Availability will be checked for {window} in {timezone}.",
    emptyAvailability:
      "Choose a future date. Final availability is confirmed by concierge after payment.",
    guests: "Guests",
    arrivalWindowAria: "Arrival window",
    timeWindows: {
      full_day: {
        label: "Full day",
        summaryLabel: "the full-day sequence",
        detail: "House, yacht, and car sequence",
      },
      morning: {
        label: "Morning",
        summaryLabel: "the morning window",
        detail: "10:00 arrival window",
      },
      afternoon: {
        label: "Afternoon",
        summaryLabel: "the afternoon window",
        detail: "14:00 arrival window",
      },
      sunset: {
        label: "Sunset",
        summaryLabel: "the sunset window",
        detail: "Golden-hour arrival",
      },
    },
  },
  pickup: {
    placesUnavailable:
      "Google Places autocomplete is unavailable for this API key. Enable Places API (New), billing, and this domain in Google Cloud, or click the map to set pickup.",
    mapLoadError: "Google Maps could not be loaded.",
    selectedPickupLocation: "Selected pickup location",
    pinnedPickupLocation: "Pinned pickup location",
    initialStatus: "Load the map and select pickup.",
    missingKeyStatus: "Google Maps API key is missing.",
    autocompletePlaceholder: "Search hotel, residence, airport, or marina",
    autocompleteDescription:
      "Search for the chauffeur pickup location.",
    loadingPlaceDetails: "Loading selected place details...",
    noMappedLocation: "Choose a pickup result with a mapped location.",
    selectedFromPlaces: "Pickup selected from Google Places.",
    resolvingPinned: "Resolving pinned location...",
    selectedOnMap: "Pickup selected on the map.",
    readyStatus: "Search an address or click the map to set pickup.",
    legend: "Pickup location",
    searchLabel: "Search with Google Places",
    searchAria: "Search pickup location",
    mapAria: "Pickup map",
    selectedLabel: "Selected pickup",
    pendingLabel: "Pickup pending",
    emptySelection: "Search or choose a point on the map",
  },
  termsPage: {
    navAria: "Terms navigation",
    listAria: "Terms and conditions",
    hero: {
      eyebrow: "Terms",
      title: "Terms and conditions.",
      text: "These terms outline the core conditions for requesting access to the private House, Yacht, and chauffeur Car experience.",
    },
    items: [
      {
        title: "Private Access",
        text: "Access to the House, Yacht, and Car experience is private, limited, and subject to approval, availability, guest verification, and final confirmation by the concierge team.",
      },
      {
        title: "Reservation Requests",
        text: "Submitting a reservation request does not guarantee entry, transport, yacht access, dining service, or event availability. A booking becomes active only after written confirmation.",
      },
      {
        title: "Identification",
        text: "Guests may be required to provide valid identification before pickup or entry. The information requested is used to verify access and prepare the experience.",
      },
      {
        title: "Chauffeur Pickup",
        text: "Pickup location and timing must be confirmed in advance. Changes may affect the schedule, route, and availability of the residence or yacht portions of the experience.",
      },
      {
        title: "Dining and Allergies",
        text: "Guests should disclose food allergies and dietary restrictions before arrival. The team will make reasonable efforts to accommodate disclosed requirements.",
      },
      {
        title: "Guest Conduct",
        text: "Guests are expected to respect the residence, yacht, staff, drivers, other guests, and all safety instructions. Access may be refused or ended for unsafe, abusive, or disruptive conduct.",
      },
      {
        title: "Yacht and Weather",
        text: "Yacht access may be adjusted, postponed, or cancelled due to weather, marina conditions, captain instructions, safety requirements, or operational restrictions.",
      },
      {
        title: "Final Terms",
        text: "These website terms are a presentation draft. Final commercial terms, cancellation rules, payment requirements, and liability terms should be confirmed in the official booking agreement.",
      },
    ],
  },
  successPage: {
    navAria: "Confirmation navigation",
    amountFallback: "Payment amount confirmed by Stripe",
    notAvailable: "Not available",
    paid: {
      eyebrow: "Payment confirmed",
      title: "Your preticket is reserved.",
      text: "Stripe has confirmed the payment. The concierge team can now use this paid reservation record to continue guest verification and arrival planning.",
      state: "Paid",
      summary: "Reservation payment accepted",
    },
    unpaid: {
      eyebrow: "Payment not confirmed",
      title: "We could not confirm payment.",
      text: "The reservation is not active until Stripe confirms payment. Return to the reservation form and try again.",
      state: "Pending",
      summary: "Reservation payment incomplete",
    },
    fields: {
      reservationId: "Reservation ID",
      email: "Email",
      amount: "Amount",
      stripeSession: "Stripe session",
    },
  },
  checkout: {
    errors: {
      origin: "This checkout request is not allowed from that origin.",
      invalidRequest: "Invalid reservation request.",
      unableRecord: "Unable to record booking.",
      firestorePrefix: "Unable to record booking in Firestore:",
      noUrl: "Stripe did not return a checkout URL.",
      unableCreate: "Unable to create Stripe checkout.",
    },
    validation: {
      futureDate: "a future booking date",
      arrivalWindow: "an arrival window",
      pickupSelection: "a Google Maps pickup selection",
      fullName: "your full name",
      adultAge: "adult age verification",
      idNumber: "your ID number",
      email: "a valid email",
      partySize: "a party size between 1 and 12",
      complete: "Please complete {items} before payment.",
    },
    stripe: {
      productName: "Marbella Private Experience Preticket",
      productDescription:
        "A paid reservation preticket for the private House, Yacht, and chauffeur Car journey.",
      customSubmit:
        "Your Marbella Private Experience preticket is reserved only after Stripe confirms payment.",
    },
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  metadata: {
    home: {
      title: "Marbella Private Experience | Casa Yate Coche",
      description:
        "Una experiencia de lujo conectada entre la Casa privada, el Yate y el servicio de coche con chofer.",
    },
    terms: {
      title: "Términos y condiciones | Marbella Private Experience",
      description:
        "Términos y condiciones para la experiencia privada de Casa, Yate y Coche de Marbella Private Experience.",
    },
    success: {
      title: "Confirmación de reserva | Marbella Private Experience",
      description:
        "Confirmación de pago de Stripe para la experiencia privada de Casa, Yate y Coche de Marbella Private Experience.",
    },
  },
  common: {
    brandName: "Marbella Private Experience",
    brandSymbol: "M",
    reserve: "Reservar",
    terms: "Términos y condiciones",
    returnHome: "Volver al inicio",
    homeAria: "Inicio de Marbella Private Experience",
    returnHomeAria: "Volver a Marbella Private Experience",
    nav: {
      primaryAria: "Navegación principal",
      journeyAria: "Secciones de la experiencia",
      mobileOpen: "Abrir menú",
      mobileClose: "Cerrar menú",
      mobileTicketAria: "Reservar entrada",
      languageSettingsAria: "Abrir ajustes de idioma",
      languageCode: "ES",
    },
  },
  language: {
    modalAria: "Elegir idioma del sitio",
    modalEyebrow: "Idioma",
    modalTitle: "Elige tu idioma.",
    modalText:
      "Selecciona un solo idioma para todo el sitio de Marbella Private Experience.",
    modalNote: "Podrás cambiarlo más tarde desde los ajustes de idioma.",
    settingsLabel: "Ajustes de idioma",
    settingsTitle: "Idioma del sitio",
    settingsText: "Elige un solo idioma para este sitio.",
    currentLanguage: "Idioma actual",
    closeSettings: "Cerrar ajustes de idioma",
    optionSelected: "Seleccionado",
  },
  home: {
    navItems: [
      { id: "house", label: "Casa", href: "#house" },
      { id: "yacht", label: "Yate", href: "#yacht" },
      { id: "car", label: "Coche", href: "#car" },
    ],
    experienceStats: [
      {
        number: "01",
        id: "house",
        label: "Casa",
        text: "Arquitectura, bienestar, entretenimiento y vida privada",
      },
      {
        number: "02",
        id: "yacht",
        label: "Yate",
        text: "Cubiertas, ocio en el mar, gastronomía y zonas de invitados",
      },
      {
        number: "03",
        id: "car",
        label: "Coche",
        text: "Artesanía, confort, tecnología y traslados serenos",
      },
    ],
    metrics: {
      house: [
        {
          label: "Vida interior",
          text: "Espacios interiores y exteriores creados alrededor de la vista",
        },
        {
          label: "Bienestar",
          text: "Spa, sauna, recuperación y rituales tranquilos",
        },
        {
          label: "Entretenimiento",
          text: "Cenas, música, juegos y noches con anfitrión",
        },
        {
          label: "Arquitectura",
          text: "Piedra, vidrio, agua, terrazas y luz de montaña",
        },
      ],
      yacht: [
        {
          label: "Cubiertas",
          text: "Sol, sombra, lounge, jacuzzi y acceso al mar abierto",
        },
        {
          label: "Ocio",
          text: "Natación, tender, navegación costera y puestas de sol",
        },
        {
          label: "Gastronomía",
          text: "Servicio al aire libre y espacios interiores íntimos",
        },
        {
          label: "Estancias",
          text: "Salón privado y atmósfera de alojamiento para invitados",
        },
      ],
      car: [
        {
          label: "Confort",
          text: "Cabina trasera silenciosa con espacio ejecutivo",
        },
        {
          label: "Artesanía",
          text: "Cuero, costuras, molduras y superficies suaves",
        },
        {
          label: "Tecnología",
          text: "Cockpit digital, navegación, iluminación y controles traseros",
        },
        {
          label: "Prestaciones",
          text: "Compostura de batalla larga con potencia discreta",
        },
      ],
    },
    moments: {
      house: [
        {
          eyebrow: "Arquitectura",
          title:
            "Una residencia en la ladera definida por agua, piedra, vidrio y luz.",
          text: "El primer capítulo se abre con una fachada escultórica, amplias terrazas y una piscina que convierte la casa en un resort privado desde la llegada hasta la noche.",
          alt: "Casa moderna en la ladera con piscina, terrazas de vidrio y montañas al atardecer",
        },
        {
          eyebrow: "Interior / exterior",
          title: "Las estancias se funden con terrazas, jardines y piscina.",
          text: "Grandes aperturas llevan el paisaje al salón para que las comidas, conversaciones y mañanas tranquilas fluyan entre confort interior y aire libre.",
          alt: "Salón de lujo abierto directamente a la terraza de la piscina",
        },
        {
          eyebrow: "Bienestar",
          title:
            "Una capa privada de recuperación para sauna, spa, movimiento y pausa.",
          text: "El bienestar forma parte de la vida diaria: madera cálida, vidrio, zonas de gimnasio y rituales de spa conviven en el mismo mundo privado.",
          alt: "Sauna privada y zona de bienestar dentro de la casa",
        },
        {
          eyebrow: "Entretenimiento",
          title:
            "Las noches pasan del piano y el vino a juegos, cenas y aire de piscina.",
          text: "La casa sostiene noches con anfitrión mediante espacios compuestos, iluminación íntima y variedad suficiente para que cada invitado encuentre su ritmo.",
          alt: "Sala de entretenimiento con piano, comedor, vinoteca e iluminación ambiental",
        },
      ],
      yacht: [
        {
          eyebrow: "Vida en cubierta",
          title:
            "La cubierta superior está preparada para sol, sombra, agua y conversación.",
          text: "Jacuzzi, asientos lounge, aire marino y horizontes abiertos hacen que el yate se sienta como un beach club privado en movimiento.",
          alt: "Jacuzzi en la cubierta superior del yate con vistas al mar y la costa",
        },
        {
          eyebrow: "Actividad a bordo",
          title:
            "El día se amplía con natación, tenders y movimiento al atardecer.",
          text: "Las cubiertas están pensadas para momentos activos y de calma: acceso al agua, equipamiento de ocio y transición de la tarde a la luz final.",
          alt: "Cubierta de yate al atardecer con acceso al agua y equipo tender",
        },
        {
          eyebrow: "Gastronomía",
          title:
            "Las comidas suceden cerca del agua, con cada mesa enmarcada por el horizonte.",
          text: "La comida al aire libre mantiene el servicio relajado y cinematográfico, mientras el salón interior ofrece un espacio más tranquilo.",
          alt: "Comedor exterior de yate con mesa preparada frente al mar",
        },
        {
          eyebrow: "Zonas de invitados",
          title:
            "El interior mantiene el mismo tono: pulido, privado y sin prisa.",
          text: "El salón y las zonas de alojamiento dan profundidad al charter, convirtiendo el yate en un entorno privado completo.",
          alt: "Salón interior de yate de lujo con acabados pulidos y asientos lounge",
        },
      ],
      car: [
        {
          eyebrow: "Confort",
          title: "Una cabina trasera tranquila para traslados privados.",
          text: "El capítulo del coche vuelve a imágenes de alta resolución centradas en calma, espacio de batalla larga, superficies suaves y privacidad de chofer.",
          alt: "Cabina trasera de Mercedes S-Class con asientos premium",
        },
        {
          eyebrow: "Artesanía",
          title:
            "Cuero, costuras, molduras e iluminación mantienen el mismo tono privado.",
          text: "Los detalles interiores muestran la capa material de la experiencia: textura del asiento, luz ambiental, controles pulidos y una cabina serena.",
          alt: "Detalle de asiento e interior artesanal de Mercedes S-Class de lujo",
        },
        {
          eyebrow: "Tecnología",
          title: "Los controles digitales y la navegación viven en un cockpit calmado.",
          text: "La tecnología aparece como parte discreta del servicio: pantallas, iluminación, navegación y sistemas de confort traseros acompañan el trayecto.",
          alt: "Tecnología del salpicadero y cockpit digital de Mercedes S-Class",
        },
        {
          eyebrow: "Llegada",
          title: "El exterior mantiene una entrega compuesta, oscura y precisa.",
          text: "Las imágenes finales vuelven a la presencia y la llegada: pintura negra, cromados, superficies limpias y la confianza de un traslado premium.",
          alt: "Detalle exterior de Mercedes S-Class negro con acabado premium",
        },
      ],
    },
    galleryImages: [
      {
        label: "Terraza de piscina",
        alt: "Terraza de piscina de la casa al anochecer con arquitectura moderna",
      },
      {
        label: "Comedor exterior",
        alt: "Bar de comedor exterior frente a la piscina y el jardín",
      },
      {
        label: "Suite vestidor",
        alt: "Vestidor de lujo con luz suave y asiento",
      },
      {
        label: "Finca aérea",
        alt: "Vista aérea de finca privada, piscina, pista de tenis y jardines",
      },
      {
        label: "Terraza al mar",
        alt: "Terraza de dormitorio con vistas al mar y la piscina",
      },
      {
        label: "Perfil del yate",
        alt: "Yate de lujo navegando cerca de la costa",
      },
      {
        label: "Plano de cubierta",
        alt: "Vista superior de cubierta de yate con piscina y acceso tender",
      },
      {
        label: "Comedor privado",
        alt: "Comedor interior de yate con arte y asientos para invitados",
      },
      {
        label: "Llegada S-Class",
        alt: "Mercedes S-Class negro preparado para una llegada privada",
      },
      {
        label: "Detalle cockpit",
        alt: "Cockpit y salpicadero de Mercedes S-Class en detalle",
      },
      {
        label: "Perfil frontal",
        alt: "Perfil frontal e iluminación de Mercedes S-Class negro",
      },
    ],
    hero: {
      aria: "Colección privada de Marbella Private Experience",
      imageAlt:
        "Casa privada moderna de Marbella Private Experience con piscina y vistas a la montaña al atardecer",
      eyebrow: "Colección privada / Casa / Yate / Coche",
      title: "Tres activos de lujo presentados como un mundo cinematográfico.",
      copy: "Una presentación guiada por scroll para la residencia, el yate y el coche con chofer. Cada capítulo revela estilo de vida, detalles y movimiento para que Marbella Private Experience se sienta privada de la puerta al muelle.",
      exploreHouse: "Explorar la Casa",
      continueYacht: "Continuar al Yate",
      railLabel: "Narrativa de scroll",
      skipHouseAria: "Saltar a Casa",
    },
    chapters: {
      house: {
        eyebrow: "01 / Casa",
        title:
          "Una residencia privada que se comporta como un resort completo.",
        text: "La casa es el capítulo de llegada: arquitectura, terrazas de piscina, salas de entretenimiento, bienestar, dormitorios, vestidores y vida interior-exterior se revelan como una experiencia compuesta.",
        imageAlt: "Terraza de piscina de casa moderna brillando al anochecer",
      },
      yacht: {
        eyebrow: "02 / Yate",
        title:
          "Un refugio privado flotante para sol, agua, gastronomía y anochecer.",
        text: "El yate extiende la residencia hacia el mar: cubiertas, actividades a bordo, lounges, comidas, acceso al agua y zonas de invitados con la misma atmósfera de alto servicio.",
        imageAlt: "Yate de lujo navegando cerca de la costa",
      },
      car: {
        eyebrow: "03 / Coche",
        title:
          "Un traslado S-Class sereno para confort, artesanía y llegada.",
        text: "El capítulo del coche vuelve por ahora a imagen premium fija, centrada en confort, artesanía, tecnología, prestaciones, calma interior y llegada final.",
        imageAlt:
          "Mercedes S-Class negro presentado como el coche con chofer de Marbella Private Experience",
      },
    },
    gallery: {
      aria: "Galería de detalles de Marbella Private Experience",
      eyebrow: "Detalles en movimiento",
      title: "Cada imagen funciona como parte de la misma secuencia privada.",
      text: "Arquitectura, terrazas, cubiertas, cabinas, comedores y momentos de mar se ordenan como un archivo visual continuo, con el coche de vuelta en la misma secuencia cinematográfica.",
    },
    footer: {
      copy: "Una presentación privada a través de la experiencia de Casa, Yate y Coche con chofer.",
      navigationAria: "Navegación del pie de página",
      note: "El acceso privado está sujeto a disponibilidad, verificación de invitados y confirmación final.",
    },
  },
  reservation: {
    eyebrow: "Reservar",
    title: "Reserva tu experiencia privada.",
    text: "Selecciona fecha preferida, ventana de llegada, recogida verificada en el mapa y datos esenciales. El equipo de concierge puede usar esta solicitud para preparar la Casa, el Yate y el Coche.",
    paymentNote:
      "El pago se completa mediante Stripe. La preentrada se activa solo después de la confirmación correcta del pago.",
    hiddenLocaleLabel: "Idioma del sitio",
    status: {
      missingDate: "Elige una fecha de reserva preferida antes del pago.",
      missingPickup:
        "Selecciona una ubicación de recogida desde Google Places o el mapa.",
      openingCheckout: "Abriendo checkout seguro de Stripe...",
      unableCheckout: "No se pudo iniciar el checkout de Stripe.",
    },
    fields: {
      name: "Nombre",
      namePlaceholder: "Nombre completo",
      age: "Edad",
      idNumber: "Número de documento",
      idNumberPlaceholder: "Pasaporte o documento nacional",
      email: "Email",
      emailPlaceholder: "nombre@ejemplo.com",
      foodAllergies: "Alergias alimentarias",
      foodAllergiesPlaceholder:
        "Indica alergias, restricciones alimentarias o escribe ninguna",
    },
    submit: {
      idle: "Pagar y reservar mi experiencia",
      loading: "Abriendo pago seguro",
    },
  },
  bookingCalendar: {
    legend: "Calendario de reserva",
    preferredDate: "Fecha preferida",
    emptyDateLabel: "Selecciona una fecha de reserva preferida",
    selectedAvailability:
      "La disponibilidad se comprobará para {window} en {timezone}.",
    emptyAvailability:
      "Elige una fecha futura. La disponibilidad final la confirma concierge después del pago.",
    guests: "Invitados",
    arrivalWindowAria: "Ventana de llegada",
    timeWindows: {
      full_day: {
        label: "Día completo",
        summaryLabel: "la secuencia de día completo",
        detail: "Secuencia de casa, yate y coche",
      },
      morning: {
        label: "Mañana",
        summaryLabel: "la ventana de mañana",
        detail: "Ventana de llegada 10:00",
      },
      afternoon: {
        label: "Tarde",
        summaryLabel: "la ventana de tarde",
        detail: "Ventana de llegada 14:00",
      },
      sunset: {
        label: "Atardecer",
        summaryLabel: "la ventana de atardecer",
        detail: "Llegada en hora dorada",
      },
    },
  },
  pickup: {
    placesUnavailable:
      "Google Places autocomplete no está disponible para esta clave API. Activa Places API (New), la facturación y este dominio en Google Cloud, o haz clic en el mapa para fijar la recogida.",
    mapLoadError: "No se pudo cargar Google Maps.",
    selectedPickupLocation: "Ubicación de recogida seleccionada",
    pinnedPickupLocation: "Ubicación de recogida fijada",
    initialStatus: "Carga el mapa y selecciona la recogida.",
    missingKeyStatus: "Falta la clave API de Google Maps.",
    autocompletePlaceholder: "Buscar hotel, residencia, aeropuerto o marina",
    autocompleteDescription: "Buscar la ubicación de recogida del chofer.",
    loadingPlaceDetails: "Cargando detalles del lugar seleccionado...",
    noMappedLocation:
      "Elige un resultado de recogida con ubicación en el mapa.",
    selectedFromPlaces: "Recogida seleccionada desde Google Places.",
    resolvingPinned: "Resolviendo ubicación fijada...",
    selectedOnMap: "Recogida seleccionada en el mapa.",
    readyStatus: "Busca una dirección o haz clic en el mapa para fijar la recogida.",
    legend: "Ubicación de recogida",
    searchLabel: "Buscar con Google Places",
    searchAria: "Buscar ubicación de recogida",
    mapAria: "Mapa de recogida",
    selectedLabel: "Recogida seleccionada",
    pendingLabel: "Recogida pendiente",
    emptySelection: "Busca o elige un punto en el mapa",
  },
  termsPage: {
    navAria: "Navegación de términos",
    listAria: "Términos y condiciones",
    hero: {
      eyebrow: "Términos",
      title: "Términos y condiciones.",
      text: "Estos términos resumen las condiciones principales para solicitar acceso a la experiencia privada de Casa, Yate y Coche con chofer.",
    },
    items: [
      {
        title: "Acceso privado",
        text: "El acceso a la experiencia de Casa, Yate y Coche es privado, limitado y sujeto a aprobación, disponibilidad, verificación de invitados y confirmación final del equipo de concierge.",
      },
      {
        title: "Solicitudes de reserva",
        text: "Enviar una solicitud de reserva no garantiza entrada, transporte, acceso al yate, servicio gastronómico ni disponibilidad de evento. La reserva se activa solo tras confirmación escrita.",
      },
      {
        title: "Identificación",
        text: "Se puede solicitar identificación válida antes de la recogida o entrada. La información solicitada se usa para verificar el acceso y preparar la experiencia.",
      },
      {
        title: "Recogida con chofer",
        text: "La ubicación y hora de recogida deben confirmarse con antelación. Los cambios pueden afectar al horario, la ruta y la disponibilidad de la residencia o el yate.",
      },
      {
        title: "Gastronomía y alergias",
        text: "Los invitados deben comunicar alergias alimentarias y restricciones dietéticas antes de la llegada. El equipo hará esfuerzos razonables para adaptarse a lo comunicado.",
      },
      {
        title: "Conducta de invitados",
        text: "Se espera que los invitados respeten la residencia, el yate, el personal, los conductores, otros invitados y todas las instrucciones de seguridad. El acceso puede rechazarse o finalizar por conducta insegura, abusiva o disruptiva.",
      },
      {
        title: "Yate y clima",
        text: "El acceso al yate puede ajustarse, posponerse o cancelarse por clima, condiciones de marina, instrucciones del capitán, requisitos de seguridad o restricciones operativas.",
      },
      {
        title: "Términos finales",
        text: "Estos términos web son un borrador de presentación. Los términos comerciales finales, reglas de cancelación, requisitos de pago y responsabilidad deben confirmarse en el acuerdo oficial de reserva.",
      },
    ],
  },
  successPage: {
    navAria: "Navegación de confirmación",
    amountFallback: "Importe del pago confirmado por Stripe",
    notAvailable: "No disponible",
    paid: {
      eyebrow: "Pago confirmado",
      title: "Tu preentrada está reservada.",
      text: "Stripe ha confirmado el pago. El equipo de concierge puede usar ahora este registro de reserva pagada para continuar la verificación de invitados y la planificación de llegada.",
      state: "Pagado",
      summary: "Pago de reserva aceptado",
    },
    unpaid: {
      eyebrow: "Pago no confirmado",
      title: "No pudimos confirmar el pago.",
      text: "La reserva no está activa hasta que Stripe confirme el pago. Vuelve al formulario de reserva e inténtalo de nuevo.",
      state: "Pendiente",
      summary: "Pago de reserva incompleto",
    },
    fields: {
      reservationId: "ID de reserva",
      email: "Email",
      amount: "Importe",
      stripeSession: "Sesión de Stripe",
    },
  },
  checkout: {
    errors: {
      origin: "Esta solicitud de checkout no está permitida desde ese origen.",
      invalidRequest: "Solicitud de reserva no válida.",
      unableRecord: "No se pudo registrar la reserva.",
      firestorePrefix: "No se pudo registrar la reserva en Firestore:",
      noUrl: "Stripe no devolvió una URL de checkout.",
      unableCreate: "No se pudo crear el checkout de Stripe.",
    },
    validation: {
      futureDate: "una fecha de reserva futura",
      arrivalWindow: "una ventana de llegada",
      pickupSelection: "una selección de recogida de Google Maps",
      fullName: "tu nombre completo",
      adultAge: "verificación de mayoría de edad",
      idNumber: "tu número de documento",
      email: "un email válido",
      partySize: "un grupo entre 1 y 12 personas",
      complete: "Completa {items} antes del pago.",
    },
    stripe: {
      productName: "Preentrada Marbella Private Experience",
      productDescription:
        "Una preentrada de reserva pagada para la experiencia privada de Casa, Yate y Coche con chofer.",
      customSubmit:
        "Tu preentrada de Marbella Private Experience queda reservada solo después de que Stripe confirme el pago.",
    },
  },
};

const fr: Dictionary = {
  metadata: {
    home: {
      title: "Marbella Private Experience | Maison Yacht Voiture",
      description:
        "Une expérience de luxe connectée entre la Maison privée, le Yacht et le service de voiture avec chauffeur.",
    },
    terms: {
      title: "Conditions générales | Marbella Private Experience",
      description:
        "Conditions générales de l'expérience privée Maison, Yacht et Voiture de Marbella Private Experience.",
    },
    success: {
      title: "Confirmation de réservation | Marbella Private Experience",
      description:
        "Confirmation de paiement Stripe pour l'expérience privée Maison, Yacht et Voiture de Marbella Private Experience.",
    },
  },
  common: {
    brandName: "Marbella Private Experience",
    brandSymbol: "M",
    reserve: "Réserver",
    terms: "Conditions générales",
    returnHome: "Retour à l'accueil",
    homeAria: "Accueil de Marbella Private Experience",
    returnHomeAria: "Retour à Marbella Private Experience",
    nav: {
      primaryAria: "Navigation principale",
      journeyAria: "Sections de l'expérience",
      mobileOpen: "Ouvrir le menu",
      mobileClose: "Fermer le menu",
      mobileTicketAria: "Réserver un billet",
      languageSettingsAria: "Ouvrir les réglages de langue",
      languageCode: "FR",
    },
  },
  language: {
    modalAria: "Choisir la langue du site",
    modalEyebrow: "Langue",
    modalTitle: "Choisissez votre langue.",
    modalText:
      "Sélectionnez une seule langue pour tout le site Marbella Private Experience.",
    modalNote: "Vous pourrez la modifier plus tard depuis les réglages de langue.",
    settingsLabel: "Réglages de langue",
    settingsTitle: "Langue du site",
    settingsText: "Choisissez une seule langue pour ce site.",
    currentLanguage: "Langue actuelle",
    closeSettings: "Fermer les réglages de langue",
    optionSelected: "Sélectionné",
  },
  home: {
    navItems: [
      { id: "house", label: "Maison", href: "#house" },
      { id: "yacht", label: "Yacht", href: "#yacht" },
      { id: "car", label: "Voiture", href: "#car" },
    ],
    experienceStats: [
      {
        number: "01",
        id: "house",
        label: "Maison",
        text: "Architecture, bien-être, divertissement et vie privée",
      },
      {
        number: "02",
        id: "yacht",
        label: "Yacht",
        text: "Ponts, loisirs en mer, repas et espaces invités",
      },
      {
        number: "03",
        id: "car",
        label: "Voiture",
        text: "Savoir-faire, confort, technologie et transferts posés",
      },
    ],
    metrics: {
      house: [
        {
          label: "Vie intérieure",
          text: "Pièces intérieures et extérieures construites autour de la vue",
        },
        {
          label: "Bien-être",
          text: "Spa, sauna, récupération et rituels calmes",
        },
        {
          label: "Divertissement",
          text: "Repas, musique, jeux et soirées accueillies",
        },
        {
          label: "Architecture",
          text: "Pierre, verre, eau, terrasses et lumière de montagne",
        },
      ],
      yacht: [
        {
          label: "Ponts",
          text: "Soleil, ombre, lounge, jacuzzi et accès à l'eau",
        },
        {
          label: "Loisirs",
          text: "Baignade, tender, croisière côtière et coucher de soleil",
        },
        {
          label: "Repas",
          text: "Service en plein air et espaces invités intérieurs intimes",
        },
        {
          label: "Séjours",
          text: "Salon privé et atmosphère d'hébergement invité",
        },
      ],
      car: [
        {
          label: "Confort",
          text: "Cabine arrière silencieuse avec espace exécutif",
        },
        {
          label: "Savoir-faire",
          text: "Cuir, surpiqûres, inserts et surfaces douces",
        },
        {
          label: "Technologie",
          text: "Cockpit numérique, navigation, éclairage et contrôles arrière",
        },
        {
          label: "Performance",
          text: "Stabilité d'empattement long avec puissance discrète",
        },
      ],
    },
    moments: {
      house: [
        {
          eyebrow: "Architecture",
          title:
            "Une résidence à flanc de colline façonnée par l'eau, la pierre, le verre et la lumière.",
          text: "Le premier chapitre s'ouvre sur une façade sculpturale, de larges terrasses et une piscine qui transforme la maison en resort privé de l'arrivée au soir.",
          alt: "Maison moderne à flanc de colline avec piscine, terrasses vitrées et montagnes au crépuscule",
        },
        {
          eyebrow: "Intérieur / extérieur",
          title: "Les pièces se fondent dans les terrasses, jardins et bords de piscine.",
          text: "De larges ouvertures invitent le paysage dans le salon, pour que repas, conversations et matins calmes passent naturellement du confort intérieur à l'air libre.",
          alt: "Salon de luxe ouvert directement sur la terrasse de piscine",
        },
        {
          eyebrow: "Bien-être",
          title:
            "Une couche privée de récupération pour sauna, spa, mouvement et pause.",
          text: "Le bien-être fait partie de la vie quotidienne: bois chaud, verre, zones de sport et rituels spa existent dans le même univers privé.",
          alt: "Sauna privé et espace bien-être à l'intérieur de la maison",
        },
        {
          eyebrow: "Divertissement",
          title:
            "Les soirées passent du piano et du vin aux jeux, repas et air de piscine.",
          text: "La maison accompagne les nuits accueillies avec des espaces composés, une lumière intime et assez de variété pour que chaque invité trouve son rythme.",
          alt: "Salle de divertissement avec piano, salle à manger, cave à vin et lumière ambiante",
        },
      ],
      yacht: [
        {
          eyebrow: "Vie sur le pont",
          title:
            "Le pont supérieur est mis en scène pour le soleil, l'ombre, l'eau et la conversation.",
          text: "Jacuzzi, assises lounge, air marin et horizons ouverts donnent au yacht la sensation d'un beach club privé en mouvement.",
          alt: "Jacuzzi sur le pont supérieur du yacht avec vue sur la mer et la côte",
        },
        {
          eyebrow: "Activité à bord",
          title:
            "La journée s'ouvre à la baignade, aux tenders et au mouvement du coucher de soleil.",
          text: "Les ponts sont organisés pour les moments actifs autant que pour le calme: accès à l'eau, équipements de loisir et passage de l'après-midi à la lumière du soir.",
          alt: "Pont de yacht au coucher du soleil avec accès à l'eau et équipement tender",
        },
        {
          eyebrow: "Repas",
          title:
            "Les repas se déroulent près de l'eau, chaque table encadrée par l'horizon.",
          text: "Le repas en plein air garde un service détendu et cinématographique, tandis que le salon intérieur offre un lieu plus calme pour la fin de soirée.",
          alt: "Pont repas extérieur de yacht avec table dressée face à la mer",
        },
        {
          eyebrow: "Espaces invités",
          title:
            "L'intérieur garde le même ton: poli, privé et sans précipitation.",
          text: "Le salon et les zones d'hébergement ajoutent de la profondeur au charter, transformant le yacht en décor privé complet.",
          alt: "Salon intérieur de yacht de luxe avec finitions polies et assises lounge",
        },
      ],
      car: [
        {
          eyebrow: "Confort",
          title: "Une cabine arrière calme pour les transferts privés.",
          text: "Le chapitre voiture revient à l'image haute résolution, centrée sur le calme passager, l'espace d'empattement long, les surfaces douces et la confidentialité chauffeur.",
          alt: "Cabine arrière de Mercedes S-Class avec sièges passagers premium",
        },
        {
          eyebrow: "Savoir-faire",
          title:
            "Cuir, surpiqûres, inserts et éclairage portent le même ton privé.",
          text: "Les détails intérieurs montrent la matière de l'expérience: texture du siège, lumière ambiante, commandes polies et cabine conçue pour rester calme.",
          alt: "Détail de siège et savoir-faire intérieur d'une Mercedes S-Class de luxe",
        },
        {
          eyebrow: "Technologie",
          title: "Commandes numériques et navigation dans un cockpit calme.",
          text: "La technologie apparaît comme une partie discrète du service: écrans, éclairage, navigation et systèmes de confort arrière soutiennent le trajet.",
          alt: "Technologie du tableau de bord et cockpit numérique de Mercedes S-Class",
        },
        {
          eyebrow: "Arrivée",
          title: "L'extérieur garde une remise composée, sombre et précise.",
          text: "Les dernières images reviennent à l'allure et à l'arrivée: peinture noire, détails chromés, surfaces propres et assurance d'un transfert premium.",
          alt: "Détail extérieur d'une Mercedes S-Class noire avec finition premium",
        },
      ],
    },
    galleryImages: [
      {
        label: "Terrasse piscine",
        alt: "Terrasse de piscine de la maison au crépuscule avec architecture moderne",
      },
      {
        label: "Repas extérieur",
        alt: "Bar repas extérieur face à la piscine et au jardin",
      },
      {
        label: "Suite dressing",
        alt: "Dressing de luxe avec lumière douce et assise",
      },
      {
        label: "Domaine aérien",
        alt: "Vue aérienne du domaine privé, piscine, court de tennis et jardins",
      },
      {
        label: "Terrasse mer",
        alt: "Terrasse de chambre avec vue mer et piscine",
      },
      {
        label: "Profil yacht",
        alt: "Yacht de luxe naviguant près de la côte",
      },
      {
        label: "Plan de pont",
        alt: "Vue de dessus du pont de yacht avec piscine et accès tender",
      },
      {
        label: "Repas privé",
        alt: "Salle à manger intérieure de yacht avec art et sièges invités",
      },
      {
        label: "Arrivée S-Class",
        alt: "Mercedes S-Class noire préparée pour une arrivée privée",
      },
      {
        label: "Détail cockpit",
        alt: "Cockpit et tableau de bord Mercedes S-Class en détail",
      },
      {
        label: "Profil avant",
        alt: "Profil avant et éclairage d'une Mercedes S-Class noire",
      },
    ],
    hero: {
      aria: "Collection privée de Marbella Private Experience",
      imageAlt:
        "Maison privée moderne Marbella Private Experience avec piscine et vues montagne au crépuscule",
      eyebrow: "Collection privée / Maison / Yacht / Voiture",
      title: "Trois actifs de luxe présentés comme un seul monde cinématographique.",
      copy: "Une présentation guidée par le scroll pour la résidence, le yacht et la voiture avec chauffeur. Chaque chapitre révèle le style de vie, les détails et le mouvement qui rendent Marbella Private Experience privée de la porte au ponton.",
      exploreHouse: "Explorer la Maison",
      continueYacht: "Continuer vers le Yacht",
      railLabel: "Narration au scroll",
      skipHouseAria: "Aller à la Maison",
    },
    chapters: {
      house: {
        eyebrow: "01 / Maison",
        title:
          "Une résidence privée qui se comporte comme un resort complet.",
        text: "La maison est le chapitre d'arrivée: architecture, terrasses de piscine, pièces de divertissement, bien-être, chambres, dressings et vie intérieur-extérieur se révèlent comme une expérience composée.",
        imageAlt: "Terrasse de piscine d'une maison moderne lumineuse au crépuscule",
      },
      yacht: {
        eyebrow: "02 / Yacht",
        title:
          "Une retraite privée flottante pour le soleil, l'eau, les repas et la nuit.",
        text: "Le yacht prolonge la résidence vers la mer: ponts, activités à bord, moments lounge, repas, accès à l'eau et espaces invités dans la même atmosphère de service.",
        imageAlt: "Yacht de luxe en navigation près de la côte",
      },
      car: {
        eyebrow: "03 / Voiture",
        title:
          "Un transfert S-Class composé pour le confort, le savoir-faire et l'arrivée.",
        text: "Le chapitre voiture revient pour l'instant à une image premium, centrée sur le confort, le savoir-faire, la technologie, la performance, le calme intérieur et l'arrivée finale.",
        imageAlt:
          "Mercedes S-Class noire présentée comme voiture avec chauffeur de Marbella Private Experience",
      },
    },
    gallery: {
      aria: "Galerie de détails Marbella Private Experience",
      eyebrow: "Détails en mouvement",
      title: "Chaque image fonctionne comme partie de la même séquence privée.",
      text: "Architecture, terrasses, ponts, cabines, salles à manger et moments en mer sont organisés comme une archive visuelle continue, avec la voiture revenue dans la même séquence cinématographique.",
    },
    footer: {
      copy: "Une présentation privée à travers l'expérience Maison, Yacht et Voiture avec chauffeur.",
      navigationAria: "Navigation du pied de page",
      note: "L'accès privé dépend de la disponibilité, de la vérification des invités et de la confirmation finale.",
    },
  },
  reservation: {
    eyebrow: "Réserver",
    title: "Réservez votre expérience privée.",
    text: "Sélectionnez votre date préférée, votre fenêtre d'arrivée, une prise en charge vérifiée sur la carte et les informations essentielles. L'équipe concierge peut utiliser cette demande pour préparer la Maison, le Yacht et la Voiture.",
    paymentNote:
      "Le paiement se fait via Stripe. Le pré-billet ne devient actif qu'après confirmation réussie du paiement.",
    hiddenLocaleLabel: "Langue du site",
    status: {
      missingDate: "Choisissez une date de réservation préférée avant le paiement.",
      missingPickup:
        "Sélectionnez un lieu de prise en charge depuis Google Places ou la carte.",
      openingCheckout: "Ouverture du paiement sécurisé Stripe...",
      unableCheckout: "Impossible de lancer le paiement Stripe.",
    },
    fields: {
      name: "Nom",
      namePlaceholder: "Nom complet",
      age: "Âge",
      idNumber: "Numéro d'identité",
      idNumberPlaceholder: "Passeport ou carte nationale",
      email: "Email",
      emailPlaceholder: "nom@exemple.com",
      foodAllergies: "Allergies alimentaires",
      foodAllergiesPlaceholder:
        "Indiquez les allergies, restrictions alimentaires ou écrivez aucune",
    },
    submit: {
      idle: "Payer et réserver mon expérience",
      loading: "Ouverture du paiement sécurisé",
    },
  },
  bookingCalendar: {
    legend: "Calendrier de réservation",
    preferredDate: "Date préférée",
    emptyDateLabel: "Sélectionnez une date de réservation préférée",
    selectedAvailability:
      "La disponibilité sera vérifiée pour {window} en {timezone}.",
    emptyAvailability:
      "Choisissez une date future. La disponibilité finale est confirmée par le concierge après paiement.",
    guests: "Invités",
    arrivalWindowAria: "Fenêtre d'arrivée",
    timeWindows: {
      full_day: {
        label: "Journée complète",
        summaryLabel: "la séquence journée complète",
        detail: "Séquence maison, yacht et voiture",
      },
      morning: {
        label: "Matin",
        summaryLabel: "la fenêtre du matin",
        detail: "Fenêtre d'arrivée 10:00",
      },
      afternoon: {
        label: "Après-midi",
        summaryLabel: "la fenêtre de l'après-midi",
        detail: "Fenêtre d'arrivée 14:00",
      },
      sunset: {
        label: "Coucher du soleil",
        summaryLabel: "la fenêtre du coucher du soleil",
        detail: "Arrivée à l'heure dorée",
      },
    },
  },
  pickup: {
    placesUnavailable:
      "Google Places autocomplete n'est pas disponible pour cette clé API. Activez Places API (New), la facturation et ce domaine dans Google Cloud, ou cliquez sur la carte pour fixer la prise en charge.",
    mapLoadError: "Google Maps n'a pas pu être chargé.",
    selectedPickupLocation: "Lieu de prise en charge sélectionné",
    pinnedPickupLocation: "Lieu de prise en charge épinglé",
    initialStatus: "Chargez la carte et sélectionnez la prise en charge.",
    missingKeyStatus: "La clé API Google Maps est manquante.",
    autocompletePlaceholder: "Rechercher hôtel, résidence, aéroport ou marina",
    autocompleteDescription:
      "Rechercher le lieu de prise en charge du chauffeur.",
    loadingPlaceDetails: "Chargement des détails du lieu sélectionné...",
    noMappedLocation:
      "Choisissez un résultat de prise en charge avec une position cartographiée.",
    selectedFromPlaces: "Prise en charge sélectionnée depuis Google Places.",
    resolvingPinned: "Résolution du lieu épinglé...",
    selectedOnMap: "Prise en charge sélectionnée sur la carte.",
    readyStatus:
      "Recherchez une adresse ou cliquez sur la carte pour fixer la prise en charge.",
    legend: "Lieu de prise en charge",
    searchLabel: "Rechercher avec Google Places",
    searchAria: "Rechercher un lieu de prise en charge",
    mapAria: "Carte de prise en charge",
    selectedLabel: "Prise en charge sélectionnée",
    pendingLabel: "Prise en charge en attente",
    emptySelection: "Recherchez ou choisissez un point sur la carte",
  },
  termsPage: {
    navAria: "Navigation des conditions",
    listAria: "Conditions générales",
    hero: {
      eyebrow: "Conditions",
      title: "Conditions générales.",
      text: "Ces conditions décrivent les règles principales pour demander l'accès à l'expérience privée Maison, Yacht et Voiture avec chauffeur.",
    },
    items: [
      {
        title: "Accès privé",
        text: "L'accès à l'expérience Maison, Yacht et Voiture est privé, limité et soumis à l'approbation, la disponibilité, la vérification des invités et la confirmation finale de l'équipe concierge.",
      },
      {
        title: "Demandes de réservation",
        text: "L'envoi d'une demande de réservation ne garantit pas l'entrée, le transport, l'accès au yacht, le service de repas ou la disponibilité d'un événement. Une réservation devient active uniquement après confirmation écrite.",
      },
      {
        title: "Identification",
        text: "Les invités peuvent devoir fournir une pièce d'identité valide avant la prise en charge ou l'entrée. Les informations demandées servent à vérifier l'accès et préparer l'expérience.",
      },
      {
        title: "Prise en charge chauffeur",
        text: "Le lieu et l'horaire de prise en charge doivent être confirmés à l'avance. Les changements peuvent affecter le planning, l'itinéraire et la disponibilité de la résidence ou du yacht.",
      },
      {
        title: "Repas et allergies",
        text: "Les invités doivent communiquer allergies alimentaires et restrictions avant l'arrivée. L'équipe fera des efforts raisonnables pour répondre aux exigences indiquées.",
      },
      {
        title: "Conduite des invités",
        text: "Les invités doivent respecter la résidence, le yacht, le personnel, les chauffeurs, les autres invités et toutes les consignes de sécurité. L'accès peut être refusé ou interrompu en cas de conduite dangereuse, abusive ou perturbatrice.",
      },
      {
        title: "Yacht et météo",
        text: "L'accès au yacht peut être ajusté, reporté ou annulé en raison de la météo, des conditions de marina, des instructions du capitaine, des exigences de sécurité ou des contraintes opérationnelles.",
      },
      {
        title: "Conditions finales",
        text: "Ces conditions web sont un brouillon de présentation. Les conditions commerciales finales, règles d'annulation, exigences de paiement et clauses de responsabilité doivent être confirmées dans l'accord officiel de réservation.",
      },
    ],
  },
  successPage: {
    navAria: "Navigation de confirmation",
    amountFallback: "Montant du paiement confirmé par Stripe",
    notAvailable: "Non disponible",
    paid: {
      eyebrow: "Paiement confirmé",
      title: "Votre pré-billet est réservé.",
      text: "Stripe a confirmé le paiement. L'équipe concierge peut maintenant utiliser cet enregistrement payé pour poursuivre la vérification des invités et la planification de l'arrivée.",
      state: "Payé",
      summary: "Paiement de réservation accepté",
    },
    unpaid: {
      eyebrow: "Paiement non confirmé",
      title: "Nous n'avons pas pu confirmer le paiement.",
      text: "La réservation n'est pas active tant que Stripe n'a pas confirmé le paiement. Revenez au formulaire de réservation et réessayez.",
      state: "En attente",
      summary: "Paiement de réservation incomplet",
    },
    fields: {
      reservationId: "ID de réservation",
      email: "Email",
      amount: "Montant",
      stripeSession: "Session Stripe",
    },
  },
  checkout: {
    errors: {
      origin: "Cette demande de paiement n'est pas autorisée depuis cette origine.",
      invalidRequest: "Demande de réservation invalide.",
      unableRecord: "Impossible d'enregistrer la réservation.",
      firestorePrefix: "Impossible d'enregistrer la réservation dans Firestore:",
      noUrl: "Stripe n'a pas renvoyé d'URL de paiement.",
      unableCreate: "Impossible de créer le paiement Stripe.",
    },
    validation: {
      futureDate: "une date de réservation future",
      arrivalWindow: "une fenêtre d'arrivée",
      pickupSelection: "une sélection de prise en charge Google Maps",
      fullName: "votre nom complet",
      adultAge: "la vérification de majorité",
      idNumber: "votre numéro d'identité",
      email: "un email valide",
      partySize: "un groupe entre 1 et 12 personnes",
      complete: "Complétez {items} avant le paiement.",
    },
    stripe: {
      productName: "Pré-billet Marbella Private Experience",
      productDescription:
        "Un pré-billet de réservation payé pour l'expérience privée Maison, Yacht et Voiture avec chauffeur.",
      customSubmit:
        "Votre pré-billet Marbella Private Experience est réservé uniquement après confirmation du paiement par Stripe.",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  fr,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getDictionaryForLocale(locale: string | undefined) {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
