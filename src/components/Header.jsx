import React from 'react';

const Header = () => {
  const whatsappLink = "https://wa.me/919766838529?text=Hi! I'd like to book a table at Elephant and Co. Kalyani Nagar";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#192134] border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <a 
          href="/" 
          className="font-['Righteous'] text-xl md:text-2xl text-[#FFFFFF] tracking-wide min-h-[44px] flex items-center"
        >
          Elephant and Co.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Menu', 'Events', 'Vibe'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[#94A3B8] hover:text-[#F97316] transition-colors duration-200 font-['Poppins'] text-sm group min-h-[44px] flex items-center"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-[#C2410C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>
          ))}
          <a 
            href="tel:+919766838529" 
            className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F97316] transition-colors duration-200 font-['Poppins'] text-sm min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +91 97668 38529
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C2410C] text-[#FFFFFF] font-['Poppins'] font-semibold px-6 py-3 rounded-[12px] hover:bg-[#9A3412] transition-all duration-200 ease-out transform hover:-translate-y-[2px] shadow-[0_0_15px_rgba(234,88,12,0.15)] min-h-[44px] flex items-center"
          >
            Book on WhatsApp
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C2410C] text-[#FFFFFF] font-['Poppins'] font-semibold px-4 py-2 rounded-[12px] text-sm min-h-[44px] flex items-center"
          >
            Book
          </a>
          <button 
            className="text-[#FFFFFF] text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
