import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Puzzle, Trophy, ArrowRight, Star, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FestiveBackground } from '../components/FestiveBackground';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const timelineSteps = [
    {
      step: '01',
      title: language === 'ta' ? 'குழந்தை பதிவு' : 'Register Kid',
      desc: language === 'ta' ? '3-5 வயதுக் குழந்தையின் தகவல்களை நிரப்பவும்.' : 'Fill simple details for child aged 3–5 years.',
      icon: '📝',
    },
    {
      step: '02',
      title: language === 'ta' ? 'ஓவியம் & வீடியோ பதிவேற்றம்' : 'Upload Drawing & Video',
      desc: language === 'ta' ? 'ஓவியப் படம் மற்றும் சிறு செயல்பாட்டு வீடியோவை அப்லோட் செய்யவும்.' : 'Upload drawing photo and a short activity video clip.',
      icon: '🎨',
    },
    {
      step: '03',
      title: language === 'ta' ? 'விநாயகர் புள்ளி விளையாட்டு' : 'Complete Vinayagar Activity',
      desc: language === 'ta' ? '1 முதல் 50 வரையிலான புள்ளிகளை வரிசையாக இணைக்கவும்.' : 'Join the dots in sequence to reveal Lord Vinayagar.',
      icon: '🧩',
    },
    {
      step: '04',
      title: language === 'ta' ? 'வெள்ளி சிலை பரிசு பெறுக' : 'Get Reward Gift',
      desc: language === 'ta' ? 'வாட்ஸ்அப்பில் பகிர்ந்து வெள்ளி விநாயகர் சிலை வெல்லுங்கள்!' : 'Share on WhatsApp & win Silver Vinayagar Idol!',
      icon: '🌟',
    },
  ];

  return (
    <FestiveBackground>
      {/* ---------------- SECTION 5: HERO SECTION ---------------- */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left z-10"
            >
              {/* Age Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/90 border-2 border-amber-300 text-amber-900 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
                <span>{t('heroBadge')}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-950 leading-[1.15] mb-4">
                {t('heroTitlePart1')} <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700">
                  {t('heroTitlePart2')}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-amber-900/80 font-medium mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t('heroSubtitle')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/register"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-full font-heading font-extrabold text-lg shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2 border-2 border-yellow-300 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-yellow-200" />
                  <span>{t('registerNow')}</span>
                </Link>

                <button
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-amber-100 text-amber-950 rounded-full font-heading font-bold text-base shadow-md border-2 border-amber-300 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t('viewRules')}</span>
                  <ArrowRight className="w-4 h-4 text-amber-700" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-6 border-t border-amber-200/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-amber-900 font-semibold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Free Participation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>100 Reward Points</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Lord Vinayagar PNG & Floating Decorations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              {/* Glowing Background Ring */}
              <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-amber-300/40 via-orange-300/30 to-yellow-200/50 blur-2xl animate-pulse" />

              {/* Main Vinayagar Image */}
              <div className="relative z-10 group">
                <img
                  src="/assets/images/vinayagar.png"
                  alt="Lord Vinayagar"
                  className="w-72 sm:w-96 h-auto drop-shadow-2xl animate-float-slow transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Diya Left */}
                <img
                  src="/assets/images/diya.png"
                  alt="Diya Glow"
                  className="absolute bottom-6 -left-6 w-16 sm:w-20 h-auto animate-diya-glow pointer-events-none drop-shadow-lg"
                />

                {/* Floating Diya Right */}
                <img
                  src="/assets/images/diya.png"
                  alt="Diya Glow"
                  className="absolute bottom-6 -right-6 w-16 sm:w-20 h-auto animate-diya-glow scale-x-[-1] pointer-events-none drop-shadow-lg"
                />

                {/* Floating Modak Sweet */}
                <img
                  src="/assets/images/modak.png"
                  alt="Modak Plate"
                  className="absolute -top-4 right-2 w-14 sm:w-18 h-auto animate-float-reverse pointer-events-none drop-shadow-md"
                />

                {/* Floating Marigold Blossom */}
                <img
                  src="/assets/images/marigold.png"
                  alt="Marigold"
                  className="absolute top-12 -left-4 w-12 sm:w-16 h-auto animate-spin-slow pointer-events-none opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6.5: LUCKY DRAW 10 WINNERS BANNER ---------------- */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-yellow-300 overflow-hidden text-white"
          >
            {/* Background Decorative Modak and Diya images */}
            <img
              src="/assets/images/modak.png"
              alt="Modak"
              className="absolute -top-6 -right-6 w-24 sm:w-32 h-auto opacity-25 pointer-events-none"
            />
            <img
              src="/assets/images/diya.png"
              alt="Diya"
              className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-auto opacity-25 pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Content */}
              <div className="lg:col-span-8 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-yellow-200/50 rounded-full text-xs sm:text-sm font-extrabold text-yellow-100 mb-4 shadow-sm">
                  <Trophy className="w-4 h-4 text-yellow-200 animate-bounce" />
                  <span>{t('luckyDrawBadge')}</span>
                </span>

                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-md">
                  {t('luckyDrawTitle')}
                </h2>

                <p className="text-amber-100 text-sm sm:text-lg font-medium mb-4 leading-relaxed max-w-2xl">
                  {t('luckyDrawSubtitle')}
                </p>

                <p className="text-yellow-200/90 text-xs sm:text-sm font-bold flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('luckyDrawDesc')}</span>
                </p>
              </div>

              {/* Right Lucky Draw Counter Card */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 border-2 border-amber-300 text-amber-950 text-center shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg text-3xl">
                    🎁
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-orange-600 mb-1">
                    10 {language === 'ta' ? 'குழந்தைகள்' : 'Kids'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-amber-900 mb-4 uppercase tracking-wider">
                    {language === 'ta' ? 'பிரத்யேக பரிசுகள்!' : 'Exclusive Gifts!'}
                  </div>
                  <Link
                    to="/register"
                    className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-heading font-extrabold text-sm shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2 border border-yellow-300"
                  >
                    <span>{t('registerNow')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SECTION 6: VINAYAGAR CHATURTHI FESTIVE WISHES & GRAND MANDAP SECTION ---------------- */}
      <section id="competition" className="py-20 md:py-28 bg-gradient-to-b from-amber-100/90 via-orange-50/90 to-amber-100/90 backdrop-blur-xl border-y-4 border-amber-400 relative overflow-hidden">

        {/* Animated Rotating Kolam Floor Mandala Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        >
          <img src="/assets/images/kolam.png" alt="Kolam Mandap" className="w-[700px] h-[700px] object-contain" />
        </motion.div>

        {/* Floating Marigold Flower Blossoms */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.img
            src="/assets/images/marigold.png"
            alt="Marigold Left"
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-6 w-16 sm:w-24 h-auto drop-shadow-md"
          />
          <motion.img
            src="/assets/images/marigold.png"
            alt="Marigold Right"
            animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-6 w-16 sm:w-24 h-auto drop-shadow-md"
          />
          <motion.img
            src="/assets/images/modak.png"
            alt="Modak Floating"
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-12 w-14 sm:w-20 h-auto drop-shadow-lg"
          />
          <motion.img
            src="/assets/images/modak.png"
            alt="Modak Floating Right"
            animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 right-14 w-14 sm:w-20 h-auto drop-shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Compact & Animated Wishes Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-amber-600 text-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-yellow-300 overflow-hidden text-center group"
          >
            {/* Animated Shimmer Aura Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/25 via-orange-300/30 to-amber-500/25 mix-blend-overlay animate-pulse pointer-events-none" />

            {/* Top Hanging Garland Row */}
            <div className="absolute top-0 left-0 right-0 h-4 flex justify-between px-4 overflow-hidden opacity-90">
              {[...Array(8)].map((_, idx) => (
                <motion.img
                  key={idx}
                  src="/assets/images/marigold.png"
                  alt="Garland"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2 + (idx % 3), repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-6 -translate-y-1.5"
                />
              ))}
            </div>

            {/* Animated Brass Diyas on Left & Right */}
            <motion.img
              src="/assets/images/diya.png"
              alt="Diya Left"
              animate={{ scale: [1, 1.15, 1], rotate: [-2, 2, -2] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 sm:w-16 h-auto absolute top-5 left-3 sm:left-6 animate-diya-glow drop-shadow-xl"
            />
            <motion.img
              src="/assets/images/diya.png"
              alt="Diya Right"
              animate={{ scale: [1, 1.15, 1], rotate: [2, -2, 2] }}
              transition={{ duration: 2.2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 sm:w-16 h-auto absolute top-5 right-3 sm:right-6 animate-diya-glow scale-x-[-1] drop-shadow-xl"
            />

            {/* Central TN Happy Kids Logo & Lord Vinayagar 3D Spotlight */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", damping: 14 }}
              className="relative my-2 inline-block"
            >
              {/* Compact Golden Halo Ring Behind Vinayagar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300 via-amber-200 to-yellow-400 blur-xl opacity-70 animate-pulse" />

              <div className="flex flex-col items-center gap-2 relative z-10">
                {/* TN Happy Kids Logo Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-xl shadow-md border border-amber-300"
                >
                  <img
                    src="/assets/images/logo.png"
                    alt="TN Happy Kids Logo"
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </motion.div>

                {/* Animated Vinayagar Image */}
                <motion.img
                  src="/assets/images/vinayagar.png"
                  alt="Lord Vinayagar Blessing"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-28 sm:w-36 md:w-44 h-auto mx-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Festive Tamil Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-3 block"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 backdrop-blur-md text-yellow-100 rounded-full text-xs sm:text-sm font-extrabold tracking-wide border border-yellow-200/40 shadow-sm">
                <Sparkles className="w-4 h-4 text-yellow-200 animate-spin-slow" />
                <span>🌸 {t('festiveTitle')} 🌸</span>
              </span>
            </motion.div>

            {/* Main Festive Wish Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-md tracking-wide"
            >
              {t('festiveWishesTitle')}
            </motion.h2>

            {/* Heartfelt Wish Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-amber-100 text-sm sm:text-base font-medium leading-relaxed max-w-xl mx-auto mb-6 drop-shadow"
            >
              {t('festiveWishesText')}
            </motion.p>

            {/* Interactive Celebration CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <Link
                to="/register"
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-amber-950 rounded-full font-heading font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 transition-all border-2 border-white flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-800 animate-bounce" />
                <span>{t('registerForContest')} 🎉</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ---------------- SECTION 7: HOW IT WORKS ---------------- */}
      <section id="how-it-works" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-4 py-1.5 bg-orange-100 text-orange-900 border border-orange-300 rounded-full text-xs font-extrabold uppercase tracking-wider">
              {language === 'ta' ? '4 எளிய படிகள்' : 'Simple 4-Step Process'}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-amber-950 mt-3 mb-4">
              {language === 'ta' ? 'போட்டி எவ்வாறு இயங்குகிறது?' : 'How The Competition Works'}
            </h2>
            <p className="text-amber-900/80 text-base">
              {language === 'ta' ? 'உங்கள் குழந்தையின் திறமையை வெளிப்படுத்தி பரிசுகளை வெல்ல கீழ்க்கண்ட எளிய வழிகளைப் பின்பற்றவும்!' : 'Follow these easy steps to showcase your child\'s creativity and claim reward points!'}
            </p>
          </div>

          {/* 4-Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/90 rounded-3xl p-6 border-2 border-amber-300/80 shadow-lg relative flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-extrabold text-orange-500">
                    Step {step.step}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-amber-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white rounded-full font-heading font-extrabold text-lg shadow-xl shadow-orange-500/30 hover:scale-105 transition-transform border-2 border-yellow-300 cursor-pointer"
            >
              <span>Join Competition Now</span>
              <Sparkles className="w-5 h-5 text-yellow-200" />
            </Link>
          </div>
        </div>
      </section>
    </FestiveBackground>
  );
};
