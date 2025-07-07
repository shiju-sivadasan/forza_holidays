import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, MapPin, Clock, DollarSign, Star, Check } from 'lucide-react';
import { PageType } from '../App';

interface BookingPageProps {
  packageId: number | null;
  onNavigate: (page: PageType) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ packageId, onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: 2,
    departureDate: '',
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tours = [
    {
      id: 1,
      title: 'Tropical Paradise Escape',
      location: 'Maldives',
      duration: '7 Days',
      price: 2499,
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury overwater bungalows with pristine beaches and crystal-clear waters.',
      rating: 4.9,
      highlights: ['Overwater Bungalows', 'Snorkeling & Diving', 'Spa Treatments', 'Private Beach Access'],
      includes: ['Accommodation', 'All Meals', 'Airport Transfers', 'Water Activities']
    },
    {
      id: 2,
      title: 'European Grand Tour',
      location: 'Europe',
      duration: '14 Days',
      price: 3299,
      image: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Visit iconic cities including Paris, Rome, Barcelona, and Amsterdam.',
      rating: 4.8,
      highlights: ['4 Major Cities', 'Historic Landmarks', 'Cultural Experiences', 'Local Cuisine'],
      includes: ['Accommodation', 'Breakfast Daily', 'Guided Tours', 'Train Transportation']
    },
    {
      id: 3,
      title: 'Safari Adventure',
      location: 'Kenya',
      duration: '10 Days',
      price: 2899,
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the Big Five in their natural habitat with expert guides.',
      rating: 4.9,
      highlights: ['Big Five Safari', 'Masai Mara', 'Expert Guides', 'Cultural Village Visit'],
      includes: ['Accommodation', 'All Meals', 'Game Drives', 'Park Fees']
    }
  ];

  const selectedTour = tours.find(tour => tour.id === packageId) || tours[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const totalPrice = selectedTour.price * formData.travelers;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Thank you for booking with Wanderlust! We've received your booking request for {selectedTour.title}.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Booking Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tour Package</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{selectedTour.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Travelers</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{formData.travelers} people</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Departure Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{formData.departureDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Price</p>
                  <p className="font-semibold text-gray-900 dark:text-white">${totalPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our travel experts will contact you within 24 hours to finalize your booking and arrange payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200"
              >
                Back to Home
              </button>
              <button
                onClick={() => onNavigate('packages')}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
              >
                Browse More Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center text-sky-500 hover:text-sky-600 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Tour Packages
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Book Your Adventure</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden sticky top-24">
              <img
                src={selectedTour.image}
                alt={selectedTour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">{selectedTour.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{selectedTour.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedTour.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{selectedTour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{selectedTour.duration}</span>
                  </div>
                  <div className="flex items-center text-sky-500 font-semibold">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm">${selectedTour.price} per person</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Highlights</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {selectedTour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Price per person:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">${selectedTour.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Travelers:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{formData.travelers}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-gray-900 dark:text-white">Total:</span>
                    <span className="text-sky-500">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Booking Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Travel Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Number of Travelers *
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Departure Date *
                      </label>
                      <input
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Emergency Contact Name *
                      </label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Emergency Contact Phone *
                      </label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Please let us know about any special requirements, dietary restrictions, or accessibility needs..."
                  ></textarea>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Important Information</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• This is a booking request. Final confirmation will be sent within 24 hours.</li>
                    <li>• Payment will be processed after booking confirmation.</li>
                    <li>• Cancellation policy applies as per our terms and conditions.</li>
                    <li>• Travel insurance is recommended for all international trips.</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white py-4 px-6 rounded-md hover:bg-sky-600 transition-colors duration-200 font-semibold text-lg"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;