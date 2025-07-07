import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import TourPackages from './pages/TourPackages';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BookingPage from './pages/BookingPage';

export type PageType = 'home' | 'about' | 'packages' | 'gallery' | 'testimonials' | 'contact' | 'booking';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleBookNow = (packageId: number) => {
    setSelectedPackageId(packageId);
    setCurrentPage('booking');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onBookNow={handleBookNow} />;
      case 'about':
        return <About />;
      case 'packages':
        return <TourPackages onBookNow={handleBookNow} />;
      case 'gallery':
        return <Gallery />;
      case 'testimonials':
        return <Testimonials onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'booking':
        return <BookingPage packageId={selectedPackageId} onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} onBookNow={handleBookNow} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="pt-16">
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;