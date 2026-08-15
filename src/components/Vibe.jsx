import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Vibe = () => {
  const sectionRef = useRef(null);
  const photos = [
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwfO6UFUuo1Eg55iA9NBD8w0F4kasf9MsqvKqwfd3DI8K-M9uiSyl5NGSwvxSjSs-LLI4XCDkhdhNHshNlUHgIksBX2yDVbbZ7ECv2O2SbM2ILZmdDZm2eSGaGnihIBcnvVousrA=w800-h450-k-no",
      alt: "Bartender crafting a cocktail behind the bar at Elephant and Co., amber lighting on the glassware.",
      width: 800,
      height: 450
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmEEV0o_ht5evq-q6i1-pQvgwwG9JDn7PisvEogQ3UYXPUJUJwdlhkqvjqrD9TrbL3sU9wUciiX8XB2rNwhESxekFwbdujWqa2ojH_EOGZQfS2s_h3Pn-wi7VLACT1cXoF1Rzcw8eAYUFA=w400-h400-k-no",
      alt: "Seating area at Elephant and Co. filling up with guests as evening turns to night.",
      width: 400,
      height: 400
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn53hOqWLZB0V9U_oHRdZKEzRSQ8qTFzrAElf3cGqmnkXfTUzUyaQp0KttoaHCdy24yT1H_dW7CFSNxadi6jIedRDn5Nm7X3mMc7nGmYVcgON5yklkpatKHsxlTLACqXWCoKkruicuE7LDw=w400-h400-k-no",
      alt: "Close-up of glassware and cocktail garnishes with warm backlighting at Elephant and Co.",
      width: 400,
      height: 400
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdq_vYBfcXbtKolgEyBaKv8QRz_JD5MkjmyxuESXBYaZ6cV1IX9PCSvDHX2Z1fn0YX-z6scQFO7JVwKBZwCWV5vTFmSwPapHG3o8FHMTqMYwzV_fGfiexH2raTsx_ch42kOvE=w1200-h600-k-no",
      alt: "DJ booth and live music setup lighting up the venue at night.",
      width: 1200,
      height: 600
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach((layer, i) => {
        gsap.to(layer, {
          yPercent: (i + 1) * -10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 0.5,
            start: 'top bottom',
            end: 'bottom top'
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '96px 16px', backgroundColor: '#0F172A' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Righteous', fontSize: '40px', color: '#FFFFFF', marginBottom: '8px' }}>The Vibe</h2>
          <p style={{ fontFamily: 'Poppins', fontSize: '18px', color: '#94A3B8' }}>
            Trees, string lights, live music, and a crowd that keeps coming back — this is Kalyani Nagar after dark.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
          <div style={{ gridColumn: 'span 8', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div className="parallax-layer" style={{ width: '100%', height: '500px' }}>
              <img src={photos[0].src} alt={photos[0].alt} width={photos[0].width} height={photos[0].height} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} decoding="async" />
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', display: 'grid', gap: '24px' }}>
            {[1, 2].map((idx) => (
              <div key={idx} style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div className="parallax-layer" style={{ width: '100%', height: '238px' }}>
                  <img src={photos[idx].src} alt={photos[idx].alt} width={photos[idx].width} height={photos[idx].height} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} decoding="async" />
                </div>
              </div>
            ))}
          </div>

          <div style={{ gridColumn: 'span 12', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div className="parallax-layer" style={{ width: '100%', height: '400px' }}>
              <img src={photos[3].src} alt={photos[3].alt} width={photos[3].width} height={photos[3].height} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vibe;
