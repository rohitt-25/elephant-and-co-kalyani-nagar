import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import DrinksBites from './components/DrinksBites';
import Events from './components/Events';
import Vibe from './components/Vibe';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.trust-card', {
        opacity: 0,
        y: 12,
        duration: 0.35,
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#trust-strip',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="app-container">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      
      <main className="main-content">
        <section id="hero-section">
          <Hero />
          <div id="trust-strip" className="trust-grid">
            {[
              { label: "4.4★ Google rating" },
              { label: "7,951 reviews" },
              { label: "Open 7 days, 12 PM–12 AM" }
            ].map((item, i) => (
              <div key={i} className="trust-card">
                <span className="trust-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="drinks-bites">
          <h2 className="section-heading">Tonight at Elephant and Co.</h2>
          <div className="service-list">
            <div className="service-item">Craft Cocktails & Bar Menu</div>
            <div className="service-item">Private Parties & Corporate Events</div>
          </div>
          <DrinksBites />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="about-us">
          <div className="content-box">
            <h2 className="section-heading">About Elephant and Co.</h2>
            <p className="section-text">
              Tucked into Kalyani Nagar, Elephant and Co. has become a cornerstone of Pune's nightlife. 
              We blend a relaxed, tree-lined aesthetic with high-energy music, craft cocktails, 
              and a menu that regulars swear by. Whether it's a quiet weekday pint or a 
              weekend celebration, we're here to make every visit memorable.
            </p>
          </div>
        </section>

        <section id="vibe">
          <div className="gallery">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwfO6UFUuo1Eg55iA9NBD8w0F4kasf9MsqvKqwfd3DI8K-M9uiSyl5NGSwvxSjSs-LLI4XCDkhdhNHshNlUHgIksBX2yDVbbZ7ECv2O2SbM2ILZmdDZm2eSGaGnihIBcnvVousrA=w1920-h1080-k-no" alt="Vibe 1" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmEEV0o_ht5evq-q6i1-pQvgwwG9JDn7PisvEogQ3UYXPUJUJwdlhkqvjqrD9TrbL3sU9wUciiX8XB2rNwhESxekFwbdujWqa2ojH_EOGZQfS2s_h3Pn-wi7VLACT1cXoF1Rzcw8eAYUFA=w1920-h1080-k-no" alt="Vibe 2" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn53hOqWLZB0V9U_oHRdZKEzRSQ8qTFzrAElf3cGqmnkXfTUzUyaQp0KttoaHCdy24yT1H_dW7CFSNxadi6jIedRDn5Nm7X3mMc7nGmYVcgON5yklkpatKHsxlTLACqXWCoKkruicuE7LDw=w1920-h1080-k-no" alt="Vibe 3" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdq_vYBfcXbtKolgEyBaKv8QRz_JD5MkjmyxuESXBYaZ6cV1IX9PCSvDHX2Z1fn0YX-z6scQFO7JVwKBZwCWV5vTFmSwPapHG3o8FHMTqMYwzV_fGfiexH2raTsx_ch42kOvE=w1920-h1080-k-no" alt="Vibe 4" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkFHIrhLSwEsmFvUlzjfllE6WbwZSsToJD4T9jW7VFm5L2m9sJmno58SPFpdfdkVOTqkrqaPbkmXdf1F2mzRN5Be6BxER0gnOWpRlil1i49p0ZJyYGn_pfRLKPj7awxCWhvidxK5dYHquTd=w1920-h1080-k-no" alt="Vibe 5" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlqGP6D0Ww9MqE5reU-x-7tlfKPahMaJzIO-nN7p4oBamyukUXdXdpZynegwhwIsejvWRNJATvYmlmYnqi5E3RWo99c8hy9MjVQGiyDmFVhGJ-YMfODlL4cUZYvm8CRvxdetpw8buHClkOI=w1920-h1080-k-no" alt="Vibe 6" />
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWksEkAmeiO26sSHIZ3At8tEvsQd7Ul3oXyuFg85psk10LAeWr0PJSXx9zES6ZRUyLtFfjHke7wmjA0_5_HENpsW6dW_ZN95HUShnPp67MNR5rXUc8Qx3JZqAD4y2qwax0TPmesZTFyKkrnL=w1920-h1080-k-no" alt="Vibe 7" />
          </div>
          <Vibe />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="find-us">
          <div className="content-box">
            <h2 className="section-heading">Find Us in Kalyani Nagar</h2>
            <div className="location-grid">
              <div className="map-wrapper">
                <iframe 
                  title="Elephant and Co. Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.597652391054!2d73.9064166759714!3d18.550119382548816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14777777777%3A0x6d9f7e77b7777777!2sElephant%20and%20Co.%20Kalyani%20Nagar!5e0!3m2!1sen!2sin!4v1715000000000" 
                  width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
              </div>
              <div className="contact-info">
                <p className="address-text">Pushpak Society, Metro Traders Compound Complex, Plot no. 88, Kalyani Nagar, Pune, Maharashtra 411006</p>
                <div className="contact-links">
                  <a href="tel:+919766838529" className="contact-link">Phone: +91 97668 38529</a>
                  <a href="https://wa.me/919766838529" className="contact-link">WhatsApp: +91 97668 38529</a>
                </div>
                <table className="hours-table">
                  <tbody>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                      <tr key={day}><th scope="row" className="day-cell">{day}</th><td className="time-cell">12 PM – 12 AM</td></tr>
                    ))}
                  </tbody>
                </table>
                <a href="https://wa.me/919766838529?text=Hi!%20I'd%20like%20to%20book%20a%20table%20at%20Elephant%20and%20Co.%20Kalyani%20Nagar" 
                   className="cta-button">
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
