import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Package, Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface OrderItem {
  id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

interface Order {
  id: string;
  order_number: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  state: string;
  pin_code: string;
  payment_method: string;
  subtotal: number;
  shipping_fee: number;
  total: number;
  status: string;
  order_type: string;
  notes: string | null;
  created_at: string;
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderItems, setOrderItems] = useState<Record<string, OrderItem[]>>({});
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      if (data) setOrders(data);
      setLoading(false);
    };
    fetchOrders();

    // Realtime subscription
    const channel = supabase
      .channel('orders-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, (payload) => {
        setOrders(prev => [payload.new as Order, ...prev]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const toggleOrder = async (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
      return;
    }
    setExpandedOrder(orderId);
    if (!orderItems[orderId]) {
      const { data } = await supabase.from('order_items').select('*').eq('order_id', orderId);
      if (data) setOrderItems(prev => ({ ...prev, [orderId]: data }));
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <Package className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-display font-bold text-foreground">Order Dashboard</h1>
          <span className="ml-auto bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
            {orders.length} orders
          </span>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground font-body">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-body text-lg">No orders yet. Orders will appear here in real-time.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="bg-card border border-border rounded-lg overflow-hidden">
                <button onClick={() => toggleOrder(order.id)}
                  className="w-full p-4 md:p-6 flex items-center gap-4 text-left hover:bg-secondary/30 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className="font-display font-bold text-foreground">#{order.order_number}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${statusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className="text-xs text-muted-foreground font-body">
                        {order.payment_method.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">
                      {order.first_name} {order.last_name} • ₹{order.total}
                    </p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(order.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                    </p>
                  </div>
                  {expandedOrder === order.id ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </button>

                {expandedOrder === order.id && (
                  <div className="border-t border-border p-4 md:p-6 space-y-4 bg-secondary/20">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2 text-sm font-body">
                        <h3 className="font-display font-bold text-foreground">Customer</h3>
                        <p className="flex items-center gap-2 text-muted-foreground"><Mail className="w-4 h-4" /> {order.email}</p>
                        <p className="flex items-center gap-2 text-muted-foreground"><Phone className="w-4 h-4" /> {order.phone}</p>
                        <p className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 mt-0.5" />
                          <span>{order.address_line1}{order.address_line2 && `, ${order.address_line2}`}, {order.city}, {order.state} – {order.pin_code}</span>
                        </p>
                      </div>
                      <div className="space-y-2 text-sm font-body">
                        <h3 className="font-display font-bold text-foreground">Order Summary</h3>
                        <div className="flex justify-between"><span>Subtotal</span><span>₹{order.subtotal}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span>{order.shipping_fee === 0 ? 'FREE' : `₹${order.shipping_fee}`}</span></div>
                        <div className="flex justify-between font-bold border-t border-border pt-2"><span>Total</span><span>₹{order.total}</span></div>
                      </div>
                    </div>

                    {orderItems[order.id] && (
                      <div>
                        <h3 className="font-display font-bold text-foreground text-sm mb-2">Items</h3>
                        <div className="space-y-2">
                          {orderItems[order.id].map(item => (
                            <div key={item.id} className="flex justify-between text-sm font-body bg-card p-3 rounded border border-border">
                              <span>{item.product_name} × {item.quantity}</span>
                              <span className="font-semibold">₹{item.total_price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminOrders;
