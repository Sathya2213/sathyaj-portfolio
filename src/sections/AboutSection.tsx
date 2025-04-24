import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Profile } from '../data/profile';
import { MapPin, Mail } from 'lucide-react';

interface AboutSectionProps {
  profile: Profile;
}

const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background and what drives me"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get to know me</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {profile.about}
              </p>
              <p className="text-gray-600 leading-relaxed">
              I'm ready to take on challenges, learn fast, and contribute meaningfully one line of code at a time!
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href={`mailto:${profile.email}`} 
                      className="text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800">{profile.location}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;