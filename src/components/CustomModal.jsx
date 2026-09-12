import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

export const CustomModal = ({ isOpen, onClose, onConfirm, title, message, buttonText = "Back to Registration", children }) => {
  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (onConfirm) {
      onConfirm();
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-10 sm:pt-16 bg-amber-950/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-gradient-to-b from-[#FFF9EE] via-[#FFF3D6] to-[#FFE8B8] rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-400 text-center overflow-hidden -translate-y-5 mt-4 sm:mt-8 my-auto"
        >
          {/* Top Marigold Garlands */}
          <div className="absolute -top-3 left-0 right-0 flex justify-between px-4 opacity-90">
            <img src="/assets/images/marigold.png" alt="Marigold" className="w-10 h-10 animate-bounce" />
            <img src="/assets/images/marigold.png" alt="Marigold" className="w-10 h-10 animate-bounce delay-100" />
            <img src="/assets/images/marigold.png" alt="Marigold" className="w-10 h-10 animate-bounce delay-200" />
          </div>

          {/* Close Icon Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 text-amber-800 hover:text-amber-950 hover:bg-amber-200/50 rounded-full transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Central Vinayagar PNG & Diya Illustration */}
          <div className="relative mt-2 mb-4 flex justify-center items-center">
            <img
              src="/assets/images/diya.png"
              alt="Diya"
              className="w-12 h-auto absolute left-6 top-1/2 -translate-y-1/2 animate-diya-glow"
            />
            <img
              src="/assets/images/vinayagar.png"
              alt="Lord Vinayagar"
              className="w-28 h-auto drop-shadow-lg mx-auto transform hover:scale-105 transition-transform"
            />
            <img
              src="/assets/images/diya.png"
              alt="Diya"
              className="w-12 h-auto absolute right-6 top-1/2 -translate-y-1/2 animate-diya-glow scale-x-[-1]"
            />
          </div>

          {/* Modal Header */}
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-amber-950 mb-2">
            {title || "Eligible Age Notice"}
          </h3>

          {/* Modal Message */}
          <div className="bg-amber-100/80 rounded-2xl p-4 mb-4 border border-amber-300 shadow-inner text-left sm:text-center">
            <p className="text-amber-900 font-medium text-xs sm:text-sm leading-relaxed">
              "{message || "This competition is specially designed for children aged 3–5 years."}"
            </p>
          </div>

          {children}

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleButtonClick}
            className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 border-2 border-yellow-300 cursor-pointer flex items-center justify-center gap-2 mt-4"
          >
            <span>{buttonText}</span>
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
