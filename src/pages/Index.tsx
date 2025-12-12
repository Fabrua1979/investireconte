import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import WhatYouLearnSection from '@/components/WhatYouLearnSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import ValuesSection from '@/components/ValuesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyInvestSection />
      <WhatYouLearnSection />
      <WhatWeOfferSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}