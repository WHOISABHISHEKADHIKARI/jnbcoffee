import { motion } from "framer-motion";
import { Navbar, Footer, PageHero } from "@/components/layout";
import { Wifi, Zap, PawPrint, Volume2, Armchair, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const features = [
  { icon: Wifi, title: "Fast Free WiFi", desc: "Dedicated high-speed connection — work comfortably for hours without worrying about connectivity." },
  { icon: Zap, title: "Power Outlets", desc: "Charging points at every table. Plug in, order another latte, and stay as long as you need." },
  { icon: PawPrint, title: "Pet Friendly", desc: "Your four-legged friends are welcome too. We have water bowls and outdoor seating ready for you." },
  { icon: Volume2, title: "Curated Playlist", desc: "Handpicked music that shifts from morning focus beats to warm evening jazz. Never too loud, never too quiet." },
  { icon: Armchair, title: "Cozy Seating", desc: "From solo nooks to communal tables — whether you want to disappear into work or share a table with strangers." },
  { icon: Sun, title: "Natural Light", desc: "Floor-to-ceiling windows flood the space with golden morning light. The best kind of office." },
];

const spaces = [
  { name: "The Main Hall", desc: "Our heart — open, airy, buzzing with the right kind of energy. The murals line every wall, baristas work their craft at the open counter, and the smell of freshly ground coffee fills the room.", capacity: "Up to 45 guests", image: "/images/hero.png" },
  { name: "The Corner Nook", desc: "Tucked behind the main hall, this intimate alcove has just four tables. It's where writers finish chapters, creatives sketch ideas, and people have conversations that last for hours.", capacity: "Up to 12 guests", image: "/images/ambiance.png" },
  { name: "The Private Room", desc: "A fully enclosed space perfect for team meetings, private celebrations, or intimate dinners. Book it as a whole for your group. A/V setup available on request.", capacity: "Up to 20 guests", image: "/images/events.png" },
];

const galleryImages = [
  { src: "/images/hero.png", alt: "Main hall", span: "col-span-2 row-span-2" },
  { src: "/images/latte.png", alt: "Latte art", span: "" },
  { src: "/images/cake.png", alt: "Cakes display", span: "" },
  { src: "/images/ambiance.png", alt: "Cozy corner", span: "" },
  { src: "/images/events.png", alt: "Events space", span: "" },
];

export default function AmbiancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        tag="The Space"
        title="Our Ambiance"
        subtitle="A cafe that feels like a neighborhood living room — always warm, always welcoming."
        image="/images/hero.png"
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Designed for People</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">A place to slow down.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Every inch of J&B Coffee was designed intentionally. The Nepali murals aren't decoration — they're a statement. The warm pendant lights aren't just lighting — they set a mood. The handwoven cushions aren't just comfortable — they tell you to stay a while.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This is a place where time moves differently. Come in for 20 minutes, leave three hours later. That's the J&B effect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[420px] md:h-[560px]">
            {galleryImages.map((img, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl ${img.span}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Built For You</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Every detail, considered.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-primary text-base mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Find Your Spot</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our spaces</h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {spaces.map((space, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img src={space.image} alt={space.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <span className="text-xs font-bold text-accent tracking-wider uppercase">{space.capacity}</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 mb-4">{space.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{space.desc}</p>
                  <Button asChild className="bg-accent hover:bg-accent/85 text-white rounded-full px-7 h-11 font-semibold">
                    <Link href="/events">Reserve This Space</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
