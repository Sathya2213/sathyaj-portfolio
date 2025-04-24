export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", proficiency: 50, category: "frontend" },
  { name: "JavaScript", proficiency: 65, category: "frontend" },
  { name: "TypeScript", proficiency: 40, category: "frontend" },
  { name: "HTML5", proficiency: 95, category: "frontend" },
  { name: "CSS3", proficiency: 90, category: "frontend" },
  { name: "Tailwind CSS", proficiency: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", proficiency: 50, category: "backend" },
  { name: "Express", proficiency: 50, category: "backend" },
  { name: "RESTful APIs", proficiency: 50, category: "backend" },
  
  // Tools
  { name: "Git", proficiency: 85, category: "tools" },
  // { name: "Webpack", proficiency: 70, category: "tools" },
  // { name: "Vite", proficiency: 75, category: "tools" },
  // { name: "Jest", proficiency: 70, category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", proficiency: 90, category: "soft" },
  { name: "Communication", proficiency: 85, category: "soft" },
  { name: "Teamwork", proficiency: 90, category: "soft" },
  { name: "Time Management", proficiency: 80, category: "soft" }
];