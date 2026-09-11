import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RefreshCw, ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';

export const DotActivity = ({ onComplete }) => {
  const [currentDotIndex, setCurrentDotIndex] = useState(0); // 0 to 49
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('Tap Dot #1 to start connecting Lord Vinayagar! ✏️');

  // 50 Dots forming the outer silhouette contour of Lord Vinayagar
  const dots = [
    // Crown (Mukut) Top & Upper Curve
    { id: 1, x: 300, y: 172, label: '1' },
    { id: 2, x: 320, y: 182, label: '2' },
    { id: 3, x: 340, y: 200, label: '3' },
    { id: 4, x: 358, y: 222, label: '4' },
    { id: 5, x: 338, y: 236, label: '5' },
    { id: 6, x: 318, y: 242, label: '6' },
    { id: 7, x: 298, y: 242, label: '7' },
    { id: 8, x: 278, y: 236, label: '8' },

    // Right Ear & Right Side Head
    { id: 9, x: 362, y: 254, label: '9' },
    { id: 10, x: 395, y: 250, label: '10' },
    { id: 11, x: 426, y: 262, label: '11' },
    { id: 12, x: 440, y: 288, label: '12' },
    { id: 13, x: 428, y: 325, label: '13' },
    { id: 14, x: 395, y: 348, label: '14' },
    { id: 15, x: 370, y: 346, label: '15' },

    // Right Arm & Hand (Holding Modak)
    { id: 16, x: 412, y: 318, label: '16' },
    { id: 17, x: 442, y: 328, label: '17' },
    { id: 18, x: 462, y: 345, label: '18' },
    { id: 19, x: 448, y: 375, label: '19' },
    { id: 20, x: 428, y: 400, label: '20' },
    { id: 21, x: 405, y: 435, label: '21' },

    // Right Knee & Body
    { id: 22, x: 385, y: 475, label: '22' },
    { id: 23, x: 425, y: 505, label: '23' },
    { id: 24, x: 432, y: 538, label: '24' },
    { id: 25, x: 395, y: 565, label: '25' },

    // Bottom Lotus Base
    { id: 26, x: 360, y: 578, label: '26' },
    { id: 27, x: 320, y: 585, label: '27' },
    { id: 28, x: 280, y: 585, label: '28' },
    { id: 29, x: 240, y: 578, label: '29' },

    // Left Foot & Knee
    { id: 30, x: 205, y: 565, label: '30' },
    { id: 31, x: 168, y: 538, label: '31' },
    { id: 32, x: 175, y: 505, label: '32' },
    { id: 33, x: 215, y: 475, label: '33' },

    // Left Hand & Arm (Blessing Hand)
    { id: 34, x: 195, y: 435, label: '34' },
    { id: 35, x: 172, y: 400, label: '35' },
    { id: 36, x: 152, y: 375, label: '36' },

    // Left Upper Arm & Hand (Holding Axe)
    { id: 37, x: 138, y: 345, label: '37' },
    { id: 38, x: 158, y: 328, label: '38' },
    { id: 39, x: 188, y: 318, label: '39' },

    // Left Ear & Left Side Head
    { id: 40, x: 230, y: 346, label: '40' },
    { id: 41, x: 205, y: 348, label: '41' },
    { id: 42, x: 172, y: 325, label: '42' },
    { id: 43, x: 160, y: 288, label: '43' },
    { id: 44, x: 174, y: 262, label: '44' },
    { id: 45, x: 205, y: 250, label: '45' },
    { id: 46, x: 238, y: 254, label: '46' },

    // Left Crown & Top Peak
    { id: 47, x: 242, y: 222, label: '47' },
    { id: 48, x: 260, y: 200, label: '48' },
    { id: 49, x: 280, y: 182, label: '49' },
    { id: 50, x: 300, y: 172, label: '50' },
  ];

  // Handle tapping a dot
  const handleDotClick = (index) => {
    if (isCompleted) return;

    // Tapping current dot or next sequential dots
    if (index >= currentDotIndex) {
      const nextIndex = index + 1;
      setCurrentDotIndex(nextIndex);

      if (nextIndex >= dots.length) {
        setIsCompleted(true);
        setFeedbackMsg('🎉 Amazing! You completed Vinayagar Connect the Dots!');
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#EA580C', '#F59E0B', '#10B981', '#FFD700', '#EC4899', '#3B82F6'],
        });
      } else {
        setFeedbackMsg(`Great job! Now tap Dot #${dots[nextIndex].label} ✨`);
      }
    }
  };

  const handleCompleteAll = () => {
    setCurrentDotIndex(dots.length);
    setIsCompleted(true);
    setFeedbackMsg('🎉 Fantastic! You completed Vinayagar Connect the Dots!');
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#EA580C', '#F59E0B', '#10B981', '#FFD700', '#EC4899', '#3B82F6'],
    });
  };

  const handleReset = () => {
    setCurrentDotIndex(0);
    setIsCompleted(false);
    setFeedbackMsg('Tap Dot #1 to start connecting Lord Vinayagar! ✏️');
  };

  // Build SVG path string for connected dots up to currentDotIndex
  const connectedPathString = dots
    .slice(0, currentDotIndex)
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${d.y}`)
    .join(' ');

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-2 sm:px-4">
      {/* Top Dynamic Feedback Banner */}
      <motion.div
        key={feedbackMsg}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-4 px-5 py-2 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 border-2 border-amber-400 rounded-full text-amber-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-orange-600 animate-spin-slow" />
        <span>{feedbackMsg}</span>
      </motion.div>

      {/* Main Worksheet Card with Colorful Pencil Border Frame */}
      <div className="w-full bg-white rounded-3xl p-3 sm:p-5 shadow-2xl border-4 border-amber-400 relative overflow-hidden flex flex-col items-center">
        
        {/* Top Pencil Border Bar */}
        <div className="w-full flex justify-between items-center mb-3 px-1 sm:px-3 overflow-hidden gap-1">
          {['#EF4444', '#F97316', '#EAB308', '#10B981', '#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899', '#EF4444', '#F97316', '#EAB308', '#10B981'].map((color, i) => (
            <div
              key={i}
              className="h-2.5 sm:h-3 flex-1 rounded-full border border-black/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Title Header Section */}
        <div className="text-center mb-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-orange-600 drop-shadow-sm font-heading flex items-center justify-center gap-2">
            <span>விநாயகர்-ஐ Connect பண்ணுங்க!</span>
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-sky-600 mt-0.5">
            Vinayagar - Connect the Dots!
          </h2>

          {/* Instruction Green Pill */}
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full text-[11px] sm:text-xs font-bold shadow-sm">
            <span className="text-amber-600">⭐</span>
            <span>Connect the dots from 1 to 50 to complete Lord Ganesha! &bull; For Kids Age 3–5 &bull; Join dots in order! ✏️</span>
          </div>
        </div>

        {/* 2-Layer Interactive Canvas: Layer 1 Clean Background Image + Layer 2 Interactive SVG Dots */}
        <div className="relative w-full max-w-[550px] aspect-[600/650] bg-white border-2 border-amber-200 rounded-2xl p-2 shadow-inner flex items-center justify-center overflow-hidden">
          
          {/* LAYER 1: Clean Vinayagar Line Art Background Image (User uploaded image) */}
          <img
            src="/assets/images/vinayagar_clean.png"
            alt="Vinayagar Line Art Base"
            className="absolute inset-0 w-full h-full object-contain p-2 pointer-events-none select-none z-0"
          />

          {/* LAYER 2: Interactive SVG Overlay for Connected Lines & Interactive Dots */}
          <svg
            viewBox="0 0 600 650"
            className="w-full h-full select-none relative z-10"
            style={{ touchAction: 'manipulation' }}
          >
            {/* DYNAMIC CONNECTED PATH LINE OVERLAY */}
            {currentDotIndex > 1 && (
              <path
                d={connectedPathString}
                fill="none"
                stroke="#EA580C"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-md transition-all duration-300"
              />
            )}

            {/* 50 INTERACTIVE DOTS & LABELS OVERLAY */}
            {dots.map((dot, index) => {
              const isConnected = index < currentDotIndex;
              const isNextTarget = index === currentDotIndex && !isCompleted;

              return (
                <g
                  key={dot.id}
                  onClick={() => handleDotClick(index)}
                  className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  style={{ touchAction: 'none' }}
                >
                  {/* Outer pulse aura for next target dot */}
                  {isNextTarget && (
                    <>
                      <circle cx={dot.x} cy={dot.y} r="18" fill="#FDE047" opacity="0.5" className="animate-ping" />
                      <circle cx={dot.x} cy={dot.y} r="14" fill="#F97316" opacity="0.4" />
                    </>
                  )}

                  {/* Main Dot Circle */}
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r={isNextTarget ? "9" : "6.5"}
                    fill={isConnected ? '#10B981' : isNextTarget ? '#EA580C' : '#0F172A'}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />

                  {/* Dot Number Label */}
                  <text
                    x={dot.x + (dot.x > 300 ? 12 : -12)}
                    y={dot.y + 4}
                    fontSize="11"
                    fontWeight="800"
                    fontFamily="Inter, sans-serif"
                    fill={isConnected ? '#065F46' : isNextTarget ? '#C2410C' : '#1E293B'}
                    textAnchor={dot.x > 300 ? 'start' : 'end'}
                    className="select-none pointer-events-none"
                  >
                    {dot.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Completion Vinayagar Celebration Overlay */}
          <AnimatePresence>
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-amber-50/90 backdrop-blur-sm rounded-2xl border-4 border-amber-400"
              >
                <motion.img
                  src="/assets/images/vinayagar.png"
                  alt="Lord Vinayagar Revealed"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-44 sm:w-56 h-auto drop-shadow-2xl mb-3"
                />

                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-6 py-2 rounded-full font-heading font-extrabold text-base sm:text-lg shadow-lg border-2 border-yellow-300 mb-4">
                  ✨ Excellent! You Revealed Lord Vinayagar! ✨
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-full font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Play Again</span>
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onComplete}
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 flex items-center gap-2 cursor-pointer border border-emerald-300"
                  >
                    <span>Continue to Rewards</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Controls & Quick Fill Bar */}
        <div className="mt-3 w-full flex items-center justify-between text-xs text-amber-950 font-bold px-2">
          <span>
            Connected: {currentDotIndex} / {dots.length} Dots
          </span>

          <div className="flex items-center gap-3">
            {!isCompleted && (
              <button
                onClick={handleCompleteAll}
                className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-extrabold text-[11px] shadow-sm flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Zap className="w-3 h-3 text-yellow-200" />
                <span>Connect All Dots</span>
              </button>
            )}
            <button
              onClick={handleReset}
              className="text-amber-800 hover:text-amber-950 underline flex items-center gap-1 cursor-pointer text-[11px]"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Bottom WhatsApp Reward Banner (Exact matching user worksheet) */}
        <div className="mt-4 w-full bg-gradient-to-r from-cyan-50 via-teal-50 to-cyan-50 border-2 border-teal-400/80 rounded-2xl p-3 text-center shadow-md relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-teal-950">
              இந்த புகைப்படத்தை <span className="text-emerald-700 underline text-sm sm:text-base font-black">95149 00070</span> என்ற எண்ணுக்கு WhatsApp-ல் பகிர்ந்து <span className="text-orange-600">வெள்ளி விநாயகர் சிலை பரிசு பெறுங்கள்!</span>
            </p>
          </div>
          <p className="text-[11px] sm:text-xs text-teal-900 font-semibold">
            Share this photo to <span className="font-bold text-emerald-800">95149 00070</span> via WhatsApp to Get <span className="font-bold text-orange-600">Silver Vinayagar Idol as Gift!</span>
          </p>
          <p className="text-[9px] text-teal-700/80 font-bold mt-1 uppercase tracking-wider">
            &bull; TN HAPPY KIDS.IN &bull; Branches: Pollachi | Coimbatore-Saibabacolony | Edayarpalayam | Erode | Tiruppur | Kolathur | Thambaram | Dharmapuri | Bangalore
          </p>
        </div>

        {/* Bottom Pencil Border Bar */}
        <div className="w-full flex justify-between items-center mt-3 px-1 sm:px-3 overflow-hidden gap-1">
          {['#10B981', '#EAB308', '#F97316', '#EF4444', '#EC4899', '#8B5CF6', '#3B82F6', '#06B6D4', '#10B981', '#EAB308', '#F97316', '#EF4444'].map((color, i) => (
            <div
              key={i}
              className="h-2.5 sm:h-3 flex-1 rounded-full border border-black/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
