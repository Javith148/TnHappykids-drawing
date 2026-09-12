import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Trophy, Star, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const RewardCard = ({ childName = 'Little Artist', points = 100, onComplete }) => {
  const [displayedPoints, setDisplayedPoints] = useState(0);

  useEffect(() => {
    // Fire festive confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#EA580C', '#10B981', '#FFD700', '#EC4899', '#3B82F6'],
    });

    // Counting animation 0 -> 100
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / points));

    const timer = setInterval(() => {
      start += 1;
      setDisplayedPoints(start);
      if (start >= points) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [points]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-b from-[#FFFBF0] via-[#FFF3D1] to-[#FFE7AA] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400 text-center relative overflow-hidden">
      {/* Background Kolam Watermark */}
      <img
        src="/assets/images/kolam.png"
        alt="Kolam Background"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-10 pointer-events-none animate-spin-slow"
      />

      {/* Marigold Corner Accents */}
      <img
        src="/assets/images/marigold.png"
        alt="Marigold"
        className="absolute top-3 left-3 w-12 h-12 animate-bounce"
      />
      <img
        src="/assets/images/marigold.png"
        alt="Marigold"
        className="absolute top-3 right-3 w-12 h-12 animate-bounce delay-150"
      />

      {/* TN Happy Kids Logo */}
      <img
        src="/assets/images/logo.png"
        alt="TN Happy Kids Logo"
        className="h-12 w-auto mx-auto mb-3 bg-white/90 p-1.5 rounded-2xl shadow-sm"
      />

      {/* Header */}
      <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-amber-950 mb-1">
        Congratulations, {childName}!
      </h2>
      <p className="text-sm sm:text-base text-amber-900 font-semibold mb-6">
        You are a Star Participant in the Vinayagar Chaturthi Drawing Competition!
      </p>

      {/* Vinayagar PNG & Diya Graphic */}
      <div className="relative my-4 flex justify-center items-center">
        <motion.img
          src="/assets/images/diya.png"
          alt="Diya Left"
          className="w-14 sm:w-16 h-auto absolute left-6 sm:left-12 animate-diya-glow"
        />
        <motion.img
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          src="/assets/images/vinayagar.png"
          alt="Lord Vinayagar"
          className="w-40 sm:w-52 h-auto drop-shadow-2xl mx-auto"
        />
        <motion.img
          src="/assets/images/diya.png"
          alt="Diya Right"
          className="w-14 sm:w-16 h-auto absolute right-6 sm:right-12 animate-diya-glow scale-x-[-1]"
        />
      </div>

      {/* Reward Points Box */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="my-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 shadow-xl border-2 border-yellow-300 relative overflow-hidden"
      >
        <div className="absolute top-2 right-4 opacity-20">
          <Trophy className="w-24 h-24 text-yellow-100" />
        </div>

        <span className="inline-block px-3 py-1 bg-white/20 text-yellow-100 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          Special Reward Unlocked
        </span>

        <h3 className="text-lg font-bold text-amber-100 mb-1">Your Total Reward Points</h3>

        <div className="font-heading text-5xl sm:text-6xl font-extrabold text-yellow-200 tracking-wider flex items-center justify-center gap-2 drop-shadow-md">
          <Star className="w-10 h-10 fill-yellow-300 text-yellow-300 animate-spin-slow" />
          <span>{displayedPoints}</span>
          <span className="text-2xl text-yellow-100 font-semibold">PTS</span>
        </div>

        <p className="text-xs text-amber-100/90 mt-2 font-medium">
          🌟 100 Reward Points credited to {childName}'s TN Happy Kids Profile!
        </p>
      </motion.div>

      {/* Complete Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-heading font-extrabold text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 cursor-pointer border-2 border-emerald-300 flex items-center justify-center gap-2"
      >
        <span>Complete Registration Flow</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};
