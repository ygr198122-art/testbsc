import { motion } from 'framer-motion';
import { categories } from '@/data/products';
import { useNavigate } from 'react-router-dom';

const CategoryCards = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
            Pick Your <span className="italic text-primary">Hero Snack</span>
          </h2>
          <p className="text-muted-foreground font-body">Explore our handcrafted collections</p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-56 md:w-64 snap-center group cursor-pointer"
              onClick={() => navigate(`/shop?category=${encodeURIComponent(cat.name)}`)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-primary-foreground font-display font-bold text-lg">{cat.name}</h3>
                  <p className="text-primary-foreground/70 text-sm">{cat.itemCount} items</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/shop" onClick={(e) => { e.preventDefault(); navigate('/shop'); }} className="text-primary font-semibold uppercase tracking-wider text-sm hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1">
            View All Categories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
