import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, ShoppingBag, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArtCard from "@/components/shared/ArtCard";
import VineDecoration from "@/components/shared/VineDecoration";
import { artworks } from "@/data/artworks";

import forestBackground from "@/assets/forest-background.png";
import christineAvatar from "@/assets/christine-avatar.jpg";

const Index = () => {
  const featuredArt = artworks.filter((art) => art.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Forest Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${forestBackground})` }}
          />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
          
          {/* Vine decorations */}
          <VineDecoration variant="top-left" className="z-10 animate-sway" />
          <VineDecoration variant="top-right" className="z-10 animate-sway" style={{ animationDelay: "1s" }} />
          
          {/* Content */}
          <div className="container relative z-10 text-center py-20">
            {/* Avatar */}
            <div className="mb-6">
              <img 
                src={christineAvatar}
                alt="Christine"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto border-4 border-card shadow-xl object-cover"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 font-body text-sm border border-primary/20 shadow-md">
              <Heart className="h-4 w-4 text-accent" />
              <span>Welcome to my cozy corner!</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Hey, I'm{" "}
              <span className="text-gradient-accent">Christine</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              Digital artist creating cute emotes, cozy wallpapers, and fun merch. 
              Every purchase helps support my dream of becoming a full-time artist. 
              Thanks for being part of this journey! 💚
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 text-base rounded-full px-8 glow-primary font-semibold">
                <Link to="/digital-art">
                  <Sparkles className="h-5 w-5" />
                  Browse Digital Art
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 text-base rounded-full px-8 bg-card/80 hover:bg-card font-semibold">
                <Link to="/merch">
                  <ShoppingBag className="h-5 w-5" />
                  Shop Merch
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom decorations */}
          <VineDecoration variant="bottom-left" className="z-10" />
          <VineDecoration variant="bottom-right" className="z-10" />
        </section>

        {/* Featured Work Section */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <VineDecoration variant="top-right" className="opacity-40" />
          
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Latest <span className="text-primary">Creations</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                Emotes, badges, and wallpapers – all designed with love for streamers and art lovers alike.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="gap-2 rounded-full px-6 font-semibold">
                <Link to="/digital-art">
                  See All Digital Art
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About & Support Section */}
        <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
          <VineDecoration variant="top-left" className="opacity-30" />
          <VineDecoration variant="cattails-right" className="opacity-50" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border-2 border-border shadow-xl">
                  <img 
                    src="https://storage.ko-fi.com/cdn/useruploads/post/5699ce56-123c-4fa8-b511-afa6a90fe879_bobatowallpaper5.png" 
                    alt="Boba Toad artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-lg">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Support My <span className="text-primary">Creative Journey</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    I'm a digital artist working towards my dream of creating art full-time. 
                    Every emote pack, wallpaper, and merch item you grab helps me get one step 
                    closer to that goal.
                  </p>
                  <p>
                    Beyond the art, I love connecting with my community on stream – sharing my 
                    creative process, chatting about goals, and cheering each other on. It's not 
                    just about growing; it's about the friends we make along the way.
                  </p>
                  <p>
                    Thank you for believing in what I do. Whether you're grabbing an emote pack 
                    or just stopping by to say hi – you're part of this journey. 💚
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild className="gap-2 rounded-full font-semibold">
                    <a href="https://ko-fi.com/maybeechristine" target="_blank" rel="noopener noreferrer">
                      <Heart className="h-4 w-4" />
                      Visit My Ko-Fi
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2 rounded-full font-semibold">
                    <Link to="/commissions">
                      <Palette className="h-4 w-4" />
                      Commission Info
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Offer Section */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <VineDecoration variant="top-left" className="opacity-25" />
          
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                What I <span className="text-primary">Create</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                From digital downloads to physical merch – there's something for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Digital Art */}
              <Link to="/digital-art" className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  Digital Art
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Twitch emotes, sub badges, and phone wallpapers. Instant downloads ready to use!
                </p>
              </Link>

              {/* Merch */}
              <Link to="/merch" className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  Merch Shop
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Cute apparel, accessories, and prints featuring my original character designs.
                </p>
              </Link>

              {/* Commissions */}
              <Link to="/commissions" className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  Commissions
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Custom emotes, badges, and character art made just for you. Open seasonally!
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/30">
          <VineDecoration variant="top-right" className="opacity-30" />
          <VineDecoration variant="cattails-left" className="opacity-50" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center bg-card/70 backdrop-blur-sm rounded-3xl p-10 border border-border shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Let's <span className="text-gradient-accent">Connect</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Come hang out on stream, grab some art, or just say hi! 
                I love meeting fellow creatives and dreamers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2 rounded-full px-8 glow-primary font-semibold">
                  <a href="https://www.twitch.tv/maybeechristine" target="_blank" rel="noopener noreferrer">
                    Watch Me Create Live
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
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
