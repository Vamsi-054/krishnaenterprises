'use client';
import logo from '@/assets/logo.png';
export function BrandScroll() {
  return (
    <section className="py-2 bg-blue-600 overflow-hidden">
      <style>{`
        @keyframes scrollText {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-text {
          animation: scrollText 60s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
      
      <div className="animate-scroll-text whitespace-nowrap">
        {/* First set */}
        {Array(10).fill(null).map((_, index) => (
          <div key={`first-${index}`} className="flex items-center mx-8">
            <img src={logo} alt="Krishna Enterprises logo" className="h-8 w-auto object-contain" />
            <div className="w-1.5 h-1.5 bg-white rounded-full ml-8" />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {Array(10).fill(null).map((_, index) => (
          <div key={`second-${index}`} className="flex items-center mx-8">
            <img src={logo} alt="Krishna Enterprises logo" className="h-8 w-auto object-contain" />
            <div className="w-1.5 h-1.5 bg-white rounded-full ml-8" />
          </div>
        ))}
        {/* Third set for extra smoothness */}
        {Array(10).fill(null).map((_, index) => (
          <div key={`third-${index}`} className="flex items-center mx-8">
            <img src={logo} alt="Krishna Enterprises logo" className="h-8 w-auto object-contain" />
            <div className="w-1.5 h-1.5 bg-white rounded-full ml-8" />
          </div>
        ))}
      </div>
    </section>
  );
}
