import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import ArtCard from "@/components/shared/ArtCard";
import { artworks, categories } from "@/data/artworks";
import { Button } from "@/components/ui/button";

const DigitalArt = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter((art) => art.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <SectionHeader
            title="Digital Art Shop 🎨"
            subtitle="Emotes, wallpapers, badges, and digital art pieces - all hand-crafted with love"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
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

          {/* Art Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                No items found in this category. Check back soon! 🐸
              </p>
            </div>
          )}

          {/* Ko-Fi Promo */}
          <div className="mt-16 p-8 bg-accent/10 rounded-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Can't find what you're looking for? 🤔
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Visit my Ko-Fi shop for the complete collection, including exclusive items and new releases!
            </p>
            <Button asChild size="lg">
              <a href="https://ko-fi.com/maybeechristine/shop" target="_blank" rel="noopener noreferrer">
                Visit Full Ko-Fi Shop
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalArt;
