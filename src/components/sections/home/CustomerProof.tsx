import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stories = [
  {
    client: "PeoplesBank",
    image: "/images/peoples-bg.jpg",
    imagePosition: "object-right",
    logo: "/images/logos/peoplesbank-logo-wht.svg",
    summary: "The largest U.S. community bank to fully adopt a modern core with Nymbus.",
    href: "/customers/peoplesbank/",
  },
  {
    client: "MSUFCU",
    image: "/images/msu-bg.jpeg",
    imagePosition: "object-center",
    logo: "/images/logos/msufcu-logo.svg",
    summary: "Luminaries Award winner for core conversion innovation with Nymbus.",
    href: "/customers/msufcu/",
  },
  {
    client: "ZYNLO Bank",
    image: "/images/zynlo-bg.jpg",
    imagePosition: "object-center",
    logo: "/images/Zynlo Logo.svg",
    summary: "$163M+ in deposits for PeoplesBank through a digital-first sidecar brand.",
    href: "/customers/zynlo/",
  },
];

export function CustomerProof() {
  return (
    <section className="relative section-padding pb-0 bg-black">
      {/* Bottom fade to black for seamless transition into FinalCTA */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />

      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-12 leading-tight text-white">
            Powering financial institutions of all sizes.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-24">
          {stories.map((story, index) => (
            <ScrollReveal key={story.client} delay={index * 0.1}>
              <div className="flex flex-col">
                {/* Image card */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={story.image}
                    alt={story.client}
                    fill
                    className={`object-cover ${story.imagePosition}`}
                  />
                  {/* Client logo overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={story.logo} alt={story.client} className="h-6 w-auto brightness-0 invert" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  {story.summary}
                </p>

                {/* Link */}
                <Link
                  href={story.href}
                  className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline"
                >
                  Read {story.client}&apos;s story &rsaquo;
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
