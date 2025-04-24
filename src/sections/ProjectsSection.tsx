import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../data/projects';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Projects" 
          subtitle="Here are some of my recent works"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;