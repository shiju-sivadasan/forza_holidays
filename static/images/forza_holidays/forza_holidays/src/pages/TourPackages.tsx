import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import TourCard from '../components/TourCard';

interface TourPackagesProps {
  onBookNow: (packageId: number) => void;
}

const TourPackages: React.FC<TourPackagesProps> = ({ onBookNow }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tours = [
    {
      id: 1,
      title: 'All India Trip',
      location: 'India',
      duration: '21 Days',
      price: 9499,
      image: 'https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A grand journey across India, from the Himalayas to Kanyakumari, exploring cultural, spiritual, and scenic landmarks.',
      rating: 4.8,
      region: 'india',
      category: 'family'
    },
    {
      id: 2,
      title: 'All Kerala Trip',
      location: 'Kerala',
      duration: '7 Days',
      price: 4499,
      image: 'https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discover Kerala’s backwaters, beaches, and hill stations with houseboat cruises and Ayurvedic wellness.',
      rating: 4.9,
      region: 'india',
      category: 'family'
    },
    {
      id: 3,
      title: 'Munnar Hill Station Retreat',
      location: 'Munnar, Kerala',
      duration: '4 Days',
      price: 2999,
      image: 'https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Escape to Munnar’s tea plantations, waterfalls, and misty hills, perfect for a romantic getaway.',
      rating: 4.7,
      region: 'india',
      category: 'honeymoon'
    },
    {
      id: 4,
      title: 'Vagamon Adventure',
      location: 'Vagamon, Kerala',
      duration: '3 Days',
      price: 2499,
      image: 'https://images.pexels.com/photos/3633950/pexels-photo-3633950.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Explore Vagamon’s rolling meadows, pine forests, and paragliding spots, ideal for college groups.',
      rating: 4.6,
      region: 'india',
      category: 'college'
    },
    {
      id: 5,
      title: 'Kodaikanal Lake & Hills',
      location: 'Kodaikanal, Tamil Nadu',
      duration: '5 Days',
      price: 3499,
      image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A serene retreat to Kodaikanal’s star-shaped lake, pine forests, and scenic viewpoints.',
      rating: 4.8,
      region: 'india',
      category: 'family'
    },
    {
      id: 6,
      title: 'Ooty & Coonoor Getaway',
      location: 'Ooty, Tamil Nadu',
      duration: '5 Days',
      price: 3799,
      image: 'https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enjoy Ooty’s botanical gardens, toy train rides, and Coonoor’s tea estates, perfect for families.',
      rating: 4.7,
      region: 'india',
      category: 'family'
    },
    {
      id: 7,
      title: 'Mysore Heritage Tour',
      location: 'Mysore, Karnataka',
      duration: '3 Days',
      price: 1999,
      image: 'https://images.pexels.com/photos/17319809/pexels-photo-17319809.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discover Mysore’s palaces, markets, and cultural heritage, ideal for industrial and college visits.',
      rating: 4.6,
      region: 'india',
      category: 'cultural'
    },
    {
      id: 8,
      title: 'Bangalore Tech & Culture',
      location: 'Bengaluru, Karnataka',
      duration: '3 Days',
      price: 2299,
      image: 'https://images.pexels.com/photos/904272/pexels-photo-904272.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Explore Bangalore’s IT hubs, gardens, and vibrant food scene, great for industrial visits.',
      rating: 4.5,
      region: 'india',
      category: 'industrial'
    },
    {
      id: 9,
      title: 'Goa Beach Adventure',
      location: 'Goa',
      duration: '5 Days',
      price: 6999,
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Relax on Goa’s beaches, enjoy water sports, and experience vibrant nightlife.',
      rating: 4.9,
      region: 'india',
      category: 'college'
    },
    {
      id: 10,
      title: 'Ladakh Himalayan Expedition',
      location: 'Ladakh',
      duration: '8 Days',
      price: 4999,
      image: 'https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Trek through Ladakh’s monasteries, lakes, and rugged terrains, perfect for adventure seekers.',
      rating: 4.8,
      region: 'india',
      category: 'college'
    },
    {
      id: 11,
      title: 'Kashmir Paradise Tour',
      location: 'Kashmir',
      duration: '6 Days',
      price: 4599,
      image: 'https://images.pexels.com/photos/5201435/pexels-photo-5201435.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience Kashmir’s Dal Lake, Mughal gardens, and snow-capped mountains, ideal for honeymoons.',
      rating: 4.9,
      region: 'india',
      category: 'honeymoon'
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || tour.region === selectedRegion;
    const matchesDuration = selectedDuration === 'all' || 
                           (selectedDuration === 'short' && parseInt(tour.duration) <= 7) ||
                           (selectedDuration === 'medium' && parseInt(tour.duration) > 7 && parseInt(tour.duration) <= 10) ||
                           (selectedDuration === 'long' && parseInt(tour.duration) > 10);
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'budget' && tour.price < 3000) ||
                        (priceRange === 'mid' && tour.price >= 3000 && tour.price < 5000) ||
                        (priceRange === 'luxury' && tour.price >= 5000);
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;

    return matchesSearch && matchesRegion && matchesDuration && matchesPrice && matchesCategory;
  });

  return (
    <div className="py-16 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore India’s diverse destinations with our tailored travel experiences
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Region Filter */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="all">All Regions</option>
                <option value="india">India</option>
              </select>

              {/* Duration Filter */}
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="all">Any Duration</option>
                <option value="short">1-7 Days</option>
                <option value="medium">8-10 Days</option>
                <option value="long">11+ Days</option>
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="all">Any Price</option>
                <option value="budget">Under ₹3,000</option>
                <option value="mid">₹3,000 - ₹5,000</option>
                <option value="luxury">₹5,000+</option>
              </select>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="family">Family Trips</option>
                <option value="honeymoon">Honeymoon Trips</option>
                <option value="college">College Trips</option>
                <option value="cultural">Devotional/Cultural Trips</option>
                <option value="industrial">Industrial Visits</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTours.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Showing {filteredTours.length} of {tours.length} tours
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} onBookNow={onBookNow} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tours found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TourPackages;