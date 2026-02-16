import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
          Get <span className="italic text-primary">₹100 Off</span> Your First Order
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Subscribe to our newsletter and get exclusive deals, new launches, and snacking inspiration straight to your inbox.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="rounded-none h-12 font-body"
          />
          <Button className="rounded-none h-12 px-6 gap-2 font-bold tracking-wider uppercase">
            <Send className="w-4 h-4" /> Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribe;
