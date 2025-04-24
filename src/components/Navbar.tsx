import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Volunteer', href: '#volunteer' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav className={`fixed w-full z-20 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-blue-600"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          SJ.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                scrolled ? 'text-gray-800' : 'text-gray-700'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <Button 
          className="hidden md:block"
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          Resume
        </Button>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white shadow-lg px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-800 hover:text-blue-600 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <Button 
            fullWidth
            onClick={() => window.open('/SathyaResume.pdf', '_blank')}
          >
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;