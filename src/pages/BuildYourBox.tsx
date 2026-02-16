import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Package, Plus, Minus, ShoppingBag } from 'lucide-react';

const BOX_SIZES = [
  { id: 3, label: 'Starter Box', count: 3, discount: 5 },
  { id: 5, label: 'Party Box', count: 5, discount: 10 },
  { id: 8, label: 'Mega Box', count: 8, discount: 15 },
];

const BuildYourBox = () => {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState(BOX_SIZES[0]);
  const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({});

  const totalSelected = Object.values(selectedProducts).reduce((s, q) => s + q, 0);
  const remaining = selectedSize.count - totalSelected;

  const toggleProduct = (id: string, delta: number) => {
    setSelectedProducts(prev => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      if (delta > 0 && remaining <= 0) return prev;
      return { ...prev, [id]: next };
    });
  };

  const handleAddAllToCart = () => {
    Object.entries(selectedProducts).forEach(([id, qty]) => {
      const product = products.find(p => p.id === id);
      if (product) {
        for (let i = 0; i < qty; i++) addToCart(product);
      }
    });
    setIsCartOpen(true);
  };

  const boxTotal = Object.entries(selectedProducts).reduce((sum, [id, qty]) => {
    const p = products.find(pr => pr.id === id);
    return sum + (p ? (p.salePrice || p.price) * qty : 0);
  }, 0);

  const discountedTotal = Math.round(boxTotal * (1 - selectedSize.discount / 100));

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <Package className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-3">Build Your Snack Box</h1>
            <p className="text-lg font-body opacity-90 max-w-xl mx-auto">
              Pick your favorites, choose a box size, and enjoy extra savings!
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Box Size Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {BOX_SIZES.map(size => (
              <button key={size.id} onClick={() => { setSelectedSize(size); setSelectedProducts({}); }}
                className={`px-6 py-4 rounded-lg border-2 transition-all font-body text-center min-w-[160px] ${
                  selectedSize.id === size.id ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                }`}>
                <p className="font-bold text-lg">{size.label}</p>
                <p className="text-sm">{size.count} items • {size.discount}% off</p>
              </button>
            ))}
          </div>

          {/* Progress */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex justify-between text-sm font-body mb-2">
              <span className="text-foreground font-semibold">{totalSelected} of {selectedSize.count} selected</span>
              <span className="text-muted-foreground">{remaining > 0 ? `${remaining} more to go` : '✅ Box complete!'}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div className="bg-primary h-3 rounded-full transition-all" style={{ width: `${(totalSelected / selectedSize.count) * 100}%` }} />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {products.filter(p => p.category !== 'Combo Packs').map(product => {
              const qty = selectedProducts[product.id] || 0;
              return (
                <motion.div key={product.id} layout
                  className={`bg-card rounded-lg border-2 overflow-hidden transition-all ${qty > 0 ? 'border-primary shadow-md' : 'border-border'}`}>
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
                    {qty > 0 && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {qty}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">{product.shortName}</p>
                    <p className="text-xs text-muted-foreground mb-2">{product.size}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">₹{product.salePrice || product.price}</span>
                      {qty === 0 ? (
                        <Button size="sm" variant="outline" className="h-7 text-xs rounded-none" onClick={() => toggleProduct(product.id, 1)}
                          disabled={remaining <= 0}>
                          <Plus className="w-3 h-3 mr-1" /> Add
                        </Button>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Button size="icon" variant="outline" className="h-7 w-7 rounded-none" onClick={() => toggleProduct(product.id, -1)}>
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-5 text-center text-sm font-bold">{qty}</span>
                          <Button size="icon" variant="outline" className="h-7 w-7 rounded-none" onClick={() => toggleProduct(product.id, 1)}
                            disabled={remaining <= 0}>
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sticky Bottom Bar */}
          <AnimatePresence>
            {totalSelected > 0 && (
              <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
                className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-40">
                <div className="container mx-auto flex items-center justify-between max-w-4xl">
                  <div>
                    <p className="font-body text-sm text-muted-foreground">
                      {totalSelected}/{selectedSize.count} items • {selectedSize.discount}% box discount
                    </p>
                    <p className="font-display font-bold text-foreground text-lg">
                      <span className="line-through text-muted-foreground text-sm mr-2">₹{boxTotal}</span>
                      ₹{discountedTotal}
                    </p>
                  </div>
                  <Button className="rounded-none h-12 px-8 font-bold tracking-widest uppercase gap-2"
                    disabled={remaining > 0} onClick={handleAddAllToCart}>
                    <ShoppingBag className="w-4 h-4" /> Add Box to Cart
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuildYourBox;
