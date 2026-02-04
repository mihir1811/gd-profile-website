import { useEffect, useRef, useState } from 'react';

const collections = [
  {
    name: 'Éternité',
    category: 'Engagement Rings',
    description: 'Timeless designs that capture forever',
  },
  {
    name: 'Lumière Noir',
    category: 'Black Diamond Series',
    description: 'Bold statements in rare black diamonds',
  },
  {
    name: 'Héritage',
    category: 'Vintage Collection',
    description: 'Classic elegance reimagined',
  },
];

export default function CollectionSection() {
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
    <section id="collection" ref={sectionRef} className="min-h-screen py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-3 sm:mb-4">COLLECTIONS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light">
                Curated <span className="italic text-gradient-gold">Brilliance</span>
              </h2>
            </div>
            <a
              href="#"
              className="border-gradient-gold px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-widest text-foreground hover:bg-primary/10 transition-all duration-300 self-start md:self-auto"
            >
              VIEW ALL COLLECTIONS
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className={`group relative aspect-[3/4] bg-charcoal-light overflow-hidden cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border border-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs tracking-widest text-primary mb-1 sm:mb-2">{collection.category}</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-2">{collection.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {collection.description}
                </p>
              </div>

              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
