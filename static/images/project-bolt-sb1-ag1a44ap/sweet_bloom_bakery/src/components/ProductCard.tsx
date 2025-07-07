import React, { useState } from 'react';
import { Plus, Heart, Star, Info, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.variants?.sizes?.[0] || '');
  const [selectedFlavor, setSelectedFlavor] = useState<string>(product.variants?.flavors?.[0] || '');
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        size: selectedSize || undefined,
        flavor: selectedFlavor || undefined
      }
    });
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-charcoal-800 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 group">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3 h-64 md:h-auto overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              {product.featured && (
                <span className="bg-gold-500 text-charcoal-900 px-3 py-1 text-xs font-bold tracking-wider uppercase">
                  FEATURED
                </span>
              )}
              {product.popular && (
                <span className="bg-crimson-500 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>POPULAR</span>
                </span>
              )}
            </div>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 p-2 bg-charcoal-900/80 backdrop-blur-sm hover:bg-charcoal-800 transition-colors duration-300"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'text-crimson-500 fill-current' : 'text-gray-400'}`} />
            </button>
          </div>

          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300 tracking-wide">
                  {product.name}
                </h3>
                <span className="text-3xl font-black text-gold-400 font-mono">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Allergen Info */}
              {product.allergens.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">CONTAINS:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="bg-charcoal-700 text-gray-300 px-3 py-1 text-xs font-mono uppercase tracking-wider border border-gray-600"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal-900 py-3 font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>DETAILS</span>
              </button>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 py-3 font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="group bg-charcoal-800 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden h-64">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.featured && (
              <span className="bg-gold-500 text-charcoal-900 px-3 py-1 text-xs font-bold tracking-wider uppercase">
                FEATURED
              </span>
            )}
            {product.popular && (
              <span className="bg-crimson-500 text-white px-3 py-1 text-xs font-bold tracking-wider uppercase flex items-center space-x-1">
                <Star className="w-3 h-3 fill-current" />
                <span>POPULAR</span>
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 p-2 bg-charcoal-900/80 backdrop-blur-sm hover:bg-charcoal-800 transition-colors duration-300"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'text-crimson-500 fill-current' : 'text-gray-400'}`} />
          </button>

          {/* Quick View Button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2 hover:bg-white/20 border border-white/30"
            >
              <Info className="w-4 h-4" />
              <span>QUICK VIEW</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300 tracking-wide">
              {product.name}
            </h3>
            <span className="text-2xl font-black text-gold-400 font-mono">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Allergen Info */}
          {product.allergens.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Contains:</p>
              <div className="flex flex-wrap gap-1">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="bg-charcoal-700 text-gray-300 px-2 py-1 text-xs font-mono uppercase tracking-wider"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 py-3 font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-charcoal-800 border border-gold-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-charcoal-900/80 backdrop-blur-sm p-2 hover:bg-charcoal-800 transition-colors duration-300"
              >
                <Plus className="w-6 h-6 rotate-45 text-white" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="font-display text-4xl font-bold text-white tracking-wide">{product.name}</h2>
                <span className="text-4xl font-black text-gold-400 font-mono">${product.price.toFixed(2)}</span>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">{product.description}</p>

              {/* Variants */}
              {product.variants?.sizes && (
                <div className="mb-6">
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">SIZE</label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 transition-colors duration-300 font-bold tracking-wider uppercase ${
                          selectedSize === size
                            ? 'border-gold-400 bg-gold-400 text-charcoal-900'
                            : 'border-gray-600 text-gray-300 hover:border-gold-400 hover:text-gold-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.variants?.flavors && (
                <div className="mb-8">
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">FLAVOR</label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.flavors.map((flavor) => (
                      <button
                        key={flavor}
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`px-4 py-2 border-2 transition-colors duration-300 font-bold tracking-wider uppercase ${
                          selectedFlavor === flavor
                            ? 'border-gold-400 bg-gold-400 text-charcoal-900'
                            : 'border-gray-600 text-gray-300 hover:border-gold-400 hover:text-gold-400'
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Allergen Info */}
              {product.allergens.length > 0 && (
                <div className="mb-8">
                  <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">ALLERGEN INFORMATION:</p>
                  <div className="flex flex-wrap gap-3">
                    {product.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="bg-charcoal-700 text-gray-300 px-4 py-2 font-mono uppercase tracking-wider border border-gray-600"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  handleAddToCart();
                  setShowModal(false);
                }}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 py-4 font-bold text-lg tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;