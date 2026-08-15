import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DrinksBites from './components/DrinksBites';
import Events from './components/Events';
import Vibe from './components/Vibe';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

/**
 * Composition only. Each child owns its own section markup and styling — the
 * app shell must not re-wrap them in a second layer of containers, or the two
 * fight each other and one of them ends up unstyled.
 */

const SECTION = 'py-24 px-6 md:px-12 max-w-7xl mx-auto';
const HEADING = "font-['Righteous'] text-4xl md:text-5xl text-white mb-4";
const BODY = "font-['Poppins'] text-[#94A3B8] leading-relaxed";
const CARD =
  'bg-[#192134] rounded-[12px] border border-[rgba(255,255,255,0.08)] p-8';

const HOURS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

function App() {
  return (
    <div className="relative">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />

      <main id="main">
        <Hero />
        <DrinksBites />
        <Events />

        <section id="about-us" className={SECTION}>
          <h2 className={HEADING}>About Elephant and Co.</h2>
          <p className={`${BODY} text-lg max-w-3xl`}>
            Tucked into Kalyani Nagar, Elephant and Co. has become a cornerstone of Pune&rsquo;s
            nightlife. We blend a relaxed, tree-lined aesthetic with high-energy music, craft
            cocktails, and a menu that regulars swear by. Whether it&rsquo;s a quiet weekday pint or
            a weekend celebration, we&rsquo;re here to make every visit memorable.
          </p>
        </section>

        <Vibe />
        <Reviews />

        <section id="find-us" className={SECTION}>
          <h2 className={HEADING}>Find Us in Kalyani Nagar</h2>
          <p className={`${BODY} mb-10 max-w-2xl`}>
            Pushpak Society, Metro Traders Compound Complex, Plot no. 88, Kalyani Nagar, Pune,
            Maharashtra 411006
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.08)] h-[420px]">
              <iframe
                title="Elephant and Co. location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.597652391054!2d73.9064166759714!3d18.550119382548816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14777777777%3A0x6d9f7e77b7777777!2sElephant%20and%20Co.%20Kalyani%20Nagar!5e0!3m2!1sen!2sin!4v1715000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className={CARD}>
              <h3 className="font-['Righteous'] text-2xl text-white mb-5">Opening hours</h3>
              <table className="w-full text-left mb-8">
                <tbody>
                  {HOURS.map((day) => (
                    <tr key={day} className="border-b border-[rgba(255,255,255,0.06)] last:border-0">
                      <th
                        scope="row"
                        className={`${BODY} py-2.5 font-normal text-white/90`}
                      >
                        {day}
                      </th>
                      <td className={`${BODY} py-2.5 text-right tabular-nums`}>12 PM – 12 AM</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919766838529?text=Hi!%20I'd%20like%20to%20book%20a%20table%20at%20Elephant%20and%20Co.%20Kalyani%20Nagar"
                  className="inline-flex items-center justify-center bg-[#C2410C] hover:bg-[#9A3412] text-white font-['Poppins'] font-semibold min-h-[44px] px-6 rounded-[12px] transition-colors focus:outline-none focus:ring-4 focus:ring-[#F97316]"
                >
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+919766838529"
                  className="inline-flex items-center justify-center border border-[#F97316] text-[#F97316] hover:bg-[#9A3412] hover:text-white font-['Poppins'] font-semibold min-h-[44px] px-6 rounded-[12px] transition-colors focus:outline-none focus:ring-4 focus:ring-[#F97316]"
                >
                  +91 97668 38529
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
