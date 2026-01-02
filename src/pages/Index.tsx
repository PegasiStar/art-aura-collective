import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Film, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArtCard from "@/components/shared/ArtCard";
import { artworks } from "@/data/artworks";

const Index = () => {
  const featuredArt = artworks.filter((art) => art.featured).slice(0, 3);

  const services = [
    {
      icon: Film,
      title: "2D Animation",
      description: "Hand-crafted frame-by-frame animation that brings characters to life.",
    },
    {
      icon: Sparkles,
      title: "Emotes & Badges",
      description: "Custom Twitch emotes and sub badges for streamers and content creators.",
    },
    {
      icon: PenTool,
      title: "Character Design",
      description: "Unique, memorable characters that connect with audiences.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section with background image */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://storage.ko-fi.com/cdn/useruploads/e2dca365-2c45-4042-ace0-8931acf14ee9_68dfb528-25e5-450c-9c0f-4497818d2a1d.png')`,
            }}
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
          
          {/* Content */}
          <div className="container relative z-10 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6 font-body text-sm border border-primary/30">
              <Sparkles className="h-4 w-4" />
              <span>Where Magic Meets Animation</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Bringing{" "}
              <span className="text-gradient-accent">Enchanted Worlds</span>
              <br />
              to Life
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Digital artist crafting magical animated stories that captivate
              audiences and transport them to extraordinary realms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 text-base rounded-full px-8 glow-primary">
                <Link to="/digital-art">
                  Explore My Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 text-base rounded-full px-8 border-border hover:bg-secondary">
                <a href="https://www.twitch.tv/maybeechristine" target="_blank" rel="noopener noreferrer">
                  <Palette className="h-5 w-5" />
                  Watch Showreel
                </a>
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
                Featured <span className="text-primary">Work</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                Discover our latest magical creations and animated adventures.
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
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                From concept to final frame, we bring your vision to life.
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute right-10 top-1/2 hidden lg:block">
              <div className="w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="gap-2 rounded-full px-6">
                <Link to="/commissions">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="absolute left-10 top-10 opacity-20">
            <img 
              src="https://storage.ko-fi.com/cdn/useruploads/post/5699ce56-123c-4fa8-b511-afa6a90fe879_bobatowallpaper5.png" 
              alt="" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="absolute right-10 bottom-10 opacity-30">
            <img 
              src="https://storage.ko-fi.com/cdn/useruploads/post/46f4b49e-6b70-4d8c-8859-ce007f41e4c7_frogs-pack1.png" 
              alt="" 
              className="w-40 h-40 object-contain"
            />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to Create Something{" "}
                <span className="text-gradient-accent">Magical</span>?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's bring your animated dreams to life. Whether it's a short film, 
                commercial, or full series – we're here to help.
              </p>
              <Button asChild size="lg" className="gap-2 rounded-full px-8 glow-primary">
                <Link to="/commissions">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
