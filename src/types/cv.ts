export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards?: Array<Award>;
  certificates: Array<Certificate>;
  publications?: Array<Publication>;
  languages: Array<Languages>;
  references: Array<Reference>;
  projects: Array<Project>;
}

export interface Shared {
  theme: string;
  skills: Array<Skill>;
  interests: Array<Interest>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profile>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profile {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  location: string;
  location_type: string;
  url: string | null;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Array<String>;
  achievements: Array<String>;
  responsibilities: Array<String>;
  skills: Array<String>;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Array<String>;
}

interface Skill {
  name: string;
  icon: string;
  level: string;
  keywords: Array<string>;
}

interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificate {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score?: string | null;
  courses?: Array<string> | null;
}

interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Array<String>;
  url: string;
  github?: string;
}

interface Interest {
  name: string;
  keywords: Array<string>;
}

interface Reference {
  name: string;
  reference: string;
}