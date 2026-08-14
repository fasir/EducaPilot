import React from 'react';

interface EducaPilotLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const EducaPilotLogo: React.FC<EducaPilotLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  // Height sizing
  const heightClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-11',
    xl: 'h-14'
  }[size];

  // Pick logo based on variant
  // 'light' -> logo-white.png (for dark backgrounds)
  // 'dark' -> logo-darck.png (for light backgrounds)
  // 'auto' -> switches with dark: classes
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center ${className}`}>
      {variant === 'auto' ? (
        <>
          <img
            src="/images/logo-darck.png"
            alt="EducaPilot"
            className={`${heightClasses} w-auto object-contain dark:hidden transition-transform duration-300 group-hover:scale-105`}
          />
          <img
            src="/images/logo-white.png"
            alt="EducaPilot"
            className={`${heightClasses} w-auto object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105`}
          />
        </>
      ) : (
        <img
          src={isLight ? '/images/logo-white.png' : '/images/logo-darck.png'}
          alt="EducaPilot"
          className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      )}
    </div>
  );
};

