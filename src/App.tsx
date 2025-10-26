import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import SocialFeedsPage from './pages/SocialFeedsPage';
import './App.css';

function App() {
  // Global click handler as fallback
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-scroll-target]');
      
      if (button) {
        console.log('🌍 Global click handler triggered');
        const targetId = button.getAttribute('data-scroll-target');
        if (targetId) {
          console.log('🎯 Scrolling to:', targetId);
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log('✅ Global scroll executed');
          } else {
            console.error('❌ Target element not found:', targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="social-feeds" element={<SocialFeedsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
