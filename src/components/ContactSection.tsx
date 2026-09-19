import { MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/packages';
import { FacebookIcon } from './FacebookIcon';

export default function ContactSection() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.generalInquiryMessage);

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
            সরাসরি সহায়তা
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            যোগাযোগ করুন
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Facebook Star অথবা আমাদের Service সম্পর্কে জানতে সরাসরি যোগাযোগ করুন।
          </p>
        </motion.div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <motion.div
            id="contact-card-whatsapp"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-2xl p-7 bg-white border border-emerald-100 shadow-lg shadow-emerald-500/5 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 fill-emerald-500 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">WhatsApp</h3>
            <p className="mt-2 text-slate-600 font-semibold font-mono text-base">
              {SITE_CONFIG.whatsappDisplay}
            </p>
            <div className="mt-6 w-full pt-4 border-t border-slate-100">
              <motion.a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp করুন</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            id="contact-card-email"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-2xl p-7 bg-white border border-blue-100 shadow-lg shadow-blue-500/5 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Email</h3>
            <p className="mt-2 text-slate-600 font-medium text-sm break-all">
              {SITE_CONFIG.email}
            </p>
            <div className="mt-6 w-full pt-4 border-t border-slate-100">
              <motion.a
                id="contact-email-btn"
                href={`mailto:${SITE_CONFIG.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email করুন</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Facebook Card */}
          <motion.div
            id="contact-card-facebook"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-2xl p-7 bg-white border border-sky-100 shadow-lg shadow-sky-500/5 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center mb-4">
              <FacebookIcon className="w-7 h-7" fill="#1877F2" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Facebook</h3>
            <p className="mt-2 text-slate-600 font-semibold text-base">
              {SITE_CONFIG.name}
            </p>
            <div className="mt-6 w-full pt-4 border-t border-slate-100">
              <motion.a
                id="contact-facebook-btn"
                href={SITE_CONFIG.facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-[#1569D6] text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Facebook Page দেখুন</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
