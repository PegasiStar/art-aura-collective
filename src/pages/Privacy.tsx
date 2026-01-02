import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none font-body text-foreground">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                maybeechristine ("we," "our," or "us") respects your privacy and is committed to protecting 
                your personal data. This privacy policy explains how we collect, use, and safeguard your 
                information when you visit our website or make purchases.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Contact Information:</strong> Name, email address when you submit commission requests or contact forms</li>
                <li><strong>Transaction Data:</strong> Purchase history, payment information (processed securely through third-party platforms like Ko-Fi and Etsy)</li>
                <li><strong>Usage Data:</strong> How you interact with our website, pages visited, time spent on pages</li>
                <li><strong>Device Information:</strong> Browser type, IP address, device type for analytics purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To process and fulfill your orders and commissions</li>
                <li>To communicate with you about your purchases or inquiries</li>
                <li>To send you updates about new products (only if you've opted in)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                We use third-party platforms to process payments and fulfill orders:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Ko-Fi:</strong> For digital product sales and tips</li>
                <li><strong>Etsy:</strong> For physical merchandise sales</li>
                <li><strong>Shopify:</strong> For direct merchandise sales (when enabled)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Each of these services has their own privacy policies. We encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure. We strive to 
                use commercially acceptable means to protect your data but cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Cookies
              </h2>
              <p className="text-muted-foreground">
                Our website may use cookies to enhance your browsing experience. You can set your 
                browser to refuse cookies, though this may affect some website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                8. Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
