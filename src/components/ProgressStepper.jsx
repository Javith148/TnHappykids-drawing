import React from 'react';
import { UserCheck, Upload, Puzzle, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ProgressStepper = ({ currentStep = 1 }) => {
  const { t } = useLanguage();

  const steps = [
    { number: 1, label: t('stepperStep1') || 'Registration', icon: UserCheck },
    { number: 2, label: t('stepperStep2') || 'Dot Activity', icon: Puzzle },
    { number: 3, label: t('stepperStep3') || 'Upload Drawing', icon: Upload },
    { number: 4, label: t('stepperStep4') || 'Reward Points', icon: Award },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-2">
      <div className="flex items-center justify-between relative">
        {/* Background Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-amber-200 -translate-y-1/2 z-0 rounded-full" />
        
        {/* Active Progress Connecting Line */}
        <motion.div
          className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 -translate-y-1/2 z-0 rounded-full"
          initial={{ width: '0%' }}
          animate={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isActive = step.number === currentStep;
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative z-10 flex flex-col items-center group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base border-2 transition-all duration-300 shadow-md ${
                  isCompleted
                    ? 'bg-emerald-500 border-emerald-300 text-white shadow-emerald-500/20'
                    : isActive
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-yellow-300 text-white scale-110 shadow-orange-500/40 ring-4 ring-orange-200'
                    : 'bg-white border-amber-300 text-amber-600'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.div>

              <span
                className={`mt-2 text-xs sm:text-sm font-bold text-center transition-colors max-w-[80px] sm:max-w-none ${
                  isActive
                    ? 'text-orange-600 font-extrabold'
                    : isCompleted
                    ? 'text-emerald-700 font-semibold'
                    : 'text-amber-800/70 font-medium'
                }`}
              >
                0{step.number} {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
