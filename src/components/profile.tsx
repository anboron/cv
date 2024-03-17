import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Text from "@/components/text";
import cn from "@/utils/cn";
import type { ProfileType } from "@/types";

type ProfileProps = ProfileType;

const DETAIL_TO_ICON = {
  location: <MapPinIcon />,
  email: <EnvelopeIcon />,
  telephone: <PhoneIcon />,
} as const;

export default function Profile({ image, name, occupation, ...rest }: Readonly<ProfileProps>) {
  return (
    <section className="relative" id="home">
      <div className="gap-9 m:gap-6 py-6 grid">
        <div className="text-center grid gap-2">
          {image && (
            <img
              src={image}
              alt="Profile"
              className="object-cover size-15 rounded-full bg-gray-500 justify-self-center mb-2"
            />
          )}

          <Text kind="h1">{name}</Text>

          <Text kind="h3" className="mb-3">
            {occupation}
          </Text>
        </div>

        <div className="grid gap-4">
          {Object.entries(DETAIL_TO_ICON).map(([detail, icon]) => (
            <div key={detail} className="flex items-center text-xs">
              <span className={cn("w-5 mr-2")}>{icon}</span> {rest[detail as keyof typeof DETAIL_TO_ICON]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
