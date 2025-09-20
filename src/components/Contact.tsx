import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Let's Transform Your Hospital
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8 animate-pulse-custom"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            Ready to elevate your healthcare operations? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
       {/* Contact Information */}
<div className="space-y-8 animate-fadeInLeft">
  <div className="animate-fadeInUp animate-delay-300">
    <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading">Get In Touch</h3>
    
    <div className="space-y-6">
      {/* First Phone Number */}
      <a 
        href="tel:8459573193"
        className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInLeft animate-delay-400 hover:scale-105"
      >
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 animate-pulse-custom">
          <Phone className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 font-heading">Call/WhatsApp</p>
          <p className="text-blue-600 text-lg font-bold font-heading">8459573193</p>
        </div>
      </a>

      {/* Second Phone Number */}
      <a 
        href="tel:9265119312"
        className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInLeft animate-delay-450 hover:scale-105"
      >
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 animate-pulse-custom">
          <Phone className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 font-heading">Call/WhatsApp</p>
          <p className="text-blue-600 text-lg font-bold font-heading">9265119312</p>
        </div>
      </a>

      {/* Email */}
      <a 
        href="mailto:aureviamedops@gmail.com"
        className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInLeft animate-delay-500 hover:scale-105"
      >
        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-6 animate-pulse-custom">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 font-heading">Email</p>
          <p className="text-green-600 text-lg font-bold font-heading">aureviamedops@gmail.com</p>
        </div>
      </a>
    </div>
  </div>

  {/* CTA Card */}
  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-2xl animate-fadeInLeft animate-delay-600 hover:shadow-2xl transition-shadow duration-300 animate-glow">
    <div className="flex items-center mb-4">
      <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
      <h4 className="text-xl font-bold font-heading">Free Consultation Available</h4>
    </div>
    <p className="text-red-100 mb-4">
      Schedule your complimentary consultation today and discover how we can transform your healthcare operations.
    </p>
    <p className="font-bold text-lg font-heading">
      Aurevia MedOps — Your Partner in Healthcare Excellence
    </p>
  </div>
</div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading animate-fadeInUp animate-delay-300">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp animate-delay-400">
              <div className="grid md:grid-cols-2 gap-6 animate-fadeInUp animate-delay-500">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:scale-105"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:scale-105"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:scale-105"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                  Hospital/Clinic Name
                </label>
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 focus:scale-105"
                  placeholder="Your hospital or clinic name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-heading">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-300 focus:scale-105"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center font-heading animate-glow"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;