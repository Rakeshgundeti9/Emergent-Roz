import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "RB Restaurant Chain",
      location: "Hyderabad",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      text: "We've been sourcing from Roz Spices for 3 years now. The consistency in quality is outstanding. Our customers love the authentic taste, and we've never had to worry about color or heat variations. Highly recommended for restaurant businesses!",
      highlight: "Consistent Quality"
    },
    {
      name: "Anil Joshi",
      business: "Jyothi Traders",
      location: "Telangana",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
      text: "As a distributor, I need reliable suppliers. Roz Spices delivers on time, every time. Their packaging is excellent, and the purity certifications make it easy to sell to my clients. Great partnership!",
      highlight: "Timely Delivery"
    },
    {
      name: "Priya Sharma",
      business: "AA Agencies",
      location: "Mumbai",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      text: "The bulk pricing is very competitive, and the quality is never compromised. We tested multiple suppliers, but Roz Spices stood out for their purity and professional service. Their team is always responsive to our needs.",
      highlight: "Best Value"
    },
    {
      name: "Mohammed Ali",
      business: "ANS Distributors",
      location: "Bangalore",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
      text: "Working with Roz Spices has been a game-changer for our business. The lab-tested certificates give our customers confidence, and the longer shelf life means less wastage. Excellent product and service!",
      highlight: "Lab Certified"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from businesses who trust us daily
          </p>
          
          {/* Overall Rating */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="border-l-2 border-gray-300 pl-3">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">500+ Reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8" data-testid="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
              data-testid={`testimonial-${index}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-red-100">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                {/* Avatar */}
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-orange-400 p-1"
                />
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {testimonial.highlight}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-center text-xl font-bold text-gray-900 mb-8">
            Trusted by Leading Businesses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { name: 'AA Agencies', color: 'from-red-500 to-pink-500' },
              { name: 'Jyothi Traders', color: 'from-yellow-500 to-orange-500' },
              { name: 'ANS Distributors', color: 'from-gray-700 to-gray-900' },
              { name: 'RB Restaurant', color: 'from-red-600 to-red-800' },
              { name: 'Anji Traders', color: 'from-orange-500 to-red-600' }
            ].map((client, index) => (
              <div 
                key={index}
                className="w-full h-20 flex items-center justify-center"
              >
                <div className={`bg-gradient-to-r ${client.color} text-white px-6 py-3 rounded-lg font-bold text-center text-sm shadow-md hover:shadow-lg transition-shadow`}>
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">99.8%</div>
            <div className="text-sm text-gray-700 font-medium">Customer Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">3-5</div>
            <div className="text-sm text-gray-700 font-medium">Days Average Delivery Time</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-700 font-medium">Active Business Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
