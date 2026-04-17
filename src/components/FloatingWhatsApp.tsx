import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[30px] right-[30px] z-50 bg-[#25D366] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle size={32} />
      </a>
      <a
        href="tel:+201234567890"
        className="fixed bottom-[30px] left-[30px] z-50 bg-black text-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300"
        aria-label="اتصل بنا"
      >
        <Phone size={28} />
      </a>
    </>
  );
}
