import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Profile } from '../data/profile';
import { Heart } from 'lucide-react';

interface FooterSectionProps {
  profile: Profile;
}

const FooterSection: React.FC<FooterSectionProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <a 
            href="#home" 
            className="text-2xl font-bold text-white mb-6 md:mb-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            AJ.
          </a>
          
          <ul className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-400 mr-4">
              Made with <Heart size={16} className="inline text-red-500" /> by {profile.name}
            </p>
            <SocialLinks profile={profile} className="text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;