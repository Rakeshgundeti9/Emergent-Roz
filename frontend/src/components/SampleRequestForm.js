import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import axios from 'axios';
import { PackageCheck, Loader2, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const SampleRequestForm = () => {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_person: '',
    email: '',
    phone: '',
    products_interested: [],
    quantity_estimate: '',
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

  const handleProductToggle = (product) => {
    setFormData(prev => ({
      ...prev,
      products_interested: prev.products_interested.includes(product)
        ? prev.products_interested.filter(p => p !== product)
        : [...prev.products_interested, product]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API}/sample-request`, formData);
      setSuccess(true);
      setFormData({
        business_name: '',
        contact_person: '',
        email: '',
        phone: '',
        products_interested: [],
        quantity_estimate: '',
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
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center" data-testid="sample-success-message">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-700 mb-4">
          Thank you for your interest! Our team will prepare your free sample kit and contact you within 24 hours.
        </p>
        <Button 
          onClick={() => setSuccess(false)}
          className="bg-green-600 hover:bg-green-700"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div id="sample-form" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl">
          <PackageCheck className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Request Free Sample Kit</h3>
          <p className="text-sm text-gray-600">Try before you buy - No commitment required</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Name */}
        <div>
          <Label htmlFor="business_name">Business Name *</Label>
          <Input
            id="business_name"
            type="text"
            required
            value={formData.business_name}
            onChange={(e) => setFormData({...formData, business_name: e.target.value})}
            placeholder="e.g., ABC Restaurant"
            className="mt-1"
            data-testid="sample-business-name"
          />
        </div>

        {/* Contact Person */}
        <div>
          <Label htmlFor="contact_person">Contact Person *</Label>
          <Input
            id="contact_person"
            type="text"
            required
            value={formData.contact_person}
            onChange={(e) => setFormData({...formData, contact_person: e.target.value})}
            placeholder="Your full name"
            className="mt-1"
            data-testid="sample-contact-person"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="your@email.com"
              className="mt-1"
              data-testid="sample-email"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+91 XXXXXXXXXX"
              className="mt-1"
              data-testid="sample-phone"
            />
          </div>
        </div>

        {/* Products Interested */}
        <div>
          <Label className="mb-3 block">Products Interested In *</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
            {products.map((product) => (
              <div key={product} className="flex items-center space-x-2">
                <Checkbox
                  id={`product-${product}`}
                  checked={formData.products_interested.includes(product)}
                  onCheckedChange={() => handleProductToggle(product)}
                  data-testid={`product-checkbox-${product}`}
                />
                <label
                  htmlFor={`product-${product}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {product}
                </label>
              </div>
            ))}
          </div>
          {formData.products_interested.length === 0 && (
            <p className="text-xs text-red-600 mt-1">Please select at least one product</p>
          )}
          {formData.products_interested.length > 0 && (
            <p className="text-xs text-green-600 mt-1">✓ {formData.products_interested.length} product(s) selected</p>
          )}
        </div>

        {/* Quantity Estimate */}
        <div>
          <Label htmlFor="quantity_estimate">Estimated Monthly Requirement (Optional)</Label>
          <Input
            id="quantity_estimate"
            type="text"
            value={formData.quantity_estimate}
            onChange={(e) => setFormData({...formData, quantity_estimate: e.target.value})}
            placeholder="e.g., 50 kg per month"
            className="mt-1"
            data-testid="sample-quantity"
          />
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Additional Message (Optional)</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Any specific requirements or questions..."
            className="mt-1"
            rows={3}
            data-testid="sample-message"
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
          disabled={loading || formData.products_interested.length === 0}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 text-lg font-semibold"
          data-testid="sample-submit-btn"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Get My Free Sample Kit'
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to receive communication from Roz Spices. We respect your privacy.
        </p>
      </form>
    </div>
  );
};

export default SampleRequestForm;
