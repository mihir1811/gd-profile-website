import { useEffect, useRef, useState } from 'react';
import { Pickaxe, Gem, Sparkles, Zap, Coins, Heart } from 'lucide-react';

const processes = [
  {
    step: '01',
    title: 'Diamond Mining',
    subtitle: 'Extract from Mines',
    description: 'Deep within the earth, our expert geologists identify and extract the finest diamonds from our certified sustainable mines.',
    icon: Pickaxe,
    color: '#d4af37',
  },
  {
    step: '02',
    title: 'Rough Diamonds',
    subtitle: 'Collection & Sorting',
    description: 'Each stone is carefully collected and sorted by size, quality, and potential, ready for the transformation process.',
    icon: Gem,
    color: '#d4af37',
  },
  {
    step: '03',
    title: 'Cut & Polish',
    subtitle: 'Master Craftsmanship',
    description: 'In our ateliers, skilled artisans cut and polish each diamond, revealing its brilliance through precision faceting.',
    icon: Sparkles,
    color: '#d4af37',
  },
  {
    step: '04',
    title: 'Gold Mining',
    subtitle: 'Precious Metal Extraction',
    description: 'We source ethically mined gold from certified sustainable operations to complement our fine diamonds.',
    icon: Zap,
    color: '#d4af37',
  },
  {
    step: '05',
    title: 'Collect Gold',
    subtitle: 'Refinement & Purification',
    description: 'Raw gold is refined and purified to the highest standards, ensuring pristine metal for jewelry crafting.',
    icon: Coins,
    color: '#d4af37',
  },
  {
    step: '06',
    title: 'Make Jewelry',
    subtitle: 'Bespoke Design & Assembly',
    description: 'Our master craftsmen unite polished diamonds and refined gold, creating timeless jewelry that tells your unique story.',
    icon: Heart,
    color: '#d4af37',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - elementTop) / (window.innerHeight + rect.height)));
      setScrollProgress(progress);

      // Animate SVG strokes
      if (svgRef.current) {
        const mainPath = svgRef.current.querySelector('path[data-animate="true"]');
        const glowPath = svgRef.current.querySelector('path[data-glow="true"]');
        const progressMarker = svgRef.current.querySelector('g[data-progress-marker="true"]');

        if (mainPath && glowPath) {
          const length = (mainPath as SVGPathElement).getTotalLength();
          const offset = length * (1 - progress);
          
          (mainPath as SVGPathElement).style.strokeDashoffset = String(offset);
          (glowPath as SVGPathElement).style.strokeDashoffset = String(offset);

          // Animate marker position along path
          if (progressMarker) {
            const point = (mainPath as SVGPathElement).getPointAtLength(length * progress);
            const markerGroup = progressMarker as SVGGElement;
            markerGroup.style.transform = `translate(${point.x - 500}px, ${point.y}px)`;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-charcoal overflow-hidden py-16 sm:py-24 md:py-40 lg:py-48">
      {/* SVG Background Map with animated winding path */}
      <div className="absolute inset-0 opacity-40 md:opacity-35">
        <svg
          ref={svgRef}
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 3000"
          style={{ maxWidth: '100%' }}
        >
          <defs>
            {/* Main path gradient */}
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.15" />
            </linearGradient>

            {/* Animated glow gradient */}
            <linearGradient id="animatedGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
            </linearGradient>

            {/* Arrow marker */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#d4af37" />
            </marker>

            {/* Animated arrow marker */}
            <marker
              id="animatedArrow"
              markerWidth="12"
              markerHeight="12"
              refX="11"
              refY="6"
              orient="auto"
            >
              <polygon points="0 0, 12 6, 0 12" fill="#d4af37" opacity="0.8" />
            </marker>

            {/* Enhanced glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="brightGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background path - base layer */}
          <path
            d="M 500 0 
               C 300 200 300 500 500 700
               C 700 900 700 1200 500 1400
               C 300 1600 300 1900 500 2100
               C 700 2300 700 2600 500 2800
               L 500 3000"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
          />

          {/* Animated progressive path - fills as you scroll */}
          <path
            data-animate="true"
            d="M 500 0 
               C 300 200 300 500 500 700
               C 700 900 700 1200 500 1400
               C 300 1600 300 1900 500 2100
               C 700 2300 700 2600 500 2800
               L 500 3000"
            stroke="url(#pathGradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            filter="url(#glow)"
            markerEnd="url(#arrowhead)"
            style={{
              transition: 'stroke-width 0.3s ease',
            }}
          />

          {/* Bright glow follow-line */}
          <path
            data-glow="true"
            d="M 500 0 
               C 300 200 300 500 500 700
               C 700 900 700 1200 500 1400
               C 300 1600 300 1900 500 2100
               C 700 2300 700 2600 500 2800
               L 500 3000"
            stroke="#d4af37"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            filter="url(#brightGlow)"
          />

          {/* Animated dot marker following progress */}
          <g data-progress-marker="true">
            <circle cx="500" cy="0" r="12" fill="#d4af37" opacity="0.9" filter="url(#brightGlow)" />
            <circle cx="500" cy="0" r="20" fill="#d4af37" opacity="0.2" />
          </g>

          {/* Decorative dots along path */}
          <circle cx="500" cy="350" r="8" fill="#d4af37" opacity="0.4" />
          <circle cx="500" cy="700" r="8" fill="#d4af37" opacity="0.4" />
          <circle cx="500" cy="1050" r="8" fill="#d4af37" opacity="0.4" />
          <circle cx="500" cy="1400" r="8" fill="#d4af37" opacity="0.4" />
          <circle cx="500" cy="1750" r="8" fill="#d4af37" opacity="0.4" />
          <circle cx="500" cy="2100" r="8" fill="#d4af37" opacity="0.4" />
          <circle cx="500" cy="2450" r="8" fill="#d4af37" opacity="0.4" />

          {/* Connecting branches with enhanced visibility */}
          <line x1="500" y1="350" x2="200" y2="350" stroke="#d4af37" strokeWidth="1.5" opacity="0.25" strokeDasharray="5,5" />
          <line x1="500" y1="700" x2="800" y2="700" stroke="#d4af37" strokeWidth="1.5" opacity="0.25" strokeDasharray="5,5" />
          <line x1="500" y1="1050" x2="200" y2="1050" stroke="#d4af37" strokeWidth="1.5" opacity="0.25" strokeDasharray="5,5" />
          <line x1="500" y1="1400" x2="800" y2="1400" stroke="#d4af37" strokeWidth="1.5" opacity="0.25" strokeDasharray="5,5" />
          <line x1="500" y1="1750" x2="200" y2="1750" stroke="#d4af37" strokeWidth="1.5" opacity="0.25" strokeDasharray="5,5" />
          <line x1="500" y1="2100" x2="800" y2="2100" stroke="#d4af37" strokeWidth="1.5" opacity="0.25" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Additional progress visualization layer */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <style>{`
          @keyframes flowingPath {
            0% {
              stroke-dashoffset: 2000;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary mb-2 sm:mb-3 md:mb-4 uppercase">The Complete Journey</p>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-light mb-3 sm:mb-4 md:mb-6 leading-tight">
            From <span className="italic text-gradient-gold">Mine to</span> Masterpiece
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            Experience the complete journey of transformation, from raw diamonds and gold extracted from the earth to exquisite jewelry pieces crafted with expert precision and care.
          </p>
        </div>

        {/* Timeline Container */}
        {isMobile ? (
          // Mobile: Simple vertical steps layout
          <div className="max-w-xl mx-auto space-y-6">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div
                  key={process.step}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Vertical Step Card */}
                  <div className="flex gap-4 items-start">
                    {/* Left: Step Number and Icon */}
                    <div className="flex-shrink-0">
                      {/* Step Circle */}
                      <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
                        <div className="relative w-full h-full bg-gradient-to-br from-primary/60 to-primary/30 rounded-full flex items-center justify-center border border-primary/50 shadow-md shadow-primary/20">
                          <span className="text-xs font-bold text-foreground">{process.step}</span>
                        </div>
                      </div>
                      
                      {/* Connector to next step */}
                      {index < processes.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-primary/40 to-primary/10 mx-auto mt-2" />
                      )}
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 pt-1 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                        <h3 className="text-sm font-serif font-medium">{process.title}</h3>
                      </div>
                      <p className="text-xs text-primary/60 tracking-wide uppercase mb-2 font-medium">{process.subtitle}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Desktop: Alternating layout
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-20 sm:space-y-32">
              {processes.map((process, index) => {
                const IconComponent = process.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={process.step}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
                      {/* Left Content */}
                      {isLeft && (
                        <div className="flex-1 text-right pr-4 md:pr-6">
                          <div className="group bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 p-6 md:p-8 rounded-lg transition-all duration-500 hover:shadow-xl hover:shadow-primary/25">
                            <p className="text-xs md:text-sm tracking-widest text-primary/70 mb-2 uppercase font-medium">{process.subtitle}</p>
                            <h3 className="text-lg md:text-2xl font-serif mb-4">{process.title}</h3>
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4">
                              {process.description}
                            </p>
                            <div className="flex justify-end">
                              <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 rounded text-xs text-primary/80">
                                <IconComponent className="w-4 h-4" />
                                <span>Learn more</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Center Node with 3D effect */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="relative">
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/10 rounded-full blur-3xl scale-150 animate-pulse" />

                          {/* Main node */}
                          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/80 to-primary/40 rounded-full flex items-center justify-center border-2 border-primary/70 shadow-2xl shadow-primary/50 hover:scale-120 hover:shadow-primary/60 transition-all duration-300 cursor-pointer group">
                            {/* Inner 3D shine */}
                            <div className="absolute inset-1 md:inset-2 bg-gradient-to-tr from-primary/50 to-transparent rounded-full" />
                            {/* Icon within node */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-background relative z-10" />
                            </div>
                            {/* Step number */}
                            <span className="absolute bottom-2 right-2 text-xs md:text-sm font-bold text-background">{process.step}</span>
                          </div>
                        </div>

                        {/* Vertical connector to next node */}
                        {index < processes.length - 1 && (
                          <div className="w-1 h-20 md:h-32 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 mt-4 md:mt-6" />
                        )}
                      </div>

                      {/* Right Content */}
                      {!isLeft && (
                        <div className="flex-1 text-left pl-4 md:pl-6">
                          <div className="group bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 p-6 md:p-8 rounded-lg transition-all duration-500 hover:shadow-xl hover:shadow-primary/25">
                            <p className="text-xs md:text-sm tracking-widest text-primary/70 mb-2 uppercase font-medium">{process.subtitle}</p>
                            <h3 className="text-lg md:text-2xl font-serif mb-4">{process.title}</h3>
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4">
                              {process.description}
                            </p>
                            <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded w-fit text-xs text-primary/80">
                              <IconComponent className="w-4 h-4" />
                              <span>Learn more</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
