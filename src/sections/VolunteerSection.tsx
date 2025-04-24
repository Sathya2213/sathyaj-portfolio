import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { Volunteer } from '../data/volunteer';

interface VolunteerSectionProps {
  volunteerExperience: Volunteer[];
}

const VolunteerSection: React.FC<VolunteerSectionProps> = ({ volunteerExperience }) => {
  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Volunteer Experience" 
          subtitle="My contributions to the community"
        />
        
        <div className="max-w-3xl mx-auto">
          {volunteerExperience.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.role}
              organization={experience.organization}
              period={experience.period}
              description={experience.description}
              url={experience.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;