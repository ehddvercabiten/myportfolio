import type { Experience, Project, SkillGroup } from "./types";

export const profile = {
  name: "Ehddver Cabiten",
  initials: "EC",
  role: "Frontend Developer",
  headline: "I turn complex ideas into simple, scalable digital experiences.",
  intro:
    "Frontend developer with 5+ years of experience building web applications, integrating APIs, and turning business requirements into intuitive, maintainable interfaces.",
  location: "Philippines",
  email: "your.email@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "/resume.pdf",
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern interfaces built around reusable components and clean architecture.",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite", "MUI", "Responsive UI"],
  },
  {
    title: "Integration & Data",
    description: "Connecting applications with APIs, databases, services, and data platforms.",
    skills: ["REST APIs", "Axios", "SQL", "SQL Server", "Azure", "Synapse", "Spark SQL", "Power BI"],
  },
  {
    title: "Automation",
    description: "Reducing repetitive work through practical automation and low-code solutions.",
    skills: ["Power Automate", "Power Apps", "Make.com", "n8n", "Apps Script", "Workflow Design"],
  },
  {
    title: "Engineering",
    description: "Patterns and practices that keep applications easier to maintain and evolve.",
    skills: ["Git", "GitHub", "Authentication", "Server Pagination", "Repository Pattern", "Service Layer"],
  },
];

export const projects: Project[] = [
  {
    title: "The Gazette",
    description:
      "A journalism platform concept with a public news experience and administration workflow for creating, editing, organizing, and managing articles.",
    category: "Web Application",
    year: "2026",
    technologies: ["React", "TypeScript", "Vite", "MUI", "REST API"],
    featured: true,
  },
  {
    title: "Data & Automation Workflows",
    description:
      "Business-oriented workflows connecting applications, data sources, Power Platform services, and reporting processes to reduce manual operations.",
    category: "Automation",
    year: "2025–2026",
    technologies: ["Power Automate", "Power Apps", "Power BI", "SQL", "Azure"],
    featured: true,
  },
  {
    title: "API-Driven Frontend Architecture",
    description:
      "Reusable frontend patterns for authentication, API services, repositories, server-side pagination, typed responses, and maintainable application state.",
    category: "Architecture",
    year: "2026",
    technologies: ["React", "TypeScript", "Axios", "REST API", "SQL Server"],
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    period: "5+ Years",
    role: "Frontend & Web Development",
    company: "Professional Experience",
    description:
      "Building responsive web applications and translating business requirements into practical user experiences.",
    highlights: [
      "Developed reusable React and TypeScript interfaces.",
      "Integrated REST APIs and backend services.",
      "Implemented maintainable component and service architectures.",
    ],
  },
  {
    period: "Recent",
    role: "Automation & Data",
    company: "Business Systems",
    description:
      "Worked across automation, data, reporting, and application integration using Microsoft and cloud technologies.",
    highlights: [
      "Created Power Automate and Power Apps solutions.",
      "Worked with SQL, Azure, Synapse, Spark SQL, and Power BI.",
      "Supported data ingestion and operational workflows.",
    ],
  },
  {
    period: "Earlier Career",
    role: "Service Desk → Team Leadership",
    company: "IT Operations",
    description:
      "Built a strong foundation in troubleshooting, communication, coordination, and understanding real business users.",
    highlights: [
      "Supported users and business-critical processes.",
      "Led teams and coordinated operational activities.",
      "Developed strong problem-solving and communication skills.",
    ],
  },
];
