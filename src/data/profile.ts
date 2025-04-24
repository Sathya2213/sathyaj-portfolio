export interface Profile {
  name: string;
  title: string;
  intro: string;
  about: string;
  email: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode?: string;
  };
  resumeUrl: string;
}

export const profileData: Profile = {
  name: "Sathya J",
  title: "Junior Developer",
  intro: "Beginner Developer | Crafting Websites with Passion",
  about: "I'm a passionate and curious learner stepping into the world of software development. I'm currently learning Java to strengthen my core programming skills and I enjoy building responsive websites using React.js. With a strong interest in development, I love turning ideas into interactive web experiences. I'm continuously exploring new AI tools and technologies, and I'm excited to grow as a developer by working on real-world projects.",
  email: "sathyakjayakumar@gmail.com",
  location: "Chennai",
  socialLinks: {
    github: "https://github.com/Sathya2213",
    linkedin: "https://linkedin.com/in/sathya-j-303518241",
    leetcode: "https://leetcode.com/u/sathyakjayakumar/"
  },
  resumeUrl: "/SathyaResume.pdf"
};