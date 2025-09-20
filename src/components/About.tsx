import React from 'react';
import { CheckCircle, Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const approaches = [
    { icon: Target, text: 'Assess your hospital operations' },
    { icon: Users, text: 'Design efficient, patient-first systems' },
    { icon: TrendingUp, text: 'Implement solutions with your team' },
    { icon: CheckCircle, text: 'Monitor & Improve continuously' }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            About Aurevia MedOps
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8 animate-pulse-custom"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fadeInLeft">
            <div className="mb-8 animate-fadeInUp animate-delay-200">
              {/* <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded by <span className="font-semibold text-blue-800 font-heading">Sanjivani Mahadik</span>, 
                Aurevia MedOps was built with one clear mission —
              </p> */}
              <blockquote className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-6 italic font-heading animate-pulse-custom">
                "To make healthcare operations seamless, patient-friendly, and future-ready."
              </blockquote>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We understand the challenges hospitals face — staff shortages, process delays, 
              compliance pressure, and the constant need for growth. That's why we focus on 
              <span className="font-semibold text-blue-800 font-heading"> strategy + execution</span> to solve problems from the root.
            </p>

            <div className="mb-8 animate-fadeInUp animate-delay-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 font-heading">Our approach is simple:</h3>
              <div className="space-y-4">
                {approaches.map((item, index) => (
                  <div key={index} className={`flex items-center group animate-fadeInLeft animate-delay-${(index + 1) * 100}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl animate-fadeInUp animate-delay-400 hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-gray-800 font-medium font-heading">
                With us, you don't just get consulting — you get a 
                <span className="font-bold text-blue-800 animate-pulse-custom"> partner committed to your success</span>.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fadeInRight">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 animate-float">
              <img 
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Healthcare consultation"
                className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;