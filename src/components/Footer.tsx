import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 animate-fadeInUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 animate-fadeInUp animate-delay-200">
            <h3 className="text-2xl font-bold mb-2 font-heading">
              Aurevia <span className="text-green-400">MedOps</span>
            </h3>
            <p className="text-gray-400">Transforming Healthcare. Elevating Excellence.</p>
          </div>
          
          <div className="mb-6 animate-fadeInUp animate-delay-300">
            <p className="text-gray-300 mb-2">Your Partner in Healthcare Excellence</p>
            {/* <div className="flex items-center justify-center">
              <span className="text-gray-400">Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 fill-current animate-pulse-custom" />
              <span className="text-gray-400">for better healthcare</span>
            </div> */}
          </div>
          
          <div className="border-t border-gray-700 pt-6 animate-fadeInUp animate-delay-400">
            <p className="text-gray-500 text-sm">
              © 2025 Aurevia MedOps. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;