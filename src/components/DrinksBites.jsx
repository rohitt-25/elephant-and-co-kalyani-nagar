import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DrinksBites = () => {
  const sectionRef = useRef(null);
  const chips = [
    "Nasi Goreng", "Farmhouse Pizza", "Chicken Dimsum", 
    "Thai Prawn Dimsum", "Mathew Chicken"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        // Bento Grid Reveal
        gsap.from('.grid-item', {
          opacity: 0,
          scale: 0.92,
          y: 16,
          duration: 0.4,
          stagger: { each: 0.06, from: 'start', grid: 'auto' },
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.grid-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });

        // Chip Strip Reveal
        gsap.from('.chip-item', {
          opacity: 0,
          y: 10,
          duration: 0.3,
          stagger: 0.04,
          scrollTrigger: {
            trigger: '.chip-container',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        });

        // Heading Reveal
        gsap.from('.section-header', {
          opacity: 0,
          y: 12,
          duration: 0.35,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.section-header',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12 section-header">
        <h2 className="font-['Righteous'] text-4xl md:text-5xl text-white mb-4">Drinks & Bites</h2>
        <p className="text-[#94A3B8] font-['Poppins'] text-lg">
          From reviews left by our regulars — here's what keeps people ordering seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 grid-container">
        <div className="grid-item md:col-span-6 bg-[#192134] p-8 rounded-[12px] border border-[rgba(255,255,255,0.08)] transition-transform duration-250 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]">
          <h3 className="font-['Righteous'] text-2xl text-white mb-3">Signature Cocktails</h3>
          <p className="text-[#94A3B8] font-['Poppins'] leading-relaxed">
            Try the Gin Fomo (fruity, loaded with berries), the Pornstar Martini, or 'Let's Go to Eco' — our most-talked-about pour.
          </p>
        </div>

        <div className="md:col-span-6 grid grid-rows-2 gap-6">
          <div className="grid-item bg-[#192134] p-6 rounded-[12px] border border-[rgba(255,255,255,0.08)] transition-transform duration-250 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]">
            <h3 className="font-['Righteous'] text-xl text-white mb-2">Bar Bites</h3>
            <p className="text-[#94A3B8] font-['Poppins'] text-sm leading-relaxed">
              Hot honey cream cheese with toasted baguette, Beijing chicken wings, chicken shawarma, and a Thai red curry regulars call a 10/10.
            </p>
          </div>
          <div className="grid-item bg-[#192134] p-6 rounded-[12px] border border-[rgba(255,255,255,0.08)] transition-transform duration-250 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]">
            <h3 className="font-['Righteous'] text-xl text-white mb-2">Beer & Spirits</h3>
            <p className="text-[#94A3B8] font-['Poppins'] text-sm leading-relaxed">
              German Witbier, Belgian Witbier, Bad Habit Lager, and Mixberry Mead — light, fruity, and easy to session.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 chip-container">
        {chips.map((chip, index) => (
          <span 
            key={index} 
            className="chip-item px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] text-[#94A3B8] font-['Poppins'] text-sm hover:border-[#F97316] hover:text-[#F97316] transition-colors cursor-default"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="flex justify-center">
        <a 
          href="https://wa.me/919766838529?text=Hi!%20I'd%20like%20to%20see%20today's%20menu%20at%20Elephant%20and%20Co.%20Kalyani%20Nagar."
          className="inline-flex items-center justify-center bg-[#EA580C] text-white font-['Poppins'] font-semibold px-8 h-[48px] rounded-[12px] hover:bg-[#F97316] transition-all duration-220 hover:-translate-y-[2px] shadow-[0_0_20px_rgba(234,88,12,0.15)]"
        >
          Ask for today's menu on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default DrinksBites;
