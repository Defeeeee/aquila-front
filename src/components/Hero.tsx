import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Introducing
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            SignAI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Breaking communication barriers with our revolutionary sign language translator.
          SignAI transforms the way deaf and hard of hearing communities interact with the world,
          providing real-time translation and accessibility for all.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#signai" className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
            Discover SignAI
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a href="#signai" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
            Watch SignAI Demo
          </a>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Real-time Translation</h3>
              <p className="text-blue-100 text-sm">Instant sign language to text and voice conversion</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Accessible Learning</h3>
              <p className="text-blue-100 text-sm">Interactive tools to learn and practice sign language</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Target className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Personalized Experience</h3>
              <p className="text-blue-100 text-sm">Customizable profiles and voice selection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
