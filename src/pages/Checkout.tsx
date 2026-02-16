import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { ArrowLeft, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [orderNumber, setOrderNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const shippingFee = totalPrice >= 479 ? 0 : 49;

  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '',
    address_line1: '', address_line2: '', city: '', state: '', pin_code: '',
  });

  const handlePlaceOrder = async () => {
    setLoading(true);
    const num = 'BSC' + Date.now().toString().slice(-6);
    
    const { data: orderData, error: orderError } = await supabase.from('orders').insert([{
      order_number: num,
      ...form,
      payment_method: paymentMethod,
      subtotal: totalPrice,
      shipping_fee: shippingFee,
      total: totalPrice + shippingFee,
      status: 'pending',
      order_type: 'regular',
    }]).select('id').single();

    if (orderError || !orderData) {
      setLoading(false);
      return;
    }

    const orderItemsData = items.map(item => ({
      order_id: orderData.id,
      product_id: item.product.id,
      product_name: item.product.name,
      quantity: item.quantity,
      unit_price: item.product.salePrice || item.product.price,
      total_price: (item.product.salePrice || item.product.price) * item.quantity,
    }));

    await supabase.from('order_items').insert(orderItemsData);

    setOrderNumber(num);
    setStep('success');
    clearCart();
    setLoading(false);
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Your cart is empty</h1>
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center max-w-md">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">Order Placed!</h1>
          <p className="text-muted-foreground font-body mb-2">Thank you for your order. Your snacks are on the way! 🎉</p>
          <p className="text-sm text-muted-foreground font-body mb-8">Order #{orderNumber} • You'll receive a confirmation email shortly.</p>
          <Button className="rounded-none" onClick={() => navigate('/')}>Continue Shopping</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const isInfoValid = form.first_name && form.last_name && form.email && form.phone && form.address_line1 && form.city && form.state && form.pin_code;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6 gap-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>

        <h1 className="text-3xl font-display font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            {step === 'info' && (
              <>
                <div className="bg-card rounded-lg p-6 space-y-4">
                  <h2 className="font-display font-bold text-lg flex items-center gap-2"><Truck className="w-5 h-5" /> Shipping Information</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="First Name *" className="rounded-none" value={form.first_name} onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))} />
                    <Input placeholder="Last Name *" className="rounded-none" value={form.last_name} onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))} />
                  </div>
                  <Input placeholder="Email Address *" type="email" className="rounded-none" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  <Input placeholder="Phone Number *" type="tel" className="rounded-none" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  <Input placeholder="Address Line 1 *" className="rounded-none" value={form.address_line1} onChange={e => setForm(f => ({ ...f, address_line1: e.target.value }))} />
                  <Input placeholder="Address Line 2" className="rounded-none" value={form.address_line2} onChange={e => setForm(f => ({ ...f, address_line2: e.target.value }))} />
                  <div className="grid grid-cols-3 gap-3">
                    <Input placeholder="City *" className="rounded-none" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
                    <Input placeholder="State *" className="rounded-none" value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))} />
                    <Input placeholder="PIN Code *" className="rounded-none" value={form.pin_code} onChange={e => setForm(f => ({ ...f, pin_code: e.target.value }))} />
                  </div>
                </div>
                <Button className="w-full rounded-none h-12 font-bold tracking-widest uppercase" disabled={!isInfoValid} onClick={() => setStep('payment')}>
                  Continue to Payment
                </Button>
              </>
            )}

            {step === 'payment' && (
              <>
                <div className="bg-card rounded-lg p-6 space-y-4">
                  <h2 className="font-display font-bold text-lg flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payment Method</h2>
                  <div className="space-y-3">
                    {[
                      { value: 'card', label: 'Credit / Debit Card', sub: 'Visa, Mastercard, RuPay' },
                      { value: 'upi', label: 'UPI', sub: 'GPay, PhonePe, Paytm' },
                      { value: 'cod', label: 'Cash on Delivery', sub: 'Pay when you receive' },
                    ].map(pm => (
                      <label key={pm.value} className="flex items-center gap-3 p-3 border border-border rounded cursor-pointer hover:bg-secondary/50">
                        <input type="radio" name="payment" value={pm.value} checked={paymentMethod === pm.value}
                          onChange={() => setPaymentMethod(pm.value)} className="accent-primary" />
                        <div>
                          <p className="font-semibold text-sm">{pm.label}</p>
                          <p className="text-xs text-muted-foreground">{pm.sub}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-none h-12" onClick={() => setStep('info')}>Back</Button>
                  <Button className="flex-1 rounded-none h-12 font-bold tracking-widest uppercase" disabled={loading} onClick={handlePlaceOrder}>
                    {loading ? 'Placing Order…' : `Place Order — ₹${totalPrice + shippingFee}`}
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 sticky top-24">
              <h2 className="font-display font-bold text-lg mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{item.product.shortName || item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-sm">₹{(item.product.salePrice || item.product.price) * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-2 text-sm font-body">
                <div className="flex justify-between"><span>Subtotal</span><span>₹{totalPrice}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span></div>
                <div className="flex justify-between font-bold text-base border-t border-border pt-2 mt-2">
                  <span>Total</span><span>₹{totalPrice + shippingFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
