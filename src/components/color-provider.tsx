import { useState, useEffect, useContext, useMemo, createContext, type ReactNode, useCallback } from "react";
import type { Color } from "@/types";

export type ColorContextValue = {
  color: Color;
  setColor: (_: Color) => void;
};

export const ColorContext = createContext<ColorContextValue>({
  color: "light" as Color,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setColor: (_: Color) => {},
});

type ColorProviderProps = {
  children: ReactNode;
};

const COLOR_LOCAL_STORAGE_KEY = "color";
const PREFERS_DARK_MODE_MEDIA_QUERY = window.matchMedia("(prefers-color-scheme: dark)");

export default function ColorProvider({ children }: Readonly<ColorProviderProps>) {
  const getDefaultColor = (): Color => {
    const localStorageColor = localStorage.getItem(COLOR_LOCAL_STORAGE_KEY);
    const browserDefault: Color = PREFERS_DARK_MODE_MEDIA_QUERY.matches ? "dark" : "light";
    return (localStorageColor as Color | null) ?? browserDefault;
  };

  const [color, setColor] = useState<Color>(getDefaultColor());

  const saveColor = (color: Color) => {
    localStorage.setItem(COLOR_LOCAL_STORAGE_KEY, color);
  };

  const setDocumentColorClassName = (color: Color) => {
    if (color === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const switchColor = useCallback((color: Color) => {
    setDocumentColorClassName(color);
    saveColor(color);
    setColor(color);
  }, []);

  const onOSColorPreferenceChange = useCallback((event: MediaQueryListEvent) => {
    const color = event.matches ? "dark" : "light";
    setDocumentColorClassName(color);
    setColor(color);
  }, []);

  const colorValue = useMemo(() => ({ color, setColor: switchColor }), [switchColor, color]);

  useEffect(() => {
    setDocumentColorClassName(color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage[COLOR_LOCAL_STORAGE_KEY]) {
      return;
    }

    PREFERS_DARK_MODE_MEDIA_QUERY.addEventListener("change", onOSColorPreferenceChange);
    return () => {
      PREFERS_DARK_MODE_MEDIA_QUERY.removeEventListener("change", onOSColorPreferenceChange);
    };
  }, [onOSColorPreferenceChange]);

  return <ColorContext.Provider value={colorValue}>{children}</ColorContext.Provider>;
}

export function useColor() {
  const value = useContext(ColorContext);
  if (value === undefined) {
    throw new Error("useColor must be called from a well provided descendant of ColorProvider");
  }
  return value;
}
