import React from 'react';
import { MapPin, Clock, DollarSign, Star } from 'lucide-react';

interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  rating?: number;
}

interface TourCardProps {
  tour: Tour;
  onBookNow?: (packageId: number) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBookNow }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Rs {tour.price}
        </div>
        {tour.rating && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-semibold">{tour.rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tour.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{tour.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{tour.location}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{tour.duration}</span>
          </div>
          <div className="flex items-center text-sky-500 font-semibold">
            {/* <DollarSign className="h-4 w-4 mr-2" /> */}
            <span className="text-sm">Starting from Rs {tour.price} </span>
          </div>
        </div>
        
        <button 
          onClick={() => onBookNow?.(tour.id)}
          className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-200 font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;