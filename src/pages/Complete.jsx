import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, Home, Sparkles, Award, User, Calendar, FileText, RefreshCw } from 'lucide-react';
import { FestiveBackground } from '../components/FestiveBackground';
import { useCompetition } from '../context/CompetitionContext';

export const Complete = () => {
  const navigate = useNavigate();
  const { data, resetAll } = useCompetition();

  useEffect(() => {
    // Grand final celebratory confetti
    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.4 },
      colors: ['#F59E0B', '#EA580C', '#10B981', '#FFD700', '#EC4899'],
    });
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const handleStartNew = () => {
    resetAll();
    navigate('/register');
  };

  return (
    <FestiveBackground>
      <div className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400 text-center relative overflow-hidden"
        >
          {/* Top Marigold Garlands */}
          <div className="absolute -top-3 left-0 right-0 flex justify-between px-6 opacity-90">
            <img src="/assets/images/marigold.png" alt="Marigold" className="w-10 h-10 animate-bounce" />
            <img src="/assets/images/marigold.png" alt="Marigold" className="w-10 h-10 animate-bounce delay-100" />
            <img src="/assets/images/marigold.png" alt="Marigold" className="w-10 h-10 animate-bounce delay-200" />
          </div>

          {/* Logo & Banner */}
          <img
            src="/assets/images/logo.png"
            alt="TN Happy Kids Logo"
            className="h-14 w-auto mx-auto mb-3 bg-white p-1.5 rounded-2xl shadow-sm"
          />

          <span className="inline-flex items-center gap-1.5 px-4 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Participation Completed</span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-amber-950 mb-2">
            Thank You, Little Artist! 🎉
          </h2>

          <p className="text-amber-900/80 text-sm sm:text-base font-medium mb-6">
            "Thank you for participating in the TN Happy Kids Vinayagar Chaturthi Drawing Competition."
          </p>

          {/* Lord Vinayagar PNG */}
          <div className="relative mb-6 flex justify-center items-center">
            <img
              src="/assets/images/diya.png"
              alt="Diya Left"
              className="w-12 h-auto absolute left-6 animate-diya-glow"
            />
            <img
              src="/assets/images/vinayagar.png"
              alt="Lord Vinayagar"
              className="w-36 h-auto drop-shadow-xl mx-auto animate-float-slow"
            />
            <img
              src="/assets/images/diya.png"
              alt="Diya Right"
              className="w-12 h-auto absolute right-6 animate-diya-glow scale-x-[-1]"
            />
          </div>

          {/* Registration Summary Card */}
          <div className="bg-gradient-to-b from-amber-50 to-amber-100/70 rounded-2xl p-5 border border-amber-300 text-left mb-6 shadow-inner space-y-3">
            <h4 className="font-heading font-extrabold text-amber-950 text-sm uppercase tracking-wider border-b border-amber-300 pb-2">
              Submission Details
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <span className="text-amber-800/70 font-semibold block text-xs">Child Name</span>
                <span className="font-bold text-amber-950 truncate block">
                  {data.childName || 'Aadhya'}
                </span>
              </div>
              <div>
                <span className="text-amber-800/70 font-semibold block text-xs">Age</span>
                <span className="font-bold text-amber-950 block">
                  {data.childAge ? `${data.childAge} Years` : '4 Years'}
                </span>
              </div>
              <div>
                <span className="text-amber-800/70 font-semibold block text-xs">Reward Points</span>
                <span className="font-extrabold text-orange-600 block">
                  100 Points 🌟
                </span>
              </div>
              <div>
                <span className="text-amber-800/70 font-semibold block text-xs">Completion Status</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block border border-emerald-300 text-xs">
                  Completed ✓
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleStartNew}
              className="flex-1 py-3.5 bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-amber-400"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Register Another Child</span>
            </button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBackHome}
              className="flex-1 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-heading font-extrabold rounded-2xl text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 cursor-pointer border-2 border-yellow-300 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </FestiveBackground>
  );
};
