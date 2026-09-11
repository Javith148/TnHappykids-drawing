import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroAnimation = ({ onComplete }) => {
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!skipped) {
        onComplete();
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [onComplete, skipped]);

  const handleSkip = () => {
    setSkipped(true);
    onComplete();
  };

  if (skipped) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF8EA] via-[#FFEFC6] to-[#FFF3D1] overflow-hidden select-none"
      >
        {/* Skip Intro button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 border border-amber-500/40 rounded-full text-xs font-semibold backdrop-blur-md transition-all shadow-sm flex items-center gap-1 cursor-pointer"
        >
          <span>Skip Intro</span>
          <span>&rarr;</span>
        </button>

        {/* 1. Festive Background Pattern & Kolam Motifs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <img
            src="/assets/images/kolam.png"
            alt="Kolam Pattern"
            className="w-[600px] h-[600px] object-contain animate-spin-slow opacity-60"
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="relative z-10 text-center max-w-lg px-6 flex flex-col items-center">
          {/* 4. Diyas glowing softly around */}
          <div className="flex justify-center items-center gap-12 mb-4">
            <motion.img
              src="/assets/images/diya.png"
              alt="Diya Left"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              className="w-16 sm:w-20 h-auto animate-diya-glow"
            />

            {/* 5. Lord Vinayagar PNG smoothly appearing */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <img
                src="/assets/images/vinayagar.png"
                alt="Lord Vinayagar"
                className="w-44 sm:w-56 h-auto drop-shadow-2xl mx-auto"
              />
              <motion.img
                src="/assets/images/modak.png"
                alt="Modak Sweet"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.3, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 w-12 sm:w-16 h-auto drop-shadow-lg"
              />
            </motion.div>

            <motion.img
              src="/assets/images/diya.png"
              alt="Diya Right"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              className="w-16 sm:w-20 h-auto animate-diya-glow scale-x-[-1]"
            />
          </div>

          {/* 6. TN Happy Kids logo appears */}
          <motion.img
            src="/assets/images/logo.png"
            alt="TN Happy Kids Logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7 }}
            className="w-36 sm:w-44 h-auto mx-auto mb-2 drop-shadow"
          />

          {/* 7. Competition title appears */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.7 }}
            className="mb-6"
          >

            <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-900 leading-tight">
              Vinayagar Chaturthi <br />
              <span className="text-orange-600">Kids Drawing Competition</span>
            </h1>
          </motion.div>

          {/* 8. CTA button appears */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.0, duration: 0.6, type: "spring" }}
            onClick={onComplete}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-full font-bold text-lg shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 cursor-pointer flex items-center gap-2 border-2 border-yellow-300"
          >
            <span>Enter Celebration</span>
            <span className="text-xl">✨</span>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
