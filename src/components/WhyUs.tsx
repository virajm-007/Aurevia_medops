import React from 'react';
import { Sparkles, Settings, TrendingUp, Eye } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Settings,
      title: 'End-to-End Support',
      description: 'From operations to marketing, we cover it all',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'Customized Solutions',
      description: 'No generic templates; everything is built for your hospital',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Efficiency, compliance scores, and patient satisfaction all go up',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Industry Insight',
      description: 'Experience with leading hospitals & diagnostic setups',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Why Hospitals Trust Aurevia MedOps
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8 animate-pulse-custom"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fadeInUp animate-delay-${(index + 1) * 100}`}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 animate-float`}>
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder's Message */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 animate-fadeInUp animate-delay-500 hover:shadow-xl transition-shadow duration-500">
          <div className="text-center mb-8 animate-fadeInUp animate-delay-600">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
              Our Founder's Message
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fadeInUp animate-delay-700">
            <blockquote className="text-xl md:text-2xl text-gray-800 italic text-center leading-relaxed mb-8 font-heading">
              "I believe healthcare management should be stress-free for doctors and seamless for patients. 
              At Aurevia MedOps, we ensure that every process — from registration to discharge — works efficiently, 
              so your doctors can focus on what matters most: saving lives."
            </blockquote>
            
            <div className="text-center animate-fadeInUp animate-delay-800">
              <div className="inline-block">
                <p className="font-bold text-xl text-blue-800 font-heading">— Sanjivani Mahadik</p>
                <p className="text-green-600 font-semibold font-heading">Founder & Operations Consultant</p>
                <p className="text-gray-600">Aurevia MedOps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;