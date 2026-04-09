import { useState, useRef } from "react";
import { Link } from "wouter";
import {
  MapPin, Phone, ArrowRight, Star,
  Clock, Mail, Coffee, Cake, Utensils, ChevronDown
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/layout";

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
  const [activeMenuTab, setActiveMenuTab] = useState(0);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar transparent />

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
                <Link href="/menu">Explore Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 rounded-full text-base px-9 h-14 backdrop-blur-sm font-semibold">
                <Link href="/events">Book a Table</Link>
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
                <Link href="/menu" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-semibold text-lg transition-colors group">
                  See our menu <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
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

      <Footer />
    </div>
  );
}
