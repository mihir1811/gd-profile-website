import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const highlights = [
  {
    title: 'Direct Facility',
    description:
      'We craft and source in-house to maintain purity, traceability, and consistent quality across every stone.',
  },
  {
    title: 'Precision Craft',
    description:
      'Our calibration-first process aligns each facet and setting for a perfect fit, every time.',
  },
  {
    title: 'Ethical Clarity',
    description:
      'Transparent pricing and a traceable lineage keep every purchase clear and confident.',
  },
];

const pillars = [
  {
    label: 'Design to Delivery',
    value: 'End-to-end craftsmanship without intermediaries.',
  },
  {
    label: 'CAD Expertise',
    value: 'Blueprints engineered for brilliance and structure.',
  },
  {
    label: 'Custom Jewelry',
    value: 'Gold and diamond pieces shaped to your brand story.',
  },
];

const stats = [
  { label: 'Years of Expertise', value: '15+' },
  { label: 'Stones Calibrated', value: '12K+' },
  { label: 'Custom Projects', value: '1.8K+' },
];

const timeline = [
  {
    title: 'Sourcing',
    description: 'Ethically sourced diamonds and gold with full traceability from origin to facility.',
  },
  {
    title: 'Calibration',
    description: 'Precision grading and millimeter-accurate alignment for flawless settings.',
  },
  {
    title: 'Design',
    description: 'CAD-led design to create refined silhouettes and balanced brilliance.',
  },
  {
    title: 'Craft',
    description: 'Master artisans bring the design to life with meticulous hand finishing.',
  },
  {
    title: 'Delivery',
    description: 'Quality assurance and secure delivery for a complete, confident handoff.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navigation />

      <main className="pt-20 sm:pt-24 relative " style={{
        backgroundImage: "url('/bg%20map%20image.svg')",
        backgroundSize: '50%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}>
        <section className="relative min-h-[70vh] md:min-h-[80vh] bg-charcoal/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/50" />

          <div className="relative">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex min-h-[70vh] md:min-h-[80vh] items-start pt-32 pb-14 sm:pt-40 sm:pb-16 md:pt-44 md:pb-20">
                <div className="max-w-3xl text-left">
                  <div className="space-y-5 sm:space-y-6 md:space-y-7">
                    <p className="text-xs sm:text-sm tracking-[0.3em] text-primary">ABOUT US</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                      About <span className="italic text-gradient-gold">GemstoneDiamonds</span>
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                      We are a direct-source diamond and jewelry studio, combining precision engineering and
                      ethical sourcing to bring exceptional stones from our facility to your final masterpiece.
                      Our team focuses on transparency, calibrated accuracy, and bespoke design for brands and
                      individuals who demand clarity in every facet.
                    </p>
                  </div>
                  <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-3 max-w-3xl">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border/60 bg-background/20 p-4 sm:p-5 text-left"
                      >
                        <p className="text-2xl sm:text-3xl font-serif text-gradient-gold">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border/70 bg-background/40 p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <h2 className="text-lg sm:text-xl font-serif mb-3">{item.title}</h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
              <div>
                <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">OUR STORY</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4">
                  A clear path from source to setting
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  We built GemstoneDiamonds to remove uncertainty from sourcing and to add precision
                  at every step. Our internal process keeps standards consistent and timelines reliable,
                  so your final piece carries integrity along with brilliance.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-7">
                {timeline.map((step, index) => (
                  <div key={step.title} className="flex gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
                      )}
                    </div>
                    <div className="pb-4 sm:pb-5">
                      <h3 className="text-base sm:text-lg font-serif mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-start">
              <div>
                <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">OUR PILLARS</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4">
                  Precision, design, and transparency
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Our workflow is crafted to remove friction between design and delivery.
                  We operate with direct control over sourcing, calibration, and production
                  so every detail meets the exacting standards of your vision.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {pillars.map((pillar, index) => (
                  <div key={pillar.label} className="rounded-xl border border-border/60 bg-background/30 p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-serif">{pillar.label}</h3>
                      <span className="text-primary/40 text-sm font-serif">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {pillar.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-primary/30 bg-background/40 p-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14">
              <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-center">
                <div>
                  <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">READY TO BUILD</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-3">
                    Let us craft your next masterpiece
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Share your vision and we will align sourcing, design, and production to your exact standards.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                  <a
                    href="/#contact"
                    className="border-gradient-gold px-6 py-3 text-xs sm:text-sm tracking-widest text-foreground hover:bg-primary/10 transition-colors text-center"
                  >
                    START A PROJECT
                  </a>
                  <a
                    href="/#collection"
                    className="px-6 py-3 text-xs sm:text-sm tracking-widest text-foreground border border-border hover:border-primary/50 transition-colors text-center"
                  >
                    VIEW COLLECTION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
