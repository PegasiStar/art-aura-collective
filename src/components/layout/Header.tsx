import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialIcons from "@/components/shared/SocialIcons";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Digital Art", path: "/digital-art" },
  { name: "Merch", path: "/merch" },
  { name: "Commissions", path: "/commissions" },
  { name: "About", path: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
            mc
          </div>
          <span className="font-display text-lg">
            <span className="text-primary">maybee</span>
            <span className="text-foreground">christine</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path + link.name}
              to={link.path}
              className={`font-body text-sm font-semibold transition-colors relative py-1
                ${isActive(link.path) 
                  ? "text-primary" 
                  : "text-foreground/70 hover:text-foreground"
                }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SocialIcons size={18} className="gap-2" />
          </div>
          
          <Button asChild className="hidden sm:inline-flex rounded-full px-5 font-semibold shadow-md">
            <a href="https://ko-fi.com/maybeechristine" target="_blank" rel="noopener noreferrer">
              Shop Ko-Fi
            </a>
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
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path + link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-body font-semibold py-3 px-4 rounded-xl transition-colors
                  ${isActive(link.path) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-secondary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <SocialIcons size={20} className="gap-4 justify-center" />
            </div>
            <Button asChild className="mt-4 rounded-full font-semibold">
              <a href="https://ko-fi.com/maybeechristine" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                Shop Ko-Fi
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
