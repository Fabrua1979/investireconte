import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigateToPage('/')} className="text-2xl font-bold text-[#1B7F5C] hover:text-[#0A3A2A] transition-colors">
              Investire con ME
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Home
            </button>
            <button onClick={() => navigateToPage('/chi-siamo')} className="text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Chi Siamo
            </button>
            <button onClick={() => scrollToSection('perche')} className="text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Perché Investire
            </button>
            <button onClick={() => scrollToSection('imparerai')} className="text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Cosa Imparerai
            </button>
            <button onClick={() => scrollToSection('offriamo')} className="text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Cosa Offriamo
            </button>
            <button onClick={() => scrollToSection('valori')} className="text-gray-700 hover:text-[#1B7F5C] transition-colors">
              I Nostri Valori
            </button>
            <Button onClick={() => scrollToSection('contatti')} className="bg-[#F5B800] hover:bg-[#F5B800]/90 text-gray-900 font-semibold">
              Contattaci
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Home
            </button>
            <button onClick={() => navigateToPage('/chi-siamo')} className="block w-full text-left text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Chi Siamo
            </button>
            <button onClick={() => scrollToSection('perche')} className="block w-full text-left text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Perché Investire
            </button>
            <button onClick={() => scrollToSection('imparerai')} className="block w-full text-left text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Cosa Imparerai
            </button>
            <button onClick={() => scrollToSection('offriamo')} className="block w-full text-left text-gray-700 hover:text-[#1B7F5C] transition-colors">
              Cosa Offriamo
            </button>
            <button onClick={() => scrollToSection('valori')} className="block w-full text-left text-gray-700 hover:text-[#1B7F5C] transition-colors">
              I Nostri Valori
            </button>
            <Button onClick={() => scrollToSection('contatti')} className="w-full bg-[#F5B800] hover:bg-[#F5B800]/90 text-gray-900 font-semibold">
              Contattaci
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
