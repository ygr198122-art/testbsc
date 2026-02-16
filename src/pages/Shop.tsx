import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { motion } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const activeCategory = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState('featured');

  const filtered = useMemo(() => {
    let items = activeCategory === 'All' ? [...products] : products.filter(p => p.category === activeCategory);
    if (sortBy === 'price-low') items.sort((a, b) => a.salePrice - b.salePrice);
    if (sortBy === 'price-high') items.sort((a, b) => b.salePrice - a.salePrice);
    if (sortBy === 'rating') items.sort((a, b) => b.rating - a.rating);
    return items;
  }, [activeCategory, sortBy]);

  const setCategory = (cat: string) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 text-center">
          Our <span className="italic text-primary">Snack</span> Collection
        </h1>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <Button variant={activeCategory === 'All' ? 'default' : 'outline'} className="rounded-none flex-shrink-0" onClick={() => setCategory('All')}>
            All ({products.length})
          </Button>
          {categories.map(cat => (
            <Button key={cat.id} variant={activeCategory === cat.name ? 'default' : 'outline'} className="rounded-none flex-shrink-0" onClick={() => setCategory(cat.name)}>
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground font-body text-sm">{filtered.length} products</p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-transparent border border-border rounded-none px-3 py-1.5 text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.shortName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm ${
                    product.badge === 'sale' ? 'bg-destructive text-destructive-foreground' :
                    product.badge === 'new' ? 'bg-accent text-accent-foreground' :
                    'bg-primary text-primary-foreground'
                  }`}>{product.badge}</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-1">{product.shortName}</h3>
                <p className="text-muted-foreground text-xs mb-3 font-body line-clamp-1">{product.size}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">₹{product.salePrice}</span>
                    <span className="text-muted-foreground line-through text-xs">₹{product.price}</span>
                  </div>
                  <Button size="sm" className="rounded-none gap-1 text-xs" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                    <ShoppingBag className="w-3.5 h-3.5" /> Add
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
