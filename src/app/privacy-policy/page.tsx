import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nymbus Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-[#171216]">
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/footer-cta-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#171216] mb-6">
                Privacy Policy
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl prose prose-neutral max-w-none text-neutral-500 leading-relaxed space-y-6">
              <p>
                This Privacy Policy explains how NYMBUS uses your name and email
                information and how NYMBUS tracks visits to its website.
              </p>

              <h2 className="text-[#171216] text-xl font-bold mt-8 mb-4">
                Your Information
              </h2>
              <p>
                When you enter www.nymbus.com you have the opportunity to
                contact us by entering your name and email address. You may also
                sign up to receive our newsletters and other communications. We
                only use your information for the purpose of sending you emails
                on relevant topics for informational or marketing purposes. You
                may opt out of these communications at any time by following the
                instructions contained in our emails.{" "}
                <strong className="text-[#171216]">
                  We will never share your information with any third party at
                  any time
                </strong>
                .
              </p>

              <h2 className="text-[#171216] text-xl font-bold mt-8 mb-4">
                Tracking Visits to Our Website
              </h2>
              <p>
                To better understand activity on its website, NYMBUS uses Google
                Analytics, a service that uses &quot;cookies&quot; to track anonymous
                information regarding your activities on www.nymbus.com. This
                includes information about your visit, including your device
                type, traffic source and geographic area, as well as pages
                visited and links clicked. Some behavioral data may be provided
                by Google &quot;cookies&quot; that show your gender and age range. This
                data is used to better understand how visitors access
                www.nymbus.com and provide a better overall user experience.
              </p>
              <p>
                NYMBUS also uses pixels on Twitter, LinkedIn and the Adaptive
                network to track activity on www.nymbus.com, potentially
                including pages visited and links clicked. This data is used to
                track the effectiveness of our advertisements, as well as to
                build remarketing audiences based on actions taken on
                www.nymbus.com.
              </p>
              <p>
                NYMBUS takes your privacy seriously and ensures that no
                personally identifying information is stored in the
                &quot;cookies&quot;. To opt out of Google&apos;s cookies you can{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#697CB2] underline hover:text-[#4a5d8a]"
                >
                  click here
                </a>
                . To opt out of third party cookies you can{" "}
                <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#697CB2] underline hover:text-[#4a5d8a]"
                >
                  click here
                </a>
                .
              </p>
              <p className="uppercase font-semibold text-neutral-700">
                BY VISITING WWW.NYMBUS.COM, YOU ACKNOWLEDGE, UNDERSTAND AND
                HEREBY AGREE THAT YOU ARE GIVING NYMBUS YOUR CONSENT TO TRACK
                YOUR ACTIVITIES THROUGH USE OF THESE TRACKING TECHNOLOGIES.
              </p>

              <hr className="border-neutral-200 my-8" />

              <p>
                <strong className="text-[#171216]">
                  Data Protection Officer (DPO):
                </strong>
                <br />
                <a
                  href="mailto:compliance@nymbus.com"
                  className="text-[#697CB2] underline hover:text-[#4a5d8a]"
                >
                  compliance@nymbus.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
