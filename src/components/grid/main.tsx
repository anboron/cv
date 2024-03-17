import { Trans } from "react-i18next";
import Section from "@/components/section";
import type { Subsection } from "@/types";

type MainProps = {
  academic: Subsection[];
  works: Subsection[];
};

export default function Main({ academic, works }: MainProps) {
  return (
    <div className="px-6">
      <Section title={<Trans i18nKey="education" />} subsections={academic} />
      <Section title={<Trans i18nKey="experience" />} subsections={works} />
    </div>
  );
}
