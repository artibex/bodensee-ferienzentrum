import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import GallerySection from "@/components/sections/gallery-section";
import AccommodationsSection from "@/components/sections/accommodations-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <AccommodationsSection />
      <AboutSection />
      <ContactSection />
    </motion.div>
  );
}
