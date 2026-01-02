import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, className, centered = true }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
