import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FestiveBackground } from '../components/FestiveBackground';
import { ProgressStepper } from '../components/ProgressStepper';
import { RewardCard } from '../components/RewardCard';
import { useCompetition } from '../context/CompetitionContext';

export const Reward = () => {
  const navigate = useNavigate();
  const { data, setRewardPoints } = useCompetition();

  useEffect(() => {
    setRewardPoints(100);
  }, []);

  const handleRewardComplete = () => {
    navigate('/complete');
  };

  return (
    <FestiveBackground>
      <div className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Stepper Progress */}
        <div className="w-full mb-6">
          <ProgressStepper currentStep={4} />
        </div>

        {/* Reward Card */}
        <RewardCard
          childName={data.childName || 'Little Artist'}
          points={100}
          onComplete={handleRewardComplete}
        />
      </div>
    </FestiveBackground>
  );
};
