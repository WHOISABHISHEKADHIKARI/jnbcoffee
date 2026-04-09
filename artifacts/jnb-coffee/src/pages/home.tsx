import { useState, useEffect } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Instagram, Facebook, ArrowRight, Star, Clock, Mail } from "lucide-react";
import logoImg from "@assets/20240122_180430_0000_1775752179612.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src={logoImg}
              alt="J&B Coffee Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105 drop-shadow-md"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#story" className={`transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white drop-shadow"}`}>Our Story</a>
            <a href="#menu" className={`transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white drop-shadow"}`}>Menu</a>
            <a href="#ambiance" className={`transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white drop-shadow"}`}>Ambiance</a>
            <a href="#events" className={`transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white drop-shadow"}`}>Events</a>
          </nav>
          
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-white rounded-full px-6">
            <a href="#visit">Visit Us</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Vibrant cafe interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Bold Flavors.<br />
              <span className="text-accent drop-shadow-md">Warm Connections.</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
              A vibrant neighborhood coffee house blending Nepali warmth with modern coffee culture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full text-lg px-8 h-14 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Explore Menu
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full text-lg px-8 h-14 w-full sm:w-auto backdrop-blur-sm">
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-accent text-lg font-bold tracking-wider uppercase mb-2">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">More than just coffee.</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                J&B Coffee was born from a simple idea: to create a space that feels like a warm hug. We brought together the rich, aromatic traditions of Nepal and blended them with modern specialty coffee culture.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every bean we roast, every cake we bake, and every smile we share is crafted to make you feel right at home. Whether you're here for a quick espresso, a leisurely afternoon with friends, or a quiet moment with a book, you're part of our neighborhood family.
              </p>
              <Button variant="link" className="text-secondary hover:text-accent p-0 h-auto text-lg group">
                Read our full story <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img src="/images/ambiance.png" alt="Cozy corner" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-full z-0 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full z-0 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent text-lg font-bold tracking-wider uppercase mb-2">The Menu</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Crafted with Love</h3>
            <p className="text-lg text-muted-foreground">
              From ethically sourced specialty beans to our decadent house-made cakes, everything we serve is designed to delight.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-lg">
                <img src="/images/latte.png" alt="Specialty Coffee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">View Coffee Menu <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">Specialty Coffee</h4>
              <p className="text-muted-foreground">Expertly pulled espresso, velvety lattes, and refreshing cold brews made with carefully selected beans.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-lg">
                <img src="/images/cake.png" alt="Cakes & Pastries" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">View Food Menu <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">Cakes & Food</h4>
              <p className="text-muted-foreground">Decadent slices, fresh pastries, and wholesome savory bites perfect for pairing with your favorite brew.</p>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-md hover:shadow-xl transition-all">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Events / Celebrations */}
      <section id="events" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/events.png" alt="Events Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent-foreground/80 text-lg font-bold tracking-wider uppercase mb-2">Celebrate With Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Make Your Moments Special</h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Looking for a vibrant, cozy space for your next birthday, anniversary, or gathering? J&B Coffee offers the perfect vibrant backdrop for your intimate celebrations. Let us handle the coffee and cakes while you focus on making memories.
              </p>
              <Button className="bg-accent hover:bg-white hover:text-accent text-white rounded-full px-8 py-6 text-lg transition-colors">
                Book For Celebration
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="/images/events.png" alt="Celebration" className="rounded-xl shadow-lg w-full aspect-square object-cover" />
                <img src="/images/cake.png" alt="Cake" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" />
              </div>
              <div className="space-y-4">
                <img src="/images/latte.png" alt="Coffee" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" />
                <img src="/images/ambiance.png" alt="Ambiance" className="rounded-xl shadow-lg w-full aspect-square object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Social Proof */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-accent text-lg font-bold tracking-wider uppercase mb-2">Community</h2>
          <h3 className="text-4xl font-bold text-primary mb-16">What Our Neighbors Say</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The vibe here is incredible. The murals, the cozy seats, and honestly the best latte art I've seen in the city. My new favorite spot.", author: "Sarah M." },
              { text: "Hosted my sister's birthday here and the team was so accommodating. The cake was decadent and the atmosphere was perfectly warm and inviting.", author: "Rahul P." },
              { text: "Love the energy here! It's playful but you can tell they take their coffee very seriously. A perfect blend of great taste and great vibes.", author: "Jessica T." }
            ].map((review, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="flex justify-center gap-1 text-accent mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground italic mb-6">"{review.text}"</p>
                  <p className="font-bold text-primary">- {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="visit" className="bg-[#1a0a1a] text-white">
        {/* Top CTA strip */}
        <div className="bg-accent py-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Come visit us today</h3>
              <p className="text-white/90 text-lg">Your next favorite cup is waiting for you.</p>
            </div>
            <Button className="bg-white text-accent hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shrink-0">
              Get Directions
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-16 pb-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src={logoImg}
                alt="J&B Coffee Logo"
                className="h-20 w-auto mb-5"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                A vibrant neighborhood coffee house blending Nepali warmth with modern specialty coffee culture.
              </p>
              <div className="flex gap-3 mt-6">
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

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-accent mb-6">Explore</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><a href="#story" className="hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
                <li><a href="#ambiance" className="hover:text-accent transition-colors">Ambiance</a></li>
                <li><a href="#events" className="hover:text-accent transition-colors">Events & Celebrations</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-accent mb-6">Contact</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+977980000000" className="hover:text-accent transition-colors">+977 980-000-0000</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href="mailto:hello@jnbcoffee.com.np" className="hover:text-accent transition-colors">hello@jnbcoffee.com.np</a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-accent mb-6">Opening Hours</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-white/50 uppercase tracking-wide text-xs">We're open</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Mon – Fri</span>
                  <span className="text-white/50">7:00 AM – 8:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="text-white/50">8:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="text-white/50">8:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
            <p>&copy; {new Date().getFullYear()} J&B Coffee. All rights reserved.</p>
            <p>Made with love in Kathmandu, Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
