import Header from './components/Header';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import SpecialOffer from './components/SpecialOffer';
import HowToOrder from './components/HowToOrder';
import WhyChooseUs from './components/WhyChooseUs';
import FacebookPageCta from './components/FacebookPageCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC] font-sans antialiased text-slate-800">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Facebook Star Packages Section */}
        <PackagesSection />

        {/* Special Offer Promotional Banner */}
        <SpecialOffer />

        {/* How to Order 3-step Guide */}
        <HowToOrder />

        {/* Why FB Star Lagbe Feature Cards */}
        <WhyChooseUs />

        {/* Facebook Page Community Banner */}
        <FacebookPageCta />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Dark Navy Footer */}
      <Footer />

      {/* Floating Action: WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Fixed Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
