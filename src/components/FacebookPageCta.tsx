import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../data/packages';
import { FacebookIcon } from './FacebookIcon';

export default function FacebookPageCta() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#1877F2]/10 via-blue-50 to-white border-t border-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Facebook 3D icon / emblem with gentle float */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#1877F2] to-[#0A58CA] text-white shadow-xl shadow-blue-600/30 mb-6"
        >
          <FacebookIcon className="w-8 h-8 sm:w-10 sm:h-10" fill="#FFFFFF" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          আমাদের Facebook Page-এ যুক্ত থাকুন
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          নতুন Update, Service Information এবং প্রয়োজনীয় তথ্যের জন্য আমাদের Facebook Page Follow করুন।
        </p>

        <div className="mt-8">
          <motion.a
            id="facebook-page-visit-btn"
            href={SITE_CONFIG.facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#1877F2] hover:bg-[#1465D0] text-white font-bold text-base shadow-lg shadow-blue-600/25 transition-shadow"
          >
            <span>Visit Facebook Page</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
