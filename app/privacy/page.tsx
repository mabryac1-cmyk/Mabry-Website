import { Metadata } from "next";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${businessInfo.name}`,
  description: `Privacy policy for ${businessInfo.name}. Information about how we collect and use customer data.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Mabry's Air Conditioning & Heating, Inc. uses this application internally for business operations.
              </p>

              <p className="text-gray-700 mb-6">
                The app collects customer and employee information including names, contact details, service addresses, photos, invoices, and electronic signatures strictly for HVAC service operations.
              </p>

              <p className="text-gray-700 mb-4">
                Data is not sold or shared with third parties except as required for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                <li>Email delivery (SendGrid)</li>
                <li>Cloud storage (Firebase)</li>
                <li>App functionality</li>
              </ul>

              <p className="text-gray-700 mb-6">
                This app is used exclusively by company employees.
              </p>

              <p className="text-gray-700">
                For questions, contact:<br />
                <a 
                  href={`mailto:${businessInfo.email}`} 
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  {businessInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
