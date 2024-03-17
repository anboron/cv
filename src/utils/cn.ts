import clsx, { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge<"backgroundImage">({
  extend: {
    classGroups: {
      backgroundImage: ["bg-login-bg"],
    },
  },
});

export default function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames));
}
