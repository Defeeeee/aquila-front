import React from 'react';
import { Cpu, ArrowRight, MessageSquare, Upload, Video, BookOpen, Gamepad2, History, VolumeX, Volume2 } from 'lucide-react';

const SignAI = () => {
  // Features of SignAI
  const features = [
    {
      icon: Video,
      title: "Real-time Translation",
      description: "Access your device's camera and translate sign language in real-time."
    },
    {
      icon: Upload,
      title: "Video Translation",
      description: "Upload videos for AI translation to text or automatic subtitling."
    },
    {
      icon: MessageSquare,
      title: "Real-time Conversations",
      description: "Enable fluid communication between sign language users and non-users."
    },
    {
      icon: BookOpen,
      title: "Learning Library",
      description: "Access a library of subtitled videos with translations to learn sign language."
    },
    {
      icon: Video,
      title: "Practice & Feedback",
      description: "Upload videos of yourself using sign language and get AI corrections."
    },
    {
      icon: Gamepad2,
      title: "Interactive Games",
      description: "Learn sign language through fun, interactive games."
    },
    {
      icon: History,
      title: "Translation History",
      description: "Keep track of all your previous translations."
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
    <section id="signai" className="py-20 bg-gradient-to-br from-[#FFF5EB] to-[#FFEFE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/aa.png" 
              alt="SignAI Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SignAI
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A40] bg-clip-text text-transparent"> Breaking Communication Barriers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary mobile and web application that translates sign language in real-time and asynchronously.
          </p>
        </div>

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
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">How We Solve These Problems</h3>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            To solve these problems, we've designed an app with various functionalities using our AI models.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="p-6">
                  <div className="bg-[#FFF0E0] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#FFF0E0] rounded-full w-12 h-12 flex items-center justify-center">
                  <Volume2 className="h-6 w-6 text-[#FF7A00]" />
                </div>
                <p className="text-lg text-gray-700">
                  All these features include the possibility to translate to text or voice.
                </p>
              </div>
            </div>
          </div>
        </div>

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
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 text-center">
                <p className="font-medium text-gray-800">{app}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-12">
            At SignAI, we give voice to those who don't have one. For a world without barriers!
          </p>

          <a href="https://front.signai.fdiaznem.com.ar" target="_blank" rel="noopener noreferrer" className="group bg-[#FF7A00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#E06A00] transition-all duration-300 flex items-center justify-center mx-auto">
            Join the SignAI Revolution
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignAI;
