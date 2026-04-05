import React, { useState, useEffect } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Products from '@/components/Products';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import SampleRequestForm from '@/components/SampleRequestForm';
import QuoteRequestForm from '@/components/QuoteRequestForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState('');

  // Test API connection
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log('API Connected:', response.data.message);
      } catch (error) {
        console.error('API Connection Error:', error);
      }
    };
    testConnection();
  }, []);

  const handleGetSample = () => {
    const element = document.getElementById('sample-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = (productName = '') => {
    setSelectedProduct(productName);
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero onGetSampleClick={handleGetSample} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Products */}
      <Products onGetQuoteClick={handleGetQuote} />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Forms Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sample Request Form */}
            <SampleRequestForm />

            {/* Quote Request Form */}
            <QuoteRequestForm preSelectedProduct={selectedProduct} />
          </div>

          {/* Trust Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔒 Your Information is Safe with Us
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We respect your privacy and never share your information with third parties. 
                All data is securely stored and used only to serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
