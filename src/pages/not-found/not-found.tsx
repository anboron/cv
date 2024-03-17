import { useState, useEffect } from "react";
// import { OverlayScrollbarsComponent, OverlayScrollbarsComponentRef } from "overlayscrollbars-react";
import SEO from "@/components/seo";
import { data } from "@/fixtures/data";

export default function NotFoundPage() {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe } = data;

  return (
    <>
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...profile}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...aboutMe}
      />

      <main className="l-main mx-auto mt-3" id="bd-container">
        Not Found Page
      </main>
    </>
  );
}
