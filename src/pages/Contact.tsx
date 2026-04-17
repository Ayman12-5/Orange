import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-black mb-4">تواصل معنا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لخدمتك! سواء كان لديك استفسار عن العروض، أو تحتاج مساعدة، أو تود تقديم شكوى، لا تتردد في التواصل معنا.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">اتصل بنا</h3>
                <p className="text-gray-500 mb-2 text-sm">متاحون يومياً من 10 ص حتي 11 م</p>
                <a href="tel:+201234567890" className="text-xl font-bold text-primary block" dir="ltr">+20 123 456 7890</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] flex-shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">واتساب</h3>
                <p className="text-gray-500 mb-2 text-sm">رد سريع خلال دقائق</p>
                <a href="https://wa.me/201234567890" className="text-xl font-bold text-[#25D366] block" dir="ltr">+20 123 456 7890</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">الفرع الرئيسي</h3>
                <p className="text-gray-600 leading-relaxed">شارع التحرير، وسط البلد، بجوار محطة المترو، القاهرة.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-1">مواعيد العمل</h3>
                <p className="text-gray-600">طوال أيام الأسبوع<br/>من الساعة 10:00 صباحاً<br/>حتى 11:00 مساءً</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-black mb-8">إرسال رسالة سريعة</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-black">الاسم بالكامل</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-black"
                      placeholder="اكتب اسمك هنا"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium text-black">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-right text-black"
                      placeholder="012XXXXXXXX"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium text-black">نوع الطلب</label>
                  <select 
                    id="subject"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none text-black"
                  >
                    <option value="">اختر نوع طلبك...</option>
                    <option value="offer">استفسار عن عرض خطوط</option>
                    <option value="product">استفسار عن منتج</option>
                    <option value="complaint">تقديم شكوى</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-black">الرسالة</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-black"
                    placeholder="اكتب رسالتك أو استفسارك هنا بوضوح..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-black px-[28px] py-[12px] rounded-[30px] font-bold text-[16px] transition-colors flex items-center justify-center gap-2"
                >
                  إرسال الطلب
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-12 w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col gap-3">
             <MapPin size={48} className="text-gray-400" />
             <span className="text-gray-500 font-medium">خريطة الموقع (يتم تضمين Google Maps هنا)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
