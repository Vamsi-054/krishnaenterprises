import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('krishnaenterprises1356@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-white font-semibold mt-2 hover:text-gray-300 transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  krishnaenterprises1356@gmail.com
                </>
              )}
            </button>
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
              <li>Integrity</li>
              <li>Excellence</li>
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
