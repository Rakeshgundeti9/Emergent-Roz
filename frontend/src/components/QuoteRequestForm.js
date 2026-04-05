import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axios from 'axios';
import { FileText, Loader2, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const QuoteRequestForm = ({ preSelectedProduct = '' }) => {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_person: '',
    email: '',
    phone: '',
    product_name: preSelectedProduct,
    quantity_kg: '',
    delivery_location: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const products = [
    'Red Chilli Powder',
    'Coriander Powder',
    'Turmeric Powder',
    'Garam Masala',
    'Black Pepper Powder',
    'Cumin Powder (Jeera)',
    'Kashmiri Red Chilli',
    'Cardamom Powder',
    'Clove Powder',
    'Cinnamon Powder',
    'Fenugreek Powder (Methi)',
    'Mustard Powder',
    'Curry Powder',
    'Special Pickle Chilli'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API}/quote-request`, formData);
      setSuccess(true);
      setFormData({
        business_name: '',
        contact_person: '',
        email: '',
        phone: '',
        product_name: '',
        quantity_kg: '',
        delivery_location: '',
        message: ''
      });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit request. Please try again or call us directly.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center" data-testid="quote-success-message">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
        <p className="text-gray-700 mb-4">
          Thank you! Our sales team will review your requirements and send you a detailed quote within 24 hours.
        </p>
        <div className="flex gap-3 justify-center">
          <Button 
            onClick={() => setSuccess(false)}
            className="bg-green-600 hover:bg-green-700"
          >
            Request Another Quote
          </Button>
          <a href="tel:+917569515541">
            <Button variant="outline">
              Or Call Now: +91 7569515541
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="quote" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-red-600 to-orange-500 p-3 rounded-xl">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Get Bulk Pricing Quote</h3>
          <p className="text-sm text-gray-600">Receive personalized wholesale pricing within 24 hours</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Name */}
        <div>
          <Label htmlFor="quote_business_name">Business Name *</Label>
          <Input
            id="quote_business_name"
            type="text"
            required
            value={formData.business_name}
            onChange={(e) => setFormData({...formData, business_name: e.target.value})}
            placeholder="Your business/restaurant name"
            className="mt-1"
            data-testid="quote-business-name"
          />
        </div>

        {/* Contact Person */}
        <div>
          <Label htmlFor="quote_contact_person">Contact Person *</Label>
          <Input
            id="quote_contact_person"
            type="text"
            required
            value={formData.contact_person}
            onChange={(e) => setFormData({...formData, contact_person: e.target.value})}
            placeholder="Your full name"
            className="mt-1"
            data-testid="quote-contact-person"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="quote_email">Email Address *</Label>
            <Input
              id="quote_email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your@email.com"
              className="mt-1"
              data-testid="quote-email"
            />
          </div>
          <div>
            <Label htmlFor="quote_phone">Phone Number *</Label>
            <Input
              id="quote_phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+91 XXXXXXXXXX"
              className="mt-1"
              data-testid="quote-phone"
            />
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <Label htmlFor="quote_product">Select Product *</Label>
          <Select 
            value={formData.product_name} 
            onValueChange={(value) => setFormData({...formData, product_name: value})}
            required
          >
            <SelectTrigger className="mt-1" data-testid="quote-product-select">
              <SelectValue placeholder="Choose a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Quantity & Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="quote_quantity">Quantity Required (kg) *</Label>
            <Input
              id="quote_quantity"
              type="text"
              required
              value={formData.quantity_kg}
              onChange={(e) => setFormData({...formData, quantity_kg: e.target.value})}
              placeholder="e.g., 100 kg"
              className="mt-1"
              data-testid="quote-quantity"
            />
          </div>
          <div>
            <Label htmlFor="quote_location">Delivery Location *</Label>
            <Input
              id="quote_location"
              type="text"
              required
              value={formData.delivery_location}
              onChange={(e) => setFormData({...formData, delivery_location: e.target.value})}
              placeholder="City, State"
              className="mt-1"
              data-testid="quote-location"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="quote_message">Additional Requirements (Optional)</Label>
          <Textarea
            id="quote_message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Special packaging, delivery timeline, or other requirements..."
            className="mt-1"
            rows={3}
            data-testid="quote-message"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <Button 
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-6 text-lg font-semibold"
          data-testid="quote-submit-btn"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Get My Bulk Quote Now'
          )}
        </Button>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900 font-medium">
            💡 <strong>Quick Tip:</strong> Larger quantities qualify for better wholesale rates. 
            Our team will provide the best pricing based on your requirements.
          </p>
        </div>
      </form>
    </div>
  );
};

export default QuoteRequestForm;
