import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, ShoppingBag, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArtCard from "@/components/shared/ArtCard";
import { artworks } from "@/data/artworks";

const Index = () => {
  const featuredArt = artworks.filter((art) => art.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://storage.ko-fi.com/cdn/useruploads/e2dca365-2c45-4042-ace0-8931acf14ee9_68dfb528-25e5-450c-9c0f-4497818d2a1d.png')`,
            }}
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
          
          {/* Content */}
          <div className="container relative z-10 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 font-body text-sm border border-primary/30">
              <Heart className="h-4 w-4" />
              <span>Welcome to my cozy corner</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hey, I'm{" "}
              <span className="text-gradient-accent">Christine</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Digital artist creating cute emotes, cozy wallpapers, and fun merch. 
              Every purchase helps support my dream of becoming a full-time artist. 
              Thanks for being part of this journey! 💚
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 text-base rounded-full px-8 glow-primary">
                <Link to="/digital-art">
                  <Sparkles className="h-5 w-5" />
                  Browse Digital Art
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 text-base rounded-full px-8 border-border hover:bg-secondary">
                <Link to="/merch">
                  <ShoppingBag className="h-5 w-5" />
                  Shop Merch
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Featured Work Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
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
              <Button asChild variant="outline" className="gap-2 rounded-full px-6">
                <Link to="/digital-art">
                  See All Digital Art
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About & Support Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image/Art */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                  <img 
                    src="https://storage.ko-fi.com/cdn/useruploads/post/5699ce56-123c-4fa8-b511-afa6a90fe879_bobatowallpaper5.png" 
                    alt="Boba Toad artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
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
                  <Button asChild className="gap-2 rounded-full">
                    <a href="https://ko-fi.com/maybeechristine" target="_blank" rel="noopener noreferrer">
                      <Heart className="h-4 w-4" />
                      Visit My Ko-Fi
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2 rounded-full">
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
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What I <span className="text-primary">Create</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                From digital downloads to physical merch – there's something for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Digital Art */}
              <Link to="/digital-art" className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  Digital Art
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Twitch emotes, sub badges, and phone wallpapers. Instant downloads ready to use!
                </p>
              </Link>

              {/* Merch */}
              <Link to="/merch" className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  Merch Shop
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Cute apparel, accessories, and prints featuring my original character designs.
                </p>
              </Link>

              {/* Commissions */}
              <Link to="/commissions" className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
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
        <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/20">
          {/* Decorative artwork */}
          <div className="absolute left-10 top-10 opacity-20">
            <img 
              src="https://storage.ko-fi.com/cdn/useruploads/post/46f4b49e-6b70-4d8c-8859-ce007f41e4c7_frogs-pack1.png" 
              alt="" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="absolute right-10 bottom-10 opacity-20">
            <img 
              src="https://storage.ko-fi.com/cdn/useruploads/post/46f4b49e-6b70-4d8c-8859-ce007f41e4c7_frogs-pack1.png" 
              alt="" 
              className="w-40 h-40 object-contain transform scale-x-[-1]"
            />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Let's <span className="text-gradient-accent">Connect</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Come hang out on stream, grab some art, or just say hi! 
                I love meeting fellow creatives and dreamers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2 rounded-full px-8 glow-primary">
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
