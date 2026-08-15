import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();
    tl.fromTo(contentRef.current.children, 
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power1.out' }
    );

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const xPos = (clientX - left) / width - 0.5;
      const yPos = (clientY - top) / height - 0.5;

      gsap.to(imageRef.current, {
        rotationY: xPos * 6,
        rotationX: yPos * -6,
        duration: 0.8,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full px-4 py-12 md:py-24 overflow-hidden min-h-[100dvh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6" ref={contentRef}>
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6 z-20">
          <h1 className="font-['Righteous'] text-[40px] md:text-[72px] leading-[1.1] text-[#FFFFFF]">
            Kalyani Nagar's go-to bar — 7,951 reviews and counting
          </h1>
          <p className="font-['Poppins'] text-[18px] text-[#94A3B8] max-w-2xl">
            Rated 4.4 by thousands of regulars in Pune, Elephant and Co. is where Kalyani Nagar comes for drinks, music, and private celebrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/919766838529?text=Hi! I'd like to book a table at Elephant and Co. Kalyani Nagar" 
              className="bg-[#EA580C] hover:bg-[#F97316] text-[#FFFFFF] font-['Poppins'] font-semibold h-[48px] px-8 rounded-[12px] flex items-center justify-center transition-all shadow-[0_0_20px_rgba(234,88,12,0.15)] focus:outline-none focus:ring-4 focus:ring-[#F97316]"
            >
              Book on WhatsApp
            </a>
            <a 
              href="#drinks-bites" 
              className="border-[1px] border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-[#FFFFFF] font-['Poppins'] font-semibold h-[48px] px-8 rounded-[12px] flex items-center justify-center transition-all focus:outline-none focus:ring-4 focus:ring-[#F97316]"
            >
              View the menu
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent z-10" />
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlQ9BcYKtEYL5O0Ch56B8w4VNrOSfoopHmQibt6J2dMgJNFKTIbXY5QgFpqZTu-wIzaKcmX77Mhyc5HOk9F-HHat_RRWWpR2o1leRfHwBxo5lnQmuAoK35CbJzfioMABo3T9JsJaiJ27bc=w1920-h1080-k-no"
          alt="Elephant and Co. Kalyani Nagar's entrance signage lit up after dark, warm string lights setting the mood for the evening."
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto mt-12 z-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {["4.4★ Google rating", "7,951 reviews", "Open 7 days, 12 PM–12 AM"].map((text, i) => (
          <div key={i} className="bg-[#192134]/80 backdrop-blur-sm py-4 px-6 rounded-[12px] border-[1px] border-[rgba(255,255,255,0.08)] text-center font-['Poppins'] text-[14px] text-[#FFFFFF]">
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
