import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-heading">
              Redefining Hospital Operations for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 animate-pulse-custom">
                Smarter Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
              At Aurevia MedOps, we help hospitals and clinics achieve operational excellence, 
              ensure compliance, and deliver outstanding patient experiences — all while boosting profitability.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeInUp animate-delay-300">
            <a 
              href="tel:8459573193"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg animate-glow font-heading"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call/WhatsApp: 8459573193
            </a>
            <a 
              href="mailto:sanjivanimahadik99@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg animate-glow font-heading"
            >
              <Mail className="w-5 h-5 mr-3" />
              Email Us Today
            </a>
          </div>

          {/* CTA Button */}
          <div className="mb-16 animate-fadeInUp animate-delay-400">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-custom font-heading"
            >
              Schedule a Free Consultation Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-fadeInUp animate-delay-500">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto animate-float">
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern hospital operations"
                className="w-full h-64 md:h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg animate-pulse-custom font-heading">
                Elevating Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;