import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SocialIcons from "@/components/shared/SocialIcons";
import { Heart, Twitch, Users, Palette, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=625&fit=crop"
                    alt="maybeechristine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="absolute -top-4 -right-4 bg-accent text-accent-foreground text-lg px-4 py-2">
                  Ko-fi Ambassador ☕
                </Badge>
              </div>
              
              <div className="order-1 md:order-2">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Hey, I'm Christine! 🐸
                </h1>
                <p className="font-body text-lg text-muted-foreground mb-6">
                  South African LGBTQ+ digital artist, animator, and full-time creative chaos gremlin. 
                  I create cozy, nature-inspired art that feels like a warm hug on a rainy day.
                </p>
                <p className="font-body text-lg text-muted-foreground mb-6">
                  My work centers around frogs (especially my mascot Fwog! 🐸), swamps, lily pads, 
                  and all the peaceful vibes of nature. I believe art should make you feel something—
                  whether that's joy, comfort, or just a little smile.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Digital Art</Badge>
                  <Badge variant="outline">Animation</Badge>
                  <Badge variant="outline">Emotes</Badge>
                  <Badge variant="outline">Character Design</Badge>
                  <Badge variant="outline">Streaming</Badge>
                </div>
                <SocialIcons size={24} className="gap-4" />
              </div>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              What I Do 💚
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Digital Art
                </h3>
                <p className="font-body text-muted-foreground">
                  Emotes, wallpapers, character art, and illustrations for streamers 
                  and content creators who love cozy aesthetics.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border text-center hover-lift">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Twitch className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Streaming
                </h3>
                <p className="font-body text-muted-foreground">
                  I stream art, games, and chaos on Twitch! Come hang out, 
                  watch me draw, and be part of the cozy community.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Community
                </h3>
                <p className="font-body text-muted-foreground">
                  The Flipside is our Discord home—a safe, welcoming space for 
                  artists, gamers, and anyone who needs a cozy corner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-16 md:py-24 bg-accent/10">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Fun Facts About Me 🌿
            </h2>
            
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
              {[
                { emoji: "🐸", fact: "Fwog is my frog mascot and appears in almost all my art" },
                { emoji: "🇿🇦", fact: "Born and based in South Africa" },
                { emoji: "🏳️‍🌈", fact: "Proudly LGBTQ+ and creating safe spaces in my community" },
                { emoji: "☕", fact: "Official Ko-fi Ambassador" },
                { emoji: "🎮", fact: "Love cozy games, especially ones with frogs or nature themes" },
                { emoji: "🎨", fact: "Self-taught artist who started drawing frogs for fun" },
                { emoji: "🌙", fact: "Definitely a night owl—best art happens after midnight" },
                { emoji: "💚", fact: "Favorite color is obviously green (swamp green, specifically)" },
              ].map((item, index) => (
                <div key={index} className="bg-card p-4 rounded-xl border border-border flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="font-body text-foreground">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 animate-float" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Let's Create Something Together!
              </h2>
              <p className="font-body text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Whether you need custom emotes for your stream, want to commission 
                a piece of art, or just want to hang out—I'd love to connect with you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <Link to="/commissions">
                    Commission Art
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="https://discord.gg/theflipisde" target="_blank" rel="noopener noreferrer">
                    Join The Flipside
                    <Users className="h-4 w-4" />
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

export default About;
