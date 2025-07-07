import React, { useContext } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { PageType, ThemeContext } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold">Wanderlust</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted travel partner for unforgettable adventures around the world. 
              Creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-sky-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-sky-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-sky-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Tour Packages', 'Gallery'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', '') as PageType)}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300">+91 9567510318</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300">info@wanderlust.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sky-400 mt-1" />
                <span className="text-gray-300">Near Mudappallur Town<br />Vadakkencherry, Palakkad district, Kerala</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for travel tips and exclusive deals!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button className="px-4 py-2 bg-sky-500 text-white rounded-r-md hover:bg-sky-600 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Wanderlust Travel Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;