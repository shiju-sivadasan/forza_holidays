import React, { useState } from 'react';
import { Search, Filter, Grid, List, Zap } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'ALL CRAFT', count: products.length, color: 'gold' },
    { id: 'pastries', name: 'PASTRIES', count: products.filter(p => p.category === 'pastries').length, color: 'crimson' },
    { id: 'bread', name: 'ARTISAN BREAD', count: products.filter(p => p.category === 'bread').length, color: 'sage' },
    { id: 'cakes', name: 'SIGNATURE CAKES', count: products.filter(p => p.category === 'cakes').length, color: 'gold' },
    { id: 'cookies', name: 'COOKIES', count: products.filter(p => p.category === 'cookies').length, color: 'crimson' },
    { id: 'cupcakes', name: 'CUPCAKES', count: products.filter(p => p.category === 'cupcakes').length, color: 'sage' },
    { id: 'croissants', name: 'CROISSANTS', count: products.filter(p => p.category === 'croissants').length, color: 'gold' },
    { id: 'seasonal', name: 'SEASONAL', count: products.filter(p => p.category === 'seasonal').length, color: 'crimson' }
  ];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getColorClasses = (color: string) => {
    const colors = {
      gold: 'bg-gold-500 text-charcoal-900 border-gold-400',
      crimson: 'bg-crimson-500 text-white border-crimson-400',
      sage: 'bg-sage-500 text-white border-sage-400'
    };
    return colors[color as keyof typeof colors] || colors.gold;
  };

  return (
    <section id="menu" className="py-20 bg-charcoal-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-charcoal-800/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-gold-500/30">
            <Zap className="w-5 h-5 text-gold-400" />
            <span className="text-gold-300 font-mono text-sm tracking-wider uppercase">ARTISAN COLLECTION</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-crimson-500">CRAFT</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-crimson-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each creation represents hours of meticulous preparation, premium ingredients, and uncompromising attention to detail.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12">
          {/* Search and View Toggle */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our craft..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-charcoal-800 border border-gold-500/30 text-white placeholder-gray-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 rounded-none"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-charcoal-800 border border-gold-500/30 rounded-none">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors duration-300 ${
                    viewMode === 'grid' ? 'bg-gold-500 text-charcoal-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors duration-300 ${
                    viewMode === 'list' ? 'bg-gold-500 text-charcoal-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-charcoal-800 border border-gold-500/30 text-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 rounded-none"
              >
                <option value="name">SORT: NAME</option>
                <option value="price-low">SORT: PRICE LOW</option>
                <option value="price-high">SORT: PRICE HIGH</option>
                <option value="popular">SORT: POPULAR</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-bold text-sm tracking-wider uppercase transition-all duration-300 border-2 ${
                  selectedCategory === category.id
                    ? getColorClasses(category.color)
                    : 'bg-transparent text-gray-400 border-gray-600 hover:border-gold-400 hover:text-gold-400'
                } flex items-center space-x-2`}
              >
                <span>{category.name}</span>
                <span className="bg-black/20 px-2 py-1 rounded-full text-xs font-mono">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
              : 'space-y-6'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-charcoal-800 border border-gold-500/30 p-12 max-w-md mx-auto">
              <Filter className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">NO MATCHES FOUND</h3>
              <p className="text-gray-400">
                Adjust your search or filter criteria to discover our craft.
              </p>
            </div>
          </div>
        )}

        {/* Custom Orders CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-charcoal-800 to-charcoal-700 border-2 border-gold-500/30 p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-wide">
              BESPOKE CREATIONS
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Can't find exactly what you're envisioning? Our master bakers craft custom pieces for discerning clients who demand perfection.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 px-8 py-4 font-bold text-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
            >
              COMMISSION CUSTOM WORK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;