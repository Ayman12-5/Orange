import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../constants/data';
import { ShoppingBag, Star, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.categoryId === activeCategory);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-black mb-4">متجر الإلكترونيات</h1>
            <p className="text-gray-600 text-lg max-w-xl">
              تصفح أحدث الموبايلات والإكسسوارات الأصلية بضمان معتمد وأسعار لا تقارن.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 p-6 rounded-3xl sticky top-28 border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary" />
                الأقسام
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-right px-4 py-2.5 rounded-xl font-medium transition-colors ${activeCategory === 'all' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                  >
                    كل المنتجات
                  </button>
                </li>
                {PRODUCT_CATEGORIES.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-right px-4 py-2.5 rounded-xl font-medium transition-colors ${activeCategory === category.id ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={activeCategory + viewMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={viewMode === 'grid' 
                  ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "flex flex-col gap-4"
                }
              >
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className={`bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all border border-gray-100 group ${viewMode === 'list' ? 'flex flex-col sm:flex-row gap-6 items-center' : ''}`}
                  >
                    <div className={`relative bg-gray-50 rounded-2xl overflow-hidden ${viewMode === 'list' ? 'w-full sm:w-48 h-48 flex-shrink-0' : 'aspect-square mb-4'}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {product.oldPrice && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          وفر {product.oldPrice - product.price} ج.م
                        </span>
                      )}
                    </div>
                    
                    <div className={`px-2 flex-1 flex flex-col ${viewMode === 'list' ? 'h-full justify-center py-4' : ''}`}>
                      <Link to={`/products/${product.categoryId}`} className="text-sm text-primary mb-1 block font-medium hover:underline">
                        {PRODUCT_CATEGORIES.find(c => c.id === product.categoryId)?.title}
                      </Link>
                      <h3 className="text-lg font-bold text-black mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center gap-1 mb-4 text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <span className="text-xs text-gray-400 mr-1">(5.0)</span>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-end gap-2 mb-4">
                          <span className="text-2xl font-black text-black">{product.price} ج.م</span>
                          {product.oldPrice && (
                            <span className="text-sm text-gray-400 line-through mb-1">{product.oldPrice} ج.م</span>
                          )}
                        </div>
                        <Link to="/contact" className="block w-full py-3 px-4 bg-gray-100 hover:bg-primary hover:text-white text-black rounded-xl text-center font-bold transition-colors">
                          اطلب الآن
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-500">لا توجد منتجات في هذا القسم حالياً.</h3>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
