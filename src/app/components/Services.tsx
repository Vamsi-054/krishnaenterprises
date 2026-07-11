import { Droplets, PenTool, HardHat, ClipboardList, ShieldCheck, Award } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end infrastructure solutions from concept to commissioning
          </p>
        </div>

        {/* Main Water Supply Section */}
        <div className="mb-12">
          <div className="bg-blue-600 text-white rounded-lg p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl mb-2">Water Supply</h3>
                <p className="text-blue-100">Comprehensive water infrastructure solutions</p>
              </div>
            </div>
            <p className="text-white opacity-90">
              Comprehensive water supply solutions with state-of-the-art infrastructure and management systems.
            </p>
          </div>

          {/* Core Capabilities as Water Supply Subcategories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-8">
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <PenTool className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">Design & Engineering</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We develop innovative, technically sound designs using the latest engineering technologies, tailored to the specific hydraulic and environmental requirements of each project.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <HardHat className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">Procurement & Construction</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our procurement and construction teams execute projects efficiently from start to finish, ensuring quality materials, skilled workmanship, and adherence to project specifications.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <ClipboardList className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">Project Management</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional oversight at every stage ensures timely delivery, cost control, and seamless coordination between design, procurement, and on-site execution teams.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">Integrity</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We uphold the highest ethical standards in every project, building lasting trust with clients, partners, and the communities we serve.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">Excellence</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive for superior quality in every aspect of our work, from initial planning through final commissioning, consistently exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
