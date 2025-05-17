import { Routes, Route, useLocation } from 'react-router';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

// import Boxes from '../pages/Boxes';
import Images from '../pages/Images';

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
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
