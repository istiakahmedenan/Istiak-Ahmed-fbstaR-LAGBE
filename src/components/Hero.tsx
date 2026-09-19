import { Star, MessageCircle, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/packages';
import BrandLogo from './BrandLogo';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.generalInquiryMessage);

  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FC] to-white"
    >
      {/* Background Decorative Glows & Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute top-24 right-10 w-96 h-96 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl" />

        {/* Floating Stars in Background with Motion */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[15%] opacity-70 hidden md:block"
        >
          <Star className="w-8 h-8 text-amber-400 fill-amber-300 drop-shadow-md" />
        </motion.div>
        <motion.div
          animate={{ y: [8, -8, 8], rotate: [6, -6, 6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-44 right-[18%] opacity-80 hidden md:block"
        >
          <Star className="w-10 h-10 text-amber-400 fill-amber-400 drop-shadow-md" />
        </motion.div>
        <motion.div
          animate={{ y: [-6, 6, -6], scale: [1, 1.1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 left-[22%] opacity-60 hidden lg:block"
        >
          <Star className="w-6 h-6 text-amber-300 fill-amber-200" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-36 left-[48%]"
        >
          <Sparkles className="w-5 h-5 text-sky-400" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>বিশ্বস্ত ও দ্রুত Facebook Star Service</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              Facebook Star <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600">লাগবে?</span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.a
                id="hero-primary-cta"
                href="#packages"
                onClick={scrollToPackages}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-shadow hover:shadow-xl"
              >
                <span>এখনই Star কিনুন</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                id="hero-secondary-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-emerald-700 border-2 border-emerald-500/30 hover:border-emerald-500 font-bold text-base shadow-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                <span>WhatsApp-এ যোগাযোগ করুন</span>
              </motion.a>
            </motion.div>

            {/* Quick Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80"
            >
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>১০০% নিরাপদ ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>দ্রুত প্রসেসিং</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold">
                <MessageCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>সরাসরি WhatsApp সাপোর্ট</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-amber-400/20 to-sky-400/20 blur-2xl -z-10 scale-110" />

              {/* Central Card with Brand Logo & 3D Visual */}
              <div className="relative rounded-[28px] bg-gradient-to-b from-[#08214D] via-[#0B2A63] to-[#051838] p-6 sm:p-8 text-white shadow-2xl shadow-blue-950/30 border border-blue-400/30 overflow-hidden">
                {/* Visual Ambient Elements */}
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-blue-500/30 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-amber-400/20 blur-xl" />

                {/* Main Logo Container */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-5 group">
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-blue-400 to-amber-300 shadow-2xl flex items-center justify-center overflow-hidden"
                    >
                      <BrandLogo alt="FB Star Lagbe Logo" />
                    </motion.div>
                    {/* Floating mini badge on logo */}
                    <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950" />
                      <span>BEST RATE</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    FB Star <span className="text-amber-400">Lagbe</span>
                  </h3>
                  <p className="text-sky-200 text-sm mt-1 font-medium">
                    সহজ • নির্ভরযোগ্য • সাশ্রয়ী প্যাকেজ
                  </p>

                  {/* Highlight Mini Ticker */}
                  <div className="w-full mt-6 grid grid-cols-2 gap-3 pt-5 border-t border-blue-500/30">
                    <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs text-center">
                      <span className="block text-xs text-blue-200 font-medium">শুরু মাত্র</span>
                      <span className="text-lg sm:text-xl font-extrabold text-amber-300">৳৪০০</span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs text-center">
                      <span className="block text-xs text-blue-200 font-medium">সর্বোচ্চ প্যাক</span>
                      <span className="text-lg sm:text-xl font-extrabold text-amber-300">২০,০০০ Star</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
