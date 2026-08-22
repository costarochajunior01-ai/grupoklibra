import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "font-brand inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 angular-clip",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[var(--shadow-heat)] hover:bg-primary-light active:translate-y-px",
        outline:
          "border-2 border-primary/70 text-foreground hover:bg-primary hover:text-primary-foreground",
        ghost: "border border-border text-foreground hover:border-primary hover:text-primary",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-sm md:text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface CtaProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaVariants> {}

export function Cta({ className, variant, size, ...props }: CtaProps) {
  return <button className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}

export function SectionTitle({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span aria-hidden className="h-px w-8 bg-primary" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">{children}</h2>
    </div>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "angular-clip rubber-texture border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/60 md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
