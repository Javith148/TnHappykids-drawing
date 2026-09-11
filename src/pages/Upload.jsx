import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';
import { FestiveBackground } from '../components/FestiveBackground';
import { ProgressStepper } from '../components/ProgressStepper';
import { UploadCard } from '../components/UploadCard';
import { CustomModal } from '../components/CustomModal';
import { useCompetition } from '../context/CompetitionContext';
import { useLanguage } from '../context/LanguageContext';

export const Upload = () => {
  const navigate = useNavigate();
  const { data, updateUploads } = useCompetition();
  const { t, language } = useLanguage();

  const [drawingFile, setDrawingFile] = useState(data.drawingImage || null);
  const [drawingInfo, setDrawingInfo] = useState({
    name: data.drawingFileName || '',
    size: data.drawingFileSize || '',
  });

  const [videoFile, setVideoFile] = useState(data.activityVideo || null);
  const [videoInfo, setVideoInfo] = useState({
    name: data.videoFileName || '',
    size: data.videoFileSize || '',
  });

  const [alertModal, setAlertModal] = useState({
    isOpen: false,
    title: '',
    message: '',
  });

  const handleDrawingSelect = ({ previewUrl, name, size }) => {
    setDrawingFile(previewUrl);
    setDrawingInfo({ name, size });
  };

  const handleDrawingRemove = () => {
    setDrawingFile(null);
    setDrawingInfo({ name: '', size: '' });
  };

  const handleVideoSelect = ({ previewUrl, name, size }) => {
    setVideoFile(previewUrl);
    setVideoInfo({ name, size });
  };

  const handleVideoRemove = () => {
    setVideoFile(null);
    setVideoInfo({ name: '', size: '' });
  };

  const handleContinue = () => {
    if (!drawingFile) {
      setAlertModal({
        isOpen: true,
        title: t('drawingRequiredTitle'),
        message: t('drawingRequiredMsg'),
      });
      return;
    }

    if (!videoFile) {
      setAlertModal({
        isOpen: true,
        title: t('videoRequiredTitle'),
        message: t('videoRequiredMsg'),
      });
      return;
    }

    updateUploads({
      drawingImage: drawingFile,
      drawingFileName: drawingInfo.name,
      drawingFileSize: drawingInfo.size,
      activityVideo: videoFile,
      videoFileName: videoInfo.name,
      videoFileSize: videoInfo.size,
    });

    navigate('/activity');
  };

  return (
    <FestiveBackground>
      <div className="pt-20 sm:pt-22 pb-12 min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Stepper Progress */}
        <div className="w-full mb-6 max-w-2xl relative z-10">
          <ProgressStepper currentStep={2} />
        </div>

        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
          <span className="px-4 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-extrabold uppercase tracking-wider">
            {t('uploadStep2')}
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-amber-950 mt-2 mb-1.5">
            {t('uploadTitle')}
          </h2>
          <p className="text-amber-900/80 text-xs sm:text-sm font-medium">
            {t('uploadSubtitle')}
          </p>
        </div>

        {/* 2 Upload Cards Grid with Center Compact Rotating Kolam Background */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 relative z-10">
          {/* Compact Rotating Kolam Centered Between/Behind the Cards */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 pointer-events-none -z-10"
          >
            <img
              src="/assets/images/kolam.png"
              alt="Kolam Center Motif"
              className="w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] object-contain"
            />
          </motion.div>

          {/* Card 1: Drawing Upload */}
          <UploadCard
            type="image"
            title={t('drawingTitle')}
            subtitle={t('drawingSubtitle')}
            accept="image/*"
            selectedFile={drawingFile}
            fileInfo={drawingInfo}
            onFileSelect={handleDrawingSelect}
            onFileRemove={handleDrawingRemove}
          />

          {/* Card 2: Video Upload */}
          <UploadCard
            type="video"
            title={t('videoTitle')}
            subtitle={t('videoSubtitle')}
            accept="video/*"
            selectedFile={videoFile}
            fileInfo={videoInfo}
            onFileSelect={handleVideoSelect}
            onFileRemove={handleVideoRemove}
          />
        </div>

        {/* Action Button */}
        <div className="w-full max-w-md mx-auto text-center relative z-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            className="w-full py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-2xl font-heading font-extrabold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 cursor-pointer border-2 border-yellow-300 flex items-center justify-center gap-2"
          >
            <span>{t('continueToActivity')}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Custom Alert Modal for missing upload validation */}
        <CustomModal
          isOpen={alertModal.isOpen}
          onClose={() => setAlertModal({ ...alertModal, isOpen: false })}
          title={alertModal.title}
          message={alertModal.message}
          buttonText={t('closeModal')}
        />
      </div>
    </FestiveBackground>
  );
};
