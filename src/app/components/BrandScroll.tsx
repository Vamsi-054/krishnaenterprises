'use client';
import logo from '@/assets/logo.png';
export function BrandScroll() {
  return (
    <section className="py-3 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] overflow-hidden relative z-10">
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
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full ml-8" />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {Array(10).fill(null).map((_, index) => (
          <div key={`second-${index}`} className="flex items-center mx-8">
            <img src={logo} alt="Krishna Enterprises logo" className="h-8 w-auto object-contain" />
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full ml-8" />
          </div>
        ))}
        {/* Third set for extra smoothness */}
        {Array(10).fill(null).map((_, index) => (
          <div key={`third-${index}`} className="flex items-center mx-8">
            <img src={logo} alt="Krishna Enterprises logo" className="h-8 w-auto object-contain" />
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full ml-8" />
          </div>
        ))}
      </div>
    </section>
  );
}
