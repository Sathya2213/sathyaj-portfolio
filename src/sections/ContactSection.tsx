import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { Profile } from '../data/profile';
import { Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  profile: Profile;
}

const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch with me for collaborations or opportunities"
        />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="text-blue-600 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-blue-600 mt-1 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">{profile.location}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Social Profiles</h4>
              <SocialLinks profile={profile} iconSize={24} />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;