export const SITE_CONFIG = {
  name: "Bodensee Ferienzentrum",
  description: "Erleben Sie unvergessliche Ferien im Bodensee Ferienzentrum. Moderne Appartments, Hallenbad, familienfreundliche Ausstattung direkt am wunderschönen Bodensee.",
  url: "https://www.bodensee-ferienzentrum.de",
  ogImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  keywords: "Bodensee, Ferienzentrum, Urlaub, Appartments, Hallenbad, familienfreundlich, Lake Constance, Ferien",
} as const;

export const CONTACT_INFO = {
  address: {
    street: "Seestraße 123",
    postalCode: "78462",
    city: "Konstanz",
    country: "Deutschland"
  },
  phone: "+49 7531 123456",
  email: "info@bodensee-ferienzentrum.de",
  hours: {
    office: "Mo-Fr 9:00-18:00 Uhr",
    checkin: "15:00 - 19:00",
    checkout: "bis 11:00"
  }
} as const;

export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "#",
  tripadvisor: "#"
} as const;

export const AMENITIES = [
  { icon: "🏊", name: "Hallenbad" },
  { icon: "🚗", name: "Kostenlose Parkplätze" },
  { icon: "📶", name: "Kostenloses WLAN" },
  { icon: "🍽️", name: "Vollausgestattete Küchen" },
  { icon: "👨‍👩‍👧‍👦", name: "Familienfreundlich" }
] as const;
