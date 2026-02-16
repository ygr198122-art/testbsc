import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/products';
import { motion } from 'framer-motion';

const CustomerReviews = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-3">
          Spoiler Alert: <span className="italic text-accent">They Loved It</span>
        </h2>
        <p className="text-primary-foreground/70 text-center font-body mb-12">Real snackers, real reviews</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-deep-maroon/50 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="font-body text-primary-foreground/90 mb-4 italic">"{review.quote}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-display font-bold">{review.name}</p>
              <p className="text-primary-foreground/50 text-sm">{review.city} • {review.product}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
