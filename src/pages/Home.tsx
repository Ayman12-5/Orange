import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Phone, Star, Shield, Zap, HeadphonesIcon } from 'lucide-react';
import { OFFERS, PRODUCTS, STATS, REVIEWS, PRODUCT_CATEGORIES } from '../constants/data';

export default function Home() {
  const popularOffers = OFFERS.filter(offer => offer.isPopular || offer.isBestOffer).slice(0, 3);
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#FFF5EF] border-b border-gray-100 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center lg:text-right"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[42px] font-black leading-tight text-black mb-6">
                أفضل عروض خطوط أورانج <br />
                <span className="text-primary italic">والموبايلات والإكسسوارات</span> <br />
                في مكان واحد
              </h1>
              <p className="text-lg md:text-xl text-[#555555] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                اكتشف أقوى باقات الإنترنت، أحدث الهواتف الذكية، والإكسسوارات الأصلية بأسعار تنافسية وخدمة عملاء متميزة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/offers" className="bg-primary text-white border-0 px-[28px] py-[12px] rounded-[30px] font-bold text-[16px] transition-transform hover:scale-105 flex items-center justify-center shadow-[0_4px_15px_rgba(255,102,0,0.3)]">
                  استعرض العروض
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-[28px] py-[12px] rounded-[30px] font-bold text-[16px] transition-all flex items-center justify-center sm:mr-[12px]">
                  تواصل معنا
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="aspect-[4/3] rounded-[20px] bg-gradient-to-tr from-primary/10 to-black/5 absolute inset-0"></div>
              <div className="relative z-10 w-full h-[300px] rounded-[20px] shadow-sm border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-bold italic bg-[#dddddd]/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
                  alt="Smartphone Deals" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats - Removed to match theme */}

      {/* Highlights Section */}
      <section className="py-[30px] px-[40px] max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {[
            { title: "عروض الخطوط", icon: "📶", route: "/offers", desc: "أفضل باقات الدقائق والإنترنت بأسعار تبدأ من 100 ج.م" },
            { title: "الأجهزة الذكية", icon: "📱", route: "/products/phones", desc: "أحدث موبايلات سامسونج، شاومي وآيفون بضمان محلي" },
            { title: "الإكسسوارات", icon: "🎧", route: "/products/accessories", desc: "شواحن، سماعات، وجرابات أصلية بأعلى جودة" },
            { title: "خدمة العملاء", icon: "🛠️", route: "/contact", desc: "دعم فني سريع وحلول تقنية لكل مشاكلك" }
          ].map((feature, i) => (
            <Link key={i} to={feature.route} className="bg-white p-[20px] rounded-[16px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-primary transition-all text-center group hover:-translate-y-[5px]">
              <div className="w-[50px] h-[50px] bg-[#FFF5EF] rounded-full mx-auto flex items-center justify-center text-primary text-[20px] mb-[12px] font-bold">
                {feature.icon}
              </div>
              <h3 className="text-[18px] font-bold text-black mb-[8px]">{feature.title}</h3>
              <p className="text-[13px] text-[#777777]">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-black mb-3">عروض الخطوط الحصرية</h2>
              <div className="w-16 h-1.5 bg-primary rounded-full"></div>
            </div>
            <Link to="/offers" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              شاهد كل العروض
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow relative p-8">
                {offer.isBestOffer && (
                  <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6">
                     الأكثر مبيعاً 🔥
                  </span>
                )}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-black">{offer.title}</h3>
                  <div className="text-left">
                    <span className="text-3xl font-black text-primary">{offer.price}</span>
                    <span className="text-gray-500 text-sm mr-1">ج.م</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span><strong className="text-black">{offer.internet}</strong> إنترنت</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span>صالح لمدة <strong className="text-black">{offer.duration}</strong></span>
                  </li>
                  {offer.notes.map((note, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-sm">{note}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/offers/${offer.id}`} className="block w-full py-3 px-4 bg-black text-white rounded-xl text-center font-bold hover:bg-primary transition-colors">
                  اطلب العرض الآن
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/offers" className="inline-flex items-center gap-2 text-primary font-bold bg-primary/10 px-6 py-3 rounded-full">
              شاهد كل العروض
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-black mb-3">أحدث المنتجات</h2>
              <div className="w-16 h-1.5 bg-primary rounded-full"></div>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              تصفح المتجر
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all group border border-gray-50">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.oldPrice && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      تخفيض
                    </span>
                  )}
                </div>
                <div className="px-2">
                  <Link to={`/products`} className="text-sm text-primary mb-1 block">{PRODUCT_CATEGORIES.find(c => c.id === product.categoryId)?.title}</Link>
                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-black">{product.price} ج.م</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice} ج.م</span>
                    )}
                  </div>
                  <Link to="/contact" className="block w-full py-2.5 px-4 bg-gray-100 hover:bg-primary hover:text-white text-black rounded-xl text-center font-semibold transition-colors">
                    اطلب الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">قالوا عنا</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-gray-50 p-8 rounded-3xl relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-300" : ""} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-black">{review.name}</div>
                    <div className="text-xs text-gray-500">عميل موثوق</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
