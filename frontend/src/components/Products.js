import React, { useState } from 'react';
import { Flame, Leaf, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  const products = [
    {
      id: 'red-chilli',
      name: 'Red Chilli Powder',
      tagline: '100% Pure Lal Mirch Powder',
      image: 'https://images.unsplash.com/photo-1768729340925-2749ecdc211c',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-red-600 to-rose-700',
      benefits: [
        'Consistent heat level in every batch',
        'Rich, vibrant red color',
        'FSSAI certified - No fillers',
        'Perfect for restaurant kitchens',
        '12+ months shelf life'
      ],
      description: 'Premium red chilli powder that gives your dishes the perfect color and heat. Lab-tested for purity with no artificial colors or additives.'
    },
    {
      id: 'coriander',
      name: 'Coriander Powder',
      tagline: 'Fresh Garden Aroma',
      image: 'https://images.unsplash.com/photo-1581600140682-d4e68c8cde32',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-600 to-emerald-700',
      benefits: [
        'Natural green-brown color',
        'Authentic garden-fresh aroma',
        'Finely ground consistency',
        'Ideal for curries & gravies',
        'Adds distinct curry flavor'
      ],
      description: 'A perfect blend of garden-fresh aroma and natural flavor. Widely used for authentic Indian curries with cooling properties.'
    },
    {
      id: 'turmeric',
      name: 'Turmeric Powder',
      tagline: 'Golden Goodness',
      image: 'https://images.unsplash.com/photo-1768729340132-a8c72080bb23',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'Bright golden-yellow color',
        'High curcumin content',
        'Natural anti-inflammatory properties',
        'Perfect for food & beverages',
        'Premium quality standardized extracts'
      ],
      description: 'Premium turmeric powder with high curcumin content. Natural color and powerful properties make it essential for authentic Indian cuisine.'
    },
    {
      id: 'garam-masala',
      name: 'Garam Masala',
      tagline: 'Authentic Spice Blend',
      image: 'https://images.unsplash.com/photo-1771541897176-44a3e01dc484',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-700',
      benefits: [
        'Perfect blend of premium spices',
        'Aromatic and flavorful',
        'Enhances curry dishes instantly',
        'Consistent taste profile',
        'Ready-to-use blend'
      ],
      description: 'Traditional Indian spice blend combining cardamom, cinnamon, cloves, and more. Essential for authentic North Indian cuisine.'
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper Powder',
      tagline: 'King of Spices',
      image: 'https://images.pexels.com/photos/31280796/pexels-photo-31280796.jpeg',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-gray-700 to-gray-900',
      benefits: [
        'Strong pungent flavor',
        'High piperine content',
        'Freshly ground quality',
        'Versatile seasoning',
        'Premium grade pepper'
      ],
      description: 'Finest quality black pepper powder with strong aroma and sharp taste. Perfect for seasoning and enhancing flavor profiles.'
    },
    {
      id: 'cumin',
      name: 'Cumin Powder (Jeera)',
      tagline: 'Essential Indian Spice',
      image: 'https://images.unsplash.com/photo-1581600140682-d4e68c8cde32',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-yellow-700 to-amber-800',
      benefits: [
        'Earthy, warm flavor',
        'Essential for tadka/tempering',
        'Aids in digestion',
        'Fine grinding consistency',
        'Pure cumin seeds ground'
      ],
      description: 'High-quality cumin powder with distinctive earthy aroma. A staple in Indian cooking, perfect for dal, curries, and vegetables.'
    },
    {
      id: 'kashmiri-chilli',
      name: 'Kashmiri Red Chilli',
      tagline: 'Vibrant Color, Mild Heat',
      image: 'https://images.unsplash.com/photo-1768729340132-a8c72080bb23',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-red-500 to-red-700',
      benefits: [
        'Brilliant red color',
        'Mild heat level',
        'Perfect for tandoori dishes',
        'Natural food coloring',
        'Premium Kashmiri quality'
      ],
      description: 'Authentic Kashmiri chilli powder known for its deep red color and mild heat. Ideal for dishes requiring vibrant color without excessive spiciness.'
    },
    {
      id: 'cardamom',
      name: 'Cardamom Powder',
      tagline: 'Queen of Spices',
      image: 'https://images.unsplash.com/photo-1656497119922-068c6a5e1193',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      benefits: [
        'Intense aromatic flavor',
        'Perfect for biryanis & desserts',
        'Freshly ground premium pods',
        'Natural sweet aroma',
        'High essential oil content'
      ],
      description: 'Premium cardamom powder from finest green pods. Adds exotic aroma to biryanis, desserts, and traditional beverages.'
    },
    {
      id: 'clove',
      name: 'Clove Powder',
      tagline: 'Powerful Aroma',
      image: 'https://images.unsplash.com/photo-1716816211590-c15a328a5ff0',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-brown-600 to-brown-800',
      benefits: [
        'Strong distinctive flavor',
        'Natural antimicrobial properties',
        'Perfect for garam masala',
        'Long shelf life',
        'Premium quality cloves'
      ],
      description: 'Finest clove powder with intense aroma and flavor. Essential ingredient in spice blends and traditional Indian recipes.'
    },
    {
      id: 'cinnamon',
      name: 'Cinnamon Powder',
      tagline: 'Sweet & Aromatic',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-orange-600 to-red-700',
      benefits: [
        'Sweet warm flavor',
        'Perfect for bakery & beverages',
        'Natural antioxidants',
        'Ceylon cinnamon quality',
        'Finely ground texture'
      ],
      description: 'Premium cinnamon powder with sweet, warm notes. Ideal for both savory dishes and desserts, beverages, and baking.'
    },
    {
      id: 'fenugreek',
      name: 'Fenugreek Powder (Methi)',
      tagline: 'Healthy & Flavorful',
      image: 'https://images.pexels.com/photos/7925765/pexels-photo-7925765.jpeg',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-yellow-600 to-amber-700',
      benefits: [
        'Slightly bitter, nutty flavor',
        'Health benefits for digestion',
        'Perfect for pickles & curries',
        'Natural yellow color',
        'Premium methi seeds'
      ],
      description: 'Quality fenugreek powder with distinctive flavor. Widely used in Indian pickles, curries, and traditional dishes for taste and health.'
    },
    {
      id: 'mustard',
      name: 'Mustard Powder',
      tagline: 'Pungent & Tangy',
      image: 'https://images.unsplash.com/photo-1768729340925-2749ecdc211c',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-700',
      benefits: [
        'Sharp, tangy flavor',
        'Essential for South Indian cooking',
        'Perfect for tempering',
        'Natural preservative',
        'Bright yellow color'
      ],
      description: 'Premium mustard powder with pungent flavor. Essential for South Indian cuisine, pickles, and tempering dishes.'
    },
    {
      id: 'curry-powder',
      name: 'Curry Powder',
      tagline: 'Complete Curry Blend',
      image: 'https://images.pexels.com/photos/8649386/pexels-photo-8649386.jpeg',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-yellow-600 to-orange-600',
      benefits: [
        'Ready-to-use curry blend',
        'Perfect spice balance',
        'Saves preparation time',
        'Consistent flavor every time',
        'Versatile for all curries'
      ],
      description: 'Expertly blended curry powder combining multiple spices. Perfect for busy kitchens requiring quick, authentic curry flavor.'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Product Range</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            100% Pure, Lab-Tested Spices for Your Business Success
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12" data-testid="products-grid">
          {(showAllProducts ? products : products.slice(0, 6)).map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              data-testid={`product-${product.id}`}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-br ${product.color} text-white p-3 rounded-full shadow-lg`}>
                  {product.icon}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${product.color} text-transparent bg-clip-text mb-4`}>
                  {product.tagline}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {products.length > 6 && (
          <div className="text-center mb-12">
            <Button 
              onClick={() => setShowAllProducts(!showAllProducts)}
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg font-semibold"
              data-testid="show-more-products-btn"
            >
              {showAllProducts ? (
                <>
                  <ChevronUp className="mr-2" size={24} />
                  Show Less Products
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2" size={24} />
                  View All {products.length} Products
                </>
              )}
            </Button>
            {!showAllProducts && (
              <p className="text-gray-600 mt-3">
                Showing 6 of {products.length} premium spice products
              </p>
            )}
          </div>
        )}

        {/* Upcoming Product Teaser */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-dashed border-orange-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1656497119922-068c6a5e1193"
                alt="Coming Soon"
                className="w-32 h-32 rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                Coming Soon
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Special Chilli Powder for Pickle
              </h3>
              <p className="text-gray-600">
                Perfect blend specifically crafted for pickle manufacturers. Higher heat, vibrant color, extended shelf life.
              </p>
            </div>
            <Button 
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Notified
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Pure & Natural</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">Lab</div>
            <div className="text-sm text-gray-600">Tested Quality</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
            <div className="text-sm text-gray-600">Months Shelf Life</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">FSSAI</div>
            <div className="text-sm text-gray-600">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
