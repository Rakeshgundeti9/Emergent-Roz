import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+917569515541" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Phone size={16} />
              <span>+91 7569515541</span>
            </a>
            <a href="mailto:info@rozspices.com" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline">info@rozspices.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">FSSAI Certified</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">ISO Certified</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Roz Spices</h1>
                  <p className="text-xs text-gray-600">Premium Bulk Supplier</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Why Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('quote')}
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold"
                data-testid="header-get-quote-btn"
              >
                Get Bulk Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-red-600"
                data-testid="mobile-menu-btn"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 font-medium text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 font-medium text-left">
                  Products
                </button>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-red-600 font-medium text-left">
                  Why Us
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-red-600 font-medium text-left">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 font-medium text-left">
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('quote')}
                  className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold w-full"
                >
                  Get Bulk Quote
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
