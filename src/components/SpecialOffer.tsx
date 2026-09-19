import { Star, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function SpecialOffer() {
  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-r from-[#0A224D] via-[#0E387A] to-[#0A224D] text-white">
      {/* Decorative background stars */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-sky-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Large Yellow/Gold Animated Star Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center justify-center mb-6"
        >
          <div className="absolute w-28 h-28 rounded-full bg-amber-400/30 blur-xl animate-pulse" />
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative p-5 rounded-3xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 shadow-2xl shadow-amber-500/40"
          >
            <Star className="w-14 h-14 sm:w-16 sm:h-16 text-slate-950 fill-slate-950" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
        >
          Facebook Star কিনুন সহজেই
        </motion.h2>

        {/* Subtitle / Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-xl text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          কোনো জটিলতা নয়। আপনার পছন্দের Star Package নির্বাচন করুন এবং সরাসরি WhatsApp-এ অর্ডার করুন।
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <motion.a
            id="special-offer-cta-btn"
            href="#packages"
            onClick={scrollToPackages}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 transition-shadow"
          >
            <span>Star Package দেখুন</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
