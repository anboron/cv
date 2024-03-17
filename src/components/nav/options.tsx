import { useCallback } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Trans } from "react-i18next";
import { useColor } from "@/components/color-provider";

const COLOR_TO_ICON = {
  light: <MoonIcon />,
  dark: <SunIcon />,
} as const;

export default function Options() {
  const { color, setColor } = useColor();

  const toggleColor = useCallback(() => {
    setColor(color === "dark" ? "light" : "dark");
  }, [color, setColor]);

  return (
    <button type="button" className="flex gap-2 py-3 px-0" onClick={toggleColor}>
      <span className="w-6">{COLOR_TO_ICON[color]}</span>

      <span>
        <Trans i18nKey={`theme.${color}`} />
      </span>
    </button>
  );
}
