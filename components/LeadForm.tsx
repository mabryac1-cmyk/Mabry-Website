"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().optional(),
  message: z.string().optional(),
  city: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  className?: string;
  preselectedService?: string;
  preselectedCity?: string;
}

export function LeadForm({ className = "", preselectedService, preselectedCity }: LeadFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      service: preselectedService || "",
      city: preselectedCity || "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Unable to submit. Please call us at 281-331-5248.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-2xl p-8 shadow-xl ${className}`}>
        <div className="text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
          <p className="text-muted-foreground">
            We've received your request and will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-xl ${className}`}>
      <h3 className="text-2xl font-bold text-primary mb-2">Get a Free Quote</h3>
      <p className="text-muted-foreground mb-6">
        No hidden charges. Honest, flat-rate pricing.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name *"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
            data-testid="input-name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address *"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
            data-testid="input-email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number *"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
            data-testid="input-phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("service")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition bg-white"
            data-testid="select-service"
          >
            <option value="">Select a Service</option>
            <option value="ac-repair">AC Repair</option>
            <option value="heating-repair">Heating Repair & Maintenance</option>
            <option value="ac-installation">AC Installation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Tell us about your needs..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
            data-testid="textarea-message"
          />
        </div>

        <input type="hidden" {...register("city")} />

        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" data-testid="error-message">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          data-testid="button-submit-lead"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Request Quote
            </>
          )}
        </button>
      </form>
    </div>
  );
}
