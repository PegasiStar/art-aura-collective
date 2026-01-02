import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/commissions" },
  { name: "Work", path: "/digital-art" },
  { name: "Contact", path: "/commissions" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            mc
          </div>
          <span className="font-display text-lg font-semibold">
            <span className="text-primary">maybee</span>
            <span className="text-foreground">christine</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path + link.name}
              to={link.path}
              className={`font-body text-sm font-medium transition-colors relative
                ${isActive(link.path) 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex rounded-full px-6">
            <Link to="/commissions">Get in Touch</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path + link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-body py-3 px-4 rounded-lg transition-colors
                  ${isActive(link.path) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-secondary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link to="/commissions" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
