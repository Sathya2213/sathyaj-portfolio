export interface Volunteer {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  url?: string;
}

export const volunteerData: Volunteer[] = [
  {
    id: "volunteer4",
    role: "Event Lead - Web Tech and Photography",
    organization: "Annual Symposium",
    period: "Feb 2025",
    description: "Led the Web Technology and Photography events during the annual symposium, managing event planning, coordination, and execution. Successfully engaged over 100 participants.",
    
  },
  {
    id: "volunteer1",
    role: "Photoshop Trainer",
    organization: "Skil Training for junior",
    period: "Sep 2023",
    description: "Mentor beginner female developers in HTML, CSS, and JavaScript fundamentals, helping them build their first web projects.",
    
  },
  // {
  //   id: "volunteer2",
  //   role: "Tech Workshop Facilitator",
  //   organization: "Local Community Center",
  //   period: "March 2022 - December 2022",
  //   description: "Conducted monthly workshops teaching basic computer skills to seniors, helping bridge the digital divide.",
  //   url: "https://community-center.example.com"
  // },
  // {
  //   id: "volunteer3",
  //   role: "Open Source Contributor",
  //   organization: "Web Accessibility Initiative",
  //   period: "2021 - Present",
  //   description: "Contribute to open source projects focused on improving web accessibility for users with disabilities.",
  //   url: "https://w3.org/WAI/"
  // }
];