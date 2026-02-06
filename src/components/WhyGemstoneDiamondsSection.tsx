import { useEffect, useRef, useState } from 'react';
import { Factory, Ruler, ScanEye, DraftingCompass, Gem } from 'lucide-react';

const reasons = [
  {
    title: 'Direct source',
    description:
      'We only sell diamonds produced in our own facility and do not take part in trading or use any intermediary party.',
    icon: Factory,
  },
  {
    title: 'Precision',
    description:
      'Every diamond is given due diligence through our calibration service, ensuring each gem is perfectly tailored down to the millimeter for precision you can count on.',
    icon: Ruler,
  },
  {
    title: 'Transparency',
    description:
      'Experience transparency in every facet, with clear pricing and a traceable lineage of our ethically-sourced diamonds.',
    icon: ScanEye,
  },
  {
    title: 'Design',
    description:
      'Our experts in CAD drafting and design services carefully craft the blueprints for your unique creations, shaping dreams into designs.',
    icon: DraftingCompass,
  },
  {
    title: 'Custom Jewelry',
    description:
      'Let us transform your unique design visions into tangible masterpieces, telling your brand\'s story through precision-crafted gold and diamonds.',
    icon: Gem,
  },
];

export default function WhyGemstoneDiamondsSection() {
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
    <section id="why" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-charcoal">
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 left-8 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className={`text-center mb-10 sm:mb-14 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3 sm:mb-4">WHY CHOOSE US</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 sm:mb-6">
            Why <span className="italic text-gradient-gold">GemstoneDiamonds</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A direct, transparent path from our facilities to your final masterpiece.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group relative overflow-hidden rounded-xl border border-border/60 bg-background/40 p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_50px_-30px_rgba(212,175,55,0.7)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${index === 0 ? 'lg:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif">{reason.title}</h3>
                      <p className="text-[10px] sm:text-xs tracking-[0.2em] text-primary/60 uppercase">Benefit</p>
                    </div>
                  </div>
                  <span className="text-primary/30 text-sm sm:text-base font-serif">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <p className="relative text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>

                <div className="relative mt-5 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
