import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/20240122_180430_0000_1775752179612.png";

const navLinks = [
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/ambiance", label: "Ambiance" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = transparent && !isScrolled;

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !transparent
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src={logoImg} alt="J&B Coffee" className="h-11 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`transition-colors duration-200 hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                  location === link.href ? "text-accent after:w-full" : `after:w-0 hover:after:w-full ${isDark ? "text-white drop-shadow" : "text-foreground"}`
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden lg:flex bg-accent hover:bg-accent/85 text-white rounded-full px-6 h-10 text-sm font-semibold shadow-md hover:shadow-lg transition-all">
              <Link href="/events">Book a Table</Link>
            </Button>
            <button className="lg:hidden p-2 rounded-lg" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu className={`w-6 h-6 ${isDark ? "text-white" : "text-foreground"}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col p-8"
              onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-10">
                <img src={logoImg} alt="J&B Coffee" className="h-12 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full hover:bg-muted transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-5">
                <Link href="/" onClick={() => setMobileOpen(false)}
                  className="text-xl font-semibold text-foreground hover:text-accent transition-colors">Home</Link>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    className={`text-xl font-semibold transition-colors ${location === link.href ? "text-accent" : "text-foreground hover:text-accent"}`}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-auto bg-accent hover:bg-accent/85 text-white rounded-full h-12 font-semibold">
                <Link href="/events" onClick={() => setMobileOpen(false)}>Book a Table</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#130813] text-white">
      <div className="bg-accent">
        <div className="container mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Ready for your next favorite cup?</h3>
            <p className="text-white/80">Walk in any time or book ahead for your gathering.</p>
          </div>
          <Button asChild className="bg-white text-accent hover:bg-white/90 rounded-full px-8 h-12 font-bold text-base shadow-lg shrink-0">
            <Link href="/events">Book Now</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logoImg} alt="J&B Coffee" className="h-16 w-auto mb-5" />
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Kathmandu's neighborhood coffee house blending Nepali warmth with modern specialty coffee culture.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/jnbcoffee/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/jnbcoffee/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">Explore</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              {navLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+977980000000" className="hover:text-white transition-colors">+977 980-000-0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:hello@jnbcoffee.com.np" className="hover:text-white transition-colors">hello@jnbcoffee.com.np</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">Opening Hours</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between text-white/60"><span>Mon – Fri</span><span>7:00 AM – 8:00 PM</span></li>
              <li className="flex justify-between text-white/60"><span>Saturday</span><span>8:00 AM – 9:00 PM</span></li>
              <li className="flex justify-between text-white/60"><span>Sunday</span><span>8:00 AM – 8:00 PM</span></li>
              <li className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open now — walk on in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>&copy; {new Date().getFullYear()} J&B Coffee. All rights reserved.</p>
          <p>Made with love in Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ tag, title, subtitle, image }: {
  tag: string; title: string; subtitle: string; image: string;
}) {
  return (
    <section className="relative h-[50vh] min-h-[380px] flex items-end justify-start overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-5 md:px-8 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-white/70 text-sm font-bold tracking-[0.25em] uppercase mb-3">{tag}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">{title}</h1>
          <p className="text-white/75 text-lg max-w-lg">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
