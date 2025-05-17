import Router from './router';
import Header from './components/Header';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export default function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
