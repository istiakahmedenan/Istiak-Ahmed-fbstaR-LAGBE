import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/packages';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Star Packages', href: '#packages' },
    { name: 'How to Order', href: '#how-to-order' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.generalInquiryMessage);

  return (
    <motion.header
      id="main-header"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-blue-900/5 py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="brand-logo-link"
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-amber-400 to-blue-500 shadow-md flex items-center justify-center overflow-hidden"
            >
              <BrandLogo alt={SITE_CONFIG.name} />
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-blue-950 tracking-tight">
                  FB Star <span className="text-amber-500">Lagbe</span>
                </span>
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 hidden sm:inline-block animate-pulse" />
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Professional Facebook Star Service
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 text-sm font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp Order Button */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              id="header-whatsapp-order-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm shadow-md shadow-emerald-500/25 transition-shadow hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Order</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-header-wa-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500 text-white shadow-sm"
              aria-label="WhatsApp Order"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2.5 rounded-lg text-slate-800 hover:bg-blue-50 font-semibold text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                id="mobile-menu-wa-full-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
