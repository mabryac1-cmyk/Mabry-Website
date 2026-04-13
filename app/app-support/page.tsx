import { Metadata } from "next";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `App Support | ${businessInfo.name}`,
  description: `App support for ${businessInfo.name}. Contact information for internal app assistance.`,
  alternates: {
    canonical: "/app-support",
  },
  robots: { index: false, follow: true },
};

export default function AppSupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">App Support – Mabry AC</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This app is for internal use by Mabry's Air Conditioning & Heating, Inc. employees.
              </p>

              <p className="text-gray-700">
                For support, contact:<br />
                <a 
                  href={`mailto:${businessInfo.email}`}
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  {businessInfo.email}
                </a>
                <br />
                <a 
                  href="tel:281-482-8400"
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  281-482-8400
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
