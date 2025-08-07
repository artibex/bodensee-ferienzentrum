import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Bed, Eye, Star, Mountain } from "lucide-react";

const accommodations = [
  {
    id: 1,
    name: "Familien-Appartment",
    description: "Geräumiges Appartment für 4-6 Personen mit separaten Schlafzimmern, voll ausgestatteter Küche und großzügigem Wohnbereich.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    price: "Ab €89/Nacht",
    features: [
      { icon: Users, text: "4-6 Personen" },
      { icon: Bed, text: "2 Schlafzimmer" },
    ],
  },
  {
    id: 2,
    name: "Paar-Suite",
    description: "Romantisches Appartment für 2 Personen mit privatem Balkon, Küchenzeile und gemütlichem Wohnbereich mit Seeblick.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    price: "Ab €65/Nacht",
    features: [
      { icon: Users, text: "2 Personen" },
      { icon: Eye, text: "Seeblick" },
    ],
  },
  {
    id: 3,
    name: "Penthouse-Suite",
    description: "Exklusives Penthouse für 2-4 Personen mit großer Dachterrasse, Premium-Ausstattung und atemberaubendem Panoramablick.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    price: "Ab €149/Nacht",
    features: [
      { icon: Star, text: "Premium" },
      { icon: Mountain, text: "Panoramablick" },
    ],
  },
];

export default function Accommodations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Unsere Unterkünfte
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wählen Sie aus verschiedenen Appartment-Typen die perfekte Unterkunft für Ihren Urlaub am Bodensee.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={accommodation.image}
                  alt={`${accommodation.name} - Moderne Unterkunft am Bodensee`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {accommodation.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {accommodation.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      {accommodation.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="flex items-center">
                          <feature.icon className="w-4 h-4 mr-2" />
                          {feature.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-lake-blue-600 dark:text-lake-blue-400">
                      {accommodation.price}
                    </span>
                    <Button 
                      className="bg-lake-blue-600 hover:bg-lake-blue-700 text-white"
                      data-testid={`book-${accommodation.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Buchen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-lake-blue-50 dark:bg-lake-blue-900/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Alle Appartments beinhalten
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏊</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Hallenbad inklusive</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚗</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Kostenlose Parkplätze</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🍽️</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Vollausgestattete Küche</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📶</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Kostenloses WLAN</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
