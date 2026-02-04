import { useEffect, useRef, useState } from 'react';

const processes = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Ethical Mining',
    description: 'Deep within the earth, our expert geologists identify and extract the finest rough diamonds from our certified sustainable mines.',
  },
  {
    step: '02',
    title: 'Selection',
    subtitle: 'Precision Grading',
    description: 'Each stone is meticulously evaluated by our master gemologists, assessing clarity, color, and the unique character that sets it apart.',
  },
  {
    step: '03',
    title: 'Transformation',
    subtitle: 'Master Craftsmanship',
    description: 'In our Antwerp ateliers, skilled artisans transform raw beauty into brilliance, cutting each facet with mathematical precision.',
  },
  {
    step: '04',
    title: 'Creation',
    subtitle: 'Bespoke Design',
    description: 'Our designers craft each piece to enhance the diamond\'s natural beauty, creating timeless jewelry that tells your unique story.',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="min-h-screen py-16 sm:py-24 md:py-32 relative bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3 sm:mb-4">THE JOURNEY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 sm:mb-6">
            From Mine to <span className="italic text-gradient-gold">Masterpiece</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Every Lumière diamond undergoes a remarkable journey of transformation,
            guided by generations of expertise and an unwavering pursuit of perfection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {processes.map((process, index) => (
            <div
              key={process.step}
              className={`group relative p-5 sm:p-6 md:p-8 bg-background/50 border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-4xl sm:text-5xl font-serif text-primary/20 group-hover:text-primary/40 transition-colors">
                {process.step}
              </span>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif mt-3 sm:mt-4 mb-1 sm:mb-2">{process.title}</h3>
              <p className="text-xs sm:text-sm tracking-widest text-primary mb-3 sm:mb-4">{process.subtitle}</p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {process.description}
              </p>

              <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-primary/20 group-hover:border-primary/50 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
