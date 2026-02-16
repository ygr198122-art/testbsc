import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Package, Users, Gift, Truck, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const quantityRanges = ['50–100 units', '100–500 units', '500–1000 units', '1000+ units'];

const benefits = [
  { icon: Package, title: 'Custom Packaging', desc: 'Branded packaging with your company logo & message' },
  { icon: Users, title: 'Corporate Gifting', desc: 'Perfect for festivals, events & employee appreciation' },
  { icon: Gift, title: 'Custom Combos', desc: 'Mix & match products to create unique gift sets' },
  { icon: Truck, title: 'Pan-India Delivery', desc: 'Free shipping on all bulk orders across India' },
];

const BulkOrders = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company_name: '', contact_name: '', email: '', phone: '',
    quantity_range: quantityRanges[0], product_interest: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('bulk_inquiries').insert([form]);
    setLoading(false);
    if (error) {
      toast({ title: 'Error', description: 'Something went wrong. Please try again.', variant: 'destructive' });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Bulk Orders</h1>
              <p className="text-lg md:text-xl font-body opacity-90 max-w-2xl mx-auto">
                Corporate gifting, event catering, or retail stocking — we've got you covered with premium healthy snacks at wholesale prices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Why Choose Us for Bulk?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-card rounded-lg p-6 text-center border border-border">
                <b.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-2xl">
            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-3">Inquiry Submitted!</h2>
                <p className="text-muted-foreground font-body">Our team will reach out within 24 hours with a custom quote.</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">Get a Custom Quote</h2>
                <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-8 space-y-4 border border-border">
                  <Input placeholder="Company / Organisation Name *" required className="rounded-none"
                    value={form.company_name} onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))} />
                  <Input placeholder="Your Name *" required className="rounded-none"
                    value={form.contact_name} onChange={e => setForm(f => ({ ...f, contact_name: e.target.value }))} />
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Email *" type="email" required className="rounded-none"
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    <Input placeholder="Phone *" type="tel" required className="rounded-none"
                      value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                  <select className="w-full h-10 border border-input bg-background px-3 text-sm rounded-none"
                    value={form.quantity_range} onChange={e => setForm(f => ({ ...f, quantity_range: e.target.value }))}>
                    {quantityRanges.map(q => <option key={q} value={q}>{q}</option>)}
                  </select>
                  <Input placeholder="Products you're interested in" className="rounded-none"
                    value={form.product_interest} onChange={e => setForm(f => ({ ...f, product_interest: e.target.value }))} />
                  <textarea placeholder="Additional requirements or message" rows={4}
                    className="w-full border border-input bg-background px-3 py-2 text-sm rounded-none resize-none"
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                  <Button type="submit" className="w-full rounded-none h-12 font-bold tracking-widest uppercase" disabled={loading}>
                    {loading ? 'Submitting…' : 'Submit Inquiry'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BulkOrders;
