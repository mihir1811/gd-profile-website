import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking links
    const handleClick = () => setMobileMenuOpen(false);
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClick);
    }
    return () => document.removeEventListener('click', handleClick);
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src="/logo.png" alt="Lumière" className="h-8 sm:h-10" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="/#story" className="text-xs lg:text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            OUR STORY
          </a>
          <a href="/#process" className="text-xs lg:text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            THE CRAFT
          </a>
          <a href="/#collection" className="text-xs lg:text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            COLLECTION
          </a>
          <a href="/#contact" className="text-xs lg:text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            CONTACT
          </a>
          <a href="/about" className="text-xs lg:text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            ABOUT
          </a>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block border-gradient-gold px-4 lg:px-6 py-2 text-xs lg:text-sm tracking-widest text-foreground hover:bg-primary/10 transition-colors flex-shrink-0">
          INQUIRE
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-4 space-y-4 flex flex-col">
            <a
              href="/#story"
              className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              OUR STORY
            </a>
            <a
              href="/#process"
              className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              THE CRAFT
            </a>
            <a
              href="/#collection"
              className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              COLLECTION
            </a>
            <a
              href="/#contact"
              className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            <a
              href="/about"
              className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <button className="border-gradient-gold px-6 py-2 text-sm tracking-widest text-foreground hover:bg-primary/10 transition-colors w-full">
              INQUIRE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
