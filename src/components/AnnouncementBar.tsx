import { Facebook, Instagram, Phone } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-xs font-body">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Phone className="w-3.5 h-3.5" /></a>
        </div>
        <p className="font-medium tracking-wider uppercase hidden sm:block">
          🎉 Free Delivery on Orders Above ₹479
        </p>
        <div className="flex items-center gap-2">
          <select className="bg-transparent border-none text-primary-foreground text-xs cursor-pointer focus:outline-none">
            <option value="INR">₹ INR</option>
            <option value="USD">$ USD</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
