import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Home,
  Sparkles,
  Award,
  User,
  Calendar,
  FileText,
  RefreshCw,
  Star,
  Trophy,
  Phone,
  Image as ImageIcon,
  Video
} from 'lucide-react';
import { FestiveBackground } from '../components/FestiveBackground';
import { ProgressStepper } from '../components/ProgressStepper';
import { CertificateModal } from '../components/CertificateModal';
import { useCompetition } from '../context/CompetitionContext';
import { useLanguage } from '../context/LanguageContext';

export const Complete = () => {
  const navigate = useNavigate();
  const { data, resetAll, setRewardPoints } = useCompetition();
  const { t, language } = useLanguage();
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [displayedPoints, setDisplayedPoints] = useState(0);

  useEffect(() => {
    setRewardPoints(100);

    // Festive confetti animation
    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.4 },
      colors: ['#F59E0B', '#EA580C', '#10B981', '#FFD700', '#EC4899', '#3B82F6'],
    });

    // Counting points animation 0 -> 100
    let start = 0;
    const duration = 1500;
    const stepTime = 15;
    const timer = setInterval(() => {
      start += 2;
      setDisplayedPoints((prev) => (start >= 100 ? 100 : start));
      if (start >= 100) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
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
      <div className="pt-20 sm:pt-24 pb-16 min-h-screen flex flex-col items-center justify-start px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Stepper Progress Step 4 */}
        <div className="w-full mb-6 relative z-10">
          <ProgressStepper currentStep={4} />
        </div>

        {/* Main Combined Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-b from-[#FFFBF0] via-[#FFF3D1] to-[#FFE7AA] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-4 border-amber-400 text-center relative overflow-hidden"
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
            className="h-12 sm:h-14 w-auto mx-auto mb-3 bg-white/90 p-1.5 rounded-2xl shadow-sm"
          />

          <span className="inline-flex items-center gap-1.5 px-4 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ta' ? 'பங்கேற்பு வெற்றிகரமாக முடிந்தது' : 'Participation Completed'}</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-amber-950 mb-1">
            Congratulations, {data.childName || 'Little Artist'}! 🎉
          </h2>

          <p className="text-amber-900/80 text-xs sm:text-sm font-semibold mb-5">
            "{language === 'ta'
              ? 'வினாயகர் சதுர்த்தி ஓவியப் போட்டியில் பங்கேற்றதற்கு வாழ்த்துகள்!'
              : 'Thank you for participating in the TN Happy Kids Vinayagar Chaturthi Competition.'}"
          </p>

          {/* 100 Reward Points Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-5 shadow-xl border-2 border-yellow-300 relative overflow-hidden"
          >
            <div className="absolute top-2 right-4 opacity-20">
              <Trophy className="w-20 h-20 text-yellow-100" />
            </div>

            <span className="inline-block px-3 py-0.5 bg-white/20 text-yellow-100 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-1">
              🌟 {language === 'ta' ? 'வெற்றிப் புள்ளிகள் பெறப்பட்டது' : 'Special Reward Unlocked'}
            </span>

            <h3 className="text-xs sm:text-sm font-bold text-amber-100 mb-1">
              {language === 'ta' ? 'உங்கள் மொத்த வெற்றிப் புள்ளிகள்' : 'Your Total Reward Points'}
            </h3>

            <div className="font-heading text-4xl sm:text-6xl font-extrabold text-yellow-200 tracking-wider flex items-center justify-center gap-2 drop-shadow-md">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 fill-yellow-300 text-yellow-300 animate-spin-slow" />
              <span>{displayedPoints}</span>
              <span className="text-xl sm:text-2xl text-yellow-100 font-semibold">PTS</span>
            </div>
          </motion.div>

          {/* Submission Details Card - WITH UPLOADED DRAWING IMAGE PREVIEW */}
          <div className="bg-white/90 rounded-2xl p-4 sm:p-6 border border-amber-300 text-left mb-6 shadow-inner space-y-4">
            <div className="flex items-center justify-between border-b border-amber-200 pb-2.5">
              <h4 className="font-heading font-extrabold text-amber-950 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-600" />
                <span>{language === 'ta' ? 'சமர்ப்பிப்பு விவரங்கள் (Submission Details)' : 'Submission Details'}</span>
              </h4>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                Verified ✓
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Uploaded Drawing Photo Display Box */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full bg-amber-50 p-2 rounded-2xl border-2 border-amber-300 shadow-md relative group overflow-hidden">
                  <span className="text-[10px] font-extrabold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full mb-1.5 inline-flex items-center gap-1 border border-amber-300">
                    <ImageIcon className="w-3 h-3 text-orange-600" />
                    <span>{language === 'ta' ? 'பதிவேற்றிய ஓவியம்' : 'Uploaded Drawing'}</span>
                  </span>

                  {data.drawingImage ? (
                    <img
                      src={data.drawingImage}
                      alt="Child Drawing Submission"
                      className="w-full h-44 sm:h-52 object-cover rounded-xl border border-amber-200 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-44 sm:h-52 bg-amber-100/70 rounded-xl flex flex-col items-center justify-center text-amber-800 p-4 text-center border border-dashed border-amber-300">
                      <ImageIcon className="w-10 h-10 text-amber-500 mb-2" />
                      <span className="text-xs font-bold">Drawing Uploaded Successfully</span>
                    </div>
                  )}

                  {data.drawingFileName && (
                    <p className="text-[10px] text-amber-900 font-semibold truncate mt-1.5 px-1 text-center">
                      {data.drawingFileName}
                    </p>
                  )}
                </div>
              </div>

              {/* Registration Text Details Grid */}
              <div className="md:col-span-7 grid grid-cols-2 gap-3 text-xs sm:text-sm bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200">
                <div>
                  <span className="text-amber-800/70 font-semibold block text-[11px]">
                    {language === 'ta' ? 'குழந்தை பெயர்' : 'Child Name'}
                  </span>
                  <span className="font-bold text-amber-950 truncate block text-sm">
                    {data.childName || 'Little Artist'}
                  </span>
                </div>

                <div>
                  <span className="text-amber-800/70 font-semibold block text-[11px]">
                    {language === 'ta' ? 'வயது' : 'Age'}
                  </span>
                  <span className="font-bold text-amber-950 block text-sm">
                    {data.childAge ? `${data.childAge} Years` : '4 Years'}
                  </span>
                </div>

                <div>
                  <span className="text-amber-800/70 font-semibold block text-[11px]">
                    {language === 'ta' ? 'பெற்றோர் பெயர்' : 'Parent Name'}
                  </span>
                  <span className="font-bold text-amber-950 truncate block text-xs sm:text-sm">
                    {data.parentName || 'Parent'}
                  </span>
                </div>

                <div>
                  <span className="text-amber-800/70 font-semibold block text-[11px]">
                    {language === 'ta' ? 'தொலைபேசி' : 'Phone'}
                  </span>
                  <span className="font-bold text-amber-950 block text-xs sm:text-sm">
                    {data.parentPhone || '+91 ********'}
                  </span>
                </div>

                <div className="col-span-2 pt-2 border-t border-amber-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-orange-600" />
                    <span className="text-[11px] font-bold text-amber-900">
                      {language === 'ta' ? 'செயல்பாட்டு வீடியோ' : 'Activity Video Clip'}:
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                    Uploaded ✓
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* E-Certificate Callout Banner */}
          <div className="mb-6 p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl text-white shadow-lg border-2 border-yellow-300 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-wider text-yellow-200 block">
                ✨ Official E-Certificate Ready
              </span>
              <p className="text-xs sm:text-sm font-bold text-amber-50 mt-0.5">
                Download your child's Drawing Competition Completion Certificate or send to Gmail!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCertOpen(true)}
              className="px-5 py-2.5 bg-white text-orange-600 font-extrabold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 shrink-0 cursor-pointer border border-amber-200"
            >
              <Award className="w-4 h-4 text-orange-600" />
              <span>Get E-Certificate 🎓</span>
            </motion.button>
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

        {/* E-Certificate Modal Component */}
        <CertificateModal
          isOpen={isCertOpen}
          onClose={() => setIsCertOpen(false)}
          data={data}
        />
      </div>
    </FestiveBackground>
  );
};
