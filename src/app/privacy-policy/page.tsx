import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nymbus Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6">
              <p>
                This Privacy Policy describes how NYMBUS, Inc. (&quot;Nymbus,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information
                about you when you visit our website at www.nymbus.com.
              </p>
              <h2 className="text-white text-xl font-bold mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when
                you fill out a form, request a demo, or contact us. This may
                include your name, email address, phone number, company name,
                and job title.
              </p>
              <h2 className="text-white text-xl font-bold mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to comply
                with legal obligations.
              </p>
              <h2 className="text-white text-xl font-bold mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at privacy@nymbus.com.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
