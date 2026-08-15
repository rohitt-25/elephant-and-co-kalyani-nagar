import React from 'react';

const Footer = () => {
  const business = {
    name: "Elephant and Co. Kalyani Nagar",
    address: "Pushpak Society, Metro Traders Compound Complex, Plot no. 88, Kalyani Nagar, Pune, Maharashtra 411006, India",
    phone: "+91 97668 38529",
    whatsappLink: "https://wa.me/919766838529?text=Hi!%20I'd%20like%20to%20book%20a%20table%20at%20Elephant%20and%20Co.%20Kalyani%20Nagar"
  };

  const hours = [
    { day: "Monday", time: "12 PM – 12 AM" },
    { day: "Tuesday", time: "12 PM – 12 AM" },
    { day: "Wednesday", time: "12 PM – 12 AM" },
    { day: "Thursday", time: "12 PM – 12 AM" },
    { day: "Friday", time: "12 PM – 12 AM" },
    { day: "Saturday", time: "12 PM – 12 AM" },
    { day: "Sunday", time: "12 PM – 12 AM" }
  ];

  return (
    <footer className="bg-[#201C27] py-12 px-6 md:px-12 mt-24 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="flex flex-col gap-4">
          <h2 className="font-['Righteous'] text-2xl text-[#FFFFFF]">{business.name}</h2>
          <address className="text-[#94A3B8] font-['Poppins'] text-sm leading-relaxed not-italic">
            {business.address}
          </address>
          <div className="flex flex-col gap-2 mt-2">
            <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="min-h-[44px] flex items-center text-[#FFFFFF] font-['Poppins'] font-medium hover:text-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-colors">
              Phone: {business.phone}
            </a>
            <a href={business.whatsappLink} className="min-h-[44px] flex items-center text-[#FFFFFF] font-['Poppins'] font-medium hover:text-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-colors">
              WhatsApp: {business.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-['Righteous'] text-lg text-[#FFFFFF]">Hours</h3>
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">Weekly operating hours for Elephant and Co. Kalyani Nagar</caption>
            <tbody>
              {hours.map((h) => (
                <tr key={h.day}>
                  <th scope="row" className="text-[#94A3B8] font-['Poppins'] text-sm font-normal py-1 pr-4 text-left">
                    {h.day}
                  </th>
                  <td className="text-[#FFFFFF] font-['Poppins'] text-sm font-medium py-1">
                    {h.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-center items-start md:items-end gap-6">
          <a 
            href={business.whatsappLink}
            className="min-h-[44px] flex items-center justify-center bg-[#C2410C] text-[#FFFFFF] font-['Poppins'] font-semibold px-8 py-4 rounded-[12px] hover:bg-[#9A3412] focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all shadow-[0_0_20px_rgba(234,88,12,0.15)]"
          >
            Book on WhatsApp
          </a>
          <p className="text-[#94A3B8] font-['Poppins'] text-xs">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
