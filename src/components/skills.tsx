import { ReactNode } from "react";
import { Trans } from "react-i18next";
import { Circle } from "@/components/shapes";

type SkillsProps = {
  technologies: string[];
  languages: string[];
};

export default function Skills({ technologies, languages }: Readonly<SkillsProps>) {
  return (
    <>
      <SkillsSection title={<Trans i18nKey="technologies" />} skills={technologies} />
      <SkillsSection title={<Trans i18nKey="languages" />} skills={languages} />
    </>
  );
}

type SkillsSectionProps = {
  title: ReactNode;
  skills: string[];
};

function SkillsSection({ title, skills }: Readonly<SkillsSectionProps>) {
  return (
    <section className="py-6" id="skills">
      <h2 className="text-md uppercase tracking-wide mb-6 font-bold">{title}</h2>

      <div className="grid grid-cols-1 gap-6">
        <ul>
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}

type SkillProps = {
  skill: string;
};

function Skill({ skill }: SkillProps) {
  return (
    <li className="flex items-center gap-2 mb-3">
      <Circle filled className="size-1" /> {skill}
    </li>
  );
}
