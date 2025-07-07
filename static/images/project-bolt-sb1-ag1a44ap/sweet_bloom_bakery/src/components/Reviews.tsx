import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data/products';

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the wonderful people who make our bakery special
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-gray-600">
              <span className="text-2xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
              <span className="ml-1">out of 5</span>
            </div>
            <div className="text-gray-500">
              ({totalReviews} reviews)
            </div>
          </div>
        </div>

        {/* Featured Review Carousel */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-pink-200" />
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{reviews[currentReview].comment}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                {reviews[currentReview].image && (
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="text-left">
                  <p className="font-semibold text-gray-800 text-lg">
                    {reviews[currentReview].name}
                  </p>
                  <p className="text-gray-500">
                    {new Date(reviews[currentReview].date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReview ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
              
              <div className="flex items-center space-x-3">
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-pink-600 mb-2">4.9</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sky-600 mb-2">500+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-mint-600 mb-2">95%</p>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cream-600 mb-2">100%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Leave a Review CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Share Your Sweet Experience</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              We'd love to hear about your experience with SweetBloom. Your feedback helps us continue to improve and create magical moments.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300"
            >
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;