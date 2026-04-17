import React from 'react';
import { ShieldCheck, Users, Target, Heart } from 'lucide-react';
import { STATS } from '../constants/data';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">من نحن</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نحن متجر محلي متخصص في تقديم أفضل خطوط أورانج، والهواتف الذكية، والإكسسوارات بأسعار مناسبة وخدمة عملاء تضعك في المقام الأول.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">قصتنا</h2>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  بدأنا كمتجر صغير في قلب المدينة بهدف توفير خطوط وخدمات أورانج بشكل أسهل وأسرع لأهالي المنطقة. مع تزايد ثقة عملائنا، قمنا بتوسيع خدماتنا لتشمل بيع الهواتف الذكية والإكسسوارات الأصلية.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  اليوم، نفخر بأننا الوجهة المفضلة للآلاف من العملاء الذين يبحثون عن المصداقية، الأسعار التنافسية، والدعم الفني الحقيقي بعد البيع.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Target className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-black text-xl mb-2">رؤيتنا</h3>
                  <p className="text-gray-600">أن نكون الخيار الأول موثوقية في تقديم خدمات الاتصالات والإلكترونيات.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Heart className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-black text-xl mb-2">قيمنا</h3>
                  <p className="text-gray-600">الشفافية، احترام العميل، سرعة الاستجابة، والجودة المستدامة.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop" 
                alt="Our Store" 
                className="relative z-10 w-full rounded-3xl shadow-xl object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">لماذا يثق بنا العملاء؟</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">ضمان حقيقي</h3>
              <p className="text-gray-600">نلتزم بتقديم منتجات أصلية 100% مع ضمان معتمد واستبدال فوري للعيوب.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">خدمة شخصية</h3>
              <p className="text-gray-600">لا نعاملك كرقم، نقدم لك استشارات صادقة لاختيار الباقة أو الجهاز الأنسب لك.</p>
            </div>

             <div className="text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">أسعار شفافة</h3>
              <p className="text-gray-600">جميع أسعارنا معلنة بوضوح وتشمل الضرائب، بدون أي رسوم خفية أو مفاجآت.</p>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-around gap-8 text-center">
              {STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
