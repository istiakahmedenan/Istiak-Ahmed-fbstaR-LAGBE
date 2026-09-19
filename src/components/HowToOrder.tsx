import { PackageCheck, MousePointerClick, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowToOrder() {
  const steps = [
    {
      num: '০১',
      title: 'Package নির্বাচন করুন',
      desc: 'আপনার প্রয়োজন অনুযায়ী Facebook Star Package নির্বাচন করুন।',
      icon: PackageCheck,
      color: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/20',
      accentBg: 'bg-blue-50 text-blue-600',
    },
    {
      num: '০২',
      title: 'Buy Now চাপুন',
      desc: 'পছন্দের Package-এর Buy Now button-এ click করুন।',
      icon: MousePointerClick,
      color: 'from-amber-500 to-amber-600',
      shadow: 'shadow-amber-500/20',
      accentBg: 'bg-amber-50 text-amber-600',
    },
    {
      num: '০৩',
      title: 'WhatsApp-এ অর্ডার করুন',
      desc: 'WhatsApp-এ অটো মেসেজ আসবে এবং আমাদের সাথে অর্ডার সম্পন্ন করুন।',
      icon: Send,
      color: 'from-emerald-500 to-green-600',
      shadow: 'shadow-emerald-500/20',
      accentBg: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section id="how-to-order" className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full">
            সহজ ৩ ধাপ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            কীভাবে অর্ডার করবেন?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            কোনো জটিলতা ছাড়াই মাত্র কয়েক সেকেন্ডে আপনার কাঙ্ক্ষিত Star অর্ডার করুন
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                id={`how-to-order-step-${idx + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white rounded-2xl p-7 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-start"
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between w-full mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} ${step.shadow} shadow-lg flex items-center justify-center text-white`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </motion.div>
                  <span className="text-3xl font-black text-slate-200">{step.num}</span>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <span>ধাপ {step.num} সম্পূর্ণ করুন</span>
                  {idx < 2 && <ArrowRight className="w-3.5 h-3.5 text-slate-400 ml-auto hidden md:block" />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
