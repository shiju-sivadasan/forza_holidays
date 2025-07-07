import React from 'react';
import { ArrowRight, Star, Users, MapPin, Calendar } from 'lucide-react';
import { PageType } from '../App';
import HeroSection from '../components/HeroSection';
import TourCard from '../components/TourCard';
import AnimatedTestimonials from '../components/AnimatedTestimonials';

interface HomeProps {
  onNavigate: (page: PageType) => void;
  onBookNow: (packageId: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onBookNow }) => {
  const featuredPackages = [
  {
    id: 1,
    title: 'All India Trip',
    location: 'India',
    duration: '21 Days',
    price: 9499,
    image: 'https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore India from the Himalayas to Kanyakumari – a cultural, spiritual, and scenic journey across 10+ states.'
  },
  {
    id: 2,
    title: 'All Kerala Trip',
    location: 'Kerala',
    duration: '7 Days',
    price: 4499,
    image: 'https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience houseboat cruises, lush greenery, and Ayurvedic wellness in “God’s Own Country”.'
  },
  {
    id: 3,
    title: 'Goa',
    location: 'Goa',
    duration: '5 Days',
    price: 6999,
    image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage await you in India’s coastal gem.'
  }
];


  const testimonials = [
  {
    name: 'Anirudh',
    rating: 5,
    comment: 'Absolutely incredible experience! The attention to detail was amazing.',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Akhil',
    rating: 5,
    comment: 'Best vacation of our lives. Everything was perfectly organized.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Joseph',
    rating: 5,
    comment: 'The All India trip was pure paradise! Unforgettable memories.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];


  return (
    <div className="dark:bg-gray-900">
      <HeroSection onNavigate={onNavigate} />
      
      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Wanderlust?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With over 15 years of experience, we've helped thousands of travelers create unforgettable memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-sky-100 dark:bg-sky-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">50,000+ Happy Travelers</h3>
              <p className="text-gray-600 dark:text-gray-300">Trusted by thousands of satisfied customers worldwide</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">200+ Destinations</h3>
              <p className="text-gray-600 dark:text-gray-300">Explore amazing destinations across all continents</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">15+ Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Decades of expertise in crafting perfect journeys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our most popular destinations and experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPackages.map((pkg) => (
              <TourCard key={pkg.id} tour={pkg} onBookNow={onBookNow} />
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200"
            >
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real experiences from real travelers
            </p>
          </div>
          
          <AnimatedTestimonials testimonials={testimonials} />
          
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-200"
            >
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;