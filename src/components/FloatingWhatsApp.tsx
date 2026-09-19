import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/packages';

export default function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.generalInquiryMessage);

  return (
    <aside aria-label="WhatsApp Support Floating Action" className="fixed bottom-20 md:bottom-7 right-5 z-40">
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-emerald-700/40 animate-wa-pulse"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

        {/* Tooltip on desktop hover */}
        <span className="hidden md:group-hover:flex absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-lg items-center gap-1.5 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          WhatsApp-এ মেসেজ দিন
        </span>
      </motion.a>
    </aside>
  );
}
