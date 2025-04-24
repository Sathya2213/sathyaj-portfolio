import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { Profile } from '../data/profile';

interface HeroSectionProps {
  profile: Profile;
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-blue-50 px-6"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-blue-600 font-medium mb-2 animate-fadeIn">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn animation-delay-300">
          {profile.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 animate-fadeIn animation-delay-600">
          {profile.title}
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-900">
          {profile.intro}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeIn animation-delay-1200">
          <Button 
            onClick={() => window.open(profile.resumeUrl, '_blank')}
          >
            Download Resume
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Me
          </Button>
        </div>
        
        <SocialLinks 
          profile={profile} 
          className="justify-center animate-fadeIn animation-delay-1500" 
          iconSize={24}
        />
      </div>
            
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;