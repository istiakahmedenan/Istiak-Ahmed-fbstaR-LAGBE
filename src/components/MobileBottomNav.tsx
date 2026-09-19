import { useState, useEffect } from 'react';
import { Home, Star, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/packages';

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'packages', 'how-to-order', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.generalInquiryMessage);

  return (
    <nav
      id="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-around">
        {/* Home */}
        <a
          id="mob-nav-home"
          href="#home"
          onClick={(e) => scrollTo(e, 'home')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeSection === 'home'
              ? 'text-blue-600 font-bold'
              : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          <Home className={`w-5 h-5 ${activeSection === 'home' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[11px] tracking-tight">Home</span>
        </a>

        {/* Stars */}
        <a
          id="mob-nav-stars"
          href="#packages"
          onClick={(e) => scrollTo(e, 'packages')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeSection === 'packages'
              ? 'text-amber-500 font-bold'
              : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          <Star
            className={`w-5 h-5 ${
              activeSection === 'packages' ? 'fill-amber-400 text-amber-500 stroke-[2.5]' : ''
            }`}
          />
          <span className="text-[11px] tracking-tight">Stars</span>
        </a>

        {/* How to Order */}
        <a
          id="mob-nav-how-to-order"
          href="#how-to-order"
          onClick={(e) => scrollTo(e, 'how-to-order')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeSection === 'how-to-order'
              ? 'text-blue-600 font-bold'
              : 'text-slate-500 hover:text-slate-800 font-medium'
          }`}
        >
          <HelpCircle className={`w-5 h-5 ${activeSection === 'how-to-order' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[11px] tracking-tight whitespace-nowrap">অর্ডার নিয়ম</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          id="mob-nav-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-emerald-600 hover:text-emerald-700 font-bold"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-emerald-500 text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <span className="text-[11px] tracking-tight">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
