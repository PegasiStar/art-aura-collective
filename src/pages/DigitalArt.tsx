import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArtCard from "@/components/shared/ArtCard";
import VineDecoration from "@/components/shared/VineDecoration";
import { artworks, categories } from "@/data/artworks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DigitalArt = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter((art) => art.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-secondary/40 relative overflow-hidden">
          <VineDecoration variant="top-left" className="opacity-30" />
          <VineDecoration variant="top-right" className="opacity-30" />
          
          <div className="container text-center relative z-10">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Digital <span className="text-primary">Art Shop</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Emotes, wallpapers, badges, and digital art pieces - all hand-crafted with love.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 relative overflow-hidden">
          <VineDecoration variant="cattails-right" className="opacity-20" />
          
          <div className="container relative z-10">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full font-semibold"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Art Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArtworks.map((art) => (
                <ArtCard
                  key={art.id}
                  title={art.title}
                  price={art.price}
                  image={art.image}
                  category={art.category}
                  link={art.link}
                  soldCount={art.soldCount}
                />
              ))}
            </div>

            {filteredArtworks.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-muted-foreground text-lg">
                  No items found in this category. Check back soon!
                </p>
              </div>
            )}

            {/* Ko-Fi Promo */}
            <div className="mt-16 p-8 md:p-12 bg-card border-2 border-border rounded-3xl text-center shadow-lg">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                Can't find what you're looking for?
              </h3>
              <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
                Visit my Ko-Fi shop for the complete collection, including exclusive items and new releases!
              </p>
              <Button asChild size="lg" className="rounded-full gap-2 px-8 font-semibold glow-primary">
                <a href="https://ko-fi.com/maybeechristine/shop" target="_blank" rel="noopener noreferrer">
                  Visit Full Ko-Fi Shop
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalArt;
