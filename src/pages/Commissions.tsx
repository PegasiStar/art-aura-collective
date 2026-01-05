import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import VineDecoration from "@/components/shared/VineDecoration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Clock, Mail, AlertCircle } from "lucide-react";

import commissionShowcase from "@/assets/commission-showcase.png";

const commissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  commissionType: z.string().min(1, "Please select a commission type"),
  budget: z.string().min(1, "Please provide your budget range"),
  description: z.string().trim().min(20, "Please provide more details (at least 20 characters)").max(2000, "Description is too long"),
});

type CommissionFormData = z.infer<typeof commissionSchema>;

const commissionTypes = [
  { name: "Emote Pack (5-6)", price: "From $60", description: "Custom Twitch/Discord emotes" },
  { name: "Single Emote", price: "From $15", description: "One custom emote" },
  { name: "Character Art", price: "From $80", description: "Half or full body character" },
  { name: "Wallpaper", price: "From $40", description: "Desktop or phone wallpaper" },
  { name: "Badge Set", price: "From $50", description: "Sub badges for Twitch" },
  { name: "Custom Request", price: "Varies", description: "Something else? Let's chat!" },
];

const Commissions = () => {
  const [isOpen] = useState(true);
  const { toast } = useToast();
  
  const form = useForm<CommissionFormData>({
    resolver: zodResolver(commissionSchema),
    defaultValues: {
      name: "",
      email: "",
      commissionType: "",
      budget: "",
      description: "",
    },
  });

  const onSubmit = (data: CommissionFormData) => {
    toast({
      title: "Commission Request Sent! 🐸",
      description: "I'll get back to you within 2-3 business days. Thank you!",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 relative overflow-hidden">
        {/* Decorative vines */}
        <VineDecoration variant="top-left" className="opacity-40" />
        <VineDecoration variant="top-right" className="opacity-40" />
        
        <div className="container py-12 md:py-20 relative z-10">
          <SectionHeader
            title="Commission Info 🎨"
            subtitle="Let's create something magical together!"
          />

          {/* Showcase Image */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden border-2 border-border shadow-xl">
              <img 
                src={commissionShowcase}
                alt="Commission example - witch character in enchanted village"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 font-body">
              Example of a custom character commission piece
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-10">
            <Badge 
              className={`text-lg px-6 py-2 font-semibold ${isOpen ? "bg-primary/20 text-primary border-primary/30" : "bg-destructive/20 text-destructive border-destructive/30"} border`}
            >
              {isOpen ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Commissions OPEN
                </>
              ) : (
                <>
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Commissions CLOSED
                </>
              )}
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Bottom decorations */}
            <VineDecoration variant="cattails-left" className="opacity-30" />
            
            {/* Pricing & Info */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">
                Commission Types & Pricing
              </h3>
              
              <div className="space-y-4 mb-8">
                {commissionTypes.map((type) => (
                  <div key={type.name} className="bg-card p-4 rounded-xl border-2 border-border hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-display text-foreground">{type.name}</h4>
                        <p className="font-body text-sm text-muted-foreground">{type.description}</p>
                      </div>
                      <Badge variant="secondary" className="font-body font-semibold">{type.price}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Terms */}
              <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
                <h4 className="font-display text-foreground mb-4">📋 Terms & Conditions</h4>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    50% deposit required before starting work
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Remaining 50% due upon completion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    2 free revisions included, additional revisions at extra cost
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Turnaround: 1-3 weeks depending on complexity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Personal and commercial use licenses available
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    I reserve the right to decline any commission
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-2 text-muted-foreground font-body">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Average response time: 2-3 business days</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-3xl border-2 border-border shadow-lg">
              <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Request a Commission
              </h3>

              {isOpen ? (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                      Your Name
                    </label>
                    <Input 
                      {...form.register("name")}
                      placeholder="What should I call you?"
                      className="font-body rounded-xl"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                      Email Address
                    </label>
                    <Input 
                      {...form.register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="font-body rounded-xl"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                      Commission Type
                    </label>
                    <select 
                      {...form.register("commissionType")}
                      className="w-full px-4 py-2 rounded-xl border border-input bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a type...</option>
                      {commissionTypes.map((type) => (
                        <option key={type.name} value={type.name}>{type.name}</option>
                      ))}
                    </select>
                    {form.formState.errors.commissionType && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.commissionType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                      Budget Range (USD)
                    </label>
                    <Input 
                      {...form.register("budget")}
                      placeholder="e.g., $50-100"
                      className="font-body rounded-xl"
                    />
                    {form.formState.errors.budget && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-1.5 block">
                      Project Description
                    </label>
                    <Textarea 
                      {...form.register("description")}
                      placeholder="Tell me about your project! Include details like style preferences, characters, colors, intended use, references, etc."
                      rows={5}
                      className="font-body resize-none rounded-xl"
                    />
                    {form.formState.errors.description && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.description.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full font-semibold">
                    Send Commission Request 🐸
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">😴</span>
                  <h4 className="font-display text-xl text-foreground mb-2">
                    Commissions are currently closed
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Follow me on social media to be notified when they reopen!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Commissions;
