import React from 'react';
import { 
  Building, 
  Shield, 
  Smartphone, 
  Briefcase, 
  Users, 
  CheckCircle,
  TrendingUp,
  Award,
  MessageSquare,
  Network
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Hospital Operations & Administration',
      color: 'from-blue-500 to-blue-600',
      items: [
        'Patient journey mapping (IPD & OPD)',
        'Smooth workflow design for all departments',
        'SOP creation, HR & staff coordination'
      ]
    },
    {
      icon: Shield,
      title: 'Quality & Compliance Excellence',
      color: 'from-green-500 to-green-600',
      items: [
        'NABH, ISO & regulatory readiness',
        'Internal audits & gap analysis',
        'Continuous improvement systems'
      ]
    },
    {
      icon: Smartphone,
      title: 'Digital & Growth Marketing',
      color: 'from-purple-500 to-purple-600',
      items: [
        'Social media campaigns to engage patients',
        'Online reputation management',
        'Lead generation for doctors & hospitals'
      ]
    },
    {
      icon: Briefcase,
      title: 'Corporate Marketing & Strategy',
      color: 'from-orange-500 to-orange-600',
      items: [
        'Referral doctor network & B2B tie-ups',
        'Brand positioning & corporate outreach',
        'Business development planning'
      ]
    },
    {
      icon: Users,
      title: 'Team Training & Leadership Development',
      color: 'from-teal-500 to-teal-600',
      items: [
        'Staff soft skills, communication, and patient care',
        'Department-wise process adherence training',
        'Leadership and performance workshops'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8 animate-pulse-custom"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            Comprehensive healthcare consulting services designed to transform your operations and elevate patient care
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeInUp animate-delay-${(index + 1) * 100}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300 font-heading">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;