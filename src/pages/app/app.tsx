import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/seo";
import Left from "@/components/grid/left";
import Main from "@/components/grid/main";
import { data } from "@/fixtures/data";
import Header from "@/components/nav/header";

export default function AppPage() {
  const query = "(min-width: 1024px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const {
    profile,
    personal,
    skills,
    socialMedia,
    experience: { academic, works },
  } = data[language as keyof typeof data] ?? {};

  return (
    <>
      <SEO name={profile.name} occupation={profile.occupation} description={personal.description} />
      <Header />

      <main
        className="py-9 max-m:mx-9 mx-auto max-w-[theme(screens.md)] w-[calc(100%+(theme(spacing.9)))]"
        id="bd-container"
      >
        <div className="grid md:grid-cols-[0.5fr_1fr] bg-white dark:bg-neutral-700" id="area-cv">
          <Left profile={profile} skills={skills} socialMedia={socialMedia} />
          <Main academic={academic} works={works} />
        </div>
      </main>
    </>
  );
}
