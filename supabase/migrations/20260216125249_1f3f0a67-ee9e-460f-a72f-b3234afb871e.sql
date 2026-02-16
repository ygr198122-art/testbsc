
-- Orders table to store all orders (guest checkout, no auth required)
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pin_code TEXT NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'cod',
  subtotal INTEGER NOT NULL,
  shipping_fee INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  order_type TEXT NOT NULL DEFAULT 'regular',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Order items
CREATE TABLE public.order_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL,
  total_price INTEGER NOT NULL
);

-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Bulk order inquiries
CREATE TABLE public.bulk_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  quantity_range TEXT NOT NULL,
  product_interest TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bulk_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (guest checkout, no auth needed)
CREATE POLICY "Anyone can place orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can add order items" ON public.order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit bulk inquiry" ON public.bulk_inquiries FOR INSERT WITH CHECK (true);

-- Allow reading orders by order_number (for confirmation page)
CREATE POLICY "Anyone can read orders by number" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Anyone can read order items" ON public.order_items FOR SELECT USING (true);
CREATE POLICY "Anyone can read contact submissions" ON public.contact_submissions FOR SELECT USING (true);
CREATE POLICY "Anyone can read bulk inquiries" ON public.bulk_inquiries FOR SELECT USING (true);
