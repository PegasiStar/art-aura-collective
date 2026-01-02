import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Refunds = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Refund Policy
          </h1>
          
          <div className="prose prose-lg max-w-none font-body text-foreground">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Digital Products
              </h2>
              <div className="bg-accent/10 p-6 rounded-xl mb-4">
                <p className="text-foreground font-semibold">
                  ⚠️ Due to the nature of digital products, all sales are final.
                </p>
              </div>
              <p className="text-muted-foreground mb-4">
                Digital products (emotes, wallpapers, badges, etc.) cannot be returned as they are 
                delivered instantly upon purchase. We encourage you to review all product descriptions 
                and previews before purchasing.
              </p>
              <p className="text-muted-foreground">
                <strong>Exceptions may be made for:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>Corrupted or damaged files that cannot be opened</li>
                <li>Accidental duplicate purchases (with proof)</li>
                <li>Products significantly different from the description</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Commissions
              </h2>
              
              <h3 className="font-display text-xl font-medium text-foreground mb-3">2.1 Cancellation by Client</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Before work begins:</strong> Full refund of deposit, minus any transaction fees</li>
                <li><strong>After sketch approval:</strong> No refund available; you will receive completed work for the paid deposit</li>
                <li><strong>During coloring/final stages:</strong> No refund; partial work may be delivered at artist's discretion</li>
              </ul>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">2.2 Cancellation by Artist</h3>
              <p className="text-muted-foreground">
                If I need to cancel a commission for any reason, you will receive a full refund of all 
                payments made, including the deposit.
              </p>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">2.3 Revision Disputes</h3>
              <p className="text-muted-foreground">
                Dissatisfaction with stylistic choices is not grounds for a refund. Please review my 
                portfolio thoroughly before commissioning to ensure my style matches your expectations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. Physical Merchandise
              </h2>
              
              <h3 className="font-display text-xl font-medium text-foreground mb-3">3.1 Returns</h3>
              <p className="text-muted-foreground mb-4">
                Physical merchandise may be returned within <strong>30 days</strong> of delivery if:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The item is unused and in original condition</li>
                <li>The item has original tags attached</li>
                <li>You have proof of purchase</li>
              </ul>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">3.2 Damaged or Defective Items</h3>
              <p className="text-muted-foreground">
                If you receive a damaged or defective item, please contact us within <strong>7 days</strong> of 
                delivery with photos of the issue. We will provide a replacement or full refund including 
                shipping costs.
              </p>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">3.3 Return Shipping</h3>
              <p className="text-muted-foreground">
                For non-defective returns, the customer is responsible for return shipping costs. 
                We recommend using tracked shipping for all returns.
              </p>

              <h3 className="font-display text-xl font-medium text-foreground mt-4 mb-3">3.4 Non-Returnable Items</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Custom or personalized items</li>
                <li>Items marked as final sale</li>
                <li>Items that have been worn, washed, or altered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Exchanges
              </h2>
              <p className="text-muted-foreground">
                We're happy to exchange items for different sizes where stock is available. Please 
                contact us before returning the item to confirm availability. Customer is responsible 
                for shipping costs for exchanges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Refund Processing
              </h2>
              <p className="text-muted-foreground">
                Approved refunds will be processed within <strong>5-10 business days</strong>. 
                The refund will be issued to the original payment method. Please note that your 
                bank may take additional time to reflect the refund in your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. How to Request a Refund
              </h2>
              <p className="text-muted-foreground mb-4">
                To request a refund or return, please email us at:
              </p>
              <a 
                href="mailto:maybeechristinettv@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                maybeechristinettv@gmail.com
              </a>
              <p className="text-muted-foreground mt-4">
                Please include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>Your order number or transaction ID</li>
                <li>Date of purchase</li>
                <li>Reason for return/refund request</li>
                <li>Photos (for damaged items)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Questions?
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about our refund policy, please don't hesitate to reach out. 
                I'm always happy to help resolve any issues! 🐸
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Refunds;
