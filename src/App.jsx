import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { CompetitionProvider } from './context/CompetitionContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IntroAnimation } from './components/IntroAnimation';
import { PageTransition } from './components/PageTransition';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Upload } from './pages/Upload';
import { Activity } from './pages/Activity';
import { Advertisement } from './pages/Advertisement';
import { Reward } from './pages/Reward';
import { Complete } from './pages/Complete';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/register"
          element={
            <PageTransition>
              <Register />
            </PageTransition>
          }
        />
        <Route
          path="/upload"
          element={
            <PageTransition>
              <Upload />
            </PageTransition>
          }
        />
        <Route
          path="/activity"
          element={
            <PageTransition>
              <Activity />
            </PageTransition>
          }
        />
        <Route
          path="/advertisement"
          element={
            <PageTransition>
              <Advertisement />
            </PageTransition>
          }
        />
        <Route
          path="/reward"
          element={
            <PageTransition>
              <Reward />
            </PageTransition>
          }
        />
        <Route
          path="/complete"
          element={
            <PageTransition>
              <Complete />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const MainContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname !== '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Show intro on initial load if not already seen in session
    return !sessionStorage.getItem('tn_intro_seen');
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('tn_intro_seen', 'true');
    setShowIntro(false);
  };

  return (
    <LanguageProvider>
      <CompetitionProvider>
        <Router>
          {showIntro ? (
            <IntroAnimation onComplete={handleIntroComplete} />
          ) : (
            <MainContent />
          )}
        </Router>
      </CompetitionProvider>
    </LanguageProvider>
  );
}
