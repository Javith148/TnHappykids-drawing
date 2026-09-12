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
    navigate('/upload');
  };

  return (
    <FestiveBackground>
      <div className="pt-18 sm:pt-20 pb-10 min-h-screen flex flex-col items-center justify-start px-2 sm:px-6 lg:px-8">
        
        {/* Stepper Progress */}
        <div className="w-full mb-4 max-w-2xl">
          <ProgressStepper currentStep={2} />
        </div>



        {/* HTML Canvas Dot Activity Game */}
        <div className="w-full">
          <DotActivity onComplete={handleActivityDone} />
        </div>
      </div>
    </FestiveBackground>
  );
};
