import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import DemoVideo from '@/components/sections/DemoVideo';
import FeatureCards from '@/components/features/FeatureCards';
import ProductPreview from '@/components/features/ProductPreview';
import AutomationCTA from '@/components/sections/AutomationCTA';
import Dashboard from '@/components/sections/Dashboard';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <DemoVideo />
      <AutomationCTA />
      <FeatureCards />
      <Dashboard />
      <Testimonials />
      <ProductPreview />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}