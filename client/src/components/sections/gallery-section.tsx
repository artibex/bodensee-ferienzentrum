import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Modernes Hotelzimmer mit Seeblick und zeitgemäßer Einrichtung",
    title: "Moderne Appartments",
    description: "Komfortabel eingerichtete Räume mit allem Komfort"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Luxuriöser Hotel-Spa und Wellnessbereich mit Pool",
    title: "Wellnessbereich",
    description: "Entspannung pur in unserem Spa-Bereich"
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Familie genießt Aktivitäten am Seehotel mit spielenden Kindern",
    title: "Familienaktivitäten",
    description: "Spaß für die ganze Familie"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Malerischer Bodensee Sonnenuntergang mit Bergen im Hintergrund",
    title: "Traumhafte Aussichten",
    description: "Einzigartige Panoramablicke auf den Bodensee"
  },
  {
    src: "https://pixabay.com/get/g093d2d156ba756608ef7ee262686319ba97359f1b3372c5b0e85057cc79ae1c972989855bc7e3abd3623ed90d0d9c5b56479213a44edff8d4f2e854d97143bed_1280.jpg",
    alt: "Bodensee Uferpromenade mit Booten und Alpenkulisse",
    title: "Wassersport & Erholung",
    description: "Vielfältige Freizeitmöglichkeiten am Wasser"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Gemütliches Hotelrestaurant mit Seeblick und gehobener Atmosphäre",
    title: "Kulinarische Genüsse",
    description: "Regionale Küche in entspannter Atmosphäre"
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Impressionen aus dem Ferienzentrum
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die Schönheit unseres Ferienzentrums und der traumhaften Lage am Bodensee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
