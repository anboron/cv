import { Trans } from "react-i18next";
import cn from "@/utils/cn";
import type { Social } from "@/types";

type SocialMediaProps = {
  social: Social[];
};

export default function SocialMedia({ social }: Readonly<SocialMediaProps>) {
  return (
    <section className="py-6">
      <h2 className="text-md uppercase tracking-wide mb-6 font-bold">
        <Trans i18nKey="social" />
      </h2>

      <div className="grid gap-4 grid-cols-[max-content]">
        {social.map((social) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Social key={social.name} {...social} />
        ))}
      </div>
    </section>
  );
}

type SocialProps = Social;

function Social({ label, url }: SocialProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs color-black">
      <i className={cn("mr-4")}></i> {label}
    </a>
  );
}
