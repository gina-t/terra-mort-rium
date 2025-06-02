import { Routes, Route, useLocation } from 'react-router';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

import Images from '../pages/Images';
import Poetry from '../pages/Poetry';
import SoundTrack from '../pages/SoundTrack';

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      ignoreMobileResize: true, // Helps with iOS
      normalizeScroll: true, // Helps with iOS
      smoothTouch: 0.1,
    });
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routes>
          <Route>
            <Route index element={<Images />} />
            <Route path="images" element={<Images />} />
            <Route path="read-more-poetry" element={<Poetry />} />
            <Route path="learn-more-tao" element={<SoundTrack />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
