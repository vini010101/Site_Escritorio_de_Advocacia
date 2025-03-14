
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServiceCards from '@/components/ServiceCards';
import FeatureSection from '@/components/FeatureSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServiceCards />
      <FeatureSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
