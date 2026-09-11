import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FestiveBackground } from '../components/FestiveBackground';
import { ProgressStepper } from '../components/ProgressStepper';
import { DotActivity } from '../components/DotActivity';
import { useCompetition } from '../context/CompetitionContext';
import { useLanguage } from '../context/LanguageContext';

export const Activity = () => {
  const navigate = useNavigate();
  const { completeActivity } = useCompetition();
  const { t } = useLanguage();

  const handleActivityDone = () => {
    completeActivity();
    navigate('/advertisement');
  };

  return (
    <FestiveBackground>
      <div className="pt-18 sm:pt-20 pb-10 min-h-screen flex flex-col items-center justify-start px-2 sm:px-6 lg:px-8">
        
        {/* Stepper Progress */}
        <div className="w-full mb-4 max-w-2xl">
          <ProgressStepper currentStep={3} />
        </div>

        {/* Heading & Instructions */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="px-4 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-extrabold uppercase tracking-wider">
            {t('activityStep3')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-amber-950 mt-2 mb-1">
            {t('activityTitle')}
          </h2>
          <p className="text-amber-900/80 text-sm sm:text-base font-semibold">
            "{t('activitySubtitle')}"
          </p>
        </div>

        {/* HTML Canvas Dot Activity Game */}
        <div className="w-full">
          <DotActivity onComplete={handleActivityDone} />
        </div>
      </div>
    </FestiveBackground>
  );
};
