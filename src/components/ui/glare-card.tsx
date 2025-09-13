import * as React from "react";
import { cn } from "@/lib/utils";

interface GlareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlareCard({ children, className, ...props }: GlareCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-[2px] bg-gradient-to-br from-primary/40 via-transparent to-secondary/40",
        className
      )}
      {...props}
    >
      <div className="relative z-10 rounded-2xl bg-slate-900/80 backdrop-blur-md p-8">
        {children}
      </div>

      {/* Glare animation */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent opacity-50 blur-2xl animate-[spin_6s_linear_infinite]" />
    </div>
  );
}
