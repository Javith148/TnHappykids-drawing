import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RefreshCw, ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DotActivity = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentDotIndex, setCurrentDotIndex] = useState(0); // 0 to 49
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('Tap Dot #1 to start connecting Lord Vinayagar!');

  // 50 Dots aligned on 820x1024 image along gray line contour
  const dots = [
    // --- Crown (Mukut) Outer Top & Sides ---
    { id: 1, x: 410, y: 275, label: '1' },
    { id: 2, x: 442, y: 292, label: '2' },
    { id: 3, x: 470, y: 315, label: '3' },
    { id: 4, x: 495, y: 345, label: '4' },
    { id: 5, x: 460, y: 375, label: '5' },
    { id: 6, x: 430, y: 382, label: '6' },
    { id: 7, x: 410, y: 384, label: '7' },
    { id: 8, x: 390, y: 382, label: '8' },
    { id: 9, x: 360, y: 375, label: '9' },
    { id: 10, x: 325, y: 345, label: '10' },
    { id: 11, x: 350, y: 315, label: '11' },
    { id: 12, x: 378, y: 292, label: '12' },

    // --- Right Ear & Side ---
    { id: 13, x: 505, y: 385, label: '13' },
    { id: 14, x: 550, y: 400, label: '14' },
    { id: 15, x: 585, y: 430, label: '15' },
    { id: 16, x: 590, y: 470, label: '16' },
    { id: 17, x: 575, y: 510, label: '17' },
    { id: 18, x: 535, y: 535, label: '18' },

    // --- Right Arm & Hand (Holding Modak) ---
    { id: 19, x: 570, y: 565, label: '19' },
    { id: 20, x: 605, y: 485, label: '20' },
    { id: 21, x: 625, y: 520, label: '21' },
    { id: 22, x: 605, y: 560, label: '22' },
    { id: 23, x: 575, y: 600, label: '23' },

    // --- Right Body, Knee & Feet ---
    { id: 24, x: 545, y: 660, label: '24' },
    { id: 25, x: 575, y: 710, label: '25' },
    { id: 26, x: 570, y: 755, label: '26' },
    { id: 27, x: 535, y: 785, label: '27' },
    { id: 28, x: 485, y: 792, label: '28' },
    { id: 29, x: 445, y: 795, label: '29' },

    // --- Bottom Lotus Pedestal Base ---
    { id: 30, x: 495, y: 828, label: '30' },
    { id: 31, x: 410, y: 838, label: '31' },
    { id: 32, x: 325, y: 828, label: '32' },

    // --- Left Feet, Knee & Body ---
    { id: 33, x: 375, y: 795, label: '33' },
    { id: 34, x: 335, y: 792, label: '34' },
    { id: 35, x: 285, y: 785, label: '35' },
    { id: 36, x: 250, y: 755, label: '36' },
    { id: 37, x: 245, y: 710, label: '37' },
    { id: 38, x: 275, y: 660, label: '38' },

    // --- Left Arm & Hand (Holding Axe) ---
    { id: 39, x: 245, y: 600, label: '39' },
    { id: 40, x: 215, y: 560, label: '40' },
    { id: 41, x: 195, y: 520, label: '41' },
    { id: 42, x: 215, y: 485, label: '42' },
    { id: 43, x: 250, y: 565, label: '43' },

    // --- Left Ear & Head ---
    { id: 44, x: 285, y: 535, label: '44' },
    { id: 45, x: 245, y: 510, label: '45' },
    { id: 46, x: 230, y: 470, label: '46' },
    { id: 47, x: 235, y: 430, label: '47' },
    { id: 48, x: 270, y: 400, label: '48' },
    { id: 49, x: 315, y: 385, label: '49' },

    // --- Closing Crown Top ---
    { id: 50, x: 410, y: 275, label: '50' },
  ];

  // Handle tapping a dot
  const handleDotClick = (index) => {
    if (isCompleted) return;

    if (index >= currentDotIndex) {
      const nextIndex = index + 1;
      setCurrentDotIndex(nextIndex);

      if (nextIndex >= dots.length) {
        setIsCompleted(true);
        setFeedbackMsg('Amazing! You completed Vinayagar Connect the Dots!');
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#EA580C', '#F59E0B', '#10B981', '#FFD700', '#EC4899', '#3B82F6'],
        });
      } else {
        setFeedbackMsg(`Great job! Now tap Dot #${dots[nextIndex].label}`);
      }
    }
  };

  const handleCompleteAll = () => {
    setCurrentDotIndex(dots.length);
    setIsCompleted(true);
    setFeedbackMsg('Fantastic! You completed Vinayagar Connect the Dots!');
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
    setFeedbackMsg('Tap Dot #1 to start connecting Lord Vinayagar!');
  };

  // Build SVG path string for connected dots up to currentDotIndex
  const connectedPathString = dots
    .slice(0, currentDotIndex)
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${d.y}`)
    .join(' ');

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-2 sm:px-4">
      {/* Top Dynamic Feedback Banner (Steady, no shake on update) */}
      <div className="mb-4 px-5 py-2 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 border-2 border-amber-400 rounded-full text-amber-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center">
        <span>{feedbackMsg}</span>
      </div>

      {/* Main Worksheet Card */}
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



        {/* Interactive SVG Canvas with Embedded Image for 1:1 Pixel Lock */}
        <div className="relative w-full max-w-[550px] aspect-[820/1024] bg-white border-2 border-amber-200 rounded-2xl p-2 shadow-inner flex items-center justify-center overflow-hidden">

          {/* White Flash Transition Fade Effect when completed */}
          <AnimatePresence>
            {isCompleted && (
              <motion.div
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 bg-white pointer-events-none z-30 rounded-2xl"
              />
            )}
          </AnimatePresence>

          <svg
            viewBox="0 0 820 1024"
            className="w-full h-full select-none relative z-10"
            style={{ touchAction: 'manipulation' }}
          >
            {/* Base Outline Vinayagar Image - locked to 820x1024 */}
            <image
              href="/assets/images/vinayagar_clean.png"
              x="0"
              y="0"
              width="820"
              height="1024"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Revealed Colored Lord Vinayagar Image - 1:1 EXACT SAME SIZE & POSITION */}
            <image
              href="/assets/images/vinayagar_colored.png"
              x="0"
              y="0"
              width="820"
              height="1024"
              preserveAspectRatio="xMidYMid meet"
              style={{
                opacity: isCompleted ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
              }}
            />

            {/* DYNAMIC CONNECTED PATH LINE OVERLAY (Fades out on completion) */}
            {currentDotIndex > 1 && (
              <path
                d={connectedPathString}
                fill="none"
                stroke="#EA580C"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  opacity: isCompleted ? 0 : 1,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            )}

            {/* 50 STEADY INTERACTIVE DOTS (Fade out on completion) */}
            {dots.map((dot, index) => {
              const isConnected = index < currentDotIndex;
              const isNextTarget = index === currentDotIndex && !isCompleted;

              return (
                <g
                  key={dot.id}
                  onClick={() => handleDotClick(index)}
                  className="cursor-pointer"
                  style={{
                    touchAction: 'none',
                    opacity: isCompleted ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out',
                  }}
                >
                  {/* Steady highlight ring for current active target dot */}
                  {isNextTarget && (
                    <circle cx={dot.x} cy={dot.y} r="18" fill="#F97316" opacity="0.3" />
                  )}

                  {/* Main Dot Circle */}
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r={isNextTarget ? "10" : "7.5"}
                    fill={isConnected ? '#10B981' : isNextTarget ? '#EA580C' : '#0F172A'}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  />

                  {/* Dot Number Label */}
                  <text
                    x={dot.x + (dot.x >= 410 ? 16 : -16)}
                    y={dot.y + 5}
                    fontSize="14"
                    fontWeight="800"
                    fontFamily="Inter, sans-serif"
                    fill={isConnected ? '#065F46' : isNextTarget ? '#C2410C' : '#1E293B'}
                    textAnchor={dot.x >= 410 ? 'start' : 'end'}
                    className="select-none pointer-events-none"
                  >
                    {dot.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Action Controls & Continue Button Bar */}
        <div className="mt-4 w-full px-2">
          {isCompleted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-2.5 w-full max-w-md mx-auto"
            >
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-5 py-1.5 rounded-full font-heading font-extrabold text-xs sm:text-sm shadow-md border-2 border-yellow-300">
                Lord Vinayagar Revealed!
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onComplete}
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-2xl font-heading font-extrabold text-xs sm:text-sm shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center justify-center gap-2 cursor-pointer border-2 border-yellow-300"
              >
                <span>{t('continueToUpload')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <button
                onClick={handleReset}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1.5 cursor-pointer pt-0.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </motion.div>
          ) : (
            <div className="flex items-center justify-between text-xs text-amber-950 font-bold">
              <span>
                Connected: {currentDotIndex} / {dots.length} Dots
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCompleteAll}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-extrabold text-[11px] shadow-sm flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Zap className="w-3 h-3 text-yellow-200" />
                  <span>Connect All Dots</span>
                </button>
                <button
                  onClick={handleReset}
                  className="text-amber-800 hover:text-amber-950 underline flex items-center gap-1 cursor-pointer text-[11px]"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          )}
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
