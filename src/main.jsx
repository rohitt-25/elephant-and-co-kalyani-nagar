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

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

window.addEventListener('load', () => {
  initMotion();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
