import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Bombay Snacking Co Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Snacking,<br />
            <span className="italic text-accent">Reinvented.</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-md">
            Bold Indian flavors meet gourmet craftsmanship. No palm oil. No MSG. Just pure, unapologetic taste.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 rounded-none font-bold tracking-widest uppercase">
            Shop Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
