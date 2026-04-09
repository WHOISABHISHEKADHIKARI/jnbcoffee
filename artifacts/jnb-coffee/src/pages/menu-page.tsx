import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, PageHero } from "@/components/layout";
import { Coffee, Cake, Utensils, Leaf, IceCream, Wine } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categories = [
  {
    id: "espresso", label: "Espresso Drinks", icon: Coffee,
    items: [
      { name: "Espresso", desc: "Pure, concentrated, short and powerful", price: "Rs. 180", badge: "" },
      { name: "Americano", desc: "Espresso pulled long with hot water", price: "Rs. 200", badge: "" },
      { name: "Flat White", desc: "Ristretto shots with velvety microfoam", price: "Rs. 240", badge: "Popular" },
      { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam", price: "Rs. 230", badge: "" },
      { name: "Cortado", desc: "Double shot balanced with equal warm milk", price: "Rs. 220", badge: "" },
      { name: "J&B Signature Latte", desc: "House blend with cardamom-kissed microfoam", price: "Rs. 280", badge: "Signature" },
      { name: "Rose Chai Latte", desc: "Masala chai with rose water and oat milk", price: "Rs. 260", badge: "Bestseller" },
      { name: "Dirty Matcha", desc: "Ceremonial matcha with a double espresso shot", price: "Rs. 300", badge: "" },
    ]
  },
  {
    id: "cold", label: "Cold Drinks", icon: IceCream,
    items: [
      { name: "Cold Brew Nectar", desc: "18-hour cold brew, naturally sweet", price: "Rs. 320", badge: "Bestseller" },
      { name: "Iced Caramel Latte", desc: "Espresso, caramel, milk over ice", price: "Rs. 290", badge: "" },
      { name: "Iced Matcha Latte", desc: "Ceremonial matcha, oat milk, over ice", price: "Rs. 280", badge: "Popular" },
      { name: "Cold Brew Tonic", desc: "Cold brew over sparkling water with citrus", price: "Rs. 340", badge: "" },
      { name: "Mango Cold Brew", desc: "House cold brew with Nepali mango syrup", price: "Rs. 350", badge: "Seasonal" },
      { name: "Strawberry Milk", desc: "Fresh strawberry syrup with steamed milk", price: "Rs. 250", badge: "" },
    ]
  },
  {
    id: "teas", label: "Teas & Infusions", icon: Leaf,
    items: [
      { name: "Nepali Black Tea", desc: "Single-origin Ilam black tea, brewed to order", price: "Rs. 160", badge: "" },
      { name: "Masala Chai", desc: "House spice blend with full-cream milk", price: "Rs. 180", badge: "Bestseller" },
      { name: "Mint Green Tea", desc: "Japanese sencha with fresh garden mint", price: "Rs. 200", badge: "" },
      { name: "Chamomile Honey", desc: "Organic chamomile with local wild honey", price: "Rs. 210", badge: "" },
      { name: "Ginger Lemon Infusion", desc: "Fresh ginger, lemon, and turmeric", price: "Rs. 220", badge: "" },
    ]
  },
  {
    id: "cakes", label: "Cakes & Pastries", icon: Cake,
    items: [
      { name: "Belgian Chocolate Tart", desc: "Dark ganache on a buttery almond crust", price: "Rs. 380", badge: "Bestseller" },
      { name: "Mango Cheesecake", desc: "Local Nepali mango with New York-style cheesecake", price: "Rs. 350", badge: "Signature" },
      { name: "Red Velvet Slice", desc: "Moist layers with cream cheese frosting", price: "Rs. 300", badge: "Popular" },
      { name: "Cardamom Croissant", desc: "Buttery layers with a fragrant cardamom glaze", price: "Rs. 220", badge: "" },
      { name: "Blueberry Scone", desc: "Classic British scone with seasonal blueberries", price: "Rs. 240", badge: "" },
      { name: "Tiramisu Cup", desc: "House espresso soaked ladyfingers with mascarpone", price: "Rs. 320", badge: "" },
      { name: "Lemon Tart", desc: "Bright, silky lemon curd in a sweet pastry shell", price: "Rs. 300", badge: "" },
      { name: "Almond Financier", desc: "French-style brown butter almond cakes", price: "Rs. 200", badge: "" },
    ]
  },
  {
    id: "food", label: "Food & Mains", icon: Utensils,
    items: [
      { name: "Avocado Toast", desc: "Sourdough with smashed avocado, cherry tomatoes, and feta", price: "Rs. 420", badge: "Popular" },
      { name: "Club Sandwich", desc: "Triple-decker with roasted chicken, bacon, egg, and aioli", price: "Rs. 480", badge: "Bestseller" },
      { name: "Shakshuka Bowl", desc: "Eggs poached in spiced tomato, served with crusty bread", price: "Rs. 440", badge: "Signature" },
      { name: "Granola Parfait", desc: "House granola, Greek yogurt, seasonal berries, honey", price: "Rs. 320", badge: "" },
      { name: "Smoked Salmon Bagel", desc: "Cream cheese, capers, red onion on a toasted bagel", price: "Rs. 520", badge: "" },
      { name: "Mushroom Bruschetta", desc: "Sautéed wild mushrooms on sourdough with truffle oil", price: "Rs. 380", badge: "" },
      { name: "Breakfast Burrito", desc: "Scrambled eggs, cheddar, peppers, salsa in a flour tortilla", price: "Rs. 450", badge: "" },
      { name: "Garden Salad Bowl", desc: "Seasonal greens, roasted veg, seeds, lemon vinaigrette", price: "Rs. 360", badge: "" },
    ]
  },
  {
    id: "specials", label: "Specials", icon: Wine,
    items: [
      { name: "Weekend Brunch Set", desc: "Any main + any drink + a pastry, available Sat–Sun 8am–12pm", price: "Rs. 750", badge: "Weekend Only" },
      { name: "Barista's Pick", desc: "Chef's weekly choice — ask your barista for today's selection", price: "Market Price", badge: "Rotating" },
      { name: "Whole Cake Order", desc: "Custom cakes for celebrations — 48hr advance order required", price: "From Rs. 2,200", badge: "Custom" },
    ]
  },
];

const badgeColors: Record<string, string> = {
  "Bestseller": "bg-accent text-white",
  "Signature": "bg-primary text-white",
  "Popular": "bg-secondary text-white",
  "Seasonal": "bg-green-600 text-white",
  "Weekend Only": "bg-orange-500 text-white",
  "Rotating": "bg-blue-600 text-white",
  "Custom": "bg-purple-600 text-white",
};

export default function MenuPage() {
  const [active, setActive] = useState("espresso");
  const current = categories.find(c => c.id === active)!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        tag="What We Serve"
        title="Our Menu"
        subtitle="Specialty coffee, decadent cakes, and wholesome food — all crafted from scratch."
        image="/images/latte.png"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === cat.id
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-white text-muted-foreground hover:bg-white/80 border border-border shadow-sm"
                }`}>
                <cat.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Active category header */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{current.label}</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {current.items.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-border/50 group">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-primary text-base leading-tight group-hover:text-accent transition-colors">{item.name}</h3>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        {item.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${badgeColors[item.badge] || "bg-muted text-muted-foreground"}`}>
                            {item.badge}
                          </span>
                        )}
                        <span className="text-accent font-bold text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <div className="mt-14 text-center">
            <div className="inline-block bg-muted/60 rounded-2xl px-8 py-5 text-sm text-muted-foreground max-w-xl">
              <p className="font-semibold text-foreground mb-1">Allergy & Dietary Info</p>
              <p>Gluten-free and vegan options are available for most items. Please ask your server and we'll happily guide you. Prices are inclusive of all taxes.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
