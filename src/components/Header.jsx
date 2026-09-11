import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles, HelpCircle, Home as HomeIcon, Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/images/logo.png';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navHome'), path: '/', icon: HomeIcon },
    { name: t('navWishes'), path: '/#competition', icon: Sparkles },
    { name: t('navHowItWorks'), path: '/#how-it-works', icon: HelpCircle },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const hideRegisterBtn = location.pathname !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-amber-50/90 backdrop-blur-md shadow-md py-2 border-b border-amber-200/60'
        : 'bg-gradient-to-b from-amber-100/80 to-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: TN Happy Kids Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoImg}
            alt="TN Happy Kids Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-amber-100/40 p-1.5 rounded-full border border-amber-200/60 backdrop-blur-sm shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${location.pathname === link.path
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-amber-900 hover:bg-amber-200/60 hover:text-orange-600'
                }`}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.name}</span>
            </button>
          ))}
        </nav>

        {/* Right: Language Dropdown Selector & Register Now Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3 py-2 bg-amber-100/90 hover:bg-amber-200 text-amber-950 rounded-full font-bold text-xs sm:text-sm border border-amber-300 shadow-sm flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Globe className="w-4 h-4 text-orange-600" />
              <span>{language === 'ta' ? 'தமிழ்' : 'English'}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-amber-800 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Options Menu */}
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-44 bg-white rounded-2xl p-1.5 shadow-xl border-2 border-amber-300 z-50 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-colors cursor-pointer ${
                      language === 'en' ? 'bg-orange-500 text-white' : 'text-amber-950 hover:bg-amber-100'
                    }`}
                  >
                    <span>🇬🇧 English</span>
                    {language === 'en' && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ta');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-colors cursor-pointer mt-1 ${
                      language === 'ta' ? 'bg-orange-500 text-white' : 'text-amber-950 hover:bg-amber-100'
                    }`}
                  >
                    <span>🇮🇳 தமிழ் (Tamil)</span>
                    {language === 'ta' && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!hideRegisterBtn && (
            <Link
              to="/register"
              className="hidden md:flex relative group px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm shadow-md hover:shadow-orange-500/30 transition-all duration-300 items-center gap-2 cursor-pointer border border-amber-300"
            >
              <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
              <span>{t('registerNow')}</span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden gap-2">
          {!hideRegisterBtn && (
            <Link
              to="/register"
              className="px-3.5 py-1.5 bg-orange-500 text-white rounded-full font-bold text-xs shadow-sm flex items-center gap-1"
            >
              <span>Register</span>
            </Link>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-amber-200/50 text-amber-900 hover:bg-amber-200 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-amber-50/95 border-b border-amber-200 px-4 pt-3 pb-6 shadow-xl backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="w-full text-left px-4 py-3 rounded-xl font-semibold text-amber-900 hover:bg-amber-100 flex items-center gap-3"
                >
                  <link.icon className="w-5 h-5 text-orange-500" />
                  <span>{link.name}</span>
                </button>
              ))}
              {!hideRegisterBtn && (
                <div className="pt-2">
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-200" />
                    <span>Register Now (Aged 3-5)</span>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
