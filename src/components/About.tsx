import React from 'react';
import { CheckCircle, Rocket, Target, Lightbulb, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const visionItems = [
    { title: "Innovation", description: "Creating cutting-edge solutions", icon: Lightbulb },
    { title: "Impact", description: "Making a difference in people's lives", icon: Target },
    { title: "Growth", description: "Building for the future", icon: Rocket },
    { title: "Inclusion", description: "Technology for everyone", icon: CheckCircle }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200/15 to-purple-200/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight font-['Space_Grotesk']"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We Don't Just Solve Problems,
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                We Eliminate Them
              </span>
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              At Aquila, we believe that every barrier is an opportunity for innovation. 
              Our mission is to identify, analyze, and systematically destroy the obstacles 
              that prevent organizations from reaching their full potential. This philosophy led to the 
              creation of our flagship product, <span className="text-blue-600 font-medium">SignAI</span> - a revolutionary sign language translator.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Through cutting-edge technology, strategic thinking, and relentless execution, 
              we transform challenges into competitive advantages. Our SignAI product exemplifies this approach, 
              using <span className="text-indigo-600 font-medium">artificial intelligence</span> to break down communication barriers for the deaf and hard of hearing community.
            </motion.p>

            <div className="space-y-6">
              {[
                "Comprehensive barrier analysis and identification",
                "Custom solution design and implementation", 
                "Ongoing optimization and barrier prevention",
                "Creators of SignAI - breaking communication barriers through AI"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1 mr-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center font-['Space_Grotesk']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vision</span>
              </motion.h3>

              <motion.p 
                className="text-gray-600 mb-8 text-center leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                As a startup, we're just beginning our journey, but our vision is clear.
              </motion.p>

              <div className="grid grid-cols-2 gap-6">
                {visionItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                      <motion.div
                        className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </motion.div>
                      <div className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Modern decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-15 blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating elements */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-6 w-6 text-blue-400 opacity-60" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="h-5 w-5 text-indigo-400 opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
