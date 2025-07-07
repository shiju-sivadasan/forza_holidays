import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, number: '6', label: 'Years of Excellence', color: 'text-pink-500' },
    { icon: Users, number: '10k+', label: 'Happy Customers', color: 'text-sky-500' },
    { icon: Award, number: '15+', label: 'Awards Won', color: 'text-mint-500' },
    { icon: Heart, number: '100%', label: 'Made with Love', color: 'text-cream-500' }
  ];

  const values = [
    {
      title: 'Quality Ingredients',
      description: 'We source only the finest ingredients from local farms and trusted suppliers.',
      image: 'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg'
    },
    {
      title: 'Traditional Methods',
      description: 'Our time-honored techniques ensure every product meets our exacting standards.',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg'
    },
    {
      title: 'Community Focus',
      description: 'We believe in supporting our local community and creating lasting relationships.',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Our Sweet Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for baking and a dream to bring joy to every table
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              From Dream to Reality
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SweetBloom was born in 2018 when our founder, Maria Santos, decided to turn her lifelong 
                passion for baking into something beautiful. What started as weekend farmers market visits 
                has blossomed into the city's most beloved bakery.
              </p>
              
              <p>
                Maria's grandmother's recipe book became our foundation, but innovation and creativity 
                have been our driving forces. Every morning at 4 AM, our team begins the sacred ritual 
                of preparing fresh breads, delicate pastries, and stunning cakes that bring smiles to 
                thousands of faces.
              </p>
              
              <p>
                We believe that baking is an art form that connects people, celebrates moments, and 
                creates memories. From birthday celebrations to wedding cakes, from daily bread to 
                special treats, we're honored to be part of your story.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-handwriting text-2xl text-pink-600 mb-3">Our Philosophy</h4>
              <p className="text-gray-600 italic">
                "Every ingredient tells a story, every recipe holds a memory, and every creation 
                carries our heart. We don't just bake - we craft experiences that make life sweeter."
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Maria Santos" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Maria Santos</p>
                  <p className="text-sm text-gray-500">Founder & Head Baker</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg"
                alt="Our bakery kitchen"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Our Kitchen</p>
                <p className="text-sm opacity-90">Where magic happens daily</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-pink-600">500+</p>
                <p className="text-sm text-gray-600">Items Baked Daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <p className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Stand For</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Take a Virtual Tour</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Step behind the scenes and see how we create our daily masterpieces. 
            From mixing dough at dawn to the final decorative touches.
          </p>
          <div className="relative bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500">Virtual Bakery Tour</p>
              <p className="text-sm text-gray-400">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;