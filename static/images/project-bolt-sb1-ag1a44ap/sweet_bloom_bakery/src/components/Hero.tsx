import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Award, Zap, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
      title: 'REDEFINING',
      subtitle: 'ARTISAN CRAFT',
      description: 'Where tradition meets innovation in every bite'
    },
    {
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
      title: 'BOLD',
      subtitle: 'FLAVORS',
      description: 'Pushing boundaries of taste and texture'
    },
    {
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      title: 'MODERN',
      subtitle: 'TECHNIQUES',
      description: 'Ancient methods enhanced by cutting-edge precision'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(52,58,64,0.6) 50%, rgba(13,17,23,0.9) 100%), url('${slide.image}')`
              }}
            />
          </div>
        ))}
      </div>

      {/* Geometric Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-gold-400/30 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-crimson-500/20 rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-sage-400 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-charcoal-800/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-gold-500/30">
              <Award className="w-5 h-5 text-gold-400" />
              <span className="text-gold-300 font-mono text-sm tracking-wider">EST. 2018 • AWARD WINNING</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-4">
                {heroSlides[currentSlide].title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-crimson-500 to-gold-600">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-crimson-500 mb-6"></div>
            </div>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
              {heroSlides[currentSlide].description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-black text-gold-400 mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Daily Creations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-crimson-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Fresh Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-sage-400 mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Artisan Made</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={scrollToMenu}
                className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 px-8 py-4 rounded-none font-bold text-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl"
              >
                <span>EXPLORE CRAFT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal-900 px-8 py-4 rounded-none font-bold text-lg tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Play className="w-5 h-5" />
                <span>OUR STORY</span>
              </button>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          <div className="animate-slide-in-right">
            <div className="bg-charcoal-800/60 backdrop-blur-xl border border-gold-500/20 p-8 rounded-none">
              <h3 className="font-display text-2xl font-bold text-white mb-6 tracking-wide">
                WHAT SETS US APART
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-none flex items-center justify-center">
                    <Zap className="w-6 h-6 text-charcoal-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 tracking-wide">PRECISION FERMENTATION</h4>
                    <p className="text-gray-400 leading-relaxed">72-hour cold fermentation process for unmatched flavor complexity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson-400 to-crimson-600 rounded-none flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 tracking-wide">AWARD-WINNING RECIPES</h4>
                    <p className="text-gray-400 leading-relaxed">Internationally recognized techniques meets local ingredients</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-none flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 tracking-wide">ZERO COMPROMISE</h4>
                    <p className="text-gray-400 leading-relaxed">Only the finest ingredients, sourced directly from artisan producers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                index === currentSlide ? 'bg-gold-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;