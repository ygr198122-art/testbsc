import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          }`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
        </div>
        <h3 className="font-display font-bold text-foreground text-lg mb-1">{product.shortName}</h3>
        <p className="text-muted-foreground text-sm mb-3 font-body line-clamp-1">{product.size}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground text-lg">₹{product.salePrice}</span>
            <span className="text-muted-foreground line-through text-sm">₹{product.price}</span>
          </div>
          <Button size="sm" className="rounded-none gap-1 text-xs" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductTabs = () => {
  const favourites = products.filter(p => p.badge === 'bestseller');
  const newDrops = products.filter(p => p.badge === 'new');
  const combos = products.filter(p => p.category === 'Combo Packs');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-foreground mb-10">
          The <span className="italic text-primary">Snack</span> Collection
        </h2>
        <Tabs defaultValue="favourites" className="w-full">
          <TabsList className="mx-auto flex w-fit bg-secondary rounded-none mb-10">
            <TabsTrigger value="favourites" className="rounded-none uppercase tracking-wider text-sm font-semibold px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Fan Favourites</TabsTrigger>
            <TabsTrigger value="new" className="rounded-none uppercase tracking-wider text-sm font-semibold px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">New Drops</TabsTrigger>
            <TabsTrigger value="combos" className="rounded-none uppercase tracking-wider text-sm font-semibold px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Combos</TabsTrigger>
            <TabsTrigger value="all" className="rounded-none uppercase tracking-wider text-sm font-semibold px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">All Snacks</TabsTrigger>
          </TabsList>
          <TabsContent value="favourites">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {favourites.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>
          <TabsContent value="new">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newDrops.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>
          <TabsContent value="combos">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {combos.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>
          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;
