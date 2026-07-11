import { Construction } from 'lucide-react';

export function OngoingProjects() {
  const projects = [
    {
      title: 'MS Pipeline Laying & Commissioning – Pragathi Nagar, Hyderabad',
      description:
        'Manufacturing, supply, delivery, laying and commissioning of 400mm dia inline and out-coated MS pipeline fabricated with 8mm thick MS plate, along with required specials to provide off-take and inter-connection of existing 800mm dia MYTAS/Nizampet MS pipeline to 400mm diameter Pragathi Nagar pipeline, from Kolan Raghava Reddy Statue to Prasad Hospital, under Pragathi Nagar Section, SD-1, O&M Division-XXII, DD Colony, Adikmet, Hyderabad.',
    },
    {
      title: 'Multi-Village Drinking Water Supply – Kalaburagi District (Jal Jeevan Mission)',
      description:
        'Multi Village Drinking Water Supply Facilities to Aloor and other 58 villages (66 habitations) in Yadrami Taluk, and 22 villages (33 habitations) in Jewargi Taluk, of Kalaburagi District, on DBOT basis under Jal Jeevan Mission.',
    },
  ];

  return (
    <section id="ongoing-projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Ongoing Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently executing large-scale water infrastructure projects across multiple regions
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    <Construction className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
