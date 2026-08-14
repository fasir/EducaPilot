import React from 'react';

interface EducaPilotLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const EducaPilotLogo: React.FC<EducaPilotLogoProps> = ({
  className = '',
  variant = 'auto',
  showText = true,
  size = 'md',
  showTagline = false
}) => {
  // Dimensions based on size
  const iconDimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 50, height: 50 },
    xl: { width: 64, height: 64 }
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }[size];

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-xs'
  }[size];

  // Unique gradient IDs to prevent DOM collision
  const idPrefix = 'ep-logo-grad';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Precision Brand Icon matching official logo geometry */}
      <svg
        width={iconDimensions.width}
        height={iconDimensions.height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Top Diamond Cyan/Sky Gradient */}
          <linearGradient id={`${idPrefix}-top`} x1="15" y1="15" x2="105" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="45%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          {/* Left Ribbon Purple/Violet Gradient */}
          <linearGradient id={`${idPrefix}-left`} x1="10" y1="50" x2="60" y2="115" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>

          {/* Bottom Fold Cyan to Indigo Gradient */}
          <linearGradient id={`${idPrefix}-bottom`} x1="20" y1="80" x2="110" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="60%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Subtle Glow Filter */}
          <filter id={`${idPrefix}-glow`} x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#6366f1" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer Group with subtle shadow */}
        <g filter={`url(#${idPrefix}-glow)`}>
          {/* Top Graduation Cap Diamond Surface */}
          <path
            d="M 60 14 L 108 38 L 60 62 L 12 38 Z"
            fill={`url(#${idPrefix}-top)`}
          />
          {/* Top Diamond Highlight Edge */}
          <path
            d="M 12 38 L 60 14 L 108 38"
            stroke="#BAE6FD"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Left Fold Body Ribbon */}
          <path
            d="M 12 38 L 60 62 L 60 76 L 36 64 C 20 56 12 68 12 82 L 12 94 C 12 104 22 110 32 106 L 60 92 L 60 106 L 28 118 C 14 122 2 112 2 96 L 2 52 C 2 44 6 39 12 38 Z"
            fill={`url(#${idPrefix}-left)`}
          />

          {/* White Ribbon Cutout / Bookmark in the Left Fold */}
          <path
            d="M 22 55 L 22 72 L 28 67 L 34 72 L 34 55 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />

          {/* Right Lower Fold connecting to the bottom */}
          <path
            d="M 60 62 L 104 40 C 108 42 110 46 110 52 L 110 74 C 110 84 102 92 92 96 L 60 106 L 60 92 L 88 82 C 94 80 98 74 98 68 L 98 56 L 60 76 Z"
            fill={`url(#${idPrefix}-bottom)`}
          />
        </g>
      </svg>

      {/* Brand Wordmark Text */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div
            className={`font-sans font-bold tracking-tight lowercase leading-none flex items-center ${textSizes} ${
              variant === 'light'
                ? 'text-white'
                : variant === 'dark'
                ? 'text-slate-900'
                : 'text-slate-900 dark:text-white'
            }`}
          >
            <span>educa</span>
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-bold">
              pilot
            </span>
          </div>

          {showTagline && (
            <span
              className={`font-semibold tracking-wider uppercase mt-0.5 ${taglineSizes} ${
                variant === 'light'
                  ? 'text-slate-400'
                  : variant === 'dark'
                  ? 'text-slate-500'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Unified Education OS
            </span>
          )}
        </div>
      )}
    </div>
  );
};
