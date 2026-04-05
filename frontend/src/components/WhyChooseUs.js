import React from 'react';
import { Truck, Package, HeadphonesIcon, Clock, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Purity Guarantee",
      description: "Every batch is lab-tested for purity and quality. FSSAI certified with no fillers or additives.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Consistent Quality",
      description: "Same color, aroma, and taste in every batch. Perfect for maintaining your signature flavors.",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Pan-India Delivery",
      description: "3-5 days delivery across India. Track your shipment in real-time with guaranteed on-time delivery.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Longer Shelf Life",
      description: "Proper processing and packaging ensures 12+ months shelf life, reducing wastage for your business.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Expert Consultation",
      description: "Our spice specialists help you choose the perfect blend for your specific business needs.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Competitive Bulk Pricing",
      description: "Best wholesale rates with flexible MOQ. Volume discounts available for regular orders.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Roz Spices?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just supply spices – we partner with your business for success with quality you can trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="why-us-features">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              data-testid={`feature-${index}`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Experience the Roz Spices Difference?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join 500+ successful businesses who trust us for their spice needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+917569515541"
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              data-testid="call-expert-btn"
            >
              <HeadphonesIcon className="mr-2" size={20} />
              Call Our Expert: +91 7569515541
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
