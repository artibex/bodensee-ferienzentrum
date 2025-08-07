import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "25+", label: "Jahre Erfahrung" },
  { number: "50+", label: "Appartments" },
  { number: "5000+", label: "Zufriedene Gäste" },
  { number: "4.8", label: "Bewertung ⭐" },
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Über das Bodensee Ferienzentrum
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Seit über 25 Jahren bieten wir unseren Gästen unvergessliche Urlaubserlebnisse am wunderschönen Bodensee. 
              Unser familiengeführtes Ferienzentrum vereint moderne Ausstattung mit der herzlichen Gastfreundschaft der Region.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              In idyllischer Lage direkt am See gelegen, bieten wir Ihnen die perfekte Ausgangsbasis für Erkundungstouren 
              in Deutschland, Österreich und der Schweiz. Entspannung und Abenteuer gehen bei uns Hand in Hand.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-lake-blue-600 dark:text-lake-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link href="/ueber-uns">
              <Button 
                size="lg"
                className="bg-lake-blue-600 hover:bg-lake-blue-700 text-white"
                data-testid="learn-more-about"
              >
                Mehr über uns erfahren
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://pixabay.com/get/g6ecee97b980d35a86174caeb147b7313c6e9e363737998cd333478285cc53775db22aefb685ab46a231b15eb8ca33cda82869136673a73e6a152a628ef537c5c_1280.jpg"
              alt="Historisches Bodensee-Gebäude mit traditioneller Architektur und malerischer Umgebung"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lake-blue-600/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
