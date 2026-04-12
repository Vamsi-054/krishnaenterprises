import { Droplets, Sprout, Home, Building } from 'lucide-react';

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

          {/* Water Supply Subcategories */}
          <div className="grid md:grid-cols-3 gap-6 pl-8">
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Sprout className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">Irrigation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Large scale irrigation projects including canal networks and lift irrigation schemes.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">RWS&S</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rural Water Supply and Sanitation projects ensuring clean water access to rural communities.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg mb-3">PHMED</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Public Health and Municipal Engineering Department projects for urban infrastructure development.
              </p>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl text-center mb-8">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <h4 className="text-lg mb-2 text-blue-600">Design & Engineering</h4>
              <p className="text-gray-700">Innovative solutions using latest technologies</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg mb-2 text-blue-600">Procurement & Construction</h4>
              <p className="text-gray-700">Efficient execution from start to finish</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg mb-2 text-blue-600">Project Management</h4>
              <p className="text-gray-700">Professional oversight ensuring timely delivery</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg mb-2 text-blue-600">Integrity</h4>
              <p className="text-gray-700">Upholding the highest ethical standards in every project</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg mb-2 text-blue-600">Excellence</h4>
              <p className="text-gray-700">Striving for superior quality and excellence in every aspect of our work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}