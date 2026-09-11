import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Image, Video, CheckCircle2, ArrowRight, X, Clock, Sparkles } from 'lucide-react';

export const RegisterInstructionModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(5);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          navigate('/register');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, navigate, onClose]);

  const handleProceed = () => {
    onClose();
    navigate('/register');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-400 text-center overflow-hidden"
        >
          {/* Top Decorative Sparkle */}
          <div className="mx-auto w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
            <Sparkles className="w-8 h-8 text-orange-600 animate-pulse" />
          </div>

          {/* Modal Header Title */}
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-950 mb-2">
            Get Your Files Ready! 🎨🎥
          </h3>
          <p className="text-amber-900/80 text-xs sm:text-sm font-semibold mb-5">
            Please keep your child's drawing photo and activity video clip ready on your device before proceeding!
          </p>

          {/* Checklist Card */}
          <div className="bg-gradient-to-b from-amber-50 to-orange-50/60 rounded-2xl p-4 border border-amber-300 text-left space-y-3 mb-6 shadow-inner">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 border-b border-amber-200 pb-1">
              Required Upload Files:
            </h4>

            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Image className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-amber-950 text-xs sm:text-sm block">
                  1. Vinayagar Drawing Photo 🖼️
                </span>
                <span className="text-amber-800/80 text-[11px] font-medium block">
                  Photo of your child's Vinayagar artwork.
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-amber-950 text-xs sm:text-sm block">
                  2. Drawing Activity Video Clip 🎥
                </span>
                <span className="text-amber-800/80 text-[11px] font-medium block">
                  Short 10-second video clip of your child drawing.
                </span>
              </div>
            </div>
          </div>

          {/* 5-Second Countdown Timer Indicator */}
          <div className="mb-6 bg-amber-100 border border-amber-300 rounded-full px-4 py-2 flex items-center justify-between text-xs font-bold text-amber-900">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-600 animate-spin" />
              <span>Redirecting in <strong className="text-orange-600 font-extrabold text-sm">{timeLeft}s</strong>...</span>
            </div>
            <div className="w-20 bg-amber-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-orange-500 h-full transition-all duration-1000 ease-linear"
                style={{ width: `${(timeLeft / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Proceed Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleProceed}
            className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-heading font-extrabold rounded-2xl text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 cursor-pointer border-2 border-yellow-300 flex items-center justify-center gap-2"
          >
            <span>Got It, Continue to Register</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
