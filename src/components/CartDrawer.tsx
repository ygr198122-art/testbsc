import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

const FREE_SHIPPING_THRESHOLD = 479;

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();
  const shippingProgress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountLeft = FREE_SHIPPING_THRESHOLD - totalPrice;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="py-3 border-b border-border">
          {amountLeft > 0 ? (
            <p className="text-sm font-body text-muted-foreground mb-2">
              Add <span className="font-bold text-primary">₹{amountLeft}</span> more for free shipping!
            </p>
          ) : (
            <p className="text-sm font-body text-primary font-bold mb-2">🎉 You've unlocked free shipping!</p>
          )}
          <Progress value={shippingProgress} className="h-2" />
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-body">Your cart is empty</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.product.id} className="flex gap-3 items-center">
                <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-semibold text-sm truncate">{(item.product as any).shortName || item.product.name}</h4>
                  <p className="text-primary font-bold text-sm">₹{item.product.salePrice || item.product.price}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" className="w-7 h-7" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                  <Button variant="outline" size="icon" className="w-7 h-7" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="w-7 h-7 text-destructive" onClick={() => removeFromCart(item.product.id)}>
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-3">
            <div className="flex justify-between font-body">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold text-lg">₹{totalPrice}</span>
            </div>
            <Button className="w-full rounded-none h-12 text-base font-bold tracking-widest uppercase" onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}>
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
