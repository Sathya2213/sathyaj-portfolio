export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  url?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "achievement1",
    title: "First Place Hackathon",
    organization: "TechConnect 2022",
    date: "November 2022",
    description: "Led a team of four developers to create an innovative accessibility app that won first place out of 50+ competing teams.",
    url: "https://techconnect-hackathon.example.com"
  },
  {
    id: "achievement2",
    title: "React Certification",
    organization: "Meta",
    date: "August 2023",
    description: "Completed advanced certification in React development, covering state management, hooks, and performance optimization.",
    url: "https://react-cert.example.com"
  },
  {
    id: "achievement3",
    title: "Open Source Contributor",
    organization: "Mozilla Developer Network",
    date: "2022 - Present",
    description: "Regular contributor to MDN Web Docs, helping to improve documentation for web developers worldwide.",
    url: "https://developer.mozilla.org"
  },
  {
    id: "achievement4",
    title: "Web Accessibility Workshop",
    organization: "A11y Conference",
    date: "May 2023",
    description: "Conducted a workshop on implementing accessible web interfaces, with over 100 attendees.",
    url: "https://a11y-conf.example.com"
  }
];