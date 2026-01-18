"use client";

import { ChevronDown } from "lucide-react";
import { useState, useId } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  schemaId?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", schemaId }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uniqueId = useId();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="mt-12 bg-gray-50 rounded-2xl p-8">
      <script
        id={schemaId || `faq-schema-${uniqueId}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {title && <h3 className="text-2xl font-bold text-primary mb-6" data-testid="faq-title">{title}</h3>}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl border overflow-hidden"
            data-testid={`faq-item-${index}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
              data-testid={`faq-button-${index}`}
            >
              <span className="font-semibold text-primary pr-4">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`} 
              />
            </button>
            {openIndex === index && (
              <div 
                className="px-4 pb-4 text-muted-foreground"
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
