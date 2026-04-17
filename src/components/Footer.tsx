import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 py-8 text-center md:text-right mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-[14px] opacity-80 mb-1">
            © {new Date().getFullYear()} متجر أورانج المحلي - جميع الحقوق محفوظة
          </p>
          <p className="text-[12px] opacity-60">
            نحن وكيل معتمد لخدمات الاتصالات والمحمول
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[14px] opacity-80 mb-1">القاهرة، مصر</p>
          <p className="text-[14px] opacity-80 font-medium" dir="ltr">+20 123 456 7890</p>
        </div>
      </div>
    </footer>
  );
}
