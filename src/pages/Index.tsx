import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import ArtCard from "@/components/shared/ArtCard";
import MerchCard from "@/components/shared/MerchCard";
import { artworks } from "@/data/artworks";
import { merchItems } from "@/data/merch";

const Index = () => {
  const featuredArt = artworks.filter((art) => art.featured).slice(0, 4);
  const featuredMerch = merchItems.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-8xl animate-float">🐸</div>
            <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: "1s" }}>🌿</div>
            <div className="absolute bottom-20 left-1/4 text-7xl animate-float" style={{ animationDelay: "2s" }}>🍃</div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6 font-body">
                <Sparkles className="h-4 w-4" />
                <span>Ko-fi Ambassador</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Cozy Digital Art by{" "}
                <span className="text-primary">maybeechristine</span>
              </h1>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                South African LGBTQ+ digital artist, animator & streamer creating whimsical, 
                nature-inspired art featuring frogs, swamps, and cozy vibes. 🐸💚
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2 text-lg">
                  <Link to="/digital-art">
                    <Palette className="h-5 w-5" />
                    Browse Digital Art
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 text-lg">
                  <Link to="/commissions">
                    <Heart className="h-5 w-5" />
                    Request Commission
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Digital Art */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SectionHeader
              title="Featured Digital Art ✨"
              subtitle="Hand-crafted emotes, wallpapers, and digital goodies for your cozy setup"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredArt.map((art) => (
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
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/digital-art">
                  View All Digital Art
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Snippet */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop"
                    alt="Christine's Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg animate-wiggle">
                  <span className="text-4xl">🐸</span>
                </div>
              </div>
              
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Christine
                </h2>
                <p className="font-body text-muted-foreground text-lg mb-6">
                  Hey there! I'm Christine, a South African digital artist who's absolutely 
                  obsessed with frogs, nature, and creating cozy art that makes you feel warm inside. 
                  My work is inspired by swamps, lily pads, and the little creatures that call them home.
                </p>
                <p className="font-body text-muted-foreground text-lg mb-6">
                  When I'm not drawing Fwog (my adorable frog mascot), you can find me streaming 
                  on Twitch, animating, or hanging out with The Flipside community on Discord!
                </p>
                <Button asChild className="gap-2">
                  <Link to="/about">
                    Learn More About Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Merch Preview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SectionHeader
              title="Cozy Merch 🛍️"
              subtitle="Wear your love for frogs and nature with our comfy apparel and accessories"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMerch.map((item) => (
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
            
            <div className="mt-10 text-center">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link to="/merch">
                  Shop All Merch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Commission CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Want Something Custom? 🎨
            </h2>
            <p className="font-body text-lg opacity-90 max-w-2xl mx-auto mb-8">
              I create custom emotes, character art, and illustrations for streamers, 
              content creators, and anyone who loves cozy art. Let's bring your vision to life!
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2 text-lg">
              <Link to="/commissions">
                Check Commission Info
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-20 bg-accent/10">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Join The Flipside 🌿
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Get notified about new art drops, commission openings, and exclusive behind-the-scenes content!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
