import Languages from "@/components/nav/languages";
import Options from "@/components/nav/options";

export default function Header() {
  return (
    <header className="relative w-full h-12 px-6 py-4 flex gap-2 justify-between">
      <div className="ml-auto flex gap-6">
        <Options />
        <Languages />
      </div>
    </header>
  );
}
