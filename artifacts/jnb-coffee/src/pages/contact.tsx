import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer, PageHero } from "@/components/layout";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        tag="Say Hello"
        title="Contact Us"
        subtitle="Have a question, feedback, or just want to say hi? We'd love to hear from you."
        image="/images/ambiance.png"
      />

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

            {/* Left: Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Find Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">We're easy to reach.</h2>

              <div className="space-y-7">
                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Thamel / New Baneshwor<br />Kathmandu, Nepal</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                      className="text-accent text-sm font-semibold mt-2 inline-block hover:underline">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <a href="tel:+977980000000" className="text-muted-foreground text-sm hover:text-accent transition-colors">+977 980-000-0000</a>
                    <p className="text-muted-foreground text-xs mt-1">Mon–Sun, 7:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href="mailto:hello@jnbcoffee.com.np" className="text-muted-foreground text-sm hover:text-accent transition-colors">hello@jnbcoffee.com.np</a>
                    <p className="text-muted-foreground text-xs mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-8"><span>Mon – Fri</span><span>7:00 AM – 8:00 PM</span></div>
                      <div className="flex justify-between gap-8"><span>Saturday</span><span>8:00 AM – 9:00 PM</span></div>
                      <div className="flex justify-between gap-8"><span>Sunday</span><span>8:00 AM – 8:00 PM</span></div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 text-sm font-medium mt-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Open now
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Follow Us</h3>
                    <div className="flex gap-3">
                      <a href="https://www.instagram.com/jnbcoffee/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                        <Instagram className="w-4 h-4" /> @jnbcoffee
                      </a>
                      <a href="https://www.facebook.com/jnbcoffee/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                        <Facebook className="w-4 h-4" /> J&B Coffee
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Send a Message</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Get in touch.</h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-14 h-14 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thanks, {form.name}! We'll get back to you at <strong>{form.email}</strong> within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1.5 block">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-1.5 block">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-1.5 block">Subject</label>
                    <select value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition bg-white">
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Event Booking</option>
                      <option>Feedback</option>
                      <option>Catering Request</option>
                      <option>Press / Media</option>
                      <option>Career Opportunity</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-1.5 block">Message *</label>
                    <textarea required value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      rows={5}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none"
                      placeholder="Tell us what's on your mind..." />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/85 text-white rounded-full h-13 text-base font-bold shadow-lg hover:shadow-xl transition-all">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="pb-20">
        <div className="container mx-auto px-5 md:px-8">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 h-72 bg-muted relative">
            <img src="/images/hero.png" alt="Location" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-xl">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-lg text-center">
                <p className="font-bold text-primary">J&B Coffee</p>
                <p className="text-muted-foreground text-sm">Kathmandu, Nepal</p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="bg-accent text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-accent/85 transition-colors shadow-md">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
