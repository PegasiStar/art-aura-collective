import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MerchCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

const MerchCard = ({ title, price, image, category, link }: MerchCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover-lift">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="font-body text-accent font-bold text-xl mb-3">
          {price}
        </p>
        <Button asChild variant="secondary" className="w-full gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Shop on Etsy
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MerchCard;
