export type Education = {
  major: string;
  university: string;
};
export type EducationField = keyof Education;
export type Skill = {
  title: string;
  percentage: string;
};
export type SkillField = keyof Skill;
export type Experience = {
  year: string;
  title: string;
  companyAndLocation: string;
  description: string;
};
export type ExperienceField = keyof Experience;
