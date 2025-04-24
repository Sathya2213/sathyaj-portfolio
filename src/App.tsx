import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import VolunteerSection from './sections/VolunteerSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

import { profileData } from './data/profile';
import { skillsData } from './data/skills';
import { projectsData } from './data/projects';
import { volunteerData } from './data/volunteer';
import { achievementsData } from './data/achievements';

import './index.css';

function App() {
  // Update page title when component mounts
  useEffect(() => {
    document.title = `${profileData.name} | ${profileData.title}`;
  }, []);

  // Add this style for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        opacity: 0;
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
      
      .animation-delay-900 {
        animation-delay: 0.9s;
      }
      
      .animation-delay-1200 {
        animation-delay: 1.2s;
      }
      
      .animation-delay-1500 {
        animation-delay: 1.5s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection profile={profileData} />
      <AboutSection profile={profileData} />
      <SkillsSection skills={skillsData} />
      <ProjectsSection projects={projectsData} />
      <VolunteerSection volunteerExperience={volunteerData} />
      <AchievementsSection achievements={achievementsData} />
      <ContactSection profile={profileData} />
      <FooterSection profile={profileData} />
    </div>
  );
}

export default App;