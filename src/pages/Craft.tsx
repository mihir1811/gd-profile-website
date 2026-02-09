import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Craft() {
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
                    <p className="text-xs sm:text-sm tracking-[0.3em] text-primary">THE CRAFT</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                      Behind Every <span className="italic text-gradient-gold">Masterpiece</span>
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                      Discover our meticulous process of transforming raw materials into timeless jewelry.
                      From sourcing to final polish, each step is guided by precision and passion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                {
                  number: '01',
                  title: 'Sourcing',
                  description: 'Ethical sourcing of diamonds and premium materials with full traceability.',
                },
                {
                  number: '02',
                  title: 'Design',
                  description: 'CAD-led design process to engineer brilliance and perfect proportions.',
                },
                {
                  number: '03',
                  title: 'Calibration',
                  description: 'Precision grading and millimeter-accurate alignment for flawless settings.',
                },
                {
                  number: '04',
                  title: 'Crafting',
                  description: 'Master artisans handcraft each piece with meticulous attention to detail.',
                },
                {
                  number: '05',
                  title: 'Finishing',
                  description: 'Expert finishing and polishing to achieve perfect brilliance.',
                },
                {
                  number: '06',
                  title: 'Quality Assurance',
                  description: 'Final inspection and certification to ensure excellence.',
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-lg border border-primary/40 bg-primary/10">
                      <span className="text-sm sm:text-base font-serif font-semibold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-serif mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">OUR COMMITMENT</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4">
                Excellence in every detail
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Our craft is rooted in precision, integrity, and passion. Every piece that leaves our workshop
                carries the promise of timeless beauty and exceptional quality.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
