export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4">KRISHNA ENTERPRISES</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our mission is to deliver innovative, sustainable and efficient engineering solutions that exceed client expectations while contributing to the development of infrastructure and communities.
            </p>
            <p className="text-white font-semibold">
              Ph no: +91 9618273448
            </p>
            
              href="mailto:krishnaenterprises1356@gmail.com"
              className="text-white font-semibold mt-1 block hover:text-gray-300 transition"
            >
              krishnaenterprises1356@gmail.com
            </a>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl mb-4">OUR SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Design And Engineering</li>
              <li>Procurement and Construction</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KRISHNA ENTERPRISES. All rights reserved.</p>
          <p className="mt-2 text-sm">Established 2015</p>
        </div>
      </div>
    </footer>
  );
}
