import { motion } from "framer-motion";
import { Navbar, Footer, PageHero } from "@/components/layout";
import { ArrowRight, Heart, Leaf, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const timeline = [
  { year: "2019", title: "The Beginning", desc: "Two friends, Jaya and Bikash, turned a shared obsession with great coffee into a tiny 12-seat cafe in Thamel. Word spread faster than they could brew." },
  { year: "2020", title: "Roots & Murals", desc: "Local artists transformed the walls into a celebration of Nepali culture. The murals became iconic — a reason people walked in even before trying the coffee." },
  { year: "2021", title: "Growing Family", desc: "A second location opened, and the team doubled. The bakery program launched with house-made cakes that quickly outsold every other item on the menu." },
  { year: "2023", title: "Community Hub", desc: "J&B became more than a cafe — it became a venue for birthdays, pop-up markets, art shows, and late-night conversations." },
  { year: "2024", title: "Today", desc: "With 10,000+ happy guests and counting, J&B Coffee is still growing — but it still feels like the neighborhood's best-kept secret." },
];

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every bean is sourced consciously, every cake is baked fresh, and every interaction is genuine. This is never just a transaction." },
  { icon: Leaf, title: "Local First", desc: "We partner with Nepali coffee farmers, support local artists, and source ingredients from nearby markets whenever possible." },
  { icon: Users, title: "Community at Heart", desc: "J&B isn't just ours — it belongs to the neighborhood. We host, we listen, and we grow together." },
  { icon: Star, title: "Obsessive Quality", desc: "Playful vibes, yes. But we're deadly serious about the quality of what we put in your cup and on your plate." },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        tag="Who We Are"
        title="Our Story"
        subtitle="Two friends, one obsession, and a cafe that became a neighborhood's heartbeat."
        image="/images/ambiance.png"
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">The Beginning</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">More than just a cup of coffee.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                J&B Coffee started as a conversation between two friends who couldn't find their perfect cup in Kathmandu. Jaya and Bikash had spent years abroad, tasting specialty coffee from Tokyo to London, and came home with one mission: bring that world-class experience home.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                But they didn't just replicate something foreign — they fused it with Nepal's own rich tea traditions, local art, and the warmth of Nepali hospitality. The result? Something that feels like nowhere else in the world.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/hero.png" alt="J&B Coffee founders" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Five years in the making</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[18px] md:left-[50%] top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex gap-8 md:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                <div className="md:w-1/2 flex md:justify-center">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 relative border-4 border-background">
                    <span className="sr-only">{item.year}</span>
                  </div>
                </div>

                <div className={`md:w-1/2 pb-2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <span className="text-accent font-bold text-sm tracking-wider">{item.year}</span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-border/50 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Come be part of our story.</h2>
            <p className="text-white/75 text-lg mb-8 max-w-md mx-auto">Every visit adds another page. We'd love to see you in the next chapter.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/85 text-white rounded-full px-8 h-12 font-semibold">
                <Link href="/menu">Explore the Menu <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-12 font-semibold">
                <Link href="/contact">Find Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
