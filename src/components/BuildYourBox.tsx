import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';

const BuildYourBox = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[200px] font-display text-primary">📦</div>
        <div className="absolute bottom-10 right-10 text-[150px] font-display text-primary">🎁</div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Package className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Build Your Own <span className="italic text-primary">Snack Box</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-8">
            Mix & match your favourite flavors. Create the perfect combo for you, or gift it to someone who deserves a treat.
          </p>
          <Button size="lg" className="rounded-none text-lg px-12 py-6 font-bold tracking-widest uppercase">
            Build Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildYourBox;
