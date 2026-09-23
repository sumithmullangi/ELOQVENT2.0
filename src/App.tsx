import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SkipToContent } from './components/layout/SkipToContent';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TracksPage } from './pages/TracksPage';
import { ElocutionPage } from './pages/ElocutionPage';
import { InnovexPage } from './pages/InnovexPage';
import { JourneyPage } from './pages/JourneyPage';
import { EvaluationPage } from './pages/EvaluationPage';
import { EligibilityPage } from './pages/EligibilityPage';
import { SchedulePage } from './pages/SchedulePage';
import { FAQPage } from './pages/FAQPage';
import { RegisterPage } from './pages/RegisterPage';
import { ContactPage } from './pages/ContactPage';
import { StyleguidePage } from './pages/StyleguidePage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <SkipToContent />
      <ScrollToTop />
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'var(--bg-canvas)'
        }}
      >
        <Navbar />
        <main id="main-content" style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/elocution" element={<ElocutionPage />} />
            <Route path="/innovex" element={<InnovexPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/eligibility" element={<EligibilityPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/styleguide" element={<StyleguidePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
