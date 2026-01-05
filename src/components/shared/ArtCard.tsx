import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArtCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
  link: string;
  soldCount?: number;
}

const ArtCard = ({ title, price, image, category, link }: ArtCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 card-glow shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="rounded-full gap-1.5 text-xs font-semibold shadow-lg">
            View <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body text-primary font-semibold text-sm mt-2">
          {price}
        </p>
      </div>
    </a>
  );
};

export default ArtCard;
