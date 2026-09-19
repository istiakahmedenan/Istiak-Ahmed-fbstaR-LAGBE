import { useState } from 'react';
import { Star, MessageCircle, Check, Copy, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { STAR_PACKAGES, buildWhatsAppUrl } from '../data/packages';
import { StarPackage } from '../types';
import PackageVisual from './PackageVisual';
import AiAdvisorModal from './AiAdvisorModal';

export default function PackagesSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  const handleCopyMessage = (pkg: StarPackage, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(pkg.whatsappMessage);
    setCopiedId(pkg.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="packages" className="py-6 sm:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-7"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-bold">
              <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
              <span>সকল প্যাকেজ</span>
            </div>
            <button
              type="button"
              onClick={() => setIsAiModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
              <span>AI Advisor (প্যাকেজ বাছাই করুন)</span>
            </button>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
            Facebook Star Packages
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
            পছন্দের Star Package নির্বাচন করে সরাসরি WhatsApp-এ অর্ডার করুন
          </p>
        </motion.div>

        {/* Product Cards Grid: 5-column from sm (640px) up, 2-column on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5 lg:gap-3">
          {STAR_PACKAGES.map((pkg, index) => {
            const waUrl = buildWhatsAppUrl(pkg.whatsappMessage);
            const isHighlighted = pkg.popular || pkg.bestValue;

            return (
              <motion.div
                key={pkg.id}
                id={`package-card-${pkg.stars}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10px' }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className={`relative flex flex-col bg-white rounded-xl overflow-hidden border group star-card-glow ${
                  isHighlighted
                    ? 'border-blue-400 shadow-sm shadow-blue-500/10 ring-1 ring-blue-500/20'
                    : 'border-slate-200 shadow-xs'
                } ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                {/* Special Tag / Badge */}
                {pkg.badge && (
                  <div className="absolute top-1 right-1 z-20">
                    <span
                      className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black shadow-xs ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950'
                          : pkg.bestValue
                          ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white'
                          : 'bg-slate-900/80 backdrop-blur-md text-white'
                      }`}
                    >
                      <Star className="w-2 h-2 fill-current" />
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                {/* Top Image Banner / Package Visual */}
                <div className="relative w-full overflow-hidden">
                  <PackageVisual
                    stars={pkg.stars}
                    starsDisplay={pkg.starsDisplay}
                    priceDisplay={pkg.priceDisplay}
                    popular={pkg.popular}
                    bestValue={pkg.bestValue}
                  />
                  {/* Subtle inner shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-2 sm:p-2.5 flex-1 flex flex-col justify-between space-y-1.5">
                  <div>
                    {/* Yellow Star Badge & Title */}
                    <div className="flex items-center justify-between gap-1">
                      <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-slate-900">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-400 shrink-0" />
                        <span>{pkg.starsDisplay}</span>
                      </div>
                      <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">
                        অল-ইন-ওয়ান
                      </span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="pt-1 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-[10px] font-medium text-slate-400 leading-none">মূল্য:</span>
                    <span className="text-sm sm:text-base font-black text-blue-900 tracking-tight">
                      {pkg.priceDisplay}
                    </span>
                  </div>

                  {/* Action Buttons: Buy Now + Copy in one line */}
                  <div className="flex items-center gap-1 pt-0.5">
                    {/* Direct Buy Now WhatsApp Button */}
                    <motion.a
                      id={`buy-now-btn-${pkg.stars}`}
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-xs shadow-xs transition-shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span>Buy Now</span>
                    </motion.a>

                    {/* Secondary helper: Copy message icon button */}
                    <button
                      type="button"
                      onClick={(e) => handleCopyMessage(pkg, e)}
                      id={`copy-msg-btn-${pkg.stars}`}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer shrink-0"
                      title={copiedId === pkg.id ? 'কপি হয়েছে!' : 'WhatsApp মেসেজ কপি করুন'}
                    >
                      {copiedId === pkg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Note Below Packages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 text-center p-3 rounded-xl bg-blue-50/70 border border-blue-100 max-w-xl mx-auto"
        >
          <p className="text-xs sm:text-sm text-blue-950 font-medium">
            💡 আপনার কাস্টম পরিমাণ Star প্রয়োজন হলে সরাসরি WhatsApp-এ মেসেজ দিন।
          </p>
        </motion.div>
      </div>

      {/* Gemini AI Advisor Modal */}
      <AiAdvisorModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </section>
  );
}
