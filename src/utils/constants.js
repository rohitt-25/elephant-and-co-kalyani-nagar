export const BUSINESS_DATA = {
  name: "Elephant and Co. Kalyani Nagar",
  address: "Pushpak Society, Metro Traders Compound Complex, Plot no. 88, Kalyani Nagar, Pune, Maharashtra 411006, India",
  phone: "+91 97668 38529",
  whatsapp: "+91 97668 38529",
  rating: 4.4,
  reviewCount: 7951,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Elephant%20and%20Co.%20Kalyani%20Nagar&query_place_id=ChIJTT4TkhHBwjsRXbFWelNB6MY",
  hours: {
    monday: "12:00–23:59",
    tuesday: "12:00–23:59",
    wednesday: "12:00–23:59",
    thursday: "12:00–23:59",
    friday: "12:00–23:59",
    saturday: "12:00–23:59",
    sunday: "12:00–23:59"
  },
  whatsappLink: "https://wa.me/919766838529?text=Hi!%20I'd%20like%20to%20book%20a%20table%20at%20Elephant%20and%20Co.%20Kalyani%20Nagar"
};

export const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "Elephant and Co. Kalyani Nagar",
  "image": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlQ9BcYKtEYL5O0Ch56B8w4VNrOSfoopHmQibt6J2dMgJNFKTIbXY5QgFpqZTu-wIzaKcmX77Mhyc5HOk9F-HHat_RRWWpR2o1leRfHwBxo5lnQmuAoK35CbJzfioMABo3T9JsJaiJ27bc=w1920-h1080-k-no",
  "telephone": "+91 97668 38529",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pushpak Society, Metro Traders Compound Complex, Plot no. 88",
    "addressLocality": "Kalyani Nagar, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411006",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "reviewCount": "7951"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "12:00", "closes": "23:59" }
  ]
};

export const COLORS = {
  background: "#0F172A",
  surface: "#192134",
  muted: "#201C27",
  textPrimary: "#FFFFFF",
  textMuted: "#94A3B8",
  border: "rgba(255,255,255,0.08)",
  primary: "#EA580C",
  secondary: "#F97316",
  accent: "#059669"
};

export const FONTS = {
  heading: "'Righteous', cursive",
  body: "'Poppins', sans-serif"
};

export const MOTION_CONFIG = {
  duration: {
    fast: 0.2,
    base: 0.3,
    slow: 0.4
  },
  easing: {
    out: "power1.out",
    overshoot: "back.out(1.4)",
    none: "none"
  },
  stagger: {
    default: 0.06,
    dense: 0.04,
    cascade: 0.08
  },
  tilt: {
    maxDegrees: 5,
    intensity: 0.1
  }
};

export const REVIEWS = [
  {
    author: "Snehal Khairnar",
    date: "16 Mar 2026",
    rating: 5,
    text: "Had an amazing experience at Elephant & Co.. It was truly a pleasure visiting this place. I had heard a lot about it for a long time and finally got the chance to go—and it definitely lived up to the hype. The place has a great vibe and a very spacious setup, which has been utilised really well. The ambience, seating, and overall energy of the place make it perfect for a fun outing. Food-wise, everything we tried was delicious. The service was top-notch, and the kitchen team is clearly doing a great job. They also have a fantastic menu with plenty of options for both food and drinks. It is a little on the pricey side, but the experience is definitely worth every penny. A must-visit place, especially if you're planning a special outing or celebration. ⭐"
  },
  {
    author: "Akshita",
    date: "8 Apr 2026",
    rating: 5,
    text: "Loved this place. The ambience was really cool, the service was quick and the overall vibe of the place is great. We had the hot honey cream cheese with toasted baguette. It comes with 5-6 mini slices of toasted baguette. The cream cheese is really good. I also tried the German witt beer. It's nice and Refereshing. The Gin Fomo cocktail was also nice. It's slightly fruity and has lots of berries in it."
  },
  {
    author: "aliya emani",
    date: "14 Jul 2026",
    rating: 5,
    text: "we got: 1. farmhouse pizza, which was a very standard pizza but it was good! 2. chicken shawarma - super nice! altho the pita could've been softer 3. thai red curry - BANGER!!!! this was a 10/10. loved it 4. tiramisu - noooo…. it was too alcoholic :-( but the parts without alcohol were really good 5. beijing chicken wings - standard wings"
  },
  {
    author: "Amol Surwase",
    date: "19 Jan 2026",
    rating: 5,
    text: "Tried almost all menu here. Each and every dish here is awesome. Special mention is Nasi Goreng. This is must try dish, perfectly crafted. Service here is top notch. All the staff is prompt and courteous. Ambiance is very good here. Seating is surrounded by lot of trees and live music is very good. A good vibe is there. Rates are bit on the higher side considering the area. But the place is value for money. Overall, very good place to try out."
  },
  {
    author: "Sejal Nandgave",
    date: "12 May 2026",
    rating: 5,
    text: "Such a wholesome delivery experience from Elephant and Co. 💛 I had added a small note asking for cutlery/chopsticks since I had just shifted, and they not only sent everything properly but also added the cutest handwritten note and complimentary desserts for me. 🥺✨ The food was great, but this thoughtful gesture genuinely made my day. Thank you to the team for being so kind and considerate!"
  },
  {
    author: "Babasaheb Hatagale",
    date: "18 Jun 2026",
    rating: 5,
    text: "Had an amazing experience at Elephant & Co.! The moment we entered, we were welcomed by a lively atmosphere, great music, and an energetic vibe that made the evening special. The place has a perfect balance of good food, creative drinks, and excellent hospitality, making it one of my favorite spots in Pune. The food was absolutely delicious from start to finish. We began with the Chicken Dimsum and Thai Prawn Dimsum, both of which were fresh, flavorful, and perfectly cooked. The Red Thai Curry was rich, creamy, and packed with authentic Thai flavors, while the Mathew Chicken was tender, juicy, and incredibly tasty. Every dish was beautifully presented and prepared with great attention to detail. The drinks selection was equally impressive. The Pornstar Martini was smooth, refreshing, and perfectly balanced. The 'Let's Go to Eco' cocktail was unique and enjoyable, making it a must-try for cocktail lovers. We also tried the Bad Habit Lager, which was crisp and refreshing, the Belgian Witbier, which had a smooth and slightly citrusy character, and the Mixberry Mead, which was fruity, light, and something different from the usual beer options. The variety of beverages available made the experience even more enjoyable. A special thanks to Yogesh for providing outstanding service throughout our visit. He was friendly, attentive, and always available whenever we needed assistance. His recommendations were excellent, and he made sure everything was perfect from the beginning until the end of our meal. Service like this truly makes a difference and adds to the overall experience. Elephant & Co. is a fantastic place for anyone looking to enjoy great food, amazing cocktails, quality beers, and a vibrant atmosphere. The combination of delicious dishes, refreshing drinks, live energy, and exceptional hospitality makes it a place worth visiting again and again. Highly recommended, and a big thank you to Yogesh and the entire team for making our evening memorable. Looking forward to coming back soon!"
  }
];
