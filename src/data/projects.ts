export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "project1",
    title: "E-commerce Dashboard",
    description: "A responsive dashboard for e-commerce analytics with real-time data visualization. Features include inventory management, sales tracking, and customer demographics analysis.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Redux"],
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.example.com",
    featured: true
  },
  {
    id: "project2",
    title: "Weather App",
    description: "A weather application that provides current conditions and forecasts based on location. Features include weather maps, multiple location tracking, and customizable alerts.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "JavaScript", "API Integration", "CSS3"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app.example.com",
    featured: true
  },
  {
    id: "project3",
    title: "Task Management Tool",
    description: "A productivity app for managing daily tasks and projects. Features include drag-and-drop functionality, time tracking, priority levels, and team collaboration tools.",
    image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager.example.com",
    featured: true
  },
  {
    id: "project4",
    title: "Personal Blog",
    description: "A minimalist blog platform showcasing articles on web development and design. Features include categories, search functionality, and a markdown editor.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/username/blog-platform",
    featured: false
  }
];