import { MessageCircle, Mail, Star } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/packages';
import BrandLogo from './BrandLogo';
import { FacebookIcon } from './FacebookIcon';

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.generalInquiryMessage);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-28 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-blue-500 to-amber-400 shadow-md flex items-center justify-center overflow-hidden">
                <BrandLogo alt={SITE_CONFIG.name} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                FB Star <span className="text-amber-400">Lagbe</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Facebook Star Service সহজ ও সুবিধাজনকভাবে অর্ডার করার জন্য আমাদের সাথে যোগাযোগ করুন।
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>নিরাপদ ও নির্ভরযোগ্য সেবা</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, 'home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => scrollTo(e, 'packages')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Star Packages
                </a>
              </li>
              <li>
                <a
                  href="#how-to-order"
                  onClick={(e) => scrollTo(e, 'how-to-order')}
                  className="hover:text-amber-400 transition-colors"
                >
                  How to Order
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: <span className="text-slate-200 font-mono font-medium">{SITE_CONFIG.whatsappDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  Email: <span className="text-slate-200 font-medium">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FacebookIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={SITE_CONFIG.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook Page: <span className="text-slate-200 font-medium">FB Star Lagbe</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Domain & Security */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-blue-400">
              Website Information
            </h3>
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
              <p className="text-slate-300">
                <strong className="text-white">Domain:</strong> {SITE_CONFIG.domain}
              </p>
              <p className="text-slate-400 leading-relaxed">
                পছন্দের প্যাকেজ নির্বাচন করে এক ক্লিকেই WhatsApp-এর মাধ্যমে অর্ডার সম্পন্ন করুন।
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer on independence */}
        <div className="pt-8 pb-4 border-t border-slate-800/80 text-[11px] text-slate-400 text-center leading-relaxed max-w-3xl mx-auto">
          Disclaimer: FB Star Lagbe is an independent third-party service provider facilitating Facebook Star top-ups and assistance for content creators and profiles in Bangladesh. We are not an official property of or partnered with Meta Platforms, Inc.
        </div>

        {/* Bottom Bar with Owner Name and Copyright */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div className="font-semibold text-slate-300">
            Owner: <span className="text-amber-400 font-bold">ইসতিয়াক আহামেদ ইনান</span>
          </div>

          <div>
            © 2026 FB Star Lagbe. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
