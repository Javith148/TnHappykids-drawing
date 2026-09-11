import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Trophy, Gift, CheckCircle, Clock } from 'lucide-react';

export const AdTimer = ({ onComplete, durationSeconds = 30 }) => {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanSkip(true);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanSkip(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const progressPercent = ((durationSeconds - timeLeft) / durationSeconds) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto bg-gradient-to-b from-[#FFFDF7] via-[#FFF5DB] to-[#FFE9B3] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400 relative overflow-hidden">


      {/* Top Header Row with Timer & Close Button */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-300">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/logo.png"
            alt="TN Happy Kids Logo"
            className="h-10 sm:h-12 w-auto bg-white p-1 rounded-xl shadow-sm"
          />
          <div>
            <h4 className="font-heading font-extrabold text-amber-950 text-base sm:text-lg">
              TN Happy Kids Playschool
            </h4>
            <p className="text-xs text-amber-800 font-medium">
              Discover a Happy Learning Journey
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onComplete}
          className="p-2 bg-amber-200/80 hover:bg-amber-300 text-amber-950 rounded-full transition-colors cursor-pointer flex items-center justify-center border border-amber-400"
          title="Close Promotional Banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Promo Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
        {/* Playschool Banner Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 bg-white">
          <img
            src="/assets/images/playschool_banner.png"
            alt="TN Happy Kids Playschool"
            className="w-full h-52 sm:h-60 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Promo Text & Features */}
        <div className="flex flex-col justify-center">
          <span className="inline-block self-start px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            Admissions Open 2026 – 2027
          </span>

          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-amber-950 mb-3 leading-snug">
            Where Little Minds Bloom with Joy & Creativity! 🌟
          </h3>

          <ul className="space-y-2 text-xs sm:text-sm text-amber-900 mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Safe, joyful & nurturing child-centric environment</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Play-based interactive curriculum & activity zones</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Caring, experienced educators & state-of-the-art play tools</span>
            </li>
          </ul>

          <div className="p-3 bg-amber-100/90 rounded-2xl border border-amber-300 text-xs text-amber-900 font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
            <span>Visit your nearest TN Happy Kids center today!</span>
          </div>
        </div>
      </div>

      {/* 30-Second Timer Progress Section */}
      <div className="bg-white/90 rounded-2xl p-4 sm:p-6 border border-amber-300 shadow-inner flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-xs sm:text-sm font-bold text-amber-900 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-orange-500 animate-pulse" />
            {timeLeft > 0 ? 'Your reward is waiting...' : 'Reward Unlocked!'}
          </span>
          <span className="font-heading font-extrabold text-orange-600 text-sm sm:text-base">
            {timeLeft}s remaining
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-amber-100 rounded-full overflow-hidden mb-4 border border-amber-300">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={onComplete}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-4 rounded-2xl font-heading font-extrabold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
            canSkip || timeLeft === 0
              ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-orange-500/30 hover:shadow-orange-500/50 border-2 border-yellow-300'
              : 'bg-amber-300/80 text-amber-950 cursor-pointer border border-amber-400'
          }`}
        >
          <Gift className="w-6 h-6 text-yellow-200 animate-bounce" />
          <span>
            {canSkip || timeLeft === 0
              ? 'Continue to Rewards 🎉'
              : `Continue to Rewards (${timeLeft}s)`}
          </span>
        </motion.button>
      </div>
    </div>
  );
};
