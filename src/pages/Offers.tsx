import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OFFERS } from '../constants/data';
import { CheckCircle2, ChevronLeft, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Offers() {
  const [filter, setFilter] = useState('all');

  const filteredOffers = OFFERS.filter(offer => {
    if (filter === 'best') return offer.isBestOffer;
    if (filter === 'popular') return offer.isPopular;
    if (filter === 'low-price') return offer.price <= 100;
    if (filter === 'high-data') return parseInt(offer.internet) >= 20;
    return true;
  });

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-black mb-4">عروض الخطوط والإنترنت</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر الباقة اللي تناسب استهلاكك بأفضل سعر في السوق. كل العروض شاملة الضريبة وبدون مصاريف خفية.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { id: 'all', label: 'كل العروض' },
            { id: 'best', label: 'أفضل عرض 🔥' },
            { id: 'popular', label: 'الأكثر مبيعاً ⭐' },
            { id: 'low-price', label: 'أقل من 100 جنيه 💰' },
            { id: 'high-data', label: 'باقات إنترنت كبيرة 📶' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${filter === f.id ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredOffers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col"
            >
              <div className="h-2 w-full bg-primary"></div>
              <div className="p-8 flex-grow">
                {offer.isBestOffer && (
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    أفضل قيمة مقابل سعر
                  </span>
                )}
                <h3 className="text-2xl font-bold text-black mb-2">{offer.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-black text-primary">{offer.price}</span>
                  <span className="text-gray-500 mr-2 font-medium">ج.م / {offer.duration}</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-500">عدد الخطوط</span>
                    <span className="font-bold text-black">{offer.lines} خط</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-500">الإنترنت</span>
                    <span className="font-bold text-black">{offer.internet}</span>
                  </div>
                  <div className="pt-2 space-y-3">
                    {offer.notes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-600">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                 <Link to={`/offers/${offer.id}`} className="block w-full py-3.5 px-4 bg-black text-white rounded-xl text-center font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                  التفاصيل والطلب
                  <ChevronLeft size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-gray-400">لم يتم العثور على عروض تطابق اختيارك.</h3>
            <button onClick={() => setFilter('all')} className="mt-4 text-primary font-bold hover:underline">
              عرض كل الباقات
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
