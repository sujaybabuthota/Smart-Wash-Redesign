import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
];

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="flex items-center gap-2 z-50">
            <img
              src="https://bosmartwash.in/assets/images/png_logo-removebg-preview.png"
              alt="Smart Wash"
              className={`h-10 md:h-12 transition-all ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                      scrolled ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              onClick={onOpenBooking}
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white border-none cursor-pointer"
            >
              Schedule Pickup Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-slate-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-slate-800" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-2xl font-bold text-slate-900 hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button
          size="lg"
          className="rounded-full px-8 text-lg mt-4"
          onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
        >
          Schedule Pickup Now
        </Button>
      </div>
    </header>
  );
}
