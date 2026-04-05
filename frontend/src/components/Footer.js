import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Roz Spices</h3>
                <p className="text-sm text-gray-400">Premium Bulk Supplier</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India's most trusted bulk spice supplier, serving 500+ businesses with 100% pure, FSSAI certified spices since years.
            </p>
            
            {/* Certifications */}
            <div className="flex gap-2 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold">FSSAI</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">ISO</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quote')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Get Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Red Chilli Powder</li>
              <li className="text-gray-400 text-sm">Coriander Powder</li>
              <li className="text-gray-400 text-sm">Turmeric Powder</li>
              <li className="text-gray-400 text-sm">Special Pickle Chilli</li>
              <li className="text-gray-400 text-sm">
                <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs">More Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+917569515541" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500 group-hover:text-green-400" />
                <div>
                  <div className="text-sm font-semibold text-white">Call Us</div>
                  <div className="text-sm">+91 7569515541</div>
                </div>
              </a>
              
              <a href="mailto:info@rozspices.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500 group-hover:text-red-400" />
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <div className="text-sm">info@rozspices.com</div>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                <div>
                  <div className="text-sm font-semibold text-white">Location</div>
                  <a 
                    href="https://www.google.com/maps/place/RPX3%2B9J+Korutla,+Telangana/@18.8233,78.7043,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed hover:text-white transition-colors hover:underline"
                  >
                    Survey No. 1623, Allapur (V),<br />
                    Hayath Nagar (M), Jagital (Dist),<br />
                    Telangana - 505325, India<br />
                    <span className="text-blue-400 text-xs mt-1 inline-block">📍 View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Roz Spices Industries. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Quality Guarantee</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
