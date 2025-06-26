import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Destroy Your Barriers?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can eliminate the obstacles holding your organization back 
            and unlock your true potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">hello@aquila.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6">
              <h4 className="text-white font-bold text-lg mb-2">Schedule a Consultation</h4>
              <p className="text-blue-100 mb-4">
                Book a free 30-minute consultation to discuss your specific barriers and challenges.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your barriers
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Describe the challenges and obstacles you're facing..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;