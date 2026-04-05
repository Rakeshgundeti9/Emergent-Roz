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
            Ready to get started? Contact us on WhatsApp for instant support!
          </p>
          <a
            href="https://wa.me/917569515541?text=Hi!%20I%20am%20interested%20in%20your%20bulk%20spice%20products.%20Please%20provide%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            data-testid="how-it-works-whatsapp-cta"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
