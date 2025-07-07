import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="py-16 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to start your next adventure? Get in touch with our travel experts
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 dark:bg-sky-900 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Visit Our Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Near Mudappallur Tow<br />
                      Vadakkencherry, Palakkad district<br />
                      Kerala
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 dark:bg-sky-900 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 9567510318<br />
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 dark:bg-sky-900 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@wanderlust.com<br />
                      bookings@wanderlust.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 dark:bg-sky-900 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Your full name"
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
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Question</option>
                        <option value="custom">Custom Tour Request</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Tell us about your dream destination or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition-colors duration-200 flex items-center justify-center font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Us</h2>
            <p className="text-gray-600 dark:text-gray-300">Visit our office in the heart of Adventure City</p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-300 dark:bg-gray-600 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 dark:text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300">Interactive Map</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">123 Travel Street, Adventure City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;