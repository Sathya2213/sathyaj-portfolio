import React from 'react';

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  url?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  organization,
  period,
  description,
  url
}) => {
  return (
    <div className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:shadow-md">
      <div className="absolute left-[5.5px] top-5 bottom-0 w-0.5 h-full bg-gray-200"></div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <div className="flex items-center text-gray-600 mt-1 mb-2">
        <span className="font-medium">
          {organization}
        </span>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-sm">{period}</span>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 transition-colors text-sm inline-flex items-center"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;