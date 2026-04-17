import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { OFFERS } from '../constants/data';
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function OfferDetails() {
  const { id } = useParams();
  const offer = OFFERS.find(o => o.id === id);

  if (!offer) {
    return <Navigate to="/404" />;
  }

  const similarOffers = OFFERS.filter(o => o.id !== id).slice(0, 2);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/offers" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 font-medium">
          <ArrowRight size={18} />
          العودة لكل العروض
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
        >
          <div className="bg-black p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            <div className="relative z-10">
              {offer.isBestOffer && (
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  🔥 العرض الأكثر طلباً
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-black mb-4">{offer.title}</h1>
              <div className="flex items-baseline">
                <span className="text-5xl md:text-7xl font-black text-primary">{offer.price}</span>
                <span className="text-xl text-gray-300 mr-3 font-medium">ج.م / {offer.duration}</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 text-gray-800">
            
            <div>
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                تفاصيل الباقة
                <span className="absolute bottom-[-8px] right-0 w-1/2 h-1 bg-primary rounded-full"></span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">
                    {offer.lines}
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">عدد الخطوط</div>
                    <div className="font-bold text-lg">خط أورانج</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">
                    {offer.internet.split(' ')[0]}
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">باقة الإنترنت</div>
                    <div className="font-bold text-lg">{offer.internet}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">
                    ⏳
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">التجديد</div>
                    <div className="font-bold text-lg">كل {offer.duration}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                الدفع والملاحظات
                <span className="absolute bottom-[-8px] right-0 w-1/2 h-1 bg-primary rounded-full"></span>
              </h2>
              
              <div className="mb-8 space-y-3 p-5 bg-orange-50 border border-orange-100 rounded-2xl text-orange-900">
                <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                  <span>الشهر الأول</span>
                  <span className="font-bold">{offer.firstMonthPayment} ج.م</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>الشهور التالية</span>
                  <span className="font-bold">{offer.followingMonthsPayment} ج.م</span>
                </div>
              </div>

              <ul className="space-y-4">
                {offer.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-gray-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/201234567890?text=أريد طلب ${offer.title} بسعر ${offer.price} جنية`}
              target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 flex-1 shadow-lg shadow-green-200"
            >
              <MessageCircle size={22} />
              الطلب عبر واتساب
            </a>
            <a 
              href="tel:+201234567890"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 flex-1"
            >
              <Phone size={22} className="text-primary" />
              اتصل للحجز
            </a>
          </div>
        </motion.div>

        {similarOffers.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black mb-6">عروض مشابهة قد تعجبك</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {similarOffers.map(sim => (
                <Link key={sim.id} to={`/offers/${sim.id}`} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex justify-between items-center group">
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{sim.title}</h4>
                    <span className="text-gray-500 text-sm">{sim.internet} - {sim.lines} خطوط</span>
                  </div>
                  <div className="text-xl font-black text-black">{sim.price} ج.م</div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
