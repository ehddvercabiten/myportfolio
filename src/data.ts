import type { Experience, Project, SkillGroup } from "./types";

export const profile = {
  name: "Ehddver Cabiten",
  initials: "EC",
  role: "Frontend Developer",
  headline: "I turn complex ideas into simple, scalable digital experiences.",
  intro:
    "Frontend developer with 7+ years of experience building web applications, integrating APIs, and turning business requirements into intuitive, maintainable interfaces.",
  location: "Philippines",
  email: "tester.ehddver.cabiten@gmail.com",
  github: "https://github.com/ehddvercabiten",
  linkedin: "https://www.linkedin.com/in/ehddver-cabiten",
  facebook: "https://www.facebook.com/sam32918/",
  upwork: "https://www.upwork.com/freelancers/~01c586a86de4f5ab8f",
  onlineResume: "https://drive.google.com/file/d/1NjVg6M9NNPberncnC3GHfTBHP0znzVaM/view?usp=sharing",
  resume: "/resume.pdf",
  copyright: `© 2025 Ehddver Cabiten`,
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern interfaces built around reusable components and clean architecture.",
    skills: ["React", "Angular", "Vue", "TypeScript", "JavaScript", "HTML5", "CSS3", "MUI", "Responsive UI"],
  },
  {
    title: "Integration & Data",
    description: "Connecting applications with APIs, databases, services, and data platforms.",
    skills: ["REST APIs", "Axios", "SQL", "Databricks", "Azure", "Synapse", "Spark SQL", "Power BI"],
  },
  {
    title: "Automation",
    description: "Reducing repetitive work through practical automation and low-code solutions.",
    skills: ["Power Automate", "Power Apps", "Make.com", "n8n", "Apps Script", "Workflow Design"],
  },
  {
    title: "Engineering",
    description: "Patterns and practices that keep applications easier to maintain and evolve.",
    skills: ["GitHub", "JIRA", "Authentication", "Repository", "Service Layer"],
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
    period: "2026 - Present",
    role: "Front-End Developer (Consultant)",
    company: "Lingaro Philippines Inc.",
    description:
      "Delivering end-to-end front-end solutions for clients, from web design and requirement gathering through development, testing, and debugging.",
    highlights: [
      "Performed web design, structure, and end-to-end development using front-end libraries and frameworks.",
      "Conducted requirement analysis and gathering to translate business needs into technical solutions.",
      "Collaborated with stakeholders to translate requirements into functional solutions.",
      "Applied pragmatic development, testing, and debugging practices.",
      "Built solutions grounded in OOP principles for maintainability and scalability.",
    ],
    visible: true,
  },
  {
    period: "2024 - 2025",
    role: "Front-End Developer (Associate Consultant)",
    company: "Lingaro Philippines Inc.",
    description:
      "Delivering end-to-end front-end solutions for clients, from web design and requirement gathering through development, testing, and debugging.",
    highlights: [
      "Performed web design, structure, and end-to-end development using front-end libraries and frameworks.",
      "Conducted requirement analysis and gathering to translate business needs into technical solutions.",
      "Applied pragmatic development, testing, and debugging practices.",
      "Built solutions grounded in OOP principles for maintainability and scalability.",
      
    ],
    visible: true,
  },
  {
    period: "2022 - 2023",
    role: "Front-End Developer",
    company: "Lingaro Philippines Inc.",
    description:
      "Focused on building user-facing applications and transforming business requirements into intuitive and maintainable interfaces.",
    highlights: [
      "Developed responsive web interfaces using modern front-end technologies.",
      "Collaborated with stakeholders to translate requirements into functional solutions.",
      "Improved application usability, structure, and maintainability.",
    ],
    visible: true,
  },
  {
    period: "2019 - 2021",
    role: "Front End Developer",
    company: "Collabera Technologies Private Limited Inc.",
    description:
      "Started my journey at Lingaro as a contractor, building a strong foundation in technical support, troubleshooting, and understanding how technology supports business operations.",
    highlights: [
      "Provided technical support and troubleshooting for business users.",
      "Investigated and resolved technical issues efficiently.",
      "Developed a strong foundation in systems, applications, and IT operations.",
    ],
    visible: true,
  },
  {
    period: "2017 - 2019",
    role: "Software Engineer",
    company: "ValueLine Systems & Solutions Corp.",
    description:
      "Designed, developed, and maintained responsive client websites, with a focus on front-end interactivity and full-stack ecommerce launches.",
    highlights: [
      "Designed, developed, and maintained responsive websites for clients.",
      "Built Slider Carousels, form validation, and JS animations.",
      "Executed full-stack website launches focused on front-end features, browser manipulation, and cross-browser compatibility.",
      "Developed ecommerce websites using Content Management Systems (CMS).",
    ],
    visible: true,
  },
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
    visible: false,
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
    visible: false,
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
    visible: false,
  },
];

export const experienceQuotes = [
  {
    quote: "Simplicity is the soul of efficiency.",
    attribution: "Austin Freeman",
  },
  {
    quote: "Understand the problem before trying to solve it.",
    attribution: "How I approach development",
  },
  {
    quote: "The function of good software is to make the complex appear to be simple",
    attribution: "Grady Booch",
  },
  {
    quote: "Keep learning. Keep building. Keep improving.",
    attribution: "Personal principle",
  },
];
