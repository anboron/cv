import { cloneElement, createElement, ReactNode } from "react";
import cn from "@/utils/cn";
import type { BaseProps } from "@/types";

export type TextProps = BaseProps & {
  children?: ReactNode;
  kind?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const TEXT_CLASSES = {
  h1: "text-xl font-title-l s:font-title-xl",
  h2: "font-title-m s:font-title-l",
  h3: "font-title-m",
  h4: "font-title-s",
  h5: "font-title-xs",
  code: "font-code-m",
};

export const TEXT_COLOR = {
  h: "font-poppins text-light-content-1 dark:text-dark-content-1 my-0",
  p: "text-light-content-2 dark:text-dark-content-2 font-body-l-light my-0",
};

export default function Text({ className, kind = "p", children, testId, ...rest }: Readonly<TextProps>) {
  const element = createElement(kind);
  const isHeading = kind.startsWith("h");
  const computedClassName = cn(
    isHeading && [TEXT_CLASSES[kind as keyof typeof TEXT_CLASSES], TEXT_COLOR["h"]],
    !isHeading && TEXT_COLOR["p"],
    className,
  );

  const props = {
    className: computedClassName,
    "data-testid": testId,
    ...rest,
  };

  return cloneElement(element, props, children);
}
