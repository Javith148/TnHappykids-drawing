import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Gift,
  CheckCircle2,
  Clock,
  ExternalLink,
  Phone,
  GraduationCap,
  Award,
  MapPin,
  Palette,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { FestiveBackground } from '../components/FestiveBackground';
import { useCompetition } from '../context/CompetitionContext';
import { useLanguage } from '../context/LanguageContext';

export const Advertisement = () => {
  const navigate = useNavigate();
  const { completeAd } = useCompetition();
  const { t, language } = useLanguage();

  const [timeLeft, setTimeLeft] = useState(30);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanSkip(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanSkip(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAdDone = () => {
    completeAd();
    navigate('/reward');
  };

  const progressPercent = ((30 - timeLeft) / 30) * 100;

  const features = [
    {
      icon: Palette,
      title: language === 'ta' ? 'கலை & படைப்பாற்றல் கூடம்' : 'Creative Arts Academy',
      desc: language === 'ta' ? 'குழந்தைகளின் வரையும் திறமை & மரபு கலைகள் வளர்ப்பு' : 'Nurturing imagination through heritage & modern art'
    },
    {
      icon: GraduationCap,
      title: language === 'ta' ? 'விளையாட்டு வழி கல்வி' : 'Play-Based Smart Learning',
      desc: language === 'ta' ? 'பாதுகாப்பான சூழலில் குழந்தை மையக் கற்றல் மண்டலம்' : 'Child-centric, ultra-safe & interactive activity zones'
    },
    {
      icon: Award,
      title: language === 'ta' ? 'மாநில அளவிலான போட்டிகள்' : 'State-Level Competitions',
      desc: language === 'ta' ? 'வெள்ளி விநாயகர் சிலை & சான்றிதழ் பரிசுகள்' : 'Exclusive Silver Ganesha Idol gifts & certificates'
    },
    {
      icon: MapPin,
      title: language === 'ta' ? '9+ முன்னணி கிளைகள்' : '9+ Premier Centers',
      desc: language === 'ta' ? 'தாம்பரம், கோவை, சென்னை, திருப்பூர், ஈரோடு...' : 'Tambaram, Coimbatore, Chennai, Tirupur & more'
    }
  ];

  return (
    <FestiveBackground>
      <div className="pt-20 sm:pt-24 pb-16 min-h-screen flex flex-col justify-between px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

        {/* ---------------- TOP BANNER BAR: TIMER & REWARD PROGRESS ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-amber-300 mb-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded-xl border border-amber-300">
              <img
                src="/assets/images/logo.png"
                alt="TN Happy Kids Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div>
              <span className="px-2.5 py-0.5 bg-orange-100 text-orange-900 border border-orange-300 rounded-full text-[10px] font-extrabold uppercase tracking-wider block w-fit mb-0.5">
                Official Sponsor Ad
              </span>
              <h1 className="font-heading font-extrabold text-amber-950 text-base sm:text-lg leading-tight">
                TN Happy Kids Preschool & Activity Center
              </h1>
            </div>
          </div>

          {/* Timer & Skip Action */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full md:w-48 bg-amber-50 rounded-xl p-2.5 border border-amber-200 text-center">
              <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                  {timeLeft > 0 ? 'Reward Unlocking...' : 'Unlocked!'}
                </span>
                <span className="text-orange-600 font-extrabold">{timeLeft}s</span>
              </div>
              <div className="w-full h-2 bg-amber-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500"
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <button
              onClick={handleAdDone}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-heading font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                canSkip || timeLeft === 0
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-300 hover:scale-105 shadow-emerald-500/30'
                  : 'bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200'
              }`}
            >
              <span>{canSkip || timeLeft === 0 ? 'Skip Ad & Get Reward 🎉' : `Skip (${timeLeft}s)`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ---------------- MAIN FULL PAGE ADVERTISEMENT FLYER ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-yellow-300 text-white relative overflow-hidden my-auto"
        >
          {/* Background Decorative Patterns */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-300/20 to-amber-500/20 mix-blend-overlay animate-pulse pointer-events-none" />
          <img
            src="/assets/images/modak.png"
            alt="Modak"
            className="absolute -top-8 -right-8 w-32 sm:w-48 h-auto opacity-20 pointer-events-none"
          />
          <img
            src="/assets/images/diya.png"
            alt="Diya"
            className="absolute -bottom-8 -left-8 w-32 sm:w-48 h-auto opacity-20 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            {/* LEFT SIDE: Visual Poster Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 rounded-2xl p-3 shadow-2xl border-2 border-yellow-300 relative group overflow-hidden">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/assets/images/playschool_banner.png"
                    alt="TN Happy Kids Playschool Banner"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-extrabold uppercase tracking-wider inline-block mb-1 shadow-md border border-yellow-300">
                      Admissions Open 2026 – 2027
                    </span>
                    <p className="text-xs text-amber-200 font-semibold drop-shadow">
                      {language === 'ta'
                        ? '3 முதல் 5 வயது குழந்தைகளுக்கான சிறந்த முன்பள்ளி'
                        : 'Premier Preschool & Activity Center for Kids Aged 3–5'}
                    </p>
                  </div>
                </div>

                {/* Floating Vinayagar Emblem Badge */}
                <div className="absolute top-5 right-5 bg-amber-500 text-white p-2.5 rounded-full shadow-lg border-2 border-white animate-bounce">
                  <Sparkles className="w-6 h-6 text-yellow-200" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Offer Details & Professional Value Pitch */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-yellow-200/50 rounded-full text-xs sm:text-sm font-extrabold text-yellow-100 mb-4 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-yellow-200" />
                  <span>{language === 'ta' ? 'தமிழ்நாட்டின் #1 முன்பள்ளி மையம்' : 'Tamil Nadu\'s #1 Choice For Little Learners'}</span>
                </div>

                {/* Main Headline */}
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
                  {language === 'ta'
                    ? 'உங்கள் குழந்தையின் பிரகாசமான எதிர்காலம் TN Happy Kids-ல் தொடங்குகிறது!'
                    : 'Shape Your Child\'s Future With Joy, Arts & Excellence!'}
                </h2>

                <p className="text-amber-100 text-sm sm:text-base font-medium leading-relaxed mb-6">
                  {language === 'ta'
                    ? 'TN Happy Kids முன்பள்ளி & பயிற்சி மையம் குழந்தைகளுக்கான பாதுகாப்பான, அன்பான மற்றும் படைப்பாற்றல் நிறைந்த கற்றல் சூழலை வழங்குகிறது.'
                    : 'TN Happy Kids Preschool & Activity Center provides a safe, joyful & child-centric atmosphere where early childhood education meets creative arts and values.'}
                </p>

                {/* 4 Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {features.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-yellow-200/30 flex items-start gap-3"
                      >
                        <div className="w-9 h-9 bg-yellow-400 text-amber-950 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-white text-xs sm:text-sm">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-amber-100/80 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Admission CTA Action Row */}
              <div className="pt-4 border-t border-yellow-300/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-yellow-300">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase text-amber-200 tracking-wider">
                      Admissions Helpline
                    </div>
                    <a
                      href="tel:+918925105109"
                      className="font-heading font-extrabold text-base sm:text-lg text-white hover:text-yellow-200 transition-colors"
                    >
                      +91 89251 05109
                    </a>
                  </div>
                </div>

                <a
                  href="https://www.tnhappykids.in/admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-amber-950 rounded-xl font-heading font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 border-2 border-white cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-amber-900 animate-spin-slow" />
                  <span>{language === 'ta' ? 'சேர்க்கை விவரங்கள்' : 'Explore Admission'}</span>
                  <ExternalLink className="w-4 h-4 text-amber-900" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>

        {/* ---------------- BOTTOM REWARDS CTA BAR ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <button
            onClick={handleAdDone}
            className={`w-full max-w-2xl mx-auto py-4 px-8 rounded-full font-heading font-extrabold text-base sm:text-lg shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer border-2 ${
              canSkip || timeLeft === 0
                ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white border-yellow-300 hover:scale-105 shadow-orange-500/50 animate-pulse'
                : 'bg-amber-200 text-amber-950 border-amber-400 hover:bg-amber-300'
            }`}
          >
            <Gift className="w-6 h-6 text-yellow-200 animate-bounce" />
            <span>
              {canSkip || timeLeft === 0
                ? 'Claim Silver Idol & 100 Reward Points Now 🎉'
                : `Claim Rewards (${timeLeft}s remaining)`}
            </span>
          </button>
        </motion.div>

      </div>
    </FestiveBackground>
  );
};
