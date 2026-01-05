import { Link } from "react-router-dom";
import SocialIcons from "@/components/shared/SocialIcons";
import VineDecoration from "@/components/shared/VineDecoration";

const Footer = () => {
  return (
    <footer className="bg-secondary/60 border-t border-border mt-auto relative overflow-hidden">
      {/* Decorative elements */}
      <VineDecoration variant="top-left" className="opacity-20" />
      <VineDecoration variant="cattails-right" className="opacity-25" />
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                mc
              </div>
              <span className="font-display text-lg">
                <span className="text-primary">maybee</span>
                <span className="text-foreground">christine</span>
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Digital artist creating cute emotes, cozy wallpapers, and fun merch. Thanks for supporting my creative journey! 💚
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/digital-art" className="text-muted-foreground hover:text-primary transition-colors">Digital Art</Link></li>
              <li><Link to="/merch" className="text-muted-foreground hover:text-primary transition-colors">Merch</Link></li>
              <li><Link to="/commissions" className="text-muted-foreground hover:text-primary transition-colors">Commissions</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/refunds" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-foreground mb-4">Let's Connect</h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-accent">✉</span>
                <a href="mailto:maybeechristinettv@gmail.com" className="hover:text-primary transition-colors">
                  maybeechristinettv@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <SocialIcons size={22} className="gap-3" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} maybeechristine. All rights reserved.
          </p>
          <SocialIcons size={18} className="gap-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
