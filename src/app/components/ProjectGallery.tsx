import krishnapic1 from '@/assets/krishnapic1.png';
import krishnapic2 from '@/assets/krishnapic2.png';
import { Construction } from 'lucide-react';

export function ProjectGallery() {
  const ongoingProjects = [
    {
      name: 'MS Pipeline Laying & Commissioning – Pragathi Nagar, Hyderabad',
      location:
        'Manufacturing, supply, delivery, laying and commissioning of 400mm dia inline and out-coated MS pipeline fabricated with 8mm thick MS plate, along with required specials to provide off-take and inter-connection of existing 800mm dia MYTAS/Nizampet MS pipeline to 400mm diameter Pragathi Nagar pipeline, from Kolan Raghava Reddy Statue to Prasad Hospital, under Pragathi Nagar Section, SD-1, O&M Division-XXII, DD Colony, Adikmet, Hyderabad.',
    },
    {
      name: 'Multi-Village Drinking Water Supply – Kalaburagi District (Jal Jeevan Mission)',
      location:
        'Multi Village Drinking Water Supply Facilities to Aloor and other 58 villages (66 habitations) in Yadrami Taluk, and 22 villages (33 habitations) in Jewargi Taluk, of Kalaburagi District, on DBOT basis under Jal Jeevan Mission.',
    },
  ];

  const projects = [
    { name: 'KPCL Bellary', location: 'Bellary, Karnataka' },
    { name: 'Kuraicha Drinking Water Supply', location: 'Uttar Pradesh' },
    { name: 'Tadipatri-Amrut-EPC-Water Supply Improvement Scheme', location: 'Andhra Pradesh' },
    { name: 'Anantapur Ph-II & III Water Supply Project at Tadipatri (J.C.N.R)', location: 'Andhra Pradesh' },
    { name: 'Anantapur Ph-IV Water Supply Project at Tadipatri (J.C.N.R)', location: 'Andhra Pradesh' },
    { name: 'I&CAD Kurnool Koya 68 Tanks (Koya)', location: 'Andhra Pradesh' },
    { name: 'CPWS Thungathurty', location: 'Telangana' },
    { name: 'Nagarjuna Sagar LIS-Mirayalaguda', location: 'Telangana' },
    { name: 'Comprehensive Water Supply Service Improvements in Malkajgiri-Package-1(b)', location: 'Telangana' },
    { name: 'Khammam LIS', location: 'Telangana' },
    { name: 'Construction of Pumping Main, Rapid Sand Filters, Sump, Pump House, Staff Quarters and Compound Wall near Yellampally Reservoir for Peddapally-Ramagundam Segment', location: 'Karimnagar District, Telangana' },
    { name: 'Jurala Project Gadwal Water Supply Scheme', location: 'Telangana' },
    { name: 'Talelma LIS', location: 'Telangana' },
    { name: 'Part B of the work Providing Bulk Water connection to Telangana Special Food Processing Zone (TSFPZs)', location: 'Lingampally(V). Sadasiva nagar (M), Kamareddy (District) under SRSP Balkonda segment, Telangana' },
    { name: 'Diversion & Shifting of Mission Bhagiratha water supply pipeline for Elimination of Manned level crossing No 214 at Railway Km 522-9 – 523-0.', location: 'Telangana'},
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence in execution across water supply and infrastructure projects throughout India.
          </p>
        </div>

        {/* Project Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={krishnapic1}
              alt="Water supply pipeline installation project"
              className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl mb-2">Large Scale Pipeline Installation</h3>
              <p className="text-gray-200">Heavy-duty water infrastructure projects across multiple states</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={krishnapic2}
              alt="Infrastructure development and construction project"
              className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl mb-2">Advanced Water Distribution Systems</h3>
              <p className="text-gray-200">State-of-the-art equipment and expert execution</p>
            </div>
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl mb-8 text-center">Ongoing Projects</h3>
          <div className="space-y-4">
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                    <Construction className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base mb-1 text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl mb-8 text-center">Completed Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h4 className="text-base mb-1 text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Delivering water supply infrastructure solutions across Karnataka, Uttar Pradesh, Andhra Pradesh, and Telangana.
          </p>
        </div>
      </div>
    </section>
  );
}
