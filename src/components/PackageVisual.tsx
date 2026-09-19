import { Star, ShoppingBag } from 'lucide-react';
import { FacebookIcon } from './FacebookIcon';

interface PackageVisualProps {
  stars: number;
  starsDisplay: string;
  priceDisplay: string;
  popular?: boolean;
  bestValue?: boolean;
}

export default function PackageVisual({
  stars,
  starsDisplay,
  priceDisplay,
  popular,
  bestValue,
}: PackageVisualProps) {
  const isHighTier = stars >= 10000;

  return (
    <div className="relative w-full aspect-[16/8.5] overflow-hidden select-none bg-gradient-to-b from-[#031B3D] via-[#07366B] to-[#02132B]">
      {/* Background Light Beam Streaks */}
      <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent rotate-45 transform blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tl from-amber-400 via-blue-600 to-transparent rotate-12 transform blur-xl" />
      </div>

      {/* Top Left Price Pill Badge */}
      <div className="absolute top-1.5 left-1.5 z-20">
        <div className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-black shadow-sm shadow-emerald-950/40 border border-emerald-300/40 tracking-tight leading-none">
          <span>{priceDisplay}</span>
        </div>
      </div>

      {/* Floating Facebook Mini Cube Right */}
      <div className="absolute top-1.5 right-1.5 z-10 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-gradient-to-br from-[#1877F2] to-[#0A58CA] text-white flex items-center justify-center shadow-sm shadow-blue-950/60 border border-sky-400/40">
          <FacebookIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="#FFFFFF" />
        </div>
      </div>

      {/* Central Content Stage */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5 z-10">
        {/* Glow behind star and numbers */}
        <div className="absolute w-20 h-20 rounded-full bg-blue-400/15 blur-lg pointer-events-none" />

        <div className="relative flex items-center justify-center gap-1.5">
          {/* 3D Gold Star Vector */}
          <div className="relative transform group-hover:scale-110 transition-transform duration-300 shrink-0">
            <div className="absolute inset-0 bg-amber-400/30 blur-sm rounded-full" />
            <svg
              viewBox="0 0 100 100"
              className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id={`starGold-${stars}`} cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFF9C4" />
                  <stop offset="35%" stopColor="#FFD54F" />
                  <stop offset="70%" stopColor="#FFA000" />
                  <stop offset="100%" stopColor="#E65100" />
                </radialGradient>
              </defs>
              <polygon
                points="50,6 63,33 93,36 71,56 78,85 50,70 22,85 29,56 7,36 37,33"
                fill={`url(#starGold-${stars})`}
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <polygon
                points="50,12 60,33 82,36 65,51 50,44"
                fill="#FFFFFF"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Bold Star Count & Label */}
          <div className="text-left flex flex-col justify-center">
            <span
              className={`font-black tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] leading-none ${
                isHighTier ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
              }`}
            >
              {stars}
            </span>
            <span className="font-black text-amber-400 tracking-wider text-[10px] sm:text-[11px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-none mt-0.5">
              STAR
            </span>
          </div>
        </div>

        {/* Yellow Banner ribbon: FACEBOOK STAR */}
        <div className="mt-1">
          <div className="px-2 py-0.5 rounded bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-[8px] sm:text-[9px] tracking-wider uppercase shadow-xs border-y border-amber-200 leading-none">
            FACEBOOK STAR
          </div>
        </div>
      </div>

      {/* Subtle Star Twinkles */}
      <div className="absolute top-1 right-8 text-amber-400/60 pointer-events-none">
        <Star className="w-1.5 h-1.5 fill-amber-400" />
      </div>
    </div>
  );
}
