import React, { useRef, useEffect, useState } from 'react';
import { Award, Users, Globe, Heart, MapPin, Star } from 'lucide-react';
import CountingAnimation from '../components/CountingAnimation';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
  {
    name: 'Arun Kumar',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Visionary leader from Kochi with 15+ years of experience in Kerala tourism and hospitality.'
  },
  {
    name: 'Lekshmi Nair',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/20258863/pexels-photo-20258863.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Expert in coordinating seamless travel experiences across Kerala and South India.'
  },
  {
    name: 'Faisal Rahman',
    role: 'Travel Consultant',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Specialist in crafting personalized devotional and family tours within Kerala.'
  },
  {
    name: 'Anjali Joseph',
    role: 'Tour Guide & Storyteller',
    image: 'https://images.pexels.com/photos/2333332/pexels-photo-2333332.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Passionate about Kerala culture, languages, and guiding visitors through local experiences.'
  }
];


  const values = [
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: 'Passion for Travel',
      description: 'We live to inspire wanderlust, crafting journeys that spark joy and discovery.'
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: 'Customer First',
      description: 'Your dream trip is our priority, with personalized care at every step.'
    },
    {
      icon: <Globe className="h-10 w-10 text-green-500" />,
      title: 'Sustainable Tourism',
      description: 'We champion eco-friendly travel that respects local cultures and environments.'
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      title: 'Excellence',
      description: 'Every detail is perfected to deliver extraordinary travel experiences.'
    }
  ];

  const testimonials = [
  {
    name: 'Divya Nair',
    quote: 'Our family houseboat trip through the Alleppey backwaters was unforgettable. The service and planning were top-notch!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Ramesh Menon',
    quote: 'The Sabarimala devotional tour was perfectly arranged with comfort and care. Truly a soulful experience.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Sneha Raj',
    quote: 'Our honeymoon in Munnar was magical—misty hills, tea gardens, and cozy stays. Thank you for making it special!',
    rating: 4,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];


  const timeline = [
    { year: '2009', event: 'Wanderlust founded with a vision to inspire travel.' },
    { year: '2012', event: 'Introduced devotional and family trip packages.' },
    { year: '2015', event: 'Expanded to international destinations.' },
    { year: '2018', event: 'Launched college and industrial visit programs.' },
    { year: '2022', event: 'Recognized as India’s top travel agency.' },
    { year: '2025', event: 'Serving 50,000+ happy travelers worldwide.' }
  ];

  return (
    <div className="py-16 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-sky-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up tracking-tight">Discover Wanderlust</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
            Since 2009, Wanderlust has been your trusted partner in crafting unforgettable travel experiences—whether it’s a soulful devotional journey, a joyful family adventure, a romantic honeymoon, or an exciting abroad exploration.
          </p>
          <a
            href="/packages"
            className="mt-8 inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-sky-100 transition-colors duration-300"
          >
            Explore Our Packages
          </a>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-left space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  At Wanderlust, we create transformative travel experiences tailored to your unique desires—be it serene <strong>family vacations</strong>, sacred <strong>devotional pilgrimages</strong>, vibrant <strong>college adventures</strong>, insightful <strong>industrial visits</strong>, romantic <strong>honeymoon escapes</strong>, or exhilarating <strong>abroad explorations</strong>. Every journey is designed to inspire, connect, and create lifelong memories.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be India’s most trusted travel partner, renowned for curating personalized, sustainable, and unforgettable journeys that bring people closer to the world and each other.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
                <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 space-y-3">
                  <li>Personalized experiences tailored to every traveler</li>
                  <li>Commitment to sustainable and ethical travel</li>
                  <li>Affordable adventures without compromising quality</li>
                  <li>Innovative packages for diverse travel needs</li>
                  <li>Unwavering focus on safety and transparency</li>
                </ul>
              </div>
            </div>
            {/* Image */}
            <div className="relative animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel moments"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">Exploring the world, one story at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Milestones that define Wanderlust’s story</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-500"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-1/2 px-6">
                  <div
                    className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-sky-600">{item.year}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.event}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The heart of every journey we create</p>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate explorers behind your dream vacations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-56 h-56 rounded-full object-cover mx-auto shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-sky-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sky-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Hear from those who’ve explored with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <CountingAnimation
                end={50000}
                suffix="+"
                className="text-5xl font-bold mb-3"
              />
              <div className="text-lg font-medium">Happy Travelers</div>
            </div>
            <div>
              <CountingAnimation
                end={200}
                suffix="+"
                className="text-5xl font-bold mb-3"
              />
              <div className="text-lg font-medium">Destinations</div>
            </div>
            <div>
              <CountingAnimation
                end={15}
                suffix="+"
                className="text-5xl font-bold mb-3"
              />
              <div className="text-lg font-medium">Years of Excellence</div>
            </div>
            <div>
              <CountingAnimation
                end={98}
                suffix="%"
                className="text-5xl font-bold mb-3"
              />
              <div className="text-lg font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether it’s a family adventure, a spiritual retreat, or a romantic getaway, let Wanderlust craft your perfect trip.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-sky-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;