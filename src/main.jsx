import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const initMotion = async () => {
  if (prefersReducedMotion) return;

  const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('lenis')
  ]);

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Lenis takes over scrolling, so ScrollTrigger stops seeing native scroll
  // events. Without these three lines every scroll-triggered reveal keeps its
  // `opacity: 0` start state and the whole page below the hero stays invisible.
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Fonts and images settle after first paint and shift trigger positions.
  ScrollTrigger.refresh();
};

window.addEventListener('load', () => {
  initMotion();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
