import React from 'react';
import { Cpu, ArrowRight, MessageSquare, Upload, Video, BookOpen, Gamepad2, History, VolumeX, Volume2, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SignAI = () => {
  // Features of SignAI
  const features = [
    {
      icon: Upload,
      title: "Video Translation",
      description: "Upload videos for AI translation to text or automatic subtitling."
    },
    {
      icon: History,
      title: "Translation History",
      description: "Keep track of all your previous translations."
    },
    {
      icon: Video,
      title: "Real-time Translation",
      description: "Access your device's camera and translate sign language in real-time.",
      comingSoon: true
    },
    {
      icon: MessageSquare,
      title: "Real-time Conversations",
      description: "Enable fluid communication between sign language users and non-users.",
      comingSoon: true
    },
    {
      icon: BookOpen,
      title: "Learning Library",
      description: "Access a library of subtitled videos with translations to learn sign language.",
      comingSoon: true
    },
    {
      icon: Gamepad2,
      title: "Interactive Games",
      description: "Learn sign language through fun, interactive games.",
      comingSoon: true
    }
  ];

  // Applications of SignAI
  const applications = [
    "Meetings",
    "Conferences",
    "Presentations",
    "Customer Service",
    "Administrative Procedures",
    "Everyday Conversations"
  ];

  return (
    <section id="signai" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="block text-2xl md:text-3xl font-medium text-gray-600 mb-2">
              Meet
            </span>
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              SignAI
            </span>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Breaking Communication Barriers
              </span>
            </motion.div>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A revolutionary mobile and web application that translates sign language in 
            <span className="text-orange-600 font-medium"> real-time</span> and 
            <span className="text-amber-600 font-medium"> asynchronously</span>.
          </motion.p>

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Sparkles className="h-5 w-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Powered by Advanced AI</span>
              <Zap className="h-5 w-5 text-amber-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* What is SignAI Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What is SignAI?</h3>
            <p className="text-lg text-gray-700 mb-6">
              SignAI is a mobile and web application in development whose main functionality is the translation of sign language both in real-time and asynchronously.
            </p>
          </div>
        </div>

        {/* Problem Solution Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Problems Does It Solve?</h3>
              <p className="text-gray-700 mb-6">
                SignAI is a solution that addresses two main problems:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#FFF0E0] text-[#FF7A00] mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700">
                    First, the difficulty in communication between sign language users and people who are not familiar with it.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#FFF0E0] text-[#FF7A00] mr-3">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700">
                    Second, the lack of promotion of Argentine Sign Language (LSA).
                  </p>
                </li>
              </ul>
            </div>
          </div>

        {/* Features Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 text-center mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How We <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Solve</span> These Problems
          </motion.h3>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            To solve these problems, we've designed an app with various functionalities using our 
            <span className="text-orange-600 font-medium"> advanced AI models</span>.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100/50 group-hover:border-orange-200 h-full flex flex-col">
                  <div className="p-8 flex-1 flex flex-col">
                    <motion.div 
                      className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-orange-600" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    {feature.comingSoon && (
                      <div className="mb-3">
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                      {feature.description}
                    </p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-orange-100/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <motion.div 
                className="flex items-center space-x-6 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl w-16 h-16 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Volume2 className="h-8 w-8 text-orange-600" />
                </motion.div>
                <div>
                  <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
                    Universal Translation Options
                  </p>
                  <p className="text-gray-600">
                    All these features include the possibility to translate to 
                    <span className="text-orange-600 font-medium"> text</span> or 
                    <span className="text-amber-600 font-medium"> voice</span>.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* User Interaction Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">How We Want User Interaction to Be</h3>
            <p className="text-lg text-gray-700 mb-6">
              At SignAI, we aim to give each user a personalized experience. We want everyone to feel included and represented with our product, which is why there will be a customizable section:
            </p>

            <div className="bg-[#FFF0E0] rounded-2xl p-6 mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">My Profile</h4>
              <p className="text-gray-700">
                In this section, users can customize their profile picture, select from a range of voices they prefer for voice translation of their videos, and, in the future, select the sign language they use.
              </p>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Where Are We Aiming?</h3>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Our goal is to enable fluid communication for sign language users, initially LSA users, in all environments they navigate, so they can have complete autonomy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 flex items-center justify-center min-h-[80px]">
                <p className="font-medium text-gray-800 text-center">{app}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 max-w-4xl mx-auto leading-tight font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At SignAI, we give <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">voice</span> to those who don't have one.
            <br />
            <span className="text-xl md:text-2xl text-gray-700 font-medium">For a world without barriers!</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://front.signai.fdiaznem.com.ar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-6 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 flex items-center justify-center mx-auto max-w-md shadow-2xl hover:shadow-orange-500/25"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 h-6 w-6" />
                Join the SignAI Revolution
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, text: "Real-time" },
              { icon: Sparkles, text: "AI-Powered" },
              { icon: Volume2, text: "Voice & Text" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-gray-600"
                whileHover={{ scale: 1.1, color: "#ea580c" }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="h-5 w-5 text-orange-500" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignAI;
