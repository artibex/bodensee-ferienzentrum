import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Seestraße 123\n78462 Konstanz\nDeutschland",
    color: "lake-blue"
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 7531 123456",
    subtitle: "Mo-Fr 9:00-18:00 Uhr",
    color: "alpine-green"
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@bodensee-ferienzentrum.de",
    subtitle: "Antwort binnen 24h",
    color: "orange"
  },
  {
    icon: Clock,
    title: "Check-in Zeiten",
    content: "Check-in: 15:00 - 19:00\nCheck-out: bis 11:00",
    color: "blue"
  }
];

const colorVariants = {
  "lake-blue": "bg-lake-blue-100 dark:bg-lake-blue-900 text-lake-blue-600 dark:text-lake-blue-400",
  "alpine-green": "bg-alpine-green-100 dark:bg-alpine-green-900 text-alpine-green-600 dark:text-alpine-green-400",
  "orange": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
  "blue": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
};

export default function ContactSection() {
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
            Kontakt & Buchung
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Haben Sie Fragen oder möchten Sie Ihren Traumurlaub buchen? Wir freuen uns auf Ihre Nachricht!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorVariants[info.color as keyof typeof colorVariants]}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                    {info.content}
                  </p>
                  {info.subtitle && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {info.subtitle}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/kontakt">
            <Button
              size="lg"
              className="bg-lake-blue-600 hover:bg-lake-blue-700 text-white"
              data-testid="contact-page-link"
            >
              Vollständiges Kontaktformular
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
