

# Bombay Snacking Co — E-Commerce Website

A bold, vibrant snack brand website inspired by The Theatre Project's layout, rebranded with Bombay Snacking Co's identity using **#732850** (deep maroon/plum) as the primary color and your uploaded logo.

---

## 🎨 Design & Branding
- Primary color: **#732850** (deep plum/maroon) with complementary cream/gold accents
- Bold, dramatic typography matching the reference site's cinematic style
- Your Bombay Snacking Co logo in the header
- Warm, inviting food-focused aesthetic

---

## 📄 Page Sections (Homepage)

### 1. Top Announcement Bar
- Free delivery message, social media links (Facebook, Instagram, WhatsApp)
- Currency selector

### 2. Header & Navigation
- Bombay Snacking Co logo centered
- Navigation: Home, Shop (dropdown), Gifting, Bulk Orders, Build Your Own Box, Contact Us
- Search, account, and cart icons
- "Shop by Category" button
- Support center with phone number

### 3. Hero Section
- Full-width hero banner with a bold snack image background
- "SHOP NOW" call-to-action button
- Auto-playing video or image carousel

### 4. Scrolling Badge Ticker
- Animated horizontal scroll showcasing: No Palm Oil, Gluten Free, MSG Free, Non GMO badges

### 5. "Pick Your Hero Snack" — Category Cards
- Horizontally scrollable category cards with images (e.g., Fusion Namkeen, Gourmet Chips, Roasted Mixes, Party Boxes, Blockbuster Bundles)
- "View All Categories" link

### 6. "What Makes Us Different" Section
- Split layout with video/image on one side, brand story text on the other
- Bold typography highlighting the brand's unique selling points

### 7. Product Tabs — Fan Favourites / Bundles / New Drops
- Tabbed product grid with product cards showing:
  - Product image, name, regular price (strikethrough), sale price
  - "Add to Cart" button
  - Sale/New badges

### 8. Build Your Own Box CTA
- Eye-catching section encouraging custom box creation
- "BUILD NOW" button

### 9. Instagram / Video Reels Section
- "Now Streaming the Snack Show" — embedded social content or video thumbnails

### 10. Customer Reviews / Testimonials
- "Spoiler Alert: They Loved It" section
- Review cards with customer name, city, quote, and linked product

### 11. Email Subscribe Section
- Subscribe for store credit/discount
- Email input with subscribe button

### 12. Instagram Follow Ticker
- Scrolling "Follow us on Instagram" banner

### 13. Footer
- Brand story blurb
- Contact info (email, phone, address with map link)
- Social media icons
- Link columns: Shop, Explore, Our Policies
- Newsletter subscribe
- Copyright

---

## 🛒 E-Commerce Features (Stripe + Supabase)

### Backend (Supabase)
- **Products table**: name, description, price, sale price, images, category, variants, stock
- **Categories table**: name, image, item count
- **Orders table**: user, items, total, status, shipping info
- **Users/Auth**: Supabase Auth for login/register
- **Reviews table**: customer reviews linked to products

### Payments (Stripe)
- Stripe Checkout for secure payments
- Support for COD option (order placed, pay on delivery)
- Edge function to create Stripe checkout sessions

### Cart
- Client-side cart with add/remove/quantity controls
- Cart drawer/sidebar
- Free shipping progress bar (orders over ₹479)

---

## 📱 Additional Pages
- **Shop / Collections page**: Filterable product grid by category
- **Product detail page**: Image gallery, description, add to cart, reviews
- **Cart page**: Full cart view with checkout button
- **Contact Us page**: Contact form + map
- **Bulk Order Enquiry page**: Form for corporate/bulk orders

---

## 📱 Responsive Design
- Fully responsive across desktop, tablet, and mobile
- Mobile hamburger menu
- Touch-friendly product carousels

