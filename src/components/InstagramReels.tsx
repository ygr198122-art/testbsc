import { Play } from 'lucide-react';
import { products } from '@/data/products';

const reels = products.slice(0, 4).map(p => p.image);

const InstagramReels = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-3">
          Now Streaming the <span className="italic text-primary">Snack Show</span>
        </h2>
        <p className="text-muted-foreground text-center font-body mb-10">Behind the scenes, recipes & more</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel, i) => (
            <div key={i} className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group">
              <img src={reel} alt={`Reel ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-card/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
