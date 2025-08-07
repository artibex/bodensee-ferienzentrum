import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { number: "25+", label: "Jahre Erfahrung" },
  { number: "50+", label: "Appartments" },
  { number: "5000+", label: "Zufriedene Gäste" },
  { number: "4.8", label: "Bewertung ⭐" },
];

export default function About() {
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
            Über das Bodensee Ferienzentrum
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die Geschichte und Philosophie hinter unserem familiengeführten Ferienzentrum am wunderschönen Bodensee.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Seit über 25 Jahren bieten wir unseren Gästen unvergessliche Urlaubserlebnisse am wunderschönen Bodensee. 
              Unser familiengeführtes Ferienzentrum vereint moderne Ausstattung mit der herzlichen Gastfreundschaft der Region.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              In idyllischer Lage direkt am See gelegen, bieten wir Ihnen die perfekte Ausgangsbasis für Erkundungstouren 
              in Deutschland, Österreich und der Schweiz. Entspannung und Abenteuer gehen bei uns Hand in Hand.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://pixabay.com/get/g6ecee97b980d35a86174caeb147b7313c6e9e363737998cd333478285cc53775db22aefb685ab46a231b15eb8ca33cda82869136673a73e6a152a628ef537c5c_1280.jpg"
              alt="Historisches Bodensee-Gebäude mit traditioneller Architektur und malerischer Umgebung"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lake-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-lake-blue-600 dark:text-lake-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-lake-blue-100 dark:bg-lake-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Gemeinschaft</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Wir schaffen einen Ort, an dem sich Familien wie zu Hause fühlen und neue Freundschaften entstehen.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-alpine-green-100 dark:bg-alpine-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Nachhaltigkeit</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Der Schutz der wunderschönen Bodensee-Region liegt uns am Herzen. Wir handeln verantwortungsbewusst.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Qualität</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Höchste Standards in Ausstattung und Service sorgen für unvergessliche Urlaubserlebnisse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
