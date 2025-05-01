import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="LeoAxis Logo" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;