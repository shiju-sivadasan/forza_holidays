import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageType } from '../App';

interface HeroSectionProps {
  onNavigate: (page: PageType) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          Discover Your Next
          <span className="block text-sky-400">Adventure</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          From exotic beaches to mountain peaks, we create unforgettable journeys 
          that inspire and transform your perspective of the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center px-8 py-4 bg-sky-500 text-white font-semibold text-lg rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Packages
            <ArrowRight className="ml-2 h-6 w-6" />
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white border-opacity-20 animate-fade-in-up animation-delay-600">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-sky-400">50K+</div>
            <div className="text-sm md:text-base text-gray-200">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-sky-400">200+</div>
            <div className="text-sm md:text-base text-gray-200">Destinations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-sky-400">15+</div>
            <div className="text-sm md:text-base text-gray-200">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-sky-400">98%</div>
            <div className="text-sm md:text-base text-gray-200">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;