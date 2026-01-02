import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import MerchCard from "@/components/shared/MerchCard";
import { merchItems, merchCategories } from "@/data/merch";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Merch = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredMerch = activeCategory === "All" 
    ? merchItems 
    : merchItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <SectionHeader
            title="Cozy Merch Shop 🛍️"
            subtitle="Apparel, accessories, and prints featuring your favorite froggy designs"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {merchCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Merch Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMerch.map((item) => (
              <MerchCard
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                link={item.link}
              />
            ))}
          </div>

          {filteredMerch.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground text-lg">
                No items found in this category. Check back soon! 🐸
              </p>
            </div>
          )}

          {/* Etsy Promo */}
          <div className="mt-16 p-8 bg-primary/5 rounded-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Full Merch Collection on Etsy 🛒
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Visit MaybeeAStore on Etsy for the complete merch collection, 
              including exclusive items and limited editions!
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href="https://www.etsy.com/shop/MaybeeAStore" target="_blank" rel="noopener noreferrer">
                Shop on Etsy
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Merch;
