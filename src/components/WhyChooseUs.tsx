import { Star, Zap, CreditCard, Smartphone, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 'easy-order',
      icon: Star,
      title: 'সহজ অর্ডার প্রক্রিয়া',
      description: 'এক ক্লিকেই WhatsApp-এর মাধ্যমে অর্ডার।',
      iconColor: 'text-amber-500 bg-amber-50 border-amber-200',
    },
    {
      id: 'fast-contact',
      icon: Zap,
      title: 'দ্রুত যোগাযোগ',
      description: 'সরাসরি WhatsApp Support।',
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      id: 'transparent-pricing',
      icon: CreditCard,
      title: 'পরিষ্কার মূল্য',
      description: 'প্রতিটি Package-এর মূল্য স্পষ্টভাবে দেওয়া থাকবে।',
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      id: 'mobile-friendly',
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'মোবাইল থেকেই সহজে অর্ডার করা যাবে।',
      iconColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      id: 'direct-support',
      icon: Users,
      title: 'Direct Support',
      description: 'প্রয়োজনে সরাসরি আমাদের সাথে যোগাযোগ করুন।',
      iconColor: 'text-sky-600 bg-sky-50 border-sky-200',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
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
            আমাদের বৈশিষ্ট্য
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            কেন FB Star Lagbe?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            ঝামেলামুক্ত অভিজ্ঞতা ও সরাসরি যোগাযোগের মাধ্যমে নির্ভরযোগ্য সেবা
          </p>
        </motion.div>

        {/* Feature Cards Grid (5 cards cleanly distributed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                id={`feature-card-${item.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${item.iconColor}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
