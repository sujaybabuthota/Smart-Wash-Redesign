import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Order Now", href: "https://bosmartwash.in/see.html" },
];

const services = [
  "Premium Laundry",
  "Steam Press",
  "Dry Cleaning",
  "Wash & Fold",
  "Shoe Laundry",
  "Saree Rolling",
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Top gradient strip */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #0D6EFD, #2A52BE, #4A90D9, #0D6EFD)" }} />

      <div className="container mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <img
              src="https://bosmartwash.in/assets/images/png_logo-removebg-preview.png"
              alt="Smart Wash"
              className="h-10 brightness-0 invert"
            />
            <p className="text-slate-500 leading-relaxed text-sm">
              A student-run laundry service delivering efficient, affordable, and eco-friendly care — so you never have to worry about laundry again.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
                { icon: <Facebook className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-primary/20"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm hover:text-primary hover:pl-1 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="https://bosmartwash.in/services.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary hover:pl-1 transition-all duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917997034445" className="flex items-start gap-3 text-sm hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  +91 7997034445
                </a>
              </li>
              <li>
                <a href="mailto:contact@bosmartwash.in" className="flex items-start gap-3 text-sm hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  contact@bosmartwash.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-slate-500 leading-relaxed">Free collection & delivery across the city</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Smart Wash. All rights reserved.</p>
          <p className="font-heading font-black text-sm text-white/10 tracking-widest uppercase">Fresh. Clean. Delivered.</p>
        </div>
      </div>
    </footer>
  );
}
