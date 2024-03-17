import cn from "@/utils/cn";
import type { BaseProps } from "@/types";

type CircleProps = BaseProps & {
  filled?: true;
};

export function Circle({ filled, className }: Readonly<CircleProps>) {
  return (
    <span
      className={cn(
        "circle relative block rounded-full border border-2 border-neutral-500 aspect-square size-4",
        filled && "bg-neutral-500",
        className,
      )}
    />
  );
}

type LineProps = BaseProps;

export function Line({ className }: LineProps) {
  return <span className={cn("line block w-[2px] h-full bg-neutral-500", className)} />;
}
