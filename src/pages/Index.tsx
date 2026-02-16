import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BadgeTicker from '@/components/BadgeTicker';
import CategoryCards from '@/components/CategoryCards';
import WhatMakesDifferent from '@/components/WhatMakesDifferent';
import ProductTabs from '@/components/ProductTabs';
import BuildYourBox from '@/components/BuildYourBox';
import InstagramReels from '@/components/InstagramReels';
import CustomerReviews from '@/components/CustomerReviews';
import EmailSubscribe from '@/components/EmailSubscribe';
import InstagramTicker from '@/components/InstagramTicker';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <BadgeTicker />
        <CategoryCards />
        <WhatMakesDifferent />
        <ProductTabs />
        <BuildYourBox />
        <InstagramReels />
        <CustomerReviews />
        <EmailSubscribe />
        <InstagramTicker />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
