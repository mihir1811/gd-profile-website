import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3 sm:mb-4">PRIVATE CONSULTATION</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 sm:mb-6 leading-tight">
              Begin Your
              <br />
              <span className="italic text-gradient-gold">Journey</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Experience the Lumière difference with a personalized consultation.
              Our experts are ready to guide you through our exquisite collections
              and create something truly unique.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-primary/30 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Flagship Boutique</p>
                  <p className="text-sm sm:text-base text-foreground">Place Vendôme, Paris</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-primary/30 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <p className="text-sm sm:text-base text-foreground">concierge@lumiere.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form className="space-y-4 sm:space-y-6 bg-background/50 p-5 sm:p-6 md:p-8 border border-border">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">FIRST NAME</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">LAST NAME</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm tracking-widest text-muted-foreground mb-2 block">EMAIL</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                />
              </div>

              <div>
                <label className="text-sm tracking-widest text-muted-foreground mb-2 block">INTEREST</label>
                <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors cursor-pointer">
                  <option value="" className="bg-background">Select an option</option>
                  <option value="engagement" className="bg-background">Engagement Rings</option>
                  <option value="bespoke" className="bg-background">Bespoke Design</option>
                  <option value="collection" className="bg-background">Collection Inquiry</option>
                  <option value="investment" className="bg-background">Investment Diamonds</option>
                </select>
              </div>

              <div>
                <label className="text-sm tracking-widest text-muted-foreground mb-2 block">MESSAGE</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-widest hover:bg-primary/90 transition-colors"
              >
                REQUEST CONSULTATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
