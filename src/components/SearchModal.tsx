import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0">
        <DialogTitle className="sr-only">Search Products</DialogTitle>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search snacks..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="border-none shadow-none focus-visible:ring-0 text-base h-auto p-0"
            autoFocus
          />
        </div>
        <div className="max-h-80 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <p className="text-muted-foreground text-center py-8 font-body">No products found</p>
          )}
          {results.map(p => (
            <div key={p.id} className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 cursor-pointer transition-colors" onClick={() => { navigate(`/product/${p.id}`); onOpenChange(false); setQuery(''); }}>
              <img src={p.image} alt={p.shortName} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-sm truncate">{p.shortName}</p>
                <p className="text-xs text-muted-foreground">{p.category} • {p.size}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-primary">₹{p.salePrice}</p>
                <p className="text-xs text-muted-foreground line-through">₹{p.price}</p>
              </div>
              <Button size="sm" variant="outline" className="rounded-none text-xs h-7" onClick={(e) => { e.stopPropagation(); addToCart(p); }}>
                <ShoppingBag className="w-3 h-3" />
              </Button>
            </div>
          ))}
          {!query.trim() && (
            <div className="px-4 py-6 text-center">
              <p className="text-muted-foreground font-body text-sm">Type to search our snack collection...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
