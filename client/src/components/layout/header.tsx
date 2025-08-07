import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Unterkünfte", href: "/unterkuenfte" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
              <Waves className="text-lake-blue-600 dark:text-lake-blue-400 h-8 w-8" />
              <span className="font-serif font-semibold text-xl lg:text-2xl text-gray-900 dark:text-white">
                Bodensee Ferienzentrum
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors duration-200 hover:text-lake-blue-600 dark:hover:text-lake-blue-400",
                    location === item.href
                      ? "text-lake-blue-600 dark:text-lake-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-lake-blue-600 dark:hover:text-lake-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Hauptmenü"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 font-medium transition-colors duration-200 hover:text-lake-blue-600 dark:hover:text-lake-blue-400 rounded-lg",
                    location === item.href
                      ? "text-lake-blue-600 dark:text-lake-blue-400 bg-lake-blue-50 dark:bg-lake-blue-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                  onClick={closeMobileMenu}
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
