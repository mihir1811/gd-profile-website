import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Diamond() {
  const highlights = [
    {
      title: 'Certified Excellence',
      description: 'Every diamond includes independent grading and full provenance details.',
    },
    {
      title: 'Precision Craft',
      description: 'Cut and polish are optimized for maximum light performance.',
    },
    {
      title: 'Lifetime Care',
      description: 'Complimentary cleaning, inspection, and long-term support.',
    },
  ];

  const fourCs = [
    {
      title: 'Carat',
      subtitle: 'Weight and presence',
      description: 'Measured in carats. Balance size with cut for the best visual impact.',
    },
    {
      title: 'Cut',
      subtitle: 'Brilliance and sparkle',
      description: 'The most important factor for light performance and overall beauty.',
    },
    {
      title: 'Color',
      subtitle: 'D to Z scale',
      description: 'Colorless grades are rare, while near-colorless offer strong value.',
    },
    {
      title: 'Clarity',
      subtitle: 'Purity and rarity',
      description: 'Most inclusions are invisible to the eye. Choose for balance and value.',
    },
  ];

  const cuts = [
    { name: 'Round Brilliant', detail: 'Maximum brilliance with timeless appeal.' },
    { name: 'Princess', detail: 'Modern geometry with sharp, elegant lines.' },
    { name: 'Emerald', detail: 'Step-cut facets that emphasize clarity.' },
    { name: 'Cushion', detail: 'Soft corners and a romantic, vintage feel.' },
    { name: 'Oval', detail: 'Elongated silhouette that flatters the hand.' },
    { name: 'Asscher', detail: 'Architectural symmetry with Art Deco charm.' },
  ];

  const certifications = [
    'Carat weight and measurements',
    'Color grading and fluorescence',
    'Clarity mapping with inclusion plot',
    'Cut, polish, and symmetry ratings',
  ];

  const stats = [
    { label: 'Certified Diamonds', value: '100%' },
    { label: 'Years Experience', value: '25+' },
    { label: 'Happy Clients', value: '15K+' },
    { label: 'Diamonds Sold', value: '10K+' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navigation />

      <main className="pt-20 sm:pt-24">
        <section className="relative overflow-hidden bg-charcoal">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 items-center pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
              <div className="space-y-6">
                <p className="text-xs tracking-[0.35em] text-primary/90 uppercase">Diamond Atelier</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                  A curated diamond house for modern heirlooms
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                  Discover certified diamonds selected for balance, beauty, and long-term value. Every stone is
                  graded independently and presented with full transparency.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base font-semibold">
                    View Collection
                  </button>
                  <button className="px-6 sm:px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm sm:text-base font-semibold">
                    Book a Consultation
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/10 to-background/0 border border-border/30 rounded-2xl p-6 sm:p-8 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Signature Cut</p>
                    <p className="text-xl sm:text-2xl font-serif">Radiant 2.10 ct</p>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-primary/40 flex items-center justify-center text-primary">
                    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16L24 6l16 10-16 26L8 16z" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 16h32L24 42" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Cut</span>
                    <span className="text-foreground">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Color</span>
                    <span className="text-foreground">F</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Clarity</span>
                    <span className="text-foreground">VS1</span>
                  </div>
                  <div className="h-px bg-border/40" />
                  <p className="text-xs">Certificate: GIA 2145-3812</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-background/40 p-6 sm:p-7"
                >
                  <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal/40 border-y border-border/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] text-primary/80 uppercase">Signature Collection</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light">
                  A refined selection of heirloom stones
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our curators select a limited number of diamonds each season based on cut precision, fluorescence
                  balance, and long-term investment value.
                </p>
                <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-semibold">
                  Explore the Collection
                </button>
              </div>
              <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-primary/10 to-transparent p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/30 bg-background/40 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary/70">Range</p>
                    <p className="text-lg font-serif">0.50 - 5.00 ct</p>
                  </div>
                  <div className="rounded-xl border border-border/30 bg-background/40 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary/70">Cut Grade</p>
                    <p className="text-lg font-serif">Excellent+</p>
                  </div>
                  <div className="rounded-xl border border-border/30 bg-background/40 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary/70">Clarity</p>
                    <p className="text-lg font-serif">VVS2 - VS2</p>
                  </div>
                  <div className="rounded-xl border border-border/30 bg-background/40 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary/70">Color</p>
                    <p className="text-lg font-serif">D - H</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-xs tracking-[0.3em] text-primary/80 uppercase">Diamond Standards</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light">
                The Four Cs, curated for modern buyers
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {fourCs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-background/40 p-6"
                >
                  <p className="text-xs tracking-[0.25em] text-primary/80 uppercase mb-2">{item.title}</p>
                  <h3 className="text-base font-serif mb-2">{item.subtitle}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-charcoal/40">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs tracking-[0.3em] text-primary/80 uppercase">Cuts and Shapes</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mt-2">
                  Signature silhouettes
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl">
                  Choose from timeless classics and modern silhouettes, each evaluated for light performance and
                  symmetry.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {cuts.map((item) => (
                  <div key={item.name} className="rounded-xl border border-border/30 bg-background/30 p-4">
                    <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] text-primary/80 uppercase">Certification</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mt-2">
                  Independent grading you can trust
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mt-4">
                  Each diamond arrives with a detailed report from leading gemological institutes. We highlight the
                  key factors that impact rarity, brilliance, and price.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {certifications.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-background/40 p-6 text-center">
                    <p className="text-2xl sm:text-3xl font-serif text-primary mb-2">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-3">
              Ready to select your next heirloom?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              Book a private consultation or browse a curated selection of certified diamonds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Start Your Search
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold">
                Speak with an Expert
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
