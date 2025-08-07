import { Router, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomePage from "@/pages/home";
import AccommodationsPage from "@/pages/accommodations";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import NotFoundPage from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

// Static version for GitHub Pages
export default function StaticApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router base="/bodensee-ferienzentrum">
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Header />
            <main>
              <Route path="/" component={HomePage} />
              <Route path="/unterkuenfte" component={AccommodationsPage} />
              <Route path="/ueber-uns" component={AboutPage} />
              <Route path="/kontakt" component={ContactPage} />
              <Route path="/:rest*" component={NotFoundPage} />
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}