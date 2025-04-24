import React from 'react';
import { Skill } from '../data/skills';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-800 font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;