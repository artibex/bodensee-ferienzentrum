import { Link } from "wouter";
import { Waves, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Unterkünfte", href: "/unterkuenfte" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Preise & Verfügbarkeit", href: "#" },
];

const services = [
  { name: "Hallenbad", icon: "🏊" },
  { name: "Kostenlose Parkplätze", icon: "🚗" },
  { name: "Kostenloses WLAN", icon: "📶" },
  { name: "Vollausgestattete Küchen", icon: "🍽️" },
  { name: "Familienfreundlich", icon: "👨‍👩‍👧‍👦" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Waves className="text-lake-blue-400 h-8 w-8" />
              <span className="font-serif font-semibold text-xl">
                Bodensee Ferienzentrum
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Ihr Zuhause am Bodensee für unvergessliche Urlaubsmomente in einzigartiger Lage.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-lake-blue-400 transition-colors duration-200"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lake-blue-400 transition-colors duration-200"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    data-testid={`footer-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Unsere Services</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-lake-blue-400">{service.icon}</span>
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-lake-blue-400 flex-shrink-0" />
                <span>
                  Seestraße 123<br />
                  78462 Konstanz
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lake-blue-400" />
                <span>+49 7531 123456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lake-blue-400" />
                <span>info@bodensee-ferienzentrum.de</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bodensee Ferienzentrum. Alle Rechte vorbehalten.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Impressum
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Datenschutz
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
