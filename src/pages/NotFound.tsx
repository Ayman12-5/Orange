import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full text-center space-y-8">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative mx-auto w-40 h-40"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-full h-full bg-primary text-white rounded-full flex items-center justify-center text-6xl font-black shadow-2xl">
            404
          </div>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-3xl font-black text-black">عذراً، هذه الصفحة غير موجودة</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            يبدو أن الرابط الذي اتبعته غير صحيح أو تم نقل الصفحة التي تبحث عنها. 
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-black px-[28px] py-[12px] rounded-[30px] font-bold text-[16px] transition-colors shadow-md"
          >
            <Home size={20} />
            العودة للرئيسية
          </Link>
          <Link 
            to="/offers" 
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-[28px] py-[12px] rounded-[30px] font-bold text-[16px] transition-colors"
          >
            <Search size={20} />
            تصفح العروض
          </Link>
        </div>

      </div>
    </div>
  );
}
