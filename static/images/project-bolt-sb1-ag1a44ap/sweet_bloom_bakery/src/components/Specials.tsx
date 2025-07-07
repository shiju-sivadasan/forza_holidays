import React from 'react';
import { Calendar, Gift, Users, Tag } from 'lucide-react';
import { specials } from '../data/products';

const Specials: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isValidOffer = (validUntil: string) => {
    return new Date(validUntil) > new Date();
  };

  const events = [
    {
      id: '1',
      title: 'Birthday Party Packages',
      description: 'Custom cakes, cupcakes, and party favors for memorable celebrations',
      icon: Gift,
      color: 'pink',
      features: ['Custom cake design', 'Matching cupcakes', 'Party favors', 'Setup service']
    },
    {
      id: '2',
      title: 'Corporate Catering',
      description: 'Professional catering services for meetings, events, and celebrations',
      icon: Users,
      color: 'sky',
      features: ['Breakfast boxes', 'Meeting pastries', 'Custom orders', 'Delivery included']
    },
    {
      id: '3',
      title: 'Wedding Services',
      description: 'Stunning wedding cakes and dessert tables for your special day',
      icon: Calendar,
      color: 'mint',
      features: ['Wedding cakes', 'Dessert tables', 'Tasting sessions', 'Day-of delivery']
    }
  ];

  return (
    <section id="specials" className="py-20 bg-gradient-to-br from-cream-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Special Offers & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on our seasonal promotions, special events, and exclusive catering services
          </p>
        </div>

        {/* Current Specials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Promotions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((special) => (
              <div key={special.id} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={special.image}
                      alt={special.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Discount Badge */}
                    {special.discount && (
                      <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full font-bold">
                        {special.discount}% OFF
                      </div>
                    )}
                    
                    {/* Valid indicator */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      isValidOffer(special.validUntil) 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {isValidOffer(special.validUntil) ? 'Active' : 'Expired'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{special.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{special.description}</p>
                    
                    {/* Valid Until */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Valid until {formatDate(special.validUntil)}</span>
                    </div>
                    
                    {/* Promo Code */}
                    {special.promoCode && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Tag className="w-4 h-4 text-pink-500" />
                            <span className="text-sm font-medium text-gray-700">Promo Code:</span>
                          </div>
                          <code className="bg-pink-100 text-pink-800 px-2 py-1 rounded font-mono text-sm">
                            {special.promoCode}
                          </code>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition-colors duration-300"
                    >
                      Claim Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Event & Catering Services</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const IconComponent = event.icon;
              const colorClasses = {
                pink: 'bg-pink-500 text-white',
                sky: 'bg-sky-500 text-white',
                mint: 'bg-mint-500 text-white'
              };
              
              return (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <div className={`w-16 h-16 ${colorClasses[event.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {event.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-semibold transition-colors duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Never Miss a Sweet Deal</h3>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter and be the first to know about new specials, seasonal items, and exclusive offers.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          
          <p className="text-pink-200 text-sm mt-4">
            Join over 5,000 subscribers who love our sweet updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specials;