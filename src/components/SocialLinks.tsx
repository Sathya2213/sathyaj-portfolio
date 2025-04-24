import React from 'react';
import { Github as GitHub,  Linkedin } from 'lucide-react';
import { Profile } from '../data/profile';

interface SocialLinksProps {
  profile: Profile;
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  profile, 
  className = '', 
  iconSize = 20 
}) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href={profile.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        <GitHub size={iconSize} />
      </a>
      
      <a 
        href={profile.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Linkedin size={iconSize} />
      </a>
      
      {profile.socialLinks.leetcode && (
        <a 
          href={profile.socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {/* <LeafIcon size={iconSize} /> */}
          {/** Conditional Rendering for LeetCode */}
      {/* {profile.socialLinks.leetcode && (
      <img 
        src="/leetcode.png" // Or your SVG path here
        alt="LeetCode"
        width={iconSize}
        height={iconSize}
        className="text-gray-700 hover:text-blue-600 transition-colors"
      />
    )} */}
        </a>
      )}
    </div>
  );
};

export default SocialLinks;