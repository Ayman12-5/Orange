import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'العروض', path: '/offers' },
  { label: 'المنتجات', path: '/products' },
  { label: 'من نحن', path: '/about' },
  { label: 'الأسئلة الشائعة', path: '/faq' },
  { label: 'تواصل معنا', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-100 h-[70px] flex items-center shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="flex justify-between items-center w-full">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 font-black text-2xl text-black">
              <span className="text-primary italic">ORANGE</span> SHOP
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 space-x-reverse items-center">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({isActive}) => 
                  `text-[15px] font-bold transition-colors hover:text-primary flex items-center ${isActive ? 'text-primary' : 'text-gray-800'}`
                }
              >
                {link.label}
                {link.path === '/offers' && (
                  <span className="bg-primary text-white text-[11px] px-[8px] py-[4px] rounded-[4px] mr-[8px]">جديد</span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-100 overflow-hidden bg-white"
          >
            <div className="px-4 py-4 space-y-3 shadow-lg">
              {NAV_LINKS.map(link => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({isActive}) => 
                    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2">
                 <a href="tel:+201234567890" className="flex items-center justify-center gap-2 bg-black text-white w-full px-5 py-3 rounded-xl font-medium">
                  <Phone size={18} className="text-primary" />
                  <span dir="ltr">+20 123 456 7890</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
