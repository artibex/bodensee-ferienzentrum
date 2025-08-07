import { motion } from "framer-motion";
import { Users, Car, Waves, UtensilsCrossed, ShowerHead, Ban } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Familienfreundlich",
    description: "Perfekt ausgestattet für Familien mit Kindern jeden Alters. Sicherheit und Komfort stehen an erster Stelle.",
    color: "lake-blue"
  },
  {
    icon: Car,
    title: "Kostenloses Parken",
    description: "Bequeme und sichere Parkplätze direkt vor der Unterkunft - völlig kostenlos für unsere Gäste.",
    color: "alpine-green"
  },
  {
    icon: Waves,
    title: "Hallenbad inklusive",
    description: "Schwimmen und entspannen bei jedem Wetter. Unser beheiztes Hallenbad steht Ihnen kostenlos zur Verfügung.",
    color: "lake-blue"
  },
  {
    icon: UtensilsCrossed,
    title: "Kochen im Appartment",
    description: "Vollausgestattete Küchen in jedem Appartment. Kochen Sie Ihre Lieblingsgerichte wie zu Hause.",
    color: "orange"
  },
  {
    icon: ShowerHead,
    title: "Dusche und WC",
    description: "Moderne Badezimmer mit komfortabler Ausstattung in jedem Appartment für maximalen Komfort.",
    color: "blue"
  },
  {
    icon: Ban,
    title: "Rauchen nur auf dem Balkon",
    description: "Für eine gesunde Atmosphäre in den Innenräumen ist das Rauchen nur auf den Balkonen gestattet.",
    color: "red"
  },
];

const colorVariants = {
  "lake-blue": "bg-lake-blue-100 dark:bg-lake-blue-900 text-lake-blue-600 dark:text-lake-blue-400",
  "alpine-green": "bg-alpine-green-100 dark:bg-alpine-green-900 text-alpine-green-600 dark:text-alpine-green-400",
  "orange": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
  "blue": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  "red": "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
};

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Übernachten im Ferienzentrum
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Genießen Sie erstklassigen Komfort und alle Annehmlichkeiten für einen perfekten Urlaub am Bodensee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${colorVariants[feature.color as keyof typeof colorVariants]}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
