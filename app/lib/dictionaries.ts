import { type Locale, defaultLocale, isLocale } from "./locales";

const en = {
  metadata: {
    home: {
      title: "MARBELLA PRIVATE EXPERIENCE | House Yacht Car",
      description:
        "Private access to a fully orchestrated House, Yacht, and chauffeur Car ecosystem in Marbella.",
    },
    terms: {
      title: "Terms and Conditions | MARBELLA PRIVATE EXPERIENCE",
      description:
        "Private access terms for the MARBELLA PRIVATE EXPERIENCE House, Yacht, and chauffeur Car ecosystem.",
    },
    success: {
      title: "Reservation Confirmation | MARBELLA PRIVATE EXPERIENCE",
      description:
        "Concierge and payment confirmation for the MARBELLA PRIVATE EXPERIENCE private access request.",
    },
  },
  common: {
    brandName: "MARBELLA PRIVATE EXPERIENCE",
    brandSymbol: "M",
    reserve: "Request Access",
    terms: "Terms and conditions",
    returnHome: "Return home",
    homeAria: "MARBELLA PRIVATE EXPERIENCE home",
    returnHomeAria: "Return to MARBELLA PRIVATE EXPERIENCE",
    nav: {
      primaryAria: "Primary navigation",
      journeyAria: "Journey sections",
      mobileOpen: "Open menu",
      mobileClose: "Close menu",
      mobileTicketAria: "Request private access",
      languageSettingsAria: "Open language settings",
      languageCode: "EN",
    },
  },
  language: {
    modalAria: "Choose website language",
    modalEyebrow: "Language",
    modalTitle: "Choose your language.",
    modalText:
      "Select one language for the private MARBELLA PRIVATE EXPERIENCE website.",
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
        text: "Private residence, hosted living, wellness, and night rituals",
      },
      {
        number: "02",
        id: "yacht",
        label: "Yacht",
        text: "Selected sea access, captain-led movement, and deck service",
      },
      {
        number: "03",
        id: "car",
        label: "Car",
        text: "Discreet chauffeur movement between private chapters",
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
      aria: "MARBELLA PRIVATE EXPERIENCE private collection",
      imageAlt:
        "MARBELLA PRIVATE EXPERIENCE modern private house with pool and mountain views at dusk",
      eyebrow: "MARBELLA PRIVATE EXPERIENCE / Private access / Marbella",
      title: "Private access to a closed Marbella world.",
      copy: "MARBELLA PRIVATE EXPERIENCE is not a villa rental, a yacht day, or a luxury transfer. It is a fully orchestrated private experience ecosystem in Marbella, opened only through concierge validation.",
      exploreHouse: "Enter the World",
      continueYacht: "View the Sea Chapter",
      railLabel: "Access sequence",
      skipHouseAria: "Skip to House",
    },
    chapters: {
      house: {
        eyebrow: "01 / House",
        title: "The residence is the private base of the MARBELLA PRIVATE EXPERIENCE world.",
        text: "Arrival is curated after validation: architecture, pool terraces, entertainment rooms, wellness spaces, bedrooms, wardrobes, and hosted living are prepared as one controlled environment.",
        imageAlt: "Modern house pool terrace glowing at twilight",
      },
      yacht: {
        eyebrow: "02 / Yacht",
        title: "The sea chapter is available only on selected private dates.",
        text: "The yacht extends the residence into the water with captain-led routing, deck service, dining, guest spaces, and access that remains subject to weather, marina, and concierge approval.",
        imageAlt: "Luxury yacht underway near the coast",
      },
      car: {
        eyebrow: "03 / Car",
        title: "The chauffeur layer keeps every movement private and precise.",
        text: "The car is not a transfer add-on. It is the controlled thread between residence, marina, arrival, and return, with passenger calm, privacy, and timing handled by the concierge team.",
        imageAlt:
          "Black Mercedes S-Class presented as the MARBELLA PRIVATE EXPERIENCE chauffeur car",
      },
    },
    gallery: {
      aria: "MARBELLA PRIVATE EXPERIENCE detail gallery",
      eyebrow: "Inside the closed world",
      title: "Every image belongs to one controlled private sequence.",
      text: "Architecture, terraces, decks, cabins, dining rooms, and sea moments are arranged as one visual archive for selected guests, not as separate rental assets.",
    },
    footer: {
      copy: "Private access to an orchestrated House, Yacht, and chauffeur Car ecosystem in Marbella.",
      navigationAria: "Footer navigation",
      note: "Limited access. Selected guests only. Concierge validation required.",
    },
  },
  reservation: {
    eyebrow: "Private Access Request",
    title: "Request private access to MARBELLA PRIVATE EXPERIENCE.",
    text: "Share your guest profile, contact email, party size, and any dining notes. The concierge team reviews every request before dates, capacity, deposit, or final confirmation are offered.",
    paymentNote:
      "No instant checkout. The sequence is request, concierge validation, private call, deposit or payment link, then written confirmation.",
    hiddenLocaleLabel: "Website language",
    status: {
      submittingRequest: "Submitting your private access request...",
      submitted:
        "Private access request {reservationId} has been received. Concierge validation is required before any date, deposit, or confirmation is offered.",
      unableRequest: "Unable to submit the private access request.",
    },
    fields: {
      name: "Name",
      namePlaceholder: "Full name",
      age: "Age",
      email: "Email",
      emailPlaceholder: "name@example.com",
      partySize: "Guests",
      foodAllergies: "Food allergies",
      foodAllergiesPlaceholder:
        "List allergies, dietary restrictions, or write none",
    },
    submit: {
      idle: "Request Private Access",
      loading: "Submitting request",
    },
  },
  termsPage: {
    navAria: "Terms navigation",
    listAria: "Terms and conditions",
    hero: {
      eyebrow: "Terms",
      title: "Terms and conditions.",
      text: "These terms outline the core conditions for requesting access to the MARBELLA PRIVATE EXPERIENCE private House, Yacht, and chauffeur Car ecosystem.",
    },
    items: [
      {
        title: "Private Access",
        text: "Access to MARBELLA PRIVATE EXPERIENCE is private, limited, and subject to approval, availability, guest verification, capacity limits, and final confirmation by the concierge team.",
      },
      {
        title: "Access Requests",
        text: "Submitting an access request does not guarantee entry, transport, yacht access, dining service, or event availability. A booking becomes active only after concierge approval and written confirmation.",
      },
      {
        title: "Guest Review",
        text: "Guest details are reviewed by the concierge team to verify access, capacity, and the operational fit of the requested experience.",
      },
      {
        title: "Concierge Planning",
        text: "Specific logistics, timing, and access details are handled privately after validation. Changes may affect the schedule and availability of the residence or yacht portions of the experience.",
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
        text: "These website terms are a presentation draft. Final commercial terms, cancellation rules, deposit or payment requirements, and liability terms should be confirmed in the official booking agreement.",
      },
    ],
  },
  successPage: {
    navAria: "Confirmation navigation",
    amountFallback: "Deposit or payment amount confirmed by Stripe",
    notAvailable: "Not available",
    paid: {
      eyebrow: "Private payment confirmed",
      title: "Your MARBELLA PRIVATE EXPERIENCE deposit is recorded.",
      text: "Stripe has confirmed the payment. The concierge team can now continue guest validation, date protection, and arrival planning.",
      state: "Paid",
      summary: "Private access payment accepted",
    },
    unpaid: {
      eyebrow: "Payment not confirmed",
      title: "We could not confirm payment.",
      text: "The private access request is not financially confirmed until Stripe confirms payment. Return to the access form and try again.",
      state: "Pending",
      summary: "Private access payment incomplete",
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
      origin: "This request is not allowed from that origin.",
      invalidRequest: "Invalid reservation request.",
      unableRecord: "Unable to record booking.",
      firestorePrefix: "Unable to record booking in Firestore:",
      noUrl: "Stripe did not return a checkout URL.",
      unableCreate: "Unable to create Stripe checkout.",
    },
    validation: {
      fullName: "your full name",
      adultAge: "adult age verification",
      email: "a valid email",
      partySize: "a party size between 1 and 12",
      complete: "Please complete {items} before requesting access.",
    },
    stripe: {
      productName: "MARBELLA PRIVATE EXPERIENCE Private Access Deposit",
      productDescription:
        "A private access deposit for the MARBELLA PRIVATE EXPERIENCE House, Yacht, and chauffeur Car ecosystem.",
      customSubmit:
        "Your MARBELLA PRIVATE EXPERIENCE access remains subject to concierge validation and written confirmation.",
    },
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  metadata: {
    home: {
      title: "MARBELLA PRIVATE EXPERIENCE | Casa Yate Coche",
      description:
        "Acceso privado a un ecosistema orquestado de Casa, Yate y Coche con chofer en Marbella.",
    },
    terms: {
      title: "Términos y condiciones | MARBELLA PRIVATE EXPERIENCE",
      description:
        "Términos de acceso privado para el ecosistema MARBELLA PRIVATE EXPERIENCE de Casa, Yate y Coche con chofer.",
    },
    success: {
      title: "Confirmación de reserva | MARBELLA PRIVATE EXPERIENCE",
      description:
        "Confirmación de concierge y pago para la solicitud de acceso privado a MARBELLA PRIVATE EXPERIENCE.",
    },
  },
  common: {
    brandName: "MARBELLA PRIVATE EXPERIENCE",
    brandSymbol: "M",
    reserve: "Solicitar acceso",
    terms: "Términos y condiciones",
    returnHome: "Volver al inicio",
    homeAria: "Inicio de MARBELLA PRIVATE EXPERIENCE",
    returnHomeAria: "Volver a MARBELLA PRIVATE EXPERIENCE",
    nav: {
      primaryAria: "Navegación principal",
      journeyAria: "Secciones de la experiencia",
      mobileOpen: "Abrir menú",
      mobileClose: "Cerrar menú",
      mobileTicketAria: "Solicitar acceso privado",
      languageSettingsAria: "Abrir ajustes de idioma",
      languageCode: "ES",
    },
  },
  language: {
    modalAria: "Elegir idioma del sitio",
    modalEyebrow: "Idioma",
    modalTitle: "Elige tu idioma.",
    modalText:
      "Selecciona un solo idioma para el sitio privado de MARBELLA PRIVATE EXPERIENCE.",
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
        text: "Residencia privada, vida con anfitrion, bienestar y rituales nocturnos",
      },
      {
        number: "02",
        id: "yacht",
        label: "Yate",
        text: "Acceso al mar seleccionado, ruta con capitan y servicio en cubierta",
      },
      {
        number: "03",
        id: "car",
        label: "Coche",
        text: "Movimiento discreto con chofer entre capitulos privados",
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
      aria: "Colección privada de MARBELLA PRIVATE EXPERIENCE",
      imageAlt:
        "Casa privada moderna de MARBELLA PRIVATE EXPERIENCE con piscina y vistas a la montaña al atardecer",
      eyebrow: "MARBELLA PRIVATE EXPERIENCE / Acceso privado / Marbella",
      title: "Acceso privado a un mundo cerrado en Marbella.",
      copy: "MARBELLA PRIVATE EXPERIENCE no es un alquiler de villa, un dia de yate ni un traslado de lujo. Es un ecosistema de experiencia privada completamente orquestado en Marbella, abierto solo mediante validacion concierge.",
      exploreHouse: "Entrar al mundo",
      continueYacht: "Ver el capitulo del mar",
      railLabel: "Secuencia de acceso",
      skipHouseAria: "Saltar a Casa",
    },
    chapters: {
      house: {
        eyebrow: "01 / Casa",
        title: "La residencia es la base privada del mundo MARBELLA PRIVATE EXPERIENCE.",
        text: "La llegada se prepara tras validacion: arquitectura, terrazas de piscina, salas de entretenimiento, bienestar, dormitorios, vestidores y vida con anfitrion forman un entorno controlado.",
        imageAlt: "Terraza de piscina de casa moderna brillando al anochecer",
      },
      yacht: {
        eyebrow: "02 / Yate",
        title: "El capitulo del mar se abre solo en fechas privadas seleccionadas.",
        text: "El yate extiende la residencia al agua con ruta dirigida por capitan, servicio en cubierta, comidas, espacios de invitados y acceso sujeto a clima, marina y aprobacion concierge.",
        imageAlt: "Yate de lujo navegando cerca de la costa",
      },
      car: {
        eyebrow: "03 / Coche",
        title: "La capa de chofer mantiene cada movimiento privado y preciso.",
        text: "El coche no es un extra de traslado. Es el hilo controlado entre residencia, marina, llegada y regreso, con calma, privacidad y tiempos gestionados por el concierge.",
        imageAlt:
          "Mercedes S-Class negro presentado como el coche con chofer de MARBELLA PRIVATE EXPERIENCE",
      },
    },
    gallery: {
      aria: "Galería de detalles de MARBELLA PRIVATE EXPERIENCE",
      eyebrow: "Dentro del mundo cerrado",
      title: "Cada imagen pertenece a una misma secuencia privada controlada.",
      text: "Arquitectura, terrazas, cubiertas, cabinas, comedores y momentos de mar se ordenan como un archivo visual para invitados seleccionados, no como activos de alquiler separados.",
    },
    footer: {
      copy: "Acceso privado a un ecosistema orquestado de Casa, Yate y Coche con chofer en Marbella.",
      navigationAria: "Navegación del pie de página",
      note: "Acceso limitado. Solo invitados seleccionados. Validacion concierge requerida.",
    },
  },
  reservation: {
    eyebrow: "Solicitud de acceso privado",
    title: "Solicita acceso privado a MARBELLA PRIVATE EXPERIENCE.",
    text: "Comparte tu perfil de invitado, email de contacto, numero de invitados y notas de comida. El equipo de concierge revisa cada solicitud antes de ofrecer fechas, capacidad, deposito o confirmacion final.",
    paymentNote:
      "Sin checkout instantaneo. La secuencia es solicitud, validacion concierge, llamada privada, deposito o enlace de pago, y confirmacion escrita.",
    hiddenLocaleLabel: "Idioma del sitio",
    status: {
      submittingRequest: "Enviando tu solicitud de acceso privado...",
      submitted:
        "La solicitud de acceso privado {reservationId} ha sido recibida. Se requiere validacion concierge antes de ofrecer fecha, deposito o confirmacion.",
      unableRequest: "No se pudo enviar la solicitud de acceso privado.",
    },
    fields: {
      name: "Nombre",
      namePlaceholder: "Nombre completo",
      age: "Edad",
      email: "Email",
      emailPlaceholder: "nombre@ejemplo.com",
      partySize: "Invitados",
      foodAllergies: "Alergias alimentarias",
      foodAllergiesPlaceholder:
        "Indica alergias, restricciones alimentarias o escribe ninguna",
    },
    submit: {
      idle: "Solicitar acceso privado",
      loading: "Enviando solicitud",
    },
  },
  termsPage: {
    navAria: "Navegación de términos",
    listAria: "Términos y condiciones",
    hero: {
      eyebrow: "Términos",
      title: "Términos y condiciones.",
      text: "Estos términos resumen las condiciones principales para solicitar acceso al ecosistema privado MARBELLA PRIVATE EXPERIENCE de Casa, Yate y Coche con chofer.",
    },
    items: [
      {
        title: "Acceso privado",
        text: "El acceso a MARBELLA PRIVATE EXPERIENCE es privado, limitado y sujeto a aprobacion, disponibilidad, verificacion de invitados, limites de capacidad y confirmacion final del equipo de concierge.",
      },
      {
        title: "Solicitudes de acceso",
        text: "Enviar una solicitud de acceso no garantiza entrada, transporte, acceso al yate, servicio gastronomico ni disponibilidad de evento. La reserva se activa solo tras aprobacion concierge y confirmacion escrita.",
      },
      {
        title: "Revision de invitados",
        text: "Los datos del invitado son revisados por el equipo de concierge para verificar acceso, capacidad y ajuste operativo de la experiencia solicitada.",
      },
      {
        title: "Planificacion concierge",
        text: "La logistica, los horarios y los detalles de acceso se gestionan en privado despues de la validacion. Los cambios pueden afectar al horario y a la disponibilidad de la residencia o el yate.",
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
        text: "Estos términos web son un borrador de presentacion. Los términos comerciales finales, reglas de cancelacion, requisitos de deposito o pago y responsabilidad deben confirmarse en el acuerdo oficial de reserva.",
      },
    ],
  },
  successPage: {
    navAria: "Navegación de confirmación",
    amountFallback: "Importe del deposito o pago confirmado por Stripe",
    notAvailable: "No disponible",
    paid: {
      eyebrow: "Pago privado confirmado",
      title: "Tu deposito MARBELLA PRIVATE EXPERIENCE ha quedado registrado.",
      text: "Stripe ha confirmado el pago. El equipo de concierge puede continuar la validacion de invitados, la proteccion de fecha y la planificacion de llegada.",
      state: "Pagado",
      summary: "Pago de acceso privado aceptado",
    },
    unpaid: {
      eyebrow: "Pago no confirmado",
      title: "No pudimos confirmar el pago.",
      text: "La solicitud de acceso privado no queda confirmada financieramente hasta que Stripe confirme el pago. Vuelve al formulario de acceso e intentalo de nuevo.",
      state: "Pendiente",
      summary: "Pago de acceso privado incompleto",
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
      origin: "Esta solicitud no está permitida desde ese origen.",
      invalidRequest: "Solicitud de reserva no válida.",
      unableRecord: "No se pudo registrar la reserva.",
      firestorePrefix: "No se pudo registrar la reserva en Firestore:",
      noUrl: "Stripe no devolvió una URL de checkout.",
      unableCreate: "No se pudo crear el checkout de Stripe.",
    },
    validation: {
      fullName: "tu nombre completo",
      adultAge: "verificación de mayoría de edad",
      email: "un email válido",
      partySize: "un grupo entre 1 y 12 personas",
      complete: "Completa {items} antes de solicitar acceso.",
    },
    stripe: {
      productName: "Deposito de acceso privado MARBELLA PRIVATE EXPERIENCE",
      productDescription:
        "Un deposito de acceso privado para el ecosistema MARBELLA PRIVATE EXPERIENCE de Casa, Yate y Coche con chofer.",
      customSubmit:
        "Tu acceso MARBELLA PRIVATE EXPERIENCE sigue sujeto a validacion concierge y confirmacion escrita.",
    },
  },
};

const fr: Dictionary = {
  metadata: {
    home: {
      title: "MARBELLA PRIVATE EXPERIENCE | Maison Yacht Voiture",
      description:
        "Accès privé à un écosystème orchestré Maison, Yacht et Voiture avec chauffeur à Marbella.",
    },
    terms: {
      title: "Conditions générales | MARBELLA PRIVATE EXPERIENCE",
      description:
        "Conditions d'accès privé à l'écosystème MARBELLA PRIVATE EXPERIENCE Maison, Yacht et Voiture avec chauffeur.",
    },
    success: {
      title: "Confirmation de réservation | MARBELLA PRIVATE EXPERIENCE",
      description:
        "Confirmation concierge et paiement pour la demande d'accès privé MARBELLA PRIVATE EXPERIENCE.",
    },
  },
  common: {
    brandName: "MARBELLA PRIVATE EXPERIENCE",
    brandSymbol: "M",
    reserve: "Demander l'accès",
    terms: "Conditions générales",
    returnHome: "Retour à l'accueil",
    homeAria: "Accueil de MARBELLA PRIVATE EXPERIENCE",
    returnHomeAria: "Retour à MARBELLA PRIVATE EXPERIENCE",
    nav: {
      primaryAria: "Navigation principale",
      journeyAria: "Sections de l'expérience",
      mobileOpen: "Ouvrir le menu",
      mobileClose: "Fermer le menu",
      mobileTicketAria: "Demander l'accès privé",
      languageSettingsAria: "Ouvrir les réglages de langue",
      languageCode: "FR",
    },
  },
  language: {
    modalAria: "Choisir la langue du site",
    modalEyebrow: "Langue",
    modalTitle: "Choisissez votre langue.",
    modalText:
      "Sélectionnez une seule langue pour le site privé MARBELLA PRIVATE EXPERIENCE.",
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
        text: "Résidence privée, vie accueillie, bien-être et rituels du soir",
      },
      {
        number: "02",
        id: "yacht",
        label: "Yacht",
        text: "Accès mer sélectionné, route capitaine et service pont",
      },
      {
        number: "03",
        id: "car",
        label: "Voiture",
        text: "Mouvement chauffeur discret entre les chapitres privés",
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
      aria: "Collection privée de MARBELLA PRIVATE EXPERIENCE",
      imageAlt:
        "Maison privée moderne MARBELLA PRIVATE EXPERIENCE avec piscine et vues montagne au crépuscule",
      eyebrow: "MARBELLA PRIVATE EXPERIENCE / Accès privé / Marbella",
      title: "Accès privé à un monde fermé à Marbella.",
      copy: "MARBELLA PRIVATE EXPERIENCE n'est pas une location de villa, une journée yacht ou un transfert de luxe. C'est un écosystème d'expérience privée entièrement orchestré à Marbella, ouvert uniquement après validation concierge.",
      exploreHouse: "Entrer dans le monde",
      continueYacht: "Voir le chapitre mer",
      railLabel: "Séquence d'accès",
      skipHouseAria: "Aller à la Maison",
    },
    chapters: {
      house: {
        eyebrow: "01 / Maison",
        title: "La résidence est la base privée du monde MARBELLA PRIVATE EXPERIENCE.",
        text: "L'arrivée se prépare après validation: architecture, terrasses de piscine, pièces de divertissement, bien-être, chambres, dressings et vie accueillie composent un environnement contrôlé.",
        imageAlt: "Terrasse de piscine d'une maison moderne lumineuse au crépuscule",
      },
      yacht: {
        eyebrow: "02 / Yacht",
        title: "Le chapitre mer s'ouvre uniquement sur des dates privées sélectionnées.",
        text: "Le yacht prolonge la résidence sur l'eau avec route capitaine, service pont, repas, espaces invités et accès soumis à la météo, à la marina et à l'approbation concierge.",
        imageAlt: "Yacht de luxe en navigation près de la côte",
      },
      car: {
        eyebrow: "03 / Voiture",
        title: "La couche chauffeur garde chaque mouvement privé et précis.",
        text: "La voiture n'est pas un simple transfert. C'est le fil contrôlé entre résidence, marina, arrivée et retour, avec calme passager, confidentialité et timing gérés par l'équipe concierge.",
        imageAlt:
          "Mercedes S-Class noire présentée comme voiture avec chauffeur de MARBELLA PRIVATE EXPERIENCE",
      },
    },
    gallery: {
      aria: "Galerie de détails MARBELLA PRIVATE EXPERIENCE",
      eyebrow: "Dans le monde fermé",
      title: "Chaque image appartient à une même séquence privée contrôlée.",
      text: "Architecture, terrasses, ponts, cabines, salles à manger et moments en mer forment une archive visuelle pour invités sélectionnés, pas des actifs de location séparés.",
    },
    footer: {
      copy: "Accès privé à un écosystème orchestré Maison, Yacht et Voiture avec chauffeur à Marbella.",
      navigationAria: "Navigation du pied de page",
      note: "Accès limité. Invités sélectionnés uniquement. Validation concierge requise.",
    },
  },
  reservation: {
    eyebrow: "Demande d'accès privé",
    title: "Demandez l'accès privé à MARBELLA PRIVATE EXPERIENCE.",
    text: "Partagez votre profil invité, votre email de contact, le nombre d'invités et vos notes de repas. L'équipe concierge examine chaque demande avant de proposer dates, capacité, acompte ou confirmation finale.",
    paymentNote:
      "Pas de checkout instantané. La séquence est demande, validation concierge, appel privé, acompte ou lien de paiement, puis confirmation écrite.",
    hiddenLocaleLabel: "Langue du site",
    status: {
      submittingRequest: "Envoi de votre demande d'accès privé...",
      submitted:
        "La demande d'accès privé {reservationId} a été reçue. Une validation concierge est requise avant toute date, acompte ou confirmation.",
      unableRequest: "Impossible d'envoyer la demande d'accès privé.",
    },
    fields: {
      name: "Nom",
      namePlaceholder: "Nom complet",
      age: "Âge",
      email: "Email",
      emailPlaceholder: "nom@exemple.com",
      partySize: "Invités",
      foodAllergies: "Allergies alimentaires",
      foodAllergiesPlaceholder:
        "Indiquez les allergies, restrictions alimentaires ou écrivez aucune",
    },
    submit: {
      idle: "Demander l'accès privé",
      loading: "Envoi de la demande",
    },
  },
  termsPage: {
    navAria: "Navigation des conditions",
    listAria: "Conditions générales",
    hero: {
      eyebrow: "Conditions",
      title: "Conditions générales.",
      text: "Ces conditions décrivent les règles principales pour demander l'accès à l'écosystème privé MARBELLA PRIVATE EXPERIENCE Maison, Yacht et Voiture avec chauffeur.",
    },
    items: [
      {
        title: "Accès privé",
        text: "L'accès à MARBELLA PRIVATE EXPERIENCE est privé, limité et soumis à l'approbation, la disponibilité, la vérification des invités, les limites de capacité et la confirmation finale de l'équipe concierge.",
      },
      {
        title: "Demandes d'accès",
        text: "L'envoi d'une demande d'accès ne garantit pas l'entrée, le transport, l'accès au yacht, le service de repas ou la disponibilité d'un événement. Une réservation devient active uniquement après approbation concierge et confirmation écrite.",
      },
      {
        title: "Revue des invités",
        text: "Les détails invités sont examinés par l'équipe concierge afin de vérifier l'accès, la capacité et l'adéquation opérationnelle de l'expérience demandée.",
      },
      {
        title: "Planification concierge",
        text: "La logistique, les horaires et les détails d'accès sont traités en privé après validation. Les changements peuvent affecter le planning et la disponibilité de la résidence ou du yacht.",
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
        text: "Ces conditions web sont un brouillon de présentation. Les conditions commerciales finales, règles d'annulation, exigences d'acompte ou de paiement et clauses de responsabilité doivent être confirmées dans l'accord officiel de réservation.",
      },
    ],
  },
  successPage: {
    navAria: "Navigation de confirmation",
    amountFallback: "Montant de l'acompte ou du paiement confirmé par Stripe",
    notAvailable: "Non disponible",
    paid: {
      eyebrow: "Paiement privé confirmé",
      title: "Votre acompte MARBELLA PRIVATE EXPERIENCE est enregistré.",
      text: "Stripe a confirmé le paiement. L'équipe concierge peut maintenant poursuivre la validation des invités, la protection de date et la planification de l'arrivée.",
      state: "Payé",
      summary: "Paiement d'accès privé accepté",
    },
    unpaid: {
      eyebrow: "Paiement non confirmé",
      title: "Nous n'avons pas pu confirmer le paiement.",
      text: "La demande d'accès privé n'est pas confirmée financièrement tant que Stripe n'a pas confirmé le paiement. Revenez au formulaire d'accès et réessayez.",
      state: "En attente",
      summary: "Paiement d'accès privé incomplet",
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
      origin: "Cette demande n'est pas autorisée depuis cette origine.",
      invalidRequest: "Demande de réservation invalide.",
      unableRecord: "Impossible d'enregistrer la réservation.",
      firestorePrefix: "Impossible d'enregistrer la réservation dans Firestore:",
      noUrl: "Stripe n'a pas renvoyé d'URL de paiement.",
      unableCreate: "Impossible de créer le paiement Stripe.",
    },
    validation: {
      fullName: "votre nom complet",
      adultAge: "la vérification de majorité",
      email: "un email valide",
      partySize: "un groupe entre 1 et 12 personnes",
      complete: "Complétez {items} avant de demander l'accès.",
    },
    stripe: {
      productName: "Acompte d'accès privé MARBELLA PRIVATE EXPERIENCE",
      productDescription:
        "Un acompte d'accès privé pour l'écosystème MARBELLA PRIVATE EXPERIENCE Maison, Yacht et Voiture avec chauffeur.",
      customSubmit:
        "Votre accès MARBELLA PRIVATE EXPERIENCE reste soumis à validation concierge et confirmation écrite.",
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
