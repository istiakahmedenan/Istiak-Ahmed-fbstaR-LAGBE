import { SiteConfig, StarPackage } from '../types';

export const SITE_CONFIG: SiteConfig = {
  name: 'FB Star Lagbe',
  domain: 'fbstarlagbe.online',
  logoUrl: '/logo.png', // local optimized logo, fallbacks to https://i.ibb.co.com/mVcH7jXZ/pixellab-2026-09-18-T19-04-51-Z.png
  ownerName: 'ইসতিয়াক আহামেদ ইনান',
  whatsappNumber: '8801902936977',
  whatsappDisplay: '+8801902936977',
  email: 'sherpurcyberagency@gmail.com',
  facebookPageUrl: 'https://www.facebook.com/share/1ECWA6jyKc/?mibextid=wwXIfr',
  generalInquiryMessage: 'আসসালামু আলাইকুম, আমি FB Star Lagbe সম্পর্কে জানতে চাই।',
};

export const STAR_PACKAGES: StarPackage[] = [
  {
    id: 'pkg-1000',
    name: '১,০০০ Facebook Star',
    stars: 1000,
    starsDisplay: '1000 Star',
    price: 400,
    priceDisplay: '৳400',
    badge: 'Starter',
    image: '/images/packages/pkg-1000.svg',
    whatsappMessage:
      'আসসালামু আলাইকুম, আমি FB Star Lagbe থেকে ১০০০ Facebook Star কিনতে চাই। Package Price: ৳400। আমার অর্ডারটি নিতে অনুগ্রহ করে সাহায্য করুন।',
  },
  {
    id: 'pkg-3000',
    name: '৩,০০০ Facebook Star',
    stars: 3000,
    starsDisplay: '3000 Star',
    price: 1000,
    priceDisplay: '৳1000',
    badge: 'Popular',
    image: '/images/packages/pkg-3000.svg',
    whatsappMessage:
      'আসসালামু আলাইকুম, আমি FB Star Lagbe থেকে ৩০০০ Facebook Star কিনতে চাই। Package Price: ৳1000। আমার অর্ডারটি নিতে অনুগ্রহ করে সাহায্য করুন।',
  },
  {
    id: 'pkg-5000',
    name: '৫,০০০ Facebook Star',
    stars: 5000,
    starsDisplay: '5000 Star',
    price: 1200,
    priceDisplay: '৳1200',
    popular: true,
    badge: 'Best Value',
    image: '/images/packages/pkg-5000.svg',
    whatsappMessage:
      'আসসালামু আলাইকুম, আমি FB Star Lagbe থেকে ৫০০০ Facebook Star কিনতে চাই। Package Price: ৳1200। আমার অর্ডারটি নিতে অনুগ্রহ করে সাহায্য করুন।',
  },
  {
    id: 'pkg-10000',
    name: '১০,০০০ Facebook Star',
    stars: 10000,
    starsDisplay: '10000 Star',
    price: 1500,
    priceDisplay: '৳1500',
    bestValue: true,
    badge: 'Creator Pack',
    image: '/images/packages/pkg-10000.svg',
    whatsappMessage:
      'আসসালামু আলাইকুম, আমি FB Star Lagbe থেকে ১০০০০ Facebook Star কিনতে চাই। Package Price: ৳1500। আমার অর্ডারটি নিতে অনুগ্রহ করে সাহায্য করুন।',
  },
  {
    id: 'pkg-20000',
    name: '২০,০০০ Facebook Star',
    stars: 20000,
    starsDisplay: '20000 Star',
    price: 1800,
    priceDisplay: '৳1800',
    badge: 'Pro Mega Pack',
    image: '/images/packages/pkg-20000.svg',
    whatsappMessage:
      'আসসালামু আলাইকুম, আমি FB Star Lagbe থেকে ২০০০০ Facebook Star কিনতে চাই। Package Price: ৳1800। আমার অর্ডারটি নিতে অনুগ্রহ করে সাহায্য করুন।',
  },
];

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}
