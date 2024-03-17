import Profile from "@/components/profile";
import Skills from "@/components/skills";
import SocialMedia from "@/components/social-media";
import type { ProfileType, SkillsType, SocialType } from "@/types";

type LeftProps = {
  profile: ProfileType;
  skills: SkillsType;
  socialMedia: SocialType;
};

export default function Left({
  profile: { name, occupation, location, email, telephone, image },
  skills: { technologies, languages },
  socialMedia: { social },
}: LeftProps) {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-600 px-6">
      <Profile
        name={name}
        occupation={occupation}
        location={location}
        email={email}
        telephone={telephone}
        image={image}
      />

      <Skills technologies={technologies} languages={languages} />
      <SocialMedia social={social} />
    </div>
  );
}
