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
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-[#F97316] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>
          ))}
          <a 
            href="tel:+919766838529" 
            className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F97316] transition-colors duration-200 font-['Poppins'] text-sm min-h-[44px]"
          >
            <span>📞</span>
            +91 97668 38529
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EA580C] text-[#FFFFFF] font-['Poppins'] font-semibold px-6 py-3 rounded-[12px] hover:bg-[#F97316] transition-all duration-200 ease-out transform hover:-translate-y-[2px] shadow-[0_0_15px_rgba(234,88,12,0.15)] min-h-[44px] flex items-center"
          >
            Book on WhatsApp
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EA580C] text-[#FFFFFF] font-['Poppins'] font-semibold px-4 py-2 rounded-[12px] text-sm min-h-[44px] flex items-center"
          >
            Book
          </a>
          <button 
            className="text-[#FFFFFF] text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
