// Import main stylesheet
import './App.css';

// Import React and necessary hooks
import React, { Suspense, lazy, useEffect, useState } from 'react';

// Import React Router components
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Import Intersection Observer hook
import { useInView } from 'react-intersection-observer';

// Import components
import NavLink from './component/navlink/navlink';
import Introduction from './component/introduction/introduction';
import Footer from './component/footer/footer';
import Blog from './component/blog/blog';
import Coach from './component/coach/coach';
import BlogPost from './component/blog/readmore';
import MoreStudents from './component/achievers/morestudents';
import WHATSAPP from './component/whatsapp-400.webp'; // Use WebP format for images

// Lazy load components for better performance
const ReasonsComponent = lazy(() => import('./component/reason/reason'));
const CourseSection = lazy(() => import('./component/course/course'));
const AchieversSection = lazy(() => import('./component/achievers/achieve'));
const MentorSection = lazy(() => import('./component/mentorsection/mentorsection'));
const ReviewsSection = lazy(() => import('./component/review/review'));

// Home component
function Home() {
  const [display, setDisplay] = useState('none');
  
  // Setup intersection observers
  const { ref: reasonsRef, inView: reasonsInView } = useInView({ triggerOnce: true });
  const { ref: coursesRef, inView: coursesInView } = useInView({ triggerOnce: true });
  const { ref: achieversRef, inView: achieversInView } = useInView({ triggerOnce: true });
  const { ref: mentorsRef, inView: mentorsInView } = useInView({ triggerOnce: true });
  const { ref: reviewsRef, inView: reviewsInView } = useInView({ triggerOnce: true });

  // Handle scroll event to toggle contact button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 1000) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Introduction />
      <div ref={reasonsRef}>
        {reasonsInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <ReasonsComponent />
          </Suspense>
        )}
      </div>
      <div ref={coursesRef}>
        {coursesInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <CourseSection />
          </Suspense>
        )}
      </div>
      <div ref={achieversRef}>
        {achieversInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <AchieversSection />
          </Suspense>
        )}
      </div>
      <div ref={mentorsRef}>
        {mentorsInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <MentorSection />
          </Suspense>
        )}
      </div>
      <div ref={reviewsRef}>
        {reviewsInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <ReviewsSection />
          </Suspense>
        )}
      </div>
      <Footer />
      <div className="contact-button" style={{ display: display }}>
        <a href="https://wa.link/weua1t" target="_blank" rel="noopener noreferrer">
          <img src={WHATSAPP} alt="WhatsApp Logo for WhatsApp button" />
          <strong>BOOK A DEMO</strong>
        </a>
      </div>
    </div>
  );
}

// ScrollToTop component to handle scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main App component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavLink />
        <Routes scrollRestoration="auto">
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/more-students" element={<MoreStudents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
