import { motion } from 'framer-motion';

const points = [
  { icon: '🌿', title: 'Clean Ingredients', desc: 'No palm oil, no MSG, no artificial preservatives. Ever.' },
  { icon: '🔥', title: 'Bold Fusion Flavors', desc: 'Where traditional Indian meets global gourmet.' },
  { icon: '🤝', title: 'Small Batch Crafted', desc: 'Made with love in small batches for peak freshness.' },
  { icon: '♻️', title: 'Sustainable Packaging', desc: 'Eco-friendly materials because the planet matters.' },
];

const WhatMakesDifferent = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop"
                alt="What makes us different"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              What Makes Us <span className="italic text-accent">Different</span>
            </h2>
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">{point.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">{point.title}</h3>
                    <p className="text-primary-foreground/70 font-body">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
