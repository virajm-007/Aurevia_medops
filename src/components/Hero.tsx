import React, { useState, useRef, useEffect } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const [showNumbers, setShowNumbers] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNumbers(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
      

        <div className="text-center">
          {/* Heading */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-heading">
              Redefining Hospital Operations for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 animate-pulse-custom">
                Smarter Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
              At Aurevia MedOps, we help hospitals and clinics achieve
              operational excellence, ensure compliance, and deliver outstanding
              patient experiences — all while boosting profitability.
            </p>
          </div>
 {/* Logo */}
        <div className="flex justify-center mb-8 animate-fadeInUp">
          <img
            src="/images/logo.png" // Make sure logo is in public/images/
            alt="Aurevia MedOps Logo"
            className="w-36 h-auto object-contain"
          />
        </div>
          {/* Contact Info Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeInUp animate-delay-300 relative z-[9999]">
            {/* Call Dropdown */}
            <div className="relative inline-block" ref={dropdownRef}>
              <button
                onClick={() => setShowNumbers(!showNumbers)}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg animate-glow font-heading"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call/WhatsApp
              </button>

              {showNumbers && (
                <div className="absolute mt-2 left-0 right-0 bg-white shadow-2xl rounded-xl p-3 space-y-2 z-[9999] w-60 mx-auto">
                  <button
                    onClick={() =>
                      (window.location.href = "tel:+918459573193")
                    }
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 rounded-lg"
                  >
                    +91 84595 73193
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "tel:+919265119312")
                    }
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 rounded-lg"
                  >
                    +91 92651 19312
                  </button>
                </div>
              )}
            </div>

            {/* Email Button */}
            <a
              href="mailto:aureviamedops@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg animate-glow font-heading"
            >
              <Mail className="w-5 h-5 mr-3" />
              Email Us Today
            </a>
          </div>

          {/* CTA Button */}
          <div className="mb-16 animate-fadeInUp animate-delay-400 relative z-10">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-custom font-heading"
            >
              Schedule a Free Consultation Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fadeInUp animate-delay-500">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto animate-float relative z-0">
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
