import React from 'react';
import { Star, Quote } from 'lucide-react';
import { PageType } from '../App';

interface TestimonialsProps {
  onNavigate: (page: PageType) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  const testimonials = [
  {
    id: 1,
    name: 'Anita Nair',
    location: 'Kochi, Kerala',
    rating: 5,
    comment: 'The All Kerala Trip was a dream come true! From Alleppey’s houseboats to Munnar’s tea gardens, every moment was magical. The guides were so friendly and made our family trip unforgettable.',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'All Kerala Trip'
  },
  {
    id: 2,
    name: 'Vivek Menon',
    location: 'Thrissur, Kerala',
    rating: 5,
    comment: 'The Goa Beach Adventure was fantastic! The beaches, water sports, and vibrant nightlife were exactly what our college group needed. Everything was perfectly organized.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Goa Beach Adventure'
  },
  {
    id: 3,
    name: 'Priya Suresh',
    location: 'Thiruvananthapuram, Kerala',
    rating: 5,
    comment: 'Our honeymoon in Munnar was pure bliss! The misty hills and cozy resorts made it so romantic. Wanderlust planned every detail flawlessly, making it a trip to remember.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Munnar Hill Station Retreat'
  },
  {
    id: 4,
    name: 'Rahul Pillai',
    location: 'Kozhikode, Kerala',
    rating: 4,
    comment: 'The Ladakh Himalayan Expedition was thrilling! The monasteries and rugged landscapes were breathtaking. The trek was challenging but worth it. Great job by the team!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Ladakh Himalayan Expedition'
  },
  {
    id: 5,
    name: 'Lakshmi Venu',
    location: 'Alappuzha, Kerala',
    rating: 5,
    comment: 'The Mysore Heritage Tour was a cultural delight! The palace and markets were so vibrant, and our guide shared fascinating stories. Perfect for our family’s cultural outing.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Mysore Heritage Tour'
  },
  {
    id: 6,
    name: 'Arjun Thomas',
    location: 'Kollam, Kerala',
    rating: 5,
    comment: 'Kashmir was like paradise on earth! The shikara ride on Dal Lake and the snow in Gulmarg were unforgettable. Wanderlust made our family trip seamless and joyful.',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Kashmir Paradise Tour'
  },
  {
    id: 7,
    name: 'Sneha Jacob',
    location: 'Kannur, Kerala',
    rating: 4,
    comment: 'The Ooty & Coonoor Getaway was wonderful! The toy train and tea estates were highlights for our family. The itinerary was well-planned, though we wished for one extra day!',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Ooty & Coonoor Getaway'
  },
  {
    id: 8,
    name: 'Nikhil Rajan',
    location: 'Palakkad, Kerala',
    rating: 5,
    comment: 'The Vagamon Adventure was a blast for our college group! Paragliding and exploring the meadows were so much fun. The team ensured everything went smoothly.',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    tour: 'Vagamon Adventure'
  }
];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="py-16 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Travelers Say</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real experiences from real travelers who have explored the world with us
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">50,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{testimonial.location}</p>
                    <div className="flex mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-sky-600 text-sm font-medium">{testimonial.tour}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-sky-200" />
                  <p className="text-gray-700 dark:text-gray-300 italic pl-6">"{testimonial.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied travelers and discover the world with Wanderlust
          </p>
          <button 
            onClick={() => onNavigate('packages')}
            className="bg-white text-sky-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Start Planning Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;