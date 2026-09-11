import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Phone, PhoneCall, Mail, MapPin, ExternalLink, Home as HomeIcon, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  const branches = [
    {
      id: 1,
      name: "BRANCH 1",
      city: "Pollachi",
      address: "No:11, PKS Colony, Jothi Nagar, Pollachi",
      mapsQuery: "No:11, PKS Colony, Jothi Nagar, Pollachi"
    },
    {
      id: 2,
      name: "BRANCH 2",
      city: "Coimbatore",
      address: "No.20, Kalianna Gounder St, K.K.Pudur, Saibaba Colony, Near Kannan Store, Coimbatore",
      mapsQuery: "No.20, Kalianna Gounder St, K.K.Pudur, Saibaba Colony, Coimbatore"
    },
    {
      id: 3,
      name: "BRANCH 3",
      city: "Chennai (Kolathur)",
      address: "No 18, 1st Main Road, Srinivasa Nagar, Kolathur, Chennai",
      mapsQuery: "No 18, 1st Main Road, Srinivasa Nagar, Kolathur, Chennai"
    },
    {
      id: 4,
      name: "BRANCH 4",
      city: "Chennai (Tambaram West)",
      address: "Plot No 105, Vasantham Nagar, Kishkinta Main Road, Tambaram West, Chennai",
      mapsQuery: "Plot No 105, Vasantham Nagar, Kishkinta Main Road, Tambaram West, Chennai"
    },
    {
      id: 5,
      name: "BRANCH 5",
      city: "Tirupur",
      address: "697, B/1 Munniyapan Kovil Street, Near A2B Hotels PN Road, Tirupur",
      mapsQuery: "697 B/1 Munniyapan Kovil Street, Near A2B Hotels PN Road, Tirupur"
    },
    {
      id: 6,
      name: "BRANCH 6",
      city: "Erode",
      address: "37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode",
      mapsQuery: "37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode"
    },
    {
      id: 7,
      name: "BRANCH 7",
      city: "Dharmapuri",
      address: "Annai Therasha Colony, Senthil Nagar, Dharmapuri",
      mapsQuery: "Annai Therasha Colony, Senthil Nagar, Dharmapuri"
    },
    {
      id: 8,
      name: "BRANCH 8",
      city: "Coimbatore (Anna Nagar)",
      address: "No. 25, Main Road, Anna Nagar, Coimbatore",
      mapsQuery: "No. 25, Main Road, Anna Nagar, Coimbatore"
    },
    {
      id: 9,
      name: "BRANCH 9",
      city: "Tirupur (Gandhi Nagar)",
      address: "No. 10, School Road, Gandhi Nagar, Tirupur",
      mapsQuery: "No. 10, School Road, Gandhi Nagar, Tirupur"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-amber-950 via-orange-950 to-amber-950 text-amber-100 pt-16 pb-8 overflow-hidden border-t-4 border-amber-500">
      {/* Decorative Marigold String Header */}
      <div className="absolute top-0 left-0 right-0 h-4 flex justify-between overflow-hidden opacity-80 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src="/assets/images/marigold.png"
            alt="Marigold string"
            className="w-8 h-8 -translate-y-3"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid: Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

          {/* Col 1: Brand & Admission CTA (Lg: 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="bg-white/95 p-3 rounded-2xl mb-4 shadow-xl border-2 border-amber-300">
              <img
                src="/assets/images/logo.png"
                alt="TN Happy Kids Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <h3 className="font-heading text-xl font-extrabold text-yellow-300 mb-2">
              TN Happy Kids Preschool & Activity Center
            </h3>
            <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed mb-6">
              {language === 'ta'
                ? 'தமிழ்நாட்டின் முன்னணி முன்பள்ளி, பிளேஸ்கூல் மற்றும் கலைப் பயிற்சி மையம். குழந்தைகளின் படைப்பாற்றலை வளர்க்கும் தளம்.'
                : "Tamil Nadu's premier playschool, preschool & creative activity center empowering young minds through quality education, arts, and festival celebrations."}
            </p>

            {/* Admission & Quick Enquiry Direct External Button */}
            <a
              href="https://www.tnhappykids.in/admission"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-amber-950 rounded-2xl font-heading font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 transition-all border-2 border-yellow-200 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 text-amber-900 animate-spin-slow group-hover:rotate-45 transition-transform" />
              <span>Admission & Quick Enquiry </span>
              <ExternalLink className="w-4 h-4 text-amber-900" />
            </a>
          </div>

          {/* Col 2: Quick Navigation (Lg: 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-lg font-extrabold text-yellow-300 mb-4 border-b border-amber-800/80 pb-2 flex items-center gap-2">
              <HomeIcon className="w-4 h-4 text-yellow-400" />
              <span>{language === 'ta' ? 'முக்கிய இணைப்புகள்' : 'Quick Navigation'}</span>
            </h3>
            <ul className="space-y-3 text-sm text-amber-200/90 font-medium">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">&bull;</span> {t('navHome')}
                </Link>
              </li>
              <li>
                <a href="/#competition" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">&bull;</span> {t('navWishes')}
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">&bull;</span> {t('navHowItWorks')}
                </a>
              </li>
            </ul>

            {/* Contact Us Sub-block */}
            <div className="mt-8 pt-6 border-t border-amber-900/80">
              <h4 className="font-heading text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                <span>Contact Us</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-amber-200/90 font-medium">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  <a href="tel:+918925105109" className="hover:text-yellow-300 transition-colors font-bold text-yellow-200">
                    +91 89251 05109
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                  <a href="mailto:admission@tnhappykids.in" className="hover:text-yellow-300 transition-colors font-semibold text-yellow-200">
                    admission@tnhappykids.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3 & 4: Our Branch Locations Grid (Lg: 5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="font-heading text-lg font-extrabold text-yellow-300 mb-4 border-b border-amber-800/80 pb-2 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Our Branch Locations</span>
              </span>
              <span className="text-xs font-bold text-yellow-400/80 bg-amber-900/60 px-2.5 py-0.5 rounded-full border border-amber-700">
                9 Branches
              </span>
            </h3>

            {/* Scrollable / Responsive Branch Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
              {branches.map((branch) => (
                <a
                  key={branch.id}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-900/40 hover:bg-amber-800/70 backdrop-blur-sm p-3 rounded-xl border border-amber-800/60 hover:border-yellow-400/80 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-yellow-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-extrabold text-yellow-200 group-hover:text-yellow-100 transition-colors">
                        {branch.name}
                      </div>
                      <div className="text-[11px] font-semibold text-amber-300/80">
                        {branch.city}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:text-yellow-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-900/80 text-center text-xs text-amber-400/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TN Happy Kids Preschool. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-amber-300/90 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-pulse" />
            <span>for TN Happy Kids Little Artists</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
