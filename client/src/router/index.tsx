import { Routes, Route, useLocation } from 'react-router';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';
import Images from '../pages/Images';

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      // Using CSS pixels iphone 12 390px width
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    // Check on initial load
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    let smoother = null;
    
    if (!isMobile) {
      // Desktop: Create smooth scrolling
      smoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
    } else {
      // Mobile: Remove ALL GSAP scroll effects
      
      // 1. Remove data-speed attributes that cause parallax effects
      document.querySelectorAll('[data-speed]').forEach(el => {
        el.removeAttribute('data-speed');
      });
      
      // 2. Reset transforms on image containers
      document.querySelectorAll('.image_cont').forEach(el => {
        (el as HTMLElement).style.transform = '';
        (el as HTMLElement).style.willChange = 'auto';
      });
      
      // 3. Reset transforms on images
      document.querySelectorAll('.image_cont img').forEach(el => {
        (el as HTMLElement).style.transform = '';
        (el as HTMLElement).style.willChange = 'auto';
      });
    }
    
    return () => {
      if (smoother) smoother.kill();
    };
  }, [location, isMobile]);
  
  return (
    <div id="smooth-wrapper">
      <div id={isMobile ? "" : "smooth-content"}>
        <Routes>
          <Route>
            <Route index element={<Images />} />
            <Route path="images" element={<Images />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
