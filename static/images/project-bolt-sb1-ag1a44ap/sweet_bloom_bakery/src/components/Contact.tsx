import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    orderType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      orderType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Bakery',
      details: ['123 Sweet Street', 'Bakery District, BD 12345'],
      color: 'text-pink-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-CAKE', '(555) 123-2253'],
      color: 'text-sky-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@sweetbloom.com', 'orders@sweetbloom.com'],
      color: 'text-mint-500'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon-Sat: 7:00 AM - 8:00 PM', 'Sunday: 8:00 AM - 6:00 PM'],
      color: 'text-cream-500'
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@sweetbloom_bakery', color: 'hover:text-pink-500' },
    { icon: Facebook, name: 'Facebook', handle: 'SweetBloom Bakery', color: 'hover:text-blue-500' },
    { icon: Twitter, name: 'Twitter', handle: '@sweetbloom', color: 'hover:text-sky-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, special requests, or just want to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Let's Connect</h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-2xl bg-white shadow-lg ${info.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-pink-100 to-sky-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Sweet Street, Bakery District</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Follow Our Sweet Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center space-x-2 text-gray-600 ${social.color} transition-colors duration-300 p-3 rounded-lg hover:bg-gray-50`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="hidden sm:inline">{social.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="orderType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-colors duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="catering">Catering Services</option>
                    <option value="wedding">Wedding Cakes</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-colors duration-300 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-pink-50 rounded-lg">
              <p className="text-sm text-pink-700">
                <strong>Quick Response:</strong> We typically respond within 24 hours during business days. 
                For urgent matters, please call us directly at (555) 123-CAKE.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-mint-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Sweet with Our Newsletter</h3>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto text-lg">
            Get exclusive recipes, baking tips, special offers, and be the first to know about new products and events.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email for sweet updates"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </div>
          
          <p className="text-sky-200 text-sm mt-4">
            Join our community of 5,000+ baking enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;