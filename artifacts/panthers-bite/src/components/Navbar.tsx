import { useState, useEffect } from "react";
import { triggerOrderModal } from "@/hooks/use-order-modal";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/587607695_17853646149595354_2885004091992565856_n_(1)_1774904811848.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#E94E77]/15 py-3 shadow-[0_4px_30px_rgba(233,78,119,0.08)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center group">
            <img src={logoImg} alt="Panther's Bite" className="h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 relative group/link"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E94E77] to-[#FF8FB1] rounded-full group-hover/link:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <Button onClick={triggerOrderModal} className="ml-2">
              Order Now
            </Button>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0f0f0f]/98 backdrop-blur-xl pt-24 px-6 flex flex-col items-center"
          >
            <ul className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-3xl font-display uppercase tracking-wider text-foreground hover:text-primary py-2 border-b border-[#E94E77]/15 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12 w-full max-w-xs">
              <Button onClick={() => { setIsMobileMenuOpen(false); triggerOrderModal(); }} size="lg" className="w-full">
                Order Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
