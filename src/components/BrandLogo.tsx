import { useState } from 'react';
import { Star } from 'lucide-react';
import { SITE_CONFIG } from '../data/packages';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

const LOGO_SOURCES = [
  SITE_CONFIG.logoUrl, // '/logo.png'
  '/logo.webp',
  'https://i.ibb.co.com/mVcH7jXZ/pixellab-2026-09-18-T19-04-51-Z.png',
  '/favicon.png',
];

export default function BrandLogo({
  className = '',
  size = 'md',
  alt = SITE_CONFIG.name,
}: BrandLogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (sourceIndex < LOGO_SOURCES.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  // Fallback branded vector badge only if all image sources fail
  if (allFailed) {
    return (
      <div
        className={`rounded-full bg-gradient-to-tr from-[#0062E0] via-[#1877F2] to-[#00C6FF] flex flex-col items-center justify-center text-white shadow-md select-none ${className}`}
        aria-label={alt}
      >
        <Star className="w-1/2 h-1/2 text-amber-400 fill-amber-400 drop-shadow" />
        <span className="text-[9px] font-black tracking-tighter uppercase leading-none mt-0.5">
          STAR
        </span>
      </div>
    );
  }

  return (
    <img
      src={LOGO_SOURCES[sourceIndex]}
      alt={alt}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={`w-full h-full object-contain ${className}`}
    />
  );
}
