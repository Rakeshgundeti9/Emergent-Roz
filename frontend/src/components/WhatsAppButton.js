import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '917569515541'; // WhatsApp number in international format without +
  const message = encodeURIComponent('Hi! I am interested in your bulk spice products. Please provide more information.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      data-testid="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      {/* Button */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-3 cursor-pointer">
        <MessageCircle className="w-7 h-7" />
        <span className="hidden md:inline-block font-semibold pr-2">Chat with Us</span>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 whitespace-nowrap shadow-lg">
          Get instant quote on WhatsApp!
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
