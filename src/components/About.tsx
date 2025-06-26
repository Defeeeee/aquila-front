import React from 'react';
import { CheckCircle, Rocket, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const visionItems = [
    { title: "Innovation", description: "Creating cutting-edge solutions", icon: Lightbulb },
    { title: "Impact", description: "Making a difference in people's lives", icon: Target },
    { title: "Growth", description: "Building for the future", icon: Rocket },
    { title: "Inclusion", description: "Technology for everyone", icon: CheckCircle }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Don't Just Solve Problems,
              <span className="bg-gradient-to-r from-[#030067] to-[#050099] bg-clip-text text-transparent"> We Eliminate Them</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Aquila, we believe that every barrier is an opportunity for innovation. 
              Our mission is to identify, analyze, and systematically destroy the obstacles 
              that prevent organizations from reaching their full potential. This philosophy led to the 
              creation of our flagship product, SignAI - a revolutionary sign language translator.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through cutting-edge technology, strategic thinking, and relentless execution, 
              we transform challenges into competitive advantages. Our SignAI product exemplifies this approach, 
              using artificial intelligence to break down communication barriers for the deaf and hard of hearing community.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Comprehensive barrier analysis and identification</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Custom solution design and implementation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Ongoing optimization and barrier prevention</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">Creators of SignAI - breaking communication barriers through AI</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#F0F0FF] to-[#E6E6FF] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Vision</h3>
              <p className="text-gray-600 mb-8 text-center">
                As a startup, we're just beginning our journey, but our vision is clear.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {visionItems.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <item.icon className="h-8 w-8 text-[#030067] mx-auto mb-3" />
                      <div className="text-xl font-bold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#030067] rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#030067] rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
