import { useEffect, useRef, useState } from 'react';

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="min-h-screen py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3 sm:mb-4">MY EXPERTISE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 sm:mb-8 leading-tight">
              Professional Journey in
              <br />
              <span className="italic text-gradient-gold">Diamond Excellence</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              With over a decade of experience in the diamond industry, I specialize in
              sourcing exceptional stones and creating bespoke pieces. From natural diamonds
              to lab-grown alternatives, I offer expert guidance on every aspect of your purchase.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              My commitment to quality, transparency, and personalized service ensures that
              each client receives not just a product, but a trusted partnership in their
              diamond journey.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-serif text-gradient-gold">130+</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">Years of Excellence</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div>
                <p className="text-3xl sm:text-4xl font-serif text-gradient-gold">5000+</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">Master Pieces Created</p>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="aspect-[4/5] bg-charcoal-light rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 border border-primary/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm tracking-widest text-muted-foreground">WATCH OUR STORY</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-32 h-32 border border-primary/20" />
            <div className="hidden sm:block absolute -top-8 -right-8 w-24 h-24 border border-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
