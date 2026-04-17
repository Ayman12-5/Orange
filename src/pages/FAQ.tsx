import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    question: "كيف يمكنني طلب عرض الخطوط؟",
    answer: "يمكنك تصفح صفحة العروض واختيار العرض المناسب، ثم الضغط على زر 'الطلب عبر واتساب' للتواصل معنا مباشرة وإرسال بياناتك لتجهيز الطلب."
  },
  {
    question: "هل يوجد خدمة توصيل للمنتجات أو الخطوط؟",
    answer: "نعم، نوفر خدمة التوصيل لمناطق محددة برسوم بسيطة. يمكنك الاستفسار عن إمكانية التوصيل لمنطقتك عند التواصل معنا عبر الواتساب."
  },
  {
    question: "كيف يتم استلام الخطوط وتفعيلها؟",
    answer: "التفعيل يتم فوراً عند استلام الخط بعد التأكد من صحة بطاقة الرقم القومي سارية المفعول، وفقاً لتعليمات الجهاز القومي لتنظيم الاتصالات."
  },
  {
    question: "هل جميع المنتجات المعروضة أصلية؟",
    answer: "بالتأكيد، نحن نبيع فقط المنتجات الأصلية والمضمونة 100%، سواء كانت هواتف أو شواحن أو إكسسوارات مع الاحتفاظ بضمان الوكيل المعتمد."
  },
  {
    question: "هل الأسعار المعروضة قابلة للتغيير؟",
    answer: "نسعى دائمًا لتحديث أسعارنا لتكون الأدق، لكن الأسعار قد تتغير بناءً على حالة السوق وتوفر العروض. السعر النهائي يتم تأكيده وقت الطلب."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع نقداً عند الاستلام (داخل الفرع أو للمندوب)، بالإضافة للتحويل عبر المحافظ الإلكترونية مثل أورانج كاش وباقي المحافظ المعتمدة."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-black mb-4">الأسئلة الشائعة</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            جمعنا لك إجابات لأكثر الأسئلة التي تصلنا لمساعدتك بشكل أسرع.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary shadow-md bg-gray-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button
                  className="w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-black text-lg pr-2">{faq.question}</span>
                  <ChevronDown 
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-3">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-gray-600 mb-6">نحن هنا لمساعدتك. تواصل معنا وسيقوم فريق الدعم بالرد عليك في أسرع وقت.</p>
          <a 
            href="/contact" 
            className="inline-block bg-primary text-white hover:bg-black px-[28px] py-[12px] rounded-[30px] font-bold text-[16px] transition-colors shadow-sm"
          >
            تواصل معنا الآن
          </a>
        </div>

      </div>
    </div>
  );
}
