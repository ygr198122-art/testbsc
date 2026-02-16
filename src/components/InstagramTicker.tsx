import { Instagram } from 'lucide-react';

const InstagramTicker = () => {
  const text = 'Follow us on Instagram • @bombaysnackingco • ';
  return (
    <div className="bg-accent py-3 overflow-hidden cursor-pointer">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block">
        <div className="animate-ticker-reverse flex whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-4 text-accent-foreground font-display font-bold text-lg tracking-wider">
              <Instagram className="w-5 h-5" /> {text}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default InstagramTicker;
