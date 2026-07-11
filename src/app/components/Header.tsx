import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Krishna Enterprises Logo" className="h-16 w-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">
                Services
              </button>
              <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover:text-blue-600">
                Clients
              </button>
              <button onClick={() => scrollToSection('statistics')} className="text-gray-700 hover:text-blue-600">
                Statistics
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">
                Contact
              </button>
            </nav>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover:text-blue-600 text-left">
                Clients
              </button>
              <button onClick={() => scrollToSection('statistics')} className="text-gray-700 hover:text-blue-600 text-left">
                Statistics
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 text-left">
                Contact
              </button>
              <div className="pt-4 mt-2 border-t border-gray-100">
                <span className="text-blue-600 font-semibold block text-left">
                  +91 9618273448
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
