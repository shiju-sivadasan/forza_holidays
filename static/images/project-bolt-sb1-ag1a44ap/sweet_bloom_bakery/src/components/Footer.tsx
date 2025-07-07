import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-handwriting text-3xl font-bold text-pink-400 mb-3">
                SweetBloom
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Crafting sweet memories since 2018. Every bite tells a story of passion, 
                quality, and the finest handpicked ingredients.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Our Menu', id: 'menu' },
                { label: 'About Us', id: 'about' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Special Offers', id: 'specials' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <div className="space-y-3 text-gray-300">
              <p>Fresh Daily Baking</p>
              <p>Custom Cake Orders</p>
              <p>Wedding Cakes</p>
              <p>Corporate Catering</p>
              <p>Birthday Parties</p>
              <p>Seasonal Specials</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Sweet Street</p>
                  <p>Bakery District, BD 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>(555) 123-CAKE</p>
                  <p>(555) 123-2253</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>hello@sweetbloom.com</p>
                  <p>orders@sweetbloom.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h5 className="font-semibold text-pink-400 mb-3">Opening Hours</h5>
              <div className="text-gray-300 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span>7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Sweet with Our Newsletter</h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive recipes, baking tips, and be the first to know about new products and special offers.
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2025 SweetBloom Bakery. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>by SweetBloom Team</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;