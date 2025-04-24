import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { Skill } from '../data/skills';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Skills" 
          subtitle="Here are the technologies and skills I work with"
        />
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-4 py-2 text-sm font-medium 
                  ${activeCategory === category.id ? 
                    'bg-blue-600 text-white' : 
                    'bg-white text-gray-700 hover:bg-gray-100'
                  }
                  ${category.id === 'all' ? 'rounded-l-md' : ''}
                  ${category.id === 'soft' ? 'rounded-r-md' : ''}
                  border border-gray-300
                  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors duration-200
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-4">
          {filteredSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;