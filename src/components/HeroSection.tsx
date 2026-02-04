interface HeroSectionProps {
  scrollProgress: number;
}

export default function HeroSection({ scrollProgress }: HeroSectionProps) {
  const opacity = Math.max(0, 1 - scrollProgress * 3);
  const translateY = scrollProgress * 100;

  return (
    <section className="h-screen flex items-center justify-center relative">
      <div
        className="text-center z-10 pointer-events-none px-4 sm:px-6"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-muted-foreground mb-3 sm:mb-4 animate-fade-up opacity-0 delay-100">
          SINCE 1892
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-tight sm:tracking-wide mb-4 sm:mb-6 animate-fade-up opacity-0 delay-200">
          From Earth's Heart
          <br />
          <span className="text-gradient-gold italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">To Yours</span>
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-sm md:max-w-xl mx-auto mb-6 sm:mb-10 font-light animate-fade-up opacity-0 delay-300">
          Discover the journey of excellence, from the depths of the earth
          to the pinnacle of artistry.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 animate-fade-up opacity-0 delay-400">
          <a
            href="#story"
            className="w-full sm:w-auto border-gradient-gold px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-widest text-foreground hover:bg-primary/10 transition-all duration-300 pointer-events-auto text-center"
          >
            EXPLORE
          </a>
          <a
            href="#collection"
            className="w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-widest hover:bg-primary/90 transition-all duration-300 pointer-events-auto text-center"
          >
            VIEW COLLECTION
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: opacity * 0.7 }}
      >
        <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
