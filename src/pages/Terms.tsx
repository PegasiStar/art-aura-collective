import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none font-body text-foreground">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the maybeechristine website and services, you accept and agree to 
                be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Digital Products
              </h2>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">2.1 License Grant</h3>
              <p className="text-muted-foreground mb-4">
                When you purchase digital products (emotes, wallpapers, badges, etc.), you receive a 
                <strong> non-exclusive, non-transferable license</strong> to use the artwork for personal use 
                unless a commercial license is explicitly purchased.
              </p>
              
              <h3 className="font-display text-xl font-medium text-foreground mb-3">2.2 Personal Use Includes:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Using emotes on your personal Twitch/Discord channels</li>
                <li>Using wallpapers on your personal devices</li>
                <li>Displaying art in streams or videos for non-commercial purposes</li>
              </ul>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">2.3 Prohibited Uses:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Reselling or redistributing the digital files</li>
                <li>Claiming the artwork as your own creation</li>
                <li>Using in NFTs or blockchain-related projects</li>
                <li>Modifying and selling as your own work</li>
                <li>Using in any discriminatory, hateful, or illegal context</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. Commissions
              </h2>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">3.1 Commission Process</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>A 50% deposit is required before work begins</li>
                <li>The remaining 50% is due upon completion, before final files are delivered</li>
                <li>All communication should be kept professional and respectful</li>
              </ul>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">3.2 Revisions</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Two (2) rounds of minor revisions are included</li>
                <li>Major changes after approval of sketch may incur additional fees</li>
                <li>Additional revisions beyond the included rounds are charged at hourly rate</li>
              </ul>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">3.3 Rights & Usage</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>I retain the right to display commissioned work in my portfolio</li>
                <li>Commercial usage rights can be negotiated for an additional fee</li>
                <li>You may not resell commissioned work without explicit written permission</li>
              </ul>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">3.4 Refusal of Service</h3>
              <p className="text-muted-foreground">
                I reserve the right to decline any commission for any reason, including but not limited to: 
                hateful content, NSFW content I'm not comfortable with, or requests that violate my values.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Physical Merchandise
              </h2>
              <p className="text-muted-foreground">
                Physical merchandise purchased through our Etsy shop (MaybeeAStore) or Shopify store is 
                subject to those platforms' terms of service in addition to these terms. See our Refund 
                Policy for returns and exchanges information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All artwork, designs, characters (including Fwog), and content on this website are the 
                intellectual property of maybeechristine unless otherwise stated. Unauthorized reproduction, 
                distribution, or use is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                maybeechristine shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from the use of our products or services. Our total liability shall not 
                exceed the amount paid for the specific product or service in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be posted on this page 
                with an updated revision date. Continued use of our services after changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                8. Contact
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact:
                <br />
                <a href="mailto:maybeechristinettv@gmail.com" className="text-primary hover:underline">
                  maybeechristinettv@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
