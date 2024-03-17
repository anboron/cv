export type Subsection = {
  name: string;
  details: { from: string; to: string; additional?: string };
  description: string | string[];
};

export type ProfileType = {
  name: string;
  occupation: string;
  location: string;
  email: string;
  telephone: string;
  image?: string;
};

export type SkillsType = {
  technologies: string[];
  languages: string[];
};

export type SocialType = {
  social: Social[];
};

export type AcademicType = {
  name: string;
  occupation: string;
  location: string;
  email: string;
  telephone: string;
  image?: string;
};

export type Personal = {
  description: string;
};

export type Social = {
  label: string;
  name: string;
  url: string;
};

export type Color = "dark" | "light";

export type BaseProps = {
  className?: string;
  color?: Color;
  testId?: string;
};
