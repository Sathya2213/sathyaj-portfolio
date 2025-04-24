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
    id: "volunteer1",
    role: "Web Development Mentor",
    organization: "Code First Girls",
    period: "January 2023 - Present",
    description: "Mentor beginner female developers in HTML, CSS, and JavaScript fundamentals, helping them build their first web projects.",
    url: "https://codefirstgirls.org"
  },
  {
    id: "volunteer2",
    role: "Tech Workshop Facilitator",
    organization: "Local Community Center",
    period: "March 2022 - December 2022",
    description: "Conducted monthly workshops teaching basic computer skills to seniors, helping bridge the digital divide.",
    url: "https://community-center.example.com"
  },
  {
    id: "volunteer3",
    role: "Open Source Contributor",
    organization: "Web Accessibility Initiative",
    period: "2021 - Present",
    description: "Contribute to open source projects focused on improving web accessibility for users with disabilities.",
    url: "https://w3.org/WAI/"
  }
];