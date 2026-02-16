import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email', value: 'hello@bombaysnacking.co' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat, 10 AM – 7 PM IST' },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('contact_submissions').insert([form]);
    setLoading(false);
    if (error) {
      toast({ title: 'Error', description: 'Failed to send message. Please try again.', variant: 'destructive' });
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
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Get in Touch</h1>
              <p className="text-lg font-body opacity-90 max-w-xl mx-auto">
                Questions, feedback, or just want to say hi? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Contact Info</h2>
              {contactInfo.map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{c.label}</p>
                    <p className="text-muted-foreground text-sm font-body">{c.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border">
                <h3 className="font-display font-bold text-foreground mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'Twitter'].map(s => (
                    <a key={s} href="#" className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded hover:bg-primary hover:text-primary-foreground transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                  <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl font-display font-bold text-foreground mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground font-body">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-8 space-y-4 border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">Send us a Message</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Your Name *" required className="rounded-none"
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    <Input placeholder="Email *" type="email" required className="rounded-none"
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <Input placeholder="Phone (optional)" type="tel" className="rounded-none"
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  <Input placeholder="Subject *" required className="rounded-none"
                    value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                  <textarea placeholder="Your message *" rows={5} required
                    className="w-full border border-input bg-background px-3 py-2 text-sm rounded-none resize-none"
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                  <Button type="submit" className="w-full rounded-none h-12 font-bold tracking-widest uppercase" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the minimum order for bulk?', a: 'Our minimum bulk order is 50 units. Contact us for custom pricing.' },
                { q: 'Do you ship across India?', a: 'Yes! We deliver pan-India. Orders above ₹479 get free shipping.' },
                { q: 'Are your products vegetarian?', a: 'Yes, all our products are 100% vegetarian and made with premium ingredients.' },
                { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery for unopened products.' },
              ].map((faq, i) => (
                <details key={i} className="bg-card border border-border rounded-lg p-4 group">
                  <summary className="font-semibold text-foreground cursor-pointer font-body">{faq.q}</summary>
                  <p className="mt-2 text-muted-foreground text-sm font-body">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
