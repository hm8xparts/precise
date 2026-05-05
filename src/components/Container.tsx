import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Container({ children, className, as: As = "div" }: Props) {
  return (
    <As className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </As>
  );
}
