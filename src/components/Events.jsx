import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Events = () => {
  const sectionRef = useRef(null);
  const whatsappLink = "https://wa.me/919766838529?text=Hi,%20I'd%20like%20to%20enquire%20about%20hosting%20a%20private%20party%20/%20corporate%20event%20at%20Elephant%20and%20Co.";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.event-card');
      
      gsap.from(cards, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power1.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-[40px] font-['Righteous'] text-white leading-tight">Events & Private Parties</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <article className="event-card md:col-span-7 bg-[#192134] p-8 rounded-[12px] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between transition-transform duration-250 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]">
          <div>
            <h3 className="text-2xl font-['Righteous'] text-white mb-4">Host Your Next Gathering</h3>
            <p className="text-[#94A3B8] font-['Poppins'] text-lg leading-relaxed mb-8">
              Planning a birthday, an office offsite, or a celebration that needs its own corner of Kalyani Nagar? 
              Elephant and Co. hosts private parties and corporate events with dedicated service, music, and a menu built around your group.
            </p>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#C2410C] text-white font-['Poppins'] font-semibold min-h-[44px] px-8 rounded-[12px] hover:bg-[#9A3412] transition-all duration-220 hover:-translate-y-[2px] w-fit focus:outline-none focus:ring-4 focus:ring-[#F97316]"
          >
            Enquire on WhatsApp
          </a>
        </article>

        <div className="md:col-span-5 flex flex-col gap-6">
          <section className="event-card bg-[#192134] p-8 rounded-[12px] border border-[rgba(255,255,255,0.08)] transition-transform duration-250 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]">
            <h4 className="text-xl font-['Righteous'] text-white mb-2">Live Music & DJ Nights</h4>
            <p className="text-[#94A3B8] font-['Poppins'] text-sm">
              Weekend line-ups and themed DJ nights keep the energy going — ask us what's on this weekend.
            </p>
          </section>
          
          <section className="event-card bg-[#192134] p-8 rounded-[12px] border border-[rgba(255,255,255,0.08)] transition-transform duration-250 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]">
            <h4 className="text-xl font-['Righteous'] text-white mb-2">Group & Table Reservations</h4>
            <p className="text-[#94A3B8] font-['Poppins'] text-sm">
              Bringing a bigger table? Reserve ahead on WhatsApp so we can set up the right spot for your group.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Events;
