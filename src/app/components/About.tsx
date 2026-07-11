import { Award, Users, Target, Clock } from 'lucide-react';
import pipelineImage from '@/assets/aboutus.png';

export function About() {
  const stats = [
    { icon: Clock, label: 'Established', value: '2015' },
    { icon: Users, label: 'Expert Team', value: 'Professionals' },
    { icon: Target, label: 'On-Time Delivery', value: '100%' },
    { icon: Award, label: 'Quality', value: 'Assured' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={pipelineImage}
              alt="Infrastructure project"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover grayscale"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              KRISHNA ENTERPRISES is a leading provider of comprehensive infrastructure and 
              environmental services in India. Our services encompass design, engineering, procurement, 
              construction, operation-maintenance, planning and project management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a huge team of professionals, we are well equipped to deliver a project from concept 
              to commissioning. With established credentials in executing complex and challenging projects 
              in all kinds of environments, we repeatedly deliver projects on time and of highest quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our company has set benchmarks in the water and water pipeline management industry with the 
              latest implementations at the finest quality. We offer a perfect blend of engineering skill 
              and latest technologies for infrastructure growth.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Company History */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl mb-4">Our Journey</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            KRISHNA ENTERPRISES is a partnership firm established in 2015. Since our inception, we have been committed to excellence and have grown 
            to become a trusted name in the infrastructure sector.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over the years, we have successfully executed numerous complex projects across water supply, 
            irrigation, rural water supply and sanitation, and public health engineering sectors. Our 
            journey has been marked by a steadfast commitment to quality, innovation, and client satisfaction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We have built strong relationships with government bodies, municipalities, and private sector 
            clients, earning their trust through consistent delivery of high-quality infrastructure solutions. 
            Our team of dedicated professionals brings together decades of combined experience in engineering, 
            project management, and construction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As we continue to grow, we remain focused on our core values of integrity, excellence, and 
            sustainability. We are committed to playing a vital role in India's infrastructure development 
            and contributing to the well-being of communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
