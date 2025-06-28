import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Modern Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/20"></div>

        {/* Dynamic grid pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:6rem_6rem]"
          animate={{ 
            backgroundPosition: ['0px 0px', '96px 96px'],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Modern floating orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-500/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/25 to-indigo-500/35 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/15 to-cyan-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Modern accent lines */}
        <motion.div 
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,23,42,0.3)_100%)]"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Professional badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-white tracking-wide">AI-Powered Communication</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="block text-lg md:text-xl font-normal text-blue-200 mb-4 tracking-wide uppercase">
            The Future of
          </span>
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Sign Language
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Translation
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          SignAI delivers enterprise-grade sign language translation with 
          <span className="text-cyan-300 font-medium"> real-time accuracy</span> and 
          <span className="text-purple-300 font-medium"> seamless integration</span>.
          <br className="hidden md:block" />
          Empowering inclusive communication for the modern world.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a 
            href="#signai" 
            className="group relative bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center">
              Explore SignAI
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </motion.a>
          <motion.a 
            href="#signai" 
            className="group border-2 border-slate-300 text-slate-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-white/70"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center">
              <Play className="mr-2" size={18} />
              Watch Demo
            </span>
          </motion.a>
        </motion.div>

        {/* Professional metrics/features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { 
              metric: "80%",
              label: "Accuracy Rate", 
              desc: "Industry-leading precision in real-time translation" 
            },
            { 
              metric: "<30s",
              label: "Response Time", 
              desc: "Ultra-low latency for seamless communication" 
            },
            { 
              metric: "24/7", 
              label: "Availability", 
              desc: "Enterprise-grade reliability and support" 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-500 shadow-lg hover:shadow-2xl group-hover:scale-105">
                <motion.div
                  className="text-4xl md:text-5xl font-black text-white mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {item.metric}
                </motion.div>
                <h3 className="text-cyan-300 font-bold mb-4 text-xl tracking-wide">{item.label}</h3>
                <p className="text-blue-100 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
