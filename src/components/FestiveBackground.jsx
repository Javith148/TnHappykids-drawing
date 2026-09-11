import React from 'react';

export const FestiveBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-festive-pattern overflow-hidden">


      {/* Floating Marigold Flowers in Background (Symmetrical Equal Height) */}
      <img
        src="/assets/images/marigold.png"
        alt="Marigold Garland Left"
        className="absolute top-36 left-4 sm:left-8 w-16 sm:w-24 pointer-events-none opacity-75 z-0 animate-float-slow"
      />
      <img
        src="/assets/images/marigold.png"
        alt="Marigold Garland Right"
        className="absolute top-36 right-4 sm:right-8 w-16 sm:w-24 pointer-events-none opacity-75 z-0 animate-float-reverse"
      />

      {/* Bottom Center Kolam Motif Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 pointer-events-none flex justify-center">
        <img
          src="/assets/images/kolam.png"
          alt="Kolam Floor Pattern"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
