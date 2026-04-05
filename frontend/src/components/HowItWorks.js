import React from 'react';
import { Send, TestTube, FileCheck, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <Send className="w-8 h-8" />,
      title: "Request Free Sample",
      description: "Fill out the simple form and tell us which products you're interested in. We'll send you a free sample kit with no commitment.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: 2,
      icon: <TestTube className="w-8 h-8" />,
      title: "Test Our Quality",
      description: "Compare our spices with your current supplier. Check the color, aroma, purity, and taste. See the Roz Spices difference yourself.",
      color: "from-purple-500 to-pink-600"
    },
    {
      number: 3,
      icon: <FileCheck className="w-8 h-8" />,
      title: "Get Bulk Quote",
      description: "Satisfied with the quality? Request a bulk quote. We'll provide competitive wholesale pricing based on your requirements.",
      color: "from-orange-500 to-red-600"
    },
    {
      number: 4,
      icon: <Truck className="w-8 h-8" />,
      title: "Receive Fast Delivery",
      description: "Place your order and receive it within 3-5 days anywhere in India. Track your shipment in real-time with guaranteed delivery.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with Roz Spices is simple. Follow these 4 easy steps to partner with India's trusted spice supplier.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-gray-200 to-transparent"></div>
                )}

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200">
                  {/* Step Number Circle */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-2xl mb-6 shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to get started? Request your free sample kit today!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('sample-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            data-testid="how-it-works-cta"
          >
            Start Your Journey - Get Free Samples
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
