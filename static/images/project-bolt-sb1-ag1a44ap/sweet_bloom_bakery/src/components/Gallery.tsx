import React, { useState } from 'react';
import { X, Instagram, Heart, MessageCircle } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
      title: 'Signature Strawberry Rose Cake',
      likes: 156,
      comments: 23
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
      title: 'Fresh Danish Pastries',
      likes: 89,
      comments: 12
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      title: 'Artisan Sourdough Collection',
      likes: 134,
      comments: 18
    },
    {
      id: '4',
      image: 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg',
      title: 'French Butter Croissants',
      likes: 201,
      comments: 31
    },
    {
      id: '5',
      image: 'https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg',
      title: 'Lavender Honey Cupcakes',
      likes: 178,
      comments: 25
    },
    {
      id: '6',
      image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg',
      title: 'Seasonal Pumpkin Spice Tart',
      likes: 145,
      comments: 19
    },
    {
      id: '7',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg',
      title: 'Wedding Cake Creation',
      likes: 289,
      comments: 45
    },
    {
      id: '8',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
      title: 'Chocolate Chip Cookie Paradise',
      likes: 167,
      comments: 28
    },
    {
      id: '9',
      image: 'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg',
      title: 'Behind the Scenes',
      likes: 112,
      comments: 15
    }
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-gradient-to-br from-mint-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Sweet Moments Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A visual feast of our daily creations, behind-the-scenes moments, and the joy our treats bring to customers
            </p>
            
            {/* Instagram CTA */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <Instagram className="w-6 h-6 text-pink-500" />
              <span className="text-gray-600">Follow us @sweetbloom_bakery for daily updates</span>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  index === 0 || index === 6 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className={`relative ${
                  index === 0 || index === 6 ? 'h-96' : 'h-64'
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Instagram-style overlay icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Instagram Link */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Instagram className="w-5 h-5" />
              <span>View More on Instagram</span>
            </button>
          </div>

          {/* Customer Photo Section */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Sweet Moments</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tag us in your photos @sweetbloom_bakery or use #SweetBloomMoments to be featured in our gallery!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
                'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg',
                'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
                'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg'
              ].map((image, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Customer moment ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;