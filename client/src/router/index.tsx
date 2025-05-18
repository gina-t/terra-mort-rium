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
      // Simple detection based on screen width
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
  const smoother = !isMobile 
    ? ScrollSmoother.create({
        smooth: 1,
        effects: true,
      })
    : null;
  
  return () => {
    if (smoother) {
      smoother.kill();
    }
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
