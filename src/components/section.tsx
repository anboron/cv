import { ReactNode } from "react";
import { Circle, Line } from "@/components/shapes";
import cn from "@/utils/cn";
import type { Subsection } from "@/types";

type SectionProps = {
  title: ReactNode;
  subsections: Subsection[];
};

export default function Section({ title, subsections }: Readonly<SectionProps>) {
  return (
    <section className="py-6" id="education">
      <h2 className="text-md uppercase tracking-wide mb-6 font-bold">{title}</h2>

      <div
        className={cn("grid gap-7", "md:[&_:nth-last-child(1_of_.subsection)_.line]:h-[calc(100%-theme('spacing.4'))]")}
      >
        {subsections.map(({ name, details, description }, i) => (
          <Subsection key={i} name={name} details={details} description={description} />
        ))}
      </div>
    </section>
  );
}

type SubsectionProps = Subsection;

function Subsection({ name, details: { from, to, additional }, description }: Readonly<SubsectionProps>) {
  const descriptionArr = Array.isArray(description) ? description : [description];
  return (
    <div className="subsection flex">
      <div className="pr-6">
        <Circle className="mt-1" />
        <Line className="h-[calc(100%+theme('spacing.4'))] translate-x-[calc(theme(spacing.4)/2-1px)]" />
      </div>

      <div className="subsectionc grid gap-5">
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">{name}</h3>

          <span className="text-xs italic">
            {from} - {to}
            {additional && ` | ${additional}`}
          </span>
        </div>

        {descriptionArr.map((content, i) => (
          <p key={i} className="whitespace-pre-wrap text-sm font-light">
            {content}
          </p>
        ))}
      </div>
    </div>
  );
}
