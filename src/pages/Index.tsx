import { useState, useEffect, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ProcessSection from '@/components/ProcessSection';
import CollectionSection from '@/components/CollectionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Diamond3D from '@/components/Diamond3D';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navigation />

      {/* Fixed 3D Diamond - Responsive sizing */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px]">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border border-primary/30 rounded-full animate-pulse" />
            </div>
          }>
            <Diamond3D scrollProgress={scrollProgress} />
          </Suspense>
        </div>
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection scrollProgress={scrollProgress} />
        <StorySection />
        <ProcessSection />
        <CollectionSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
