import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state, dispatch } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Experience', id: 'hero' },
    { label: 'Craft', id: 'menu' },
    { label: 'Story', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Specials', id: 'specials' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Connect', id: 'contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-xl border-b border-gold-500/20' 
          : 'bg-transparent'
      }`}>
        {/* Top Info Bar */}
        {!isScrolled && (
          <div className="bg-charcoal-800 border-b border-gold-500/30">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-6 text-gold-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-mono">(555) BLOOM-01</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Downtown Arts District</span>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-gold-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono">OPEN: 06:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                <h1 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
                  SWEET
                  <span className="text-gold-400">BLOOM</span>
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-crimson-500"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-white hover:text-gold-400 transition-all duration-300 font-medium tracking-wide uppercase text-sm group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className="relative p-3 text-white hover:text-gold-400 transition-all duration-300 hover:bg-charcoal-800 rounded-lg group"
              >
                <ShoppingCart className="w-6 h-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-crimson-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse-glow">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 text-white hover:text-gold-400 transition-all duration-300 hover:bg-charcoal-800 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-900/98 backdrop-blur-xl border-t border-gold-500/20">
            <div className="px-4 py-8 space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-white hover:text-gold-400 transition-all duration-300 font-medium tracking-wide uppercase border-b border-charcoal-700 hover:border-gold-500/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;