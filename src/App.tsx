import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '@/components/MainLayout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import './App.css';

// This component now contains the logic to handle scrolling
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we received a 'scrollTo' instruction in the navigation state
    if (location.state?.scrollTo) {
      
      // THE FIX: Wrap the scroll logic in a setTimeout.
      // This gives the browser a moment to render the page before scrolling.
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          console.log(`Scrolling to element:`, element); // Diagnostic log
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.error(`Element with id '${location.state.scrollTo}' not found.`); // Diagnostic log
        }
      }, 100); // 100ms is a safe delay

      // Clean up the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Projects />    
      <Technologies />
      <AboutUs />    
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="service/:id" element={<ServiceDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;