import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Diamond() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navigation />

      <main className="pt-20 sm:pt-24">
        <section className="relative min-h-[70vh] md:min-h-[80vh] bg-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />

          <div className="relative">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex min-h-[70vh] md:min-h-[80vh] items-start pt-32 pb-14 sm:pt-40 sm:pb-16 md:pt-44 md:pb-20">
                <div className="max-w-3xl text-left">
                  <div className="space-y-5 sm:space-y-6 md:space-y-7">
                    <p className="text-xs sm:text-sm tracking-[0.3em] text-primary">DIAMONDS</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                      Exceptional <span className="italic text-gradient-gold">Gems</span> Crafted with Precision
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                      Explore our curated collection of ethically sourced diamonds, each selected for its brilliance,
                      clarity, and unique character. Every stone is calibrated to perfection for timeless beauty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
              {[
                {
                  title: 'Ethically Sourced',
                  description: 'All diamonds with full traceability from source to our facility.',
                },
                {
                  title: 'Precision Graded',
                  description: 'Each stone calibrated and graded to the highest standards.',
                },
                {
                  title: 'Certified Quality',
                  description: 'Complete documentation and certification for every diamond.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border/70 bg-background/40 p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-primary/40"
                >
                  <h2 className="text-lg sm:text-xl font-serif mb-3">{item.title}</h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">OUR DIAMONDS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4">
                Quality that speaks for itself
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Whether you're looking for a perfect solitaire stone or custom shapes for your vision,
                our collection offers exceptional quality at competitive prices. Each diamond is selected
                with meticulous attention to detail.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
