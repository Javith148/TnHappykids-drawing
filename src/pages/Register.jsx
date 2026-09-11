import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Baby, Phone, Mail, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { FestiveBackground } from '../components/FestiveBackground';
import { ProgressStepper } from '../components/ProgressStepper';
import { CustomModal } from '../components/CustomModal';
import { useCompetition } from '../context/CompetitionContext';
import { useLanguage } from '../context/LanguageContext';
import { validateRegistrationForm, isAgeEligible } from '../utils/validation';

export const Register = () => {
  const navigate = useNavigate();
  const { data, updateRegistration } = useCompetition();
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    childName: data.childName || '',
    childAge: data.childAge || '',
    parentName: data.parentName || '',
    parentPhone: data.parentPhone || '',
    parentEmail: data.parentEmail || '',
  });

  const [errors, setErrors] = useState({});
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateRegistrationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Check Age eligibility (3-5 years)
    if (!isAgeEligible(formData.childAge)) {
      setIsAgeModalOpen(true);
      return;
    }

    // Save state & navigate to /upload
    updateRegistration(formData);
    navigate('/upload');
  };

  return (
    <FestiveBackground>
      <div className="pt-20 sm:pt-22 pb-10 min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        {/* Animated Rotating Kolam Background Watermark */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none"
        >
          <img src="/assets/images/kolam.png" alt="Kolam Watermark" className="w-[650px] h-[650px] object-contain" />
        </motion.div>

        {/* Professional Symmetrical Festive Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Left Floating Modak */}
          <motion.img
            src="/assets/images/modak.png"
            alt="Modak Top Left"
            animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-4 sm:left-12 w-14 sm:w-20 h-auto drop-shadow-xl z-10"
          />

          {/* Top Right Floating Modak */}
          <motion.img
            src="/assets/images/modak.png"
            alt="Modak Top Right"
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-4 sm:right-12 w-14 sm:w-20 h-auto drop-shadow-xl z-10 -scale-x-100"
          />

          {/* Bottom Left Glowing Brass Diya */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-4 sm:left-12 z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400 blur-lg opacity-40 animate-pulse" />
              <img
                src="/assets/images/diya.png"
                alt="Diya Bottom Left"
                className="w-14 sm:w-20 h-auto drop-shadow-xl relative z-10"
              />
            </div>
          </motion.div>

          {/* Bottom Right Glowing Brass Diya */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-4 sm:right-12 z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400 blur-lg opacity-40 animate-pulse" />
              <img
                src="/assets/images/diya.png"
                alt="Diya Bottom Right"
                className="w-14 sm:w-20 h-auto drop-shadow-xl relative z-10 -scale-x-100"
              />
            </div>
          </motion.div>
        </div>

        {/* Stepper Progress Indicator - Placed Higher */}
        <div className="w-full mb-4 sm:mb-6 relative z-20 max-w-2xl">
          <ProgressStepper currentStep={1} />
        </div>

        {/* Main Registration Card - Shifted Higher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-2xl border-4 border-amber-400 relative overflow-hidden flex flex-col z-20"
        >
          {/* Top Decorative Header */}
          <div className="flex flex-col items-center text-center mb-4 border-b border-amber-200/80 pb-3 shrink-0">
            <img
              src="/assets/images/logo.png"
              alt="TN Happy Kids Logo"
              className="h-10 sm:h-12 w-auto mb-1.5 object-contain"
            />
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-1.5">
              {t('regStep1')}
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-950">
              {t('regTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-amber-800/80 mt-0.5 font-medium">
              {t('regSubtitle')}
            </p>
          </div>

          {/* Form: 2-Column Grid on Laptop/Desktop, Single-Column on Mobile */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* Child Name */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                <Baby className="w-4 h-4 text-orange-500" />
                <span>{t('childName')} *</span>
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder={t('childNamePlaceholder')}
                className={`w-full px-4 py-2.5 sm:py-3 bg-amber-50/60 rounded-xl border-2 text-xs sm:text-sm text-amber-950 placeholder-amber-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all ${errors.childName ? 'border-rose-500' : 'border-amber-300/80 focus:border-orange-500'
                  }`}
              />
              {errors.childName && (
                <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.childName}</span>
                </p>
              )}
            </div>

            {/* Child Age */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span>{t('childAge')} *</span>
                </label>
              </div>
              <input
                type="number"
                name="childAge"
                min="1"
                max="12"
                value={formData.childAge}
                onChange={handleChange}
                placeholder={t('childAgePlaceholder')}
                className={`w-full px-4 py-2.5 sm:py-3 bg-amber-50/60 rounded-xl border-2 text-xs sm:text-sm text-amber-950 placeholder-amber-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all ${errors.childAge ? 'border-rose-500' : 'border-amber-300/80 focus:border-orange-500'
                  }`}
              />
              {errors.childAge && (
                <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.childAge}</span>
                </p>
              )}
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                <User className="w-4 h-4 text-orange-500" />
                <span>{t('parentName')} *</span>
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder={t('parentNamePlaceholder')}
                className={`w-full px-4 py-2.5 sm:py-3 bg-amber-50/60 rounded-xl border-2 text-xs sm:text-sm text-amber-950 placeholder-amber-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all ${errors.parentName ? 'border-rose-500' : 'border-amber-300/80 focus:border-orange-500'
                  }`}
              />
              {errors.parentName && (
                <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.parentName}</span>
                </p>
              )}
            </div>

            {/* Parent Mobile */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>{t('whatsappNumber')} *</span>
              </label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                placeholder={t('whatsappNumberPlaceholder')}
                className={`w-full px-4 py-2.5 sm:py-3 bg-amber-50/60 rounded-xl border-2 text-xs sm:text-sm text-amber-950 placeholder-amber-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all ${errors.parentPhone ? 'border-rose-500' : 'border-amber-300/80 focus:border-orange-500'
                  }`}
              />
              {errors.parentPhone && (
                <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.parentPhone}</span>
                </p>
              )}
            </div>

            {/* Parent Email */}
            <div className="md:col-span-2">
              <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>{language === 'ta' ? 'மின்னஞ்சல் முகவரி *' : 'Parent Email Address *'}</span>
              </label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                placeholder="e.g. parent@example.com"
                className={`w-full px-4 py-2.5 sm:py-3 bg-amber-50/60 rounded-xl border-2 text-xs sm:text-sm text-amber-950 placeholder-amber-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all ${errors.parentEmail ? 'border-rose-500' : 'border-amber-300/80 focus:border-orange-500'
                  }`}
              />
              {errors.parentEmail && (
                <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.parentEmail}</span>
                </p>
              )}
            </div>

            {/* Continue Button */}
            <div className="pt-2 md:col-span-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-xl font-heading font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 cursor-pointer border-2 border-yellow-300 flex items-center justify-center gap-2"
              >
                <span>{t('continueToUpload')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Custom Age Modal for invalid age (< 3 or > 5) */}
        <CustomModal
          isOpen={isAgeModalOpen}
          onClose={() => setIsAgeModalOpen(false)}
          title={t('ageModalTitle')}
          message={t('ageModalMessage')}
          buttonText={t('closeModal')}
        />
      </div>
    </FestiveBackground>
  );
};
