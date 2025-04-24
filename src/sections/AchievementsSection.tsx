import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { Achievement } from '../data/achievements';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Achievements" 
          subtitle="My accomplishments and professional development"
        />
        
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement) => (
            <ExperienceCard
              key={achievement.id}
              title={achievement.title}
              organization={achievement.organization}
              period={achievement.date}
              description={achievement.description}
              url={achievement.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;