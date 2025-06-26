import React from 'react';
import { Layers, Cpu, Globe, Users, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Layers,
      title: "Infrastructure Solutions",
      description: "Break through technical limitations with scalable, robust infrastructure that grows with your business.",
      features: ["Cloud Migration", "System Integration", "Performance Optimization"],
      image: "/Frame 3.png"
    },
    {
      icon: Cpu,
      title: "SignAI",
      description: "Our revolutionary sign language translator powered by AI, breaking communication barriers for the deaf and hard of hearing community.",
      features: ["Real-time Translation", "Multi-language Support", "Accessibility Integration"],
      image: "/aa.png"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Remove organizational silos and modernize your digital presence for the future.",
      features: ["Digital Strategy", "Platform Modernization", "User Experience"],
      image: "/Frame 3.png"
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Destroy communication barriers and empower your teams with collaborative tools.",
      features: ["Team Collaboration", "Knowledge Sharing", "Skill Development"],
      image: "/Frame 4.png"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions That
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Break Barriers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We identify obstacles and create targeted solutions that remove limitations, 
            enabling your organization to reach new heights of success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              id={solution.title === "SignAI" ? "signai" : ""}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
