import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import SearchModal from '@/components/SearchModal';
import logo from '@/assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'Gifting', href: '/shop?category=Combo Packs' },
  { label: 'Bulk Orders', href: '/bulk-orders' },
  { label: 'Build Your Box', href: '/build-your-box' },
  { label: 'Contact Us', href: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header className="bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top row */}
          <div className="hidden lg:flex justify-between items-center py-2 text-xs text-muted-foreground border-b border-border">
            <Button variant="ghost" size="sm" className="text-xs gap-1 h-7" onClick={() => navigate('/shop')}>
              <ChevronDown className="w-3 h-3" /> Shop by Category
            </Button>
            <span className="flex items-center gap-1">📞 Support: +91 98765 43210</span>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-3">
            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon"><Menu className="w-5 h-5" /></Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map(link => (
                    <a key={link.label} href={link.href} className="text-lg font-display font-semibold text-foreground hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, link.href)}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop nav left */}
            <nav className="hidden lg:flex items-center gap-6 flex-1">
              {navLinks.slice(0, 3).map(link => (
                <a key={link.label} href={link.href} className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Logo — centered */}
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex-shrink-0 mx-auto lg:mx-0">
              <img src={logo} alt="Bombay Snacking Co" className="h-14 md:h-16 object-contain" />
            </a>

            {/* Desktop nav right */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
              {navLinks.slice(3).map(link => (
                <a key={link.label} href={link.href} className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2 ml-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={() => setSearchOpen(true)}><Search className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon"><User className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;
