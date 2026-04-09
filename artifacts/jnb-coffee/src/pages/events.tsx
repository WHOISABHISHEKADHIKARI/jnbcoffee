import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer, PageHero } from "@/components/layout";
import { PartyPopper, Briefcase, Heart, Baby, Users, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const eventTypes = [
  { icon: PartyPopper, title: "Birthday Celebrations", desc: "Make someone's day truly special. We'll set up the space, sort the cake, and make sure the coffee is flowing. You just show up and celebrate.", capacity: "Up to 35 guests", includes: ["Private setup", "Custom cake coordination", "Dedicated service team", "Decorations available"] },
  { icon: Heart, title: "Anniversaries & Date Nights", desc: "An intimate, candlelit setting for two (or more). Let us curate a special menu pairing and set the mood for a memorable evening.", capacity: "2–10 guests", includes: ["Reserved seating", "Set menu available", "Champagne on arrival", "Floral arrangement"] },
  { icon: Briefcase, title: "Corporate Brunches", desc: "Start your workday the right way — a great team brunch with great coffee. We handle the logistics, you handle the conversation.", capacity: "10–45 guests", includes: ["A/V setup available", "Custom menu planning", "Batch brewing available", "Invoice & receipts"] },
  { icon: Baby, title: "Baby Showers", desc: "Warm, beautiful, and stress-free. Our team will help you plan a lovely gathering for the guest of honor.", capacity: "Up to 30 guests", includes: ["Custom decor theme", "Custom cake coordination", "Canapés & finger food", "Photo spots setup"] },
  { icon: Users, title: "Reunions & Gatherings", desc: "Long-overdue catch-ups deserve a great setting. Book our space for your group and let the conversation flow freely.", capacity: "10–45 guests", includes: ["Flexible layout", "Family-style dining", "Dietary requirements met", "Kids-friendly options"] },
];

const packages = [
  {
    name: "Coffee & Cake",
    price: "Rs. 1,500 / person",
    min: "Minimum 10 guests",
    color: "border-border",
    features: ["2 hours venue use", "Unlimited coffee & tea", "Cake slice per person", "Standard setup"],
  },
  {
    name: "Full Celebration",
    price: "Rs. 2,800 / person",
    min: "Minimum 10 guests",
    color: "border-accent ring-2 ring-accent/20",
    badge: "Most Popular",
    features: ["3 hours venue use", "Full brunch / lunch menu", "Specialty coffee bar", "Custom cake coordination", "Decorations & florals", "Dedicated event host"],
  },
  {
    name: "Private Dining",
    price: "Custom Quote",
    min: "Up to 20 guests",
    color: "border-primary",
    features: ["4 hours exclusive use", "Multi-course curated menu", "Premium drinks package", "Full custom decor", "Photography setup", "White-glove service"],
  },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 7 days in advance for smaller gatherings and 2–3 weeks for larger events. Peak dates (weekends and holidays) fill up quickly." },
  { q: "Can I bring my own cake?", a: "You're welcome to bring your own cake — there's no corkage fee. We can also coordinate a custom cake through our partner bakery if you'd like us to handle it." },
  { q: "Do you accommodate dietary restrictions?", a: "Absolutely. We offer vegetarian, vegan, and gluten-free options across our menu. Just let us know in advance and we'll ensure everyone is catered for." },
  { q: "What's included in the private room booking?", a: "The private room includes the space, standard furniture setup, and dedicated service. A/V equipment, custom decor, and full-service packages are available as add-ons." },
  { q: "Is there a minimum spend?", a: "Yes — there's a minimum spend depending on the space and time slot. Our team will provide full details when you inquire." },
];

export default function EventsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", type: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        tag="Celebrate With Us"
        title="Events & Celebrations"
        subtitle="Your special moments deserve a beautiful backdrop. Let J&B Coffee make it unforgettable."
        image="/images/events.png"
      />

      {/* Event Types */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">What We Host</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Every occasion, done beautifully.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eventTypes.map((ev, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <ev.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">{ev.capacity}</span>
                <h3 className="text-lg font-bold text-primary mt-1 mb-3">{ev.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{ev.desc}</p>
                <ul className="space-y-1.5">
                  {ev.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Pick your experience.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`bg-white rounded-2xl p-8 border-2 shadow-sm relative ${pkg.color}`}>
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-primary mb-1">{pkg.name}</h3>
                <p className="text-accent font-bold text-lg mb-1">{pkg.price}</p>
                <p className="text-muted-foreground text-xs mb-6">{pkg.min}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/85 text-white rounded-full font-semibold"
                  onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}>
                  Book This Package
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Book your event</h2>
            <p className="text-muted-foreground mt-3 text-lg">Fill in the form and our events team will be in touch within 24 hours.</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent!</h3>
              <p className="text-green-700">Thank you, {form.name}. Our events team will reach out to <strong>{form.email}</strong> within 24 hours to confirm your booking.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Full Name *</label>
                  <input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Phone</label>
                  <input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="+977 980 000 0000" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Preferred Date *</label>
                  <input required type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Number of Guests *</label>
                  <input required type="number" min={2} value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="e.g. 15" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Event Type</label>
                  <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition bg-white">
                    <option value="">Select event type</option>
                    <option>Birthday Celebration</option>
                    <option>Anniversary</option>
                    <option>Corporate Brunch</option>
                    <option>Baby Shower</option>
                    <option>Reunion / Gathering</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Additional Notes</label>
                <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={4}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none"
                  placeholder="Tell us about your event, any dietary needs, décor ideas, etc." />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/85 text-white rounded-full h-13 text-base font-bold shadow-lg hover:shadow-xl transition-all">
                Send Booking Request
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-5 md:px-8 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-border/50 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-muted/30 transition-colors">
                  <span className="font-semibold text-primary text-[15px] pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-accent shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                    className="px-7 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </motion.div>
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
