'use client';

import humePipeLogo from '@/assets/indianhumelogo.png'
import ltLogo from '@/assets/l&tlogo.png';
import missionBhagirathaLogo from '@/assets/bhagirathalogo.png';

export function OurClients() {
  const clients = [
    {
      name: 'Larsen & Toubro Limited',
      logo: ltLogo,
    },
    {
      name: 'The Indian Hume Pipe Co. Ltd',
      logo: humePipeLogo,
    },
    {
      name: 'Mission Bhagiratha',
      logo: missionBhagirathaLogo,
    },
    {
      name: 'KMV Projects Ltd',
      logo: KMV,
    },
    {
      name: 'HMWSSB',
      logo: hmwssb,
    },
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted partners in delivering excellence across infrastructure projects
          </p>
        </div>
      </div>

      <div className="relative">
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex animate-scroll" style={{ width: 'max-content' }}>
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-lg p-12 w-96"
            >
              <div className="h-48 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-lg p-12 w-96"
            >
              <div className="h-48 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {clients.map((client, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-lg p-12 w-96"
            >
              <div className="h-48 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 italic max-w-3xl mx-auto">
          We are proud to work with leading organizations in the infrastructure sector.
        </p>
      </div>
    </section>
  );
}
