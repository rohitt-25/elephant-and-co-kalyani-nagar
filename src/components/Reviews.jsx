import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: "Snehal Khairnar", rating: 5, date: "16 Mar 2026", text: "Had an amazing experience at Elephant & Co.. It was truly a pleasure visiting this place. I had heard a lot about it for a long time and finally got the chance to go—and it definitely lived up to the hype. The place has a great vibe and a very spacious setup, which has been utilised really well. The ambience, seating, and overall energy of the place make it perfect for a fun outing. Food-wise, everything we tried was delicious. The service was top-notch, and the kitchen team is clearly doing a great job. They also have a fantastic menu with plenty of options for both food and drinks. It is a little on the pricey side, but the experience is definitely worth every penny. A must-visit place, especially if you're planning a special outing or celebration. ⭐" },
  { name: "Akshita", rating: 5, date: "8 Apr 2026", text: "Loved this place. The ambience was really cool, the service was quick and the overall vibe of the place is great. We had the hot honey cream cheese with toasted baguette. It comes with 5-6 mini slices of toasted baguette. The cream cheese is really good. I also tried the German witt beer. It's nice and Refereshing. The Gin Fomo cocktail was also nice. It's slightly fruity and has lots of berries in it." },
  { name: "aliya emani", rating: 5, date: "14 Jul 2026", text: "we got: 1. farmhouse pizza, which was a very standard pizza but it was good! 2. chicken shawarma - super nice! altho the pita could've been softer 3. thai red curry - BANGER!!!! this was a 10/10. loved it 4. tiramisu - noooo…. it was too alcoholic :-( but the parts without alcohol were really good 5. beijing chicken wings - standard wings" },
  { name: "Amol Surwase", rating: 5, date: "19 Jan 2026", text: "Tried almost all menu here. Each and every dish here is awesome. Special mention is Nasi Goreng. This is must try dish, perfectly crafted. Service here is top notch. All the staff is prompt and courteous. Ambiance is very good here. Seating is surrounded by lot of trees and live music is very good. A good vibe is there. Rates are bit on the higher side considering the area. But the place is value for money. Overall, very good place to try out." },
  { name: "Sejal Nandgave", rating: 5, date: "12 May 2026", text: "Such a wholesome delivery experience from Elephant and Co. 💛 I had added a small note asking for cutlery/chopsticks since I had just shifted, and they not only sent everything properly but also added the cutest handwritten note and complimentary desserts for me. 🥺✨ The food was great, but this thoughtful gesture genuinely made my day. Thank you to the team for being so kind and considerate!" },
  { name: "Babasaheb Hatagale", rating: 5, date: "18 Jun 2026", text: "Had an amazing experience at Elephant & Co.! The moment we entered, we were welcomed by a lively atmosphere, great music, and an energetic vibe that made the evening special. The place has a perfect balance of good food, creative drinks, and excellent hospitality, making it one of my favorite spots in Pune. The food was absolutely delicious from start to finish. We began with the Chicken Dimsum and Thai Prawn Dimsum, both of which were fresh, flavorful, and perfectly cooked. The Red Thai Curry was rich, creamy, and packed with authentic Thai flavors, while the Mathew Chicken was tender, juicy, and incredibly tasty. Every dish was beautifully presented and prepared with great attention to detail. The drinks selection was equally impressive. The Pornstar Martini was smooth, refreshing, and perfectly balanced. The 'Let's Go to Eco' cocktail was unique and enjoyable, making it a must-try for cocktail lovers. We also tried the Bad Habit Lager, which was crisp and refreshing, the Belgian Witbier, which had a smooth and slightly citrusy character, and the Mixberry Mead, which was fruity, light, and something different from the usual beer options. The variety of beverages available made the experience even more enjoyable. A special thanks to Yogesh for providing outstanding service throughout our visit. He was friendly, attentive, and always available whenever we needed assistance. His recommendations were excellent, and he made sure everything was perfect from the beginning until the end of our meal. Service like this truly makes a difference and adds to the overall experience. Elephant & Co. is a fantastic place for anyone looking to enjoy great food, amazing cocktails, quality beers, and a vibrant atmosphere. The combination of delicious dishes, refreshing drinks, live energy, and exceptional hospitality makes it a place worth visiting again and again. Highly recommended, and a big thank you to Yogesh and the entire team for making our evening memorable. Looking forward to coming back soon!" }
];

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180;
  const needsToggle = review.text.length > maxLength;

  return (
    <div className="review-card bg-[#192134] p-[32px] rounded-[12px] border border-[rgba(255,255,255,0.08)] transition-transform duration-250 hover:-translate-y-2">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#EA580C] font-bold">{review.rating}★</span>
        <span className="text-white font-semibold">{review.name}</span>
        <span className="text-[#94A3B8] text-[13px] ml-auto">{review.date}</span>
      </div>
      <div className="text-[#94A3B8] text-[15px] leading-relaxed">
        <p className="mb-2">
          {isExpanded ? review.text : `${review.text.substring(0, maxLength)}${needsToggle ? '...' : ''}`}
        </p>
        {needsToggle && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="text-[#F97316] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#F97316] rounded-sm py-1 px-1"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default function Reviews() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.review-card', {
        opacity: 0,
        scale: 0.92,
        y: 16,
        duration: 0.4,
        stagger: { each: 0.06, from: 'start', grid: 'auto' },
        ease: 'back.out(1.4)',
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
    <section ref={sectionRef} className="py-[96px] px-6 max-w-[1200px] mx-auto" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="font-['Righteous'] text-[40px] text-white mb-[48px]">What Pune Says</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
        <div className="md:col-span-5 bg-[#192134] p-[32px] rounded-[12px] border border-[rgba(255,255,255,0.08)] flex flex-col justify-center">
          <div className="text-[48px] font-bold text-white mb-2">4.4★</div>
          <p className="text-[#94A3B8] mb-6">average from 7,951 Google reviews.</p>
          <a href="#" className="text-[#F97316] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#F97316] rounded-sm p-1">Read all reviews on Google →</a>
        </div>
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
