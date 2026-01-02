import { Link } from "react-router-dom";
import SocialIcons from "@/components/shared/SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐸</span>
              <span className="font-display text-xl font-semibold">maybeechristine</span>
            </Link>
            <p className="font-body text-sm opacity-80">
              South African LGBTQ+ digital artist, animator & streamer creating cozy, nature-inspired art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-sm opacity-80">
              <li><Link to="/digital-art" className="hover:opacity-100 transition-opacity">Digital Art</Link></li>
              <li><Link to="/merch" className="hover:opacity-100 transition-opacity">Merch</Link></li>
              <li><Link to="/commissions" className="hover:opacity-100 transition-opacity">Commissions</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display font-semibold mb-4">Info</h4>
            <ul className="space-y-2 font-body text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Christine</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link></li>
              <li><Link to="/refunds" className="hover:opacity-100 transition-opacity">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <SocialIcons size={20} className="gap-3 flex-wrap" light />
            <p className="mt-4 font-body text-sm opacity-80">
              maybeechristinettv@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center font-body text-sm opacity-60">
          <p>© {new Date().getFullYear()} maybeechristine. All rights reserved.</p>
          <p className="mt-1">Made with 💚 and lots of frogs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
