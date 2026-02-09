import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Jewelry() {
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
                    <p className="text-xs sm:text-sm tracking-[0.3em] text-primary">JEWELRY COLLECTION</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                      Bespoke <span className="italic text-gradient-gold">Masterpieces</span> for Every Occasion
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                      From custom engagement rings to heirloom pieces, we craft jewelry that tells your story.
                      Each design is a collaboration between your vision and our master artisans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
              {[
                {
                  title: 'Custom Design',
                  description: 'Bring your vision to life with our CAD-led design process.',
                },
                {
                  title: 'Premium Materials',
                  description: 'Finest gold, platinum, and gemstones for timeless pieces.',
                },
                {
                  title: 'Hand Crafted',
                  description: 'Master artisans handcraft each piece with precision and care.',
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

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">JEWELRY CRAFTSMANSHIP</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4">
                Artistry meets engineering
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Our jewelry collection showcases the finest craftsmanship, combining traditional techniques
                with modern design. Every piece is engineered for durability and designed for beauty.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
