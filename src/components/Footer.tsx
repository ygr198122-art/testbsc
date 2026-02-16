import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Bombay Snacking Co" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Bold. Unapologetic. Irresistible. We craft fusion snacks that celebrate India's vibrant flavors with a gourmet twist. Every bite tells a story.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Fusion Namkeen</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gourmet Chips</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Roasted Mixes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Party Boxes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Build Your Box</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gifting</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                hello@bombaysnackingco.com
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50 font-body">
          <p>© 2026 Bombay Snacking Co. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
