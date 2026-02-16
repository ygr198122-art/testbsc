import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Minus, Plus, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
  };

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 gap-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-card mb-4">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {product.badge && (
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm mb-4 ${
                product.badge === 'sale' ? 'bg-destructive text-destructive-foreground' :
                product.badge === 'new' ? 'bg-accent text-accent-foreground' :
                'bg-primary text-primary-foreground'
              }`}>{product.badge}</span>
            )}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-muted-foreground font-body mb-4">{product.description}</p>

            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
              ))}
              <span className="text-sm text-muted-foreground">({product.rating})</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">₹{product.salePrice}</span>
              <span className="text-xl text-muted-foreground line-through">₹{product.price}</span>
              <span className="text-sm font-semibold text-destructive">
                {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
              </span>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-1">Size: <span className="font-normal text-muted-foreground">{product.size}</span></p>
              <p className="text-sm font-semibold text-foreground mb-1">Ingredients: <span className="font-normal text-muted-foreground">{product.ingredients}</span></p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border">
                <Button variant="ghost" size="icon" className="rounded-none h-10 w-10" onClick={() => setQty(Math.max(1, qty - 1))}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{qty}</span>
                <Button variant="ghost" size="icon" className="rounded-none h-10 w-10" onClick={() => setQty(qty + 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button size="lg" className="flex-1 rounded-none h-12 gap-2 font-bold tracking-widest uppercase" onClick={handleAddToCart}>
                <ShoppingBag className="w-4 h-4" /> Add to Cart — ₹{product.salePrice * qty}
              </Button>
            </div>

            <div className="bg-secondary rounded-lg p-4 space-y-2 text-sm font-body">
              <p>🚚 Free delivery on orders above ₹479</p>
              <p>🌿 100% Natural, No Palm Oil, No MSG</p>
              <p>📦 Ships within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => (
                <div key={p.id} className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow" onClick={() => { navigate(`/product/${p.id}`); window.scrollTo(0, 0); }}>
                  <div className="aspect-square overflow-hidden">
                    <img src={p.image} alt={p.shortName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-display font-bold text-sm">{p.shortName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-primary">₹{p.salePrice}</span>
                      <span className="text-xs text-muted-foreground line-through">₹{p.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
