import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Narrower container for text-heavy sections */
  narrow?: boolean;
}

export function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: narrow ? "800px" : "var(--container-max-width)",
        marginInline: "auto",
        paddingInline: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}
