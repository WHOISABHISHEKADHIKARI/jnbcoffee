import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, PageHero } from "@/components/layout";
import { Coffee, Cake, Utensils, Leaf, IceCream, Wine, ChevronDown, ChevronUp } from "lucide-react";
import { JsonLd } from "@/components/json-ld";

const menuSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jnbcoffee.com.np/menu#webpage",
      "url": "https://jnbcoffee.com.np/menu",
      "name": "Menu — J&B Coffee",
      "description": "Browse the full J&B Coffee menu featuring handcrafted espresso drinks, cold brews, artisan pastries, Nepali-inspired bites, fresh salads, and more.",
      "isPartOf": { "@id": "https://jnbcoffee.com.np/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jnbcoffee.com.np" },
          { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://jnbcoffee.com.np/menu" }
        ]
      }
    },
    {
      "@type": "Menu",
      "@id": "https://jnbcoffee.com.np/menu#menu",
      "name": "J&B Coffee Full Menu",
      "description": "Our complete menu of handcrafted beverages, artisan food, and seasonal specials.",
      "url": "https://jnbcoffee.com.np/menu",
      "inLanguage": "en",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Hot Coffee",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Espresso", "offers": { "@type": "Offer", "price": "180", "priceCurrency": "NPR" } },
            { "@type": "MenuItem", "name": "Cappuccino", "offers": { "@type": "Offer", "price": "230", "priceCurrency": "NPR" } },
            { "@type": "MenuItem", "name": "Flat White", "offers": { "@type": "Offer", "price": "240", "priceCurrency": "NPR" } }
          ]
        }
      ]
    }
  ]
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categories = [
  {
    id: "espresso", label: "Espresso Drinks", icon: Coffee,
    items: [
      { name: "Espresso", desc: "Pure, concentrated, short and powerful", price: "Rs. 180", badge: "", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=220&fit=crop&q=80", extra: "Single or double shot available. Origin: blend of Ethiopian and Brazilian beans. Dairy-free." },
      { name: "Americano", desc: "Espresso pulled long with hot water", price: "Rs. 200", badge: "", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=220&fit=crop&q=80", extra: "Served black. Request a splash of milk anytime. Dairy-free by default." },
      { name: "Flat White", desc: "Ristretto shots with velvety microfoam", price: "Rs. 240", badge: "Popular", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=220&fit=crop&q=80", extra: "Available with oat, almond, or soy milk. Stronger than a latte with a silkier texture." },
      { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam", price: "Rs. 230", badge: "", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=220&fit=crop&q=80", extra: "Classic Italian ratio. Ask for a dry cap (extra foam) or wet cap (more milk). Plant milk available." },
      { name: "Cortado", desc: "Double shot balanced with equal warm milk", price: "Rs. 220", badge: "", image: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400&h=220&fit=crop&q=80", extra: "Spanish-origin small drink. Less milk than a latte, more than a macchiato. Served in a glass." },
      { name: "J&B Signature Latte", desc: "House blend with cardamom-kissed microfoam", price: "Rs. 280", badge: "Signature", image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=220&fit=crop&q=80", extra: "Our most-loved drink. Cardamom is hand-ground fresh each morning. Oat milk recommended." },
      { name: "Rose Chai Latte", desc: "Masala chai with rose water and oat milk", price: "Rs. 260", badge: "Bestseller", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=220&fit=crop&q=80", extra: "Vegan. Made with Nepali black tea, house spice blend, rose water, and oat milk. No espresso." },
      { name: "Dirty Matcha", desc: "Ceremonial matcha with a double espresso shot", price: "Rs. 300", badge: "", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=220&fit=crop&q=80", extra: "Ceremonial-grade matcha from Japan layered over a double ristretto. Vegan with oat milk." },
    ]
  },
  {
    id: "cold", label: "Cold Drinks", icon: IceCream,
    items: [
      { name: "Cold Brew Nectar", desc: "18-hour cold brew, naturally sweet", price: "Rs. 320", badge: "Bestseller", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=220&fit=crop&q=80", extra: "Steeped for 18 hours in filtered cold water. Served over large ice cubes. Dairy-free." },
      { name: "Iced Caramel Latte", desc: "Espresso, caramel, milk over ice", price: "Rs. 290", badge: "", image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=400&h=220&fit=crop&q=80", extra: "Made with house-made salted caramel sauce. Available with oat or almond milk." },
      { name: "Iced Matcha Latte", desc: "Ceremonial matcha, oat milk, over ice", price: "Rs. 280", badge: "Popular", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=220&fit=crop&q=80", extra: "Vegan. Oat milk is our default for this drink. Add a shot of espresso to make it a Dirty Iced Matcha." },
      { name: "Cold Brew Tonic", desc: "Cold brew over sparkling water with citrus", price: "Rs. 340", badge: "", image: "https://images.unsplash.com/photo-1517705008128-361805f42e36?w=400&h=220&fit=crop&q=80", extra: "Cold brew poured over Indian tonic water with a twist of lemon. Surprisingly refreshing. Dairy-free." },
      { name: "Mango Cold Brew", desc: "House cold brew with Nepali mango syrup", price: "Rs. 350", badge: "Seasonal", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=220&fit=crop&q=80", extra: "Available May–August with fresh local Nepali mangoes. Dairy-free and vegan." },
      { name: "Strawberry Milk", desc: "Fresh strawberry syrup with steamed milk", price: "Rs. 250", badge: "", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=220&fit=crop&q=80", extra: "No coffee. Strawberry compote made in-house with seasonal berries. Great for kids too." },
    ]
  },
  {
    id: "teas", label: "Teas & Infusions", icon: Leaf,
    items: [
      { name: "Nepali Black Tea", desc: "Single-origin Ilam black tea, brewed to order", price: "Rs. 160", badge: "", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=220&fit=crop&q=80", extra: "Sourced directly from Ilam, Nepal's premier tea region. Served with milk on the side. Vegan option available." },
      { name: "Masala Chai", desc: "House spice blend with full-cream milk", price: "Rs. 180", badge: "Bestseller", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=220&fit=crop&q=80", extra: "Our spice blend: cardamom, cinnamon, ginger, cloves, black pepper. Simmered fresh each batch. Oat milk available." },
      { name: "Mint Green Tea", desc: "Japanese sencha with fresh garden mint", price: "Rs. 200", badge: "", image: "https://images.unsplash.com/photo-1556742400-b5b7b8c79f39?w=400&h=220&fit=crop&q=80", extra: "Brewed at 70°C to preserve sweetness. Mint is grown in our kitchen garden. Vegan and caffeine-light." },
      { name: "Chamomile Honey", desc: "Organic chamomile with local wild honey", price: "Rs. 210", badge: "", image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&h=220&fit=crop&q=80", extra: "Caffeine-free. Honey is sourced from a family apiary in Chitwan, Nepal. Calming and naturally sweet." },
      { name: "Ginger Lemon Infusion", desc: "Fresh ginger, lemon, and turmeric", price: "Rs. 220", badge: "", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=220&fit=crop&q=80", extra: "Caffeine-free. Anti-inflammatory blend. Freshly grated ginger and turmeric, lemon juice, hot water. Vegan." },
    ]
  },
  {
    id: "cakes", label: "Cakes & Pastries", icon: Cake,
    items: [
      { name: "Belgian Chocolate Tart", desc: "Dark ganache on a buttery almond crust", price: "Rs. 380", badge: "Bestseller", image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=220&fit=crop&q=80", extra: "Contains: gluten, dairy, tree nuts (almonds). 70% Belgian dark chocolate ganache. Not vegan." },
      { name: "Mango Cheesecake", desc: "Local Nepali mango with New York-style cheesecake", price: "Rs. 350", badge: "Signature", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=220&fit=crop&q=80", extra: "Seasonal May–August with fresh Nepali alphonso mangoes. Contains gluten and dairy. Nut-free." },
      { name: "Red Velvet Slice", desc: "Moist layers with cream cheese frosting", price: "Rs. 300", badge: "Popular", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=220&fit=crop&q=80", extra: "House-baked daily. Contains: gluten, dairy, eggs. Topped with hand-piped cream cheese frosting." },
      { name: "Cardamom Croissant", desc: "Buttery layers with a fragrant cardamom glaze", price: "Rs. 220", badge: "", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=220&fit=crop&q=80", extra: "Laminated dough made in-house. Contains gluten and dairy. Best enjoyed warm within 30 minutes of baking." },
      { name: "Blueberry Scone", desc: "Classic British scone with seasonal blueberries", price: "Rs. 240", badge: "", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&q=80", extra: "Contains gluten, dairy, eggs. Served with clotted cream and house jam on request (+Rs. 60)." },
      { name: "Tiramisu Cup", desc: "House espresso soaked ladyfingers with mascarpone", price: "Rs. 320", badge: "", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=220&fit=crop&q=80", extra: "Contains: gluten, dairy, eggs. Made with our own espresso. Individual serving in a glass jar." },
      { name: "Lemon Tart", desc: "Bright, silky lemon curd in a sweet pastry shell", price: "Rs. 300", badge: "", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=220&fit=crop&q=80", extra: "Contains: gluten, dairy, eggs. Curd made with fresh lemons. Dairy-free crust available on request." },
      { name: "Almond Financier", desc: "French-style brown butter almond cakes", price: "Rs. 200", badge: "", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=220&fit=crop&q=80", extra: "Contains gluten, dairy, eggs, tree nuts (almonds). Mini cakes served in pairs. Gluten-free version available." },
    ]
  },
  {
    id: "food", label: "Food & Mains", icon: Utensils,
    items: [
      { name: "Avocado Toast", desc: "Sourdough with smashed avocado, cherry tomatoes, and feta", price: "Rs. 420", badge: "Popular", image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=220&fit=crop&q=80", extra: "Vegan without feta. Sourdough baked in-house. Add a poached egg for +Rs. 60. Contains gluten." },
      { name: "Club Sandwich", desc: "Triple-decker with roasted chicken, bacon, egg, and aioli", price: "Rs. 480", badge: "Bestseller", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=220&fit=crop&q=80", extra: "Served with house fries or salad. Contains gluten, dairy, eggs. Substitute chicken for grilled mushrooms." },
      { name: "Shakshuka Bowl", desc: "Eggs poached in spiced tomato, served with crusty bread", price: "Rs. 440", badge: "Signature", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=220&fit=crop&q=80", extra: "Vegetarian. Spiced with cumin, coriander, smoked paprika. Contains eggs and gluten (bread). GF bread available." },
      { name: "Granola Parfait", desc: "House granola, Greek yogurt, seasonal berries, honey", price: "Rs. 320", badge: "", image: "https://images.unsplash.com/photo-1484723091739-30990ceab666?w=400&h=220&fit=crop&q=80", extra: "Vegetarian. Contains dairy, tree nuts. Oat-based granola, honey from Chitwan. Vegan option with coconut yogurt." },
      { name: "Smoked Salmon Bagel", desc: "Cream cheese, capers, red onion on a toasted bagel", price: "Rs. 520", badge: "", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=220&fit=crop&q=80", extra: "Contains gluten, dairy, fish. Bagel baked fresh each morning. Add avocado for +Rs. 80." },
      { name: "Mushroom Bruschetta", desc: "Sautéed wild mushrooms on sourdough with truffle oil", price: "Rs. 380", badge: "", image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=220&fit=crop&q=80", extra: "Vegan. Wild mushroom mix sautéed in garlic and thyme, finished with truffle oil. Contains gluten." },
      { name: "Breakfast Burrito", desc: "Scrambled eggs, cheddar, peppers, salsa in a flour tortilla", price: "Rs. 450", badge: "", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=220&fit=crop&q=80", extra: "Vegetarian. Contains gluten, dairy, eggs. Add bacon or chicken for +Rs. 80. Mild to spicy salsa available." },
      { name: "Garden Salad Bowl", desc: "Seasonal greens, roasted veg, seeds, lemon vinaigrette", price: "Rs. 360", badge: "", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=220&fit=crop&q=80", extra: "Vegan and gluten-free. Dressing made in-house with lemon, olive oil, Dijon mustard. Add grilled halloumi +Rs. 100." },
    ]
  },
  {
    id: "specials", label: "Specials", icon: Wine,
    items: [
      { name: "Weekend Brunch Set", desc: "Any main + any drink + a pastry, available Sat–Sun 8am–12pm", price: "Rs. 750", badge: "Weekend Only", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=220&fit=crop&q=80", extra: "Best value on the menu. Choose any Food & Mains item, any hot or cold drink, and any pastry. Dine-in only." },
      { name: "Barista's Pick", desc: "Chef's weekly choice — ask your barista for today's selection", price: "Market Price", badge: "Rotating", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=220&fit=crop&q=80", extra: "Changes every week based on seasonal ingredients and our team's creativity. Always worth trying." },
      { name: "Whole Cake Order", desc: "Custom cakes for celebrations — 48hr advance order required", price: "From Rs. 2,200", badge: "Custom", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=220&fit=crop&q=80", extra: "Available flavours: chocolate, mango, red velvet, lemon. Serves 8–12. Contact us to place your order." },
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
  const [expanded, setExpanded] = useState<string | null>(null);
  const current = categories.find(c => c.id === active)!;

  const toggleExpand = (key: string) => {
    setExpanded(prev => prev === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd id="jsonld-menu" schema={menuSchema} />
      <Navbar />

      <PageHero
        tag="What We Serve"
        title="Our Menu"
        subtitle="Specialty coffee, decadent cakes, and wholesome food — all crafted from scratch."
        image="/images/latte.png"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => { setActive(cat.id); setExpanded(null); }}
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

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{current.label}</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {current.items.map((item, i) => {
                  const key = `${active}-${i}`;
                  const isOpen = expanded === key;
                  return (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-border/50 group overflow-hidden flex flex-col">

                      <div className="relative overflow-hidden h-44 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {item.badge && (
                          <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow ${badgeColors[item.badge] || "bg-muted text-muted-foreground"}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-bold text-primary text-base leading-tight group-hover:text-accent transition-colors">{item.name}</h3>
                          <span className="text-accent font-bold text-sm whitespace-nowrap shrink-0">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>

                        <button
                          onClick={() => toggleExpand(key)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors mt-auto self-start">
                          {isOpen ? (
                            <><ChevronUp className="w-3.5 h-3.5" /> Show Less</>
                          ) : (
                            <><ChevronDown className="w-3.5 h-3.5" /> View More</>
                          )}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden">
                              <p className="text-xs text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border/50">
                                {item.extra}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

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
