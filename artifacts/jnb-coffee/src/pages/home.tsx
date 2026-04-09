import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  MapPin, Phone, Instagram, Facebook, ArrowRight, Star,
  Clock, Mail, Menu, X, Coffee, Cake, Utensils, ChevronDown
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/20240122_180430_0000_1775752179612.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const menuItems = [
  { category: "Signature Coffee", icon: Coffee, items: [
    { name: "J&B Signature Latte", desc: "House blend espresso with velvety microfoam and a hint of cardamom", price: "Rs. 280" },
    { name: "Cold Brew Nectar", desc: "18-hour cold brewed, naturally sweet with a smooth finish", price: "Rs. 320" },
    { name: "Kathmandu Cortado", desc: "Double espresso balanced with warm whole milk", price: "Rs. 250" },
    { name: "Rose Chai Latte", desc: "Nepali masala chai with rose water and oat milk", price: "Rs. 260" },
  ]},
  { category: "Cakes & Pastries", icon: Cake, items: [
    { name: "Belgian Chocolate Tart", desc: "Dark chocolate ganache on a buttery almond crust", price: "Rs. 380" },
    { name: "Mango Cheesecake", desc: "Local Nepali mango with creamy New York-style cheesecake", price: "Rs. 350" },
    { name: "Cardamom Croissant", desc: "Flaky, buttery layers with a fragrant cardamom glaze", price: "Rs. 220" },
    { name: "Red Velvet Slice", desc: "Moist red velvet with cream cheese frosting", price: "Rs. 300" },
  ]},
  { category: "Food & Bites", icon: Utensils, items: [
    { name: "Avocado Toast", desc: "Sourdough topped with smashed avocado, cherry tomatoes, and feta", price: "Rs. 420" },
    { name: "Club Sandwich", desc: "Triple-decker with roasted chicken, bacon, egg, and aioli", price: "Rs. 480" },
    { name: "Shakshuka Bowl", desc: "Eggs poached in spiced tomato sauce, served with crusty bread", price: "Rs. 440" },
    { name: "Granola Parfait", desc: "House granola, Greek yogurt, seasonal berries, and honey", price: "Rs. 320" },
  ]},
];

const reviews = [
  { text: "The vibe here is incredible. The murals, the cozy seats, and honestly the best latte art I've seen in the valley. J&B is my daily ritual now.", author: "Priya S.", rating: 5 },
  { text: "Hosted my sister's birthday here and the team was so accommodating. The mango cheesecake alone is worth the trip. Magical atmosphere!", author: "Rahul P.", rating: 5 },
  { text: "Love the energy! It's playful but you can tell they take their coffee seriously. The signature latte is life-changing. Can't stop coming back.", author: "Jessica T.", rating: 5 },
  { text: "Best coffee shop in Kathmandu, hands down. The space feels like nowhere else — warm, artsy, and full of good people.", author: "Amir K.", rating: 5 },
  { text: "Perfect place to work or catch up with friends. Great WiFi, great coffee, great food. The shakshuka bowl is phenomenal.", author: "Nisha M.", rating: 5 },
  { text: "Their cold brew is the smoothest I've ever had. The whole space has this wonderful creative energy that makes you want to stay all day.", author: "Dev R.", rating: 5 },
];

const stats = [
  { number: "5+", label: "Years Brewing" },
  { number: "40+", label: "Menu Items" },
  { number: "10K+", label: "Happy Guests" },
  { number: "100%", label: "Local Love" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#story", label: "Our Story" },
    { href: "#menu", label: "Menu" },
    { href: "#ambiance", label: "Ambiance" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ── NAVIGATION ── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src={logoImg} alt="J&B Coffee" className="h-11 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 font-medium text-[15px]">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`transition-colors duration-200 hover:text-accent font-medium ${isScrolled ? "text-foreground" : "text-white drop-shadow"}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden lg:flex bg-accent hover:bg-accent/85 text-white rounded-full px-6 h-10 text-sm font-semibold shadow-md hover:shadow-lg transition-all">
              <a href="#events">Book a Table</a>
            </Button>
            <button className="lg:hidden p-2 rounded-lg" onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu">
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col p-8"
              onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-10">
                <img src={logoImg} alt="J&B Coffee" className="h-12 w-auto" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-muted transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-semibold text-foreground hover:text-accent transition-colors">{link.label}</a>
                ))}
              </nav>
              <Button asChild className="mt-auto bg-accent hover:bg-accent/85 text-white rounded-full h-12 font-semibold">
                <a href="#events" onClick={() => setMobileMenuOpen(false)}>Book a Table</a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="J&B Coffee interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-5 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <p className="text-accent text-sm md:text-base font-bold tracking-[0.25em] uppercase mb-5">Welcome to J&B Coffee</p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] mb-6 drop-shadow-lg">
              Bold Flavors.<br />
              <span className="text-accent italic">Warm Connections.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed font-light">
              Kathmandu's neighborhood coffee house blending Nepali warmth with specialty coffee culture since 2019.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/85 text-white rounded-full text-base px-9 h-14 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 font-semibold">
                <a href="#menu">Explore Menu</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 rounded-full text-base px-9 h-14 backdrop-blur-sm font-semibold">
                <a href="#events">Book a Table</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.a href="#story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white flex flex-col items-center gap-1 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-5">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <p className="text-4xl md:text-5xl font-bold text-accent mb-1">{s.number}</p>
                <p className="text-sm font-medium tracking-wider uppercase text-white/70">{s.label}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                  More than just<br />a cup of coffee.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  J&B Coffee was born from a simple belief: that the best moments in life happen over a great cup. We blended Nepal's rich tea culture with modern specialty coffee — creating something that feels both familiar and exciting.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Every corner of our cafe tells a story through local art, every brew reflects our obsession with quality, and every visit feels like coming home to old friends. This isn't just a cafe — it's your neighborhood living room.
                </p>
                <a href="#menu" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-semibold text-lg transition-colors group">
                  See our menu <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatedSection>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/ambiance.png" alt="Inside J&B Coffee" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl p-5 shadow-xl max-w-[160px]">
                <p className="text-3xl font-bold">4.9</p>
                <div className="flex gap-0.5 my-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-white" />)}
                </div>
                <p className="text-xs text-white/80 leading-tight">Loved by 10,000+ guests</p>
              </motion.div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <motion.div variants={fadeUp}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">The Menu</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Crafted with Love</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                From ethically sourced specialty beans to decadent house-made cakes — everything designed to delight.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-2 md:gap-3 mb-10 flex-wrap">
            {menuItems.map((cat, i) => (
              <button key={i} onClick={() => setActiveMenuTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeMenuTab === i
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-white text-muted-foreground hover:bg-white/80 border border-border"
                }`}>
                <cat.icon className="w-4 h-4" />
                {cat.category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeMenuTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {menuItems[activeMenuTab].items.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-primary text-lg leading-tight group-hover:text-accent transition-colors">{item.name}</h4>
                    <span className="text-accent font-bold text-base shrink-0 ml-3">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/85 text-white rounded-full px-10 h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              <a href="https://jnbcoffee.com.np" target="_blank" rel="noopener noreferrer">View Full Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── AMBIANCE ── */}
      <section id="ambiance" className="py-24 md:py-32">
        <div className="container mx-auto px-5 md:px-8">
          <AnimatedSection className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">The Space</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                A cafe you'll want to live in.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Every corner of J&B is designed to make you feel something. Towering murals celebrating Nepal's culture, warm pendant lights, handwoven textiles, and that ever-present smell of freshly ground coffee.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We have cozy alcoves for quiet work, communal tables for lively brunches, and an open counter if you just want to watch the magic happen.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Free WiFi", "Pet Friendly", "Power Outlets", "Private Corners"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground border border-border">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/ambiance.png" alt="Cafe interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/latte.png" alt="Latte art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/cake.png" alt="Cakes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/events.png" alt="Events" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section id="events" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/events.png" alt="Events" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Celebrate With Us</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Make your moments unforgettable.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-10">
                  Looking for the perfect backdrop for a birthday, anniversary, team breakfast, or intimate gathering? J&B Coffee's warm, artsy space is yours. We handle the coffee, cakes, and ambiance — you focus on the memories.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  {["Birthdays", "Anniversaries", "Corporate Brunch", "Baby Showers", "Reunions", "Private Dining"].map(type => (
                    <div key={type} className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors">
                      {type}
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-accent hover:bg-accent/85 text-white rounded-full px-10 h-13 text-base font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <a href="https://jnbcoffee.com.np" target="_blank" rel="noopener noreferrer">Book For Celebration</a>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <motion.div variants={fadeUp}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Community</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">What our guests say</h2>
            </motion.div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border/50">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground/80 text-[15px] leading-relaxed italic mb-5">"{review.text}"</p>
                <p className="font-bold text-primary text-sm">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / VISIT ── */}
      <section id="contact" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <motion.div variants={fadeUp}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Find Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Come visit us</h2>
            </motion.div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                lines: ["Thamel / New Baneshwor", "Kathmandu, Nepal"],
                link: { label: "Get Directions", href: "https://maps.google.com" },
              },
              {
                icon: Clock,
                title: "Opening Hours",
                lines: ["Mon – Fri: 7:00 AM – 8:00 PM", "Saturday: 8:00 AM – 9:00 PM", "Sunday: 8:00 AM – 8:00 PM"],
              },
              {
                icon: Phone,
                title: "Get in Touch",
                lines: ["+977 980-000-0000", "hello@jnbcoffee.com.np"],
                link: { label: "Send a Message", href: "mailto:hello@jnbcoffee.com.np" },
              },
            ].map((card, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-muted-foreground text-sm mb-1">{line}</p>
                ))}
                {card.link && (
                  <a href={card.link.href} className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm mt-4 hover:underline">
                    {card.link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#130813] text-white">
        {/* CTA strip */}
        <div className="bg-accent">
          <div className="container mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Ready for your next favorite cup?</h3>
              <p className="text-white/80">Walk in any time or book ahead for your gathering.</p>
            </div>
            <Button asChild className="bg-white text-accent hover:bg-white/90 rounded-full px-8 h-12 font-bold text-base shadow-lg shrink-0">
              <a href="https://jnbcoffee.com.np" target="_blank" rel="noopener noreferrer">Order Now</a>
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
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
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
                <li className="flex justify-between text-white/60">
                  <span>Mon – Fri</span><span>7:00 AM – 8:00 PM</span>
                </li>
                <li className="flex justify-between text-white/60">
                  <span>Saturday</span><span>8:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between text-white/60">
                  <span>Sunday</span><span>8:00 AM – 8:00 PM</span>
                </li>
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
    </div>
  );
}
