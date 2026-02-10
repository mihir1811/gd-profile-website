import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const contactDetails = [
  {
    label: 'Flagship Boutique',
    value: 'Place Vendome, Paris',
    note: 'Private appointments only',
  },
  {
    label: 'Email',
    value: 'concierge@lumiere.com',
    note: 'Replies within 1 business day',
  },
  {
    label: 'Phone',
    value: '+33 1 84 88 02 42',
    note: 'Mon-Fri, 9:00-18:00 CET',
  },
];

const serviceOptions = [
  'Bespoke jewelry design',
  'Engagement ring consultation',
  'Investment-grade diamonds',
  'Collection inquiry',
  'Wholesale partnership',
];

const jewelryTypes = ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Pendant', 'Other'];

const metalOptions = ['18k yellow gold', '18k white gold', '18k rose gold', 'Platinum'];

const centerStones = ['Natural diamond', 'Lab-grown diamond', 'Sapphire', 'Emerald', 'Ruby', 'Other'];

const budgets = ['Under $10,000', '$10,000-$25,000', '$25,000-$50,000', '$50,000+'];

const timelines = ['Within 2 weeks', 'Within 1 month', 'Within 3 months', 'Flexible'];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navigation />

      <main className="pt-20 sm:pt-24">
        <section className="relative min-h-[55vh] md:min-h-[65vh] bg-charcoal/40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/70 to-charcoal/60" />
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-[-6rem] left-[-4rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="flex min-h-[55vh] md:min-h-[65vh] items-end pb-12 sm:pb-16 md:pb-20">
              <div className="max-w-2xl space-y-5 sm:space-y-6">
                <p className="text-xs sm:text-sm tracking-[0.3em] text-primary">CONTACT</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
                  Let us shape your
                  <span className="italic text-gradient-gold"> next diamond story</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  Share your goals, timeline, and design preferences. Our concierge team will align
                  sourcing, craftsmanship, and delivery to match your exact standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.05fr_1.2fr] items-start">
              <div className="space-y-6">
                <div className="rounded-2xl border border-border/60 bg-background/40 p-6 sm:p-7">
                  <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">CONTACT DETAILS</p>
                  <div className="space-y-5">
                    {contactDetails.map((item) => (
                      <div key={item.label} className="border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                        <p className="text-xs sm:text-sm text-muted-foreground tracking-widest">{item.label}</p>
                        <p className="text-sm sm:text-base font-serif mt-1">{item.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-charcoal/40 p-6 sm:p-7">
                  <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">VISIT US</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Schedule an in-person viewing to explore stone options, compare cuts, and review
                    CAD renderings with our specialists.
                  </p>
                  <div className="mt-5 grid gap-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 - 18:00 CET</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 - 15:00 CET</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">By appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5 sm:space-y-6 rounded-2xl border border-border bg-background/60 p-6 sm:p-8">
                <div>
                  <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-2">PROJECT BRIEF</p>
                  <h2 className="text-2xl sm:text-3xl font-serif font-light">Start your consultation</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
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
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">EMAIL</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">PHONE</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">SERVICE INTEREST</label>
                  <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors cursor-pointer">
                    <option value="" className="bg-background">Select an option</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-background">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="rounded-xl border border-border/70 bg-background/40 p-4 sm:p-5">
                  <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3">CUSTOM JEWELRY OPTIONS</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2">PIECE TYPE</p>
                      <div className="grid grid-cols-2 gap-2">
                        {jewelryTypes.map((type) => (
                          <label key={type} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <input type="checkbox" className="accent-primary" />
                            <span className="text-foreground/90">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">METAL</label>
                        <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm sm:text-base text-foreground transition-colors cursor-pointer">
                          <option value="" className="bg-background">Select metal</option>
                          {metalOptions.map((option) => (
                            <option key={option} value={option} className="bg-background">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">CENTER STONE</label>
                        <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm sm:text-base text-foreground transition-colors cursor-pointer">
                          <option value="" className="bg-background">Select stone</option>
                          {centerStones.map((option) => (
                            <option key={option} value={option} className="bg-background">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">SIZE OR ENGRAVING</label>
                        <input
                          type="text"
                          placeholder="Ring size, length, or engraving"
                          className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm sm:text-base text-foreground transition-colors placeholder:text-muted-foreground/70"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">ESTIMATED BUDGET</label>
                    <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors cursor-pointer">
                      <option value="" className="bg-background">Select range</option>
                      {budgets.map((option) => (
                        <option key={option} value={option} className="bg-background">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">TIMELINE</label>
                    <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors cursor-pointer">
                      <option value="" className="bg-background">Select timeline</option>
                      {timelines.map((option) => (
                        <option key={option} value={option} className="bg-background">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-2 block">PROJECT DETAILS</label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground transition-colors resize-none"
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
