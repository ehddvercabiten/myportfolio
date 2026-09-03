export interface Project {
  title: string;
  description: string;
  category: string;
  year: string;
  technologies: string[];
  featured?: boolean;
  link?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}
