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
    id: "achievement3",
    title: "TCS iON NQT",
    organization: "TCS",
    date: "Sep 2024",
    description: "Achieved a score of 1252.38 in the TCS iON National Qualifier Test (NQT)",
    url: "/TCS NQT'24.pdf"
  },
  {
    id: "achievement1",
    title: "Best Paper Award",
    organization: "ICFTA'24",
    date: "27th March 2024",
    description: "Awarded Best Paper for the research paper titled 'A Study on the Impact of AI on Web Development' at the International Conference on Future Technologies and Applications (ICFTA'24).",
    url: "/Conference-BestPaperAward.pdf"
  },
  {
    id: "achievement2",
    title: "Department Topper ",
    organization: "First Rank",
    date: "April 2025",
    description: "Secured 1st Rank in the Department with a CGPA of 9.1/10.",
    url: "/Conference-BestPaperAward.pdf"
  },
  
  // {
  //   id: "achievement4",
  //   title: "Web Accessibility Workshop",
  //   organization: "A11y Conference",
  //   date: "May 2023",
  //   description: "Conducted a workshop on implementing accessible web interfaces, with over 100 attendees.",
  //   url: "https://a11y-conf.example.com"
  // }
];