import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  serviceType: z.string().min(1, "Please select a service"),
  details: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteForm({ className }: { className?: string }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    toast({
      title: "Quote Request Received!",
      description: "We'll be in touch shortly to schedule your service.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Card className={`border-t-4 border-t-accent shadow-xl ${className}`}>
      <CardHeader className="bg-primary/5 pb-6">
        <CardTitle className="text-2xl font-display uppercase tracking-wide text-primary">
          Get a Free Quote
        </CardTitle>
        <p className="text-muted-foreground text-sm mt-2">
          Fill out the form below and our expert team will contact you within 24 hours.
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Input 
              placeholder="Your Name" 
              {...form.register("name")}
              className="bg-background"
            />
            {form.formState.errors.name && (
              <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Input 
                placeholder="Phone Number" 
                {...form.register("phone")} 
                className="bg-background"
              />
              {form.formState.errors.phone && (
                <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <Input 
                placeholder="Email Address" 
                {...form.register("email")} 
                className="bg-background"
              />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <select 
              {...form.register("serviceType")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="">Select Service Needed</option>
              <option value="ac-repair">AC Repair</option>
              <option value="ac-install">AC Installation</option>
              <option value="heating">Heating Services</option>
              <option value="maintenance">Maintenance</option>
            </select>
            {form.formState.errors.serviceType && (
              <p className="text-xs text-destructive">{form.formState.errors.serviceType.message}</p>
            )}
          </div>

          <Textarea 
            placeholder="Tell us about your issue..." 
            {...form.register("details")} 
            className="bg-background min-h-[100px]"
          />

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider h-12 text-lg shadow-lg shadow-accent/20"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Quote"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
