import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Products",
    links: [
      { title: "Core Processing", href: "/products/core-processing/" },
      { title: "Back Office", href: "/products/back-office/" },
      { title: "Front Office", href: "/products/front-office/" },
      { title: "Digital Banking", href: "/products/digital-banking/" },
      { title: "Account Opening", href: "/products/account-opening/" },
      { title: "Levels", href: "/products/levels/" },
      { title: "Connect", href: "/products/connect/" },
      { title: "Insights", href: "/products/insights/" },
      { title: "Managed Services", href: "/products/managed-services/" },
      { title: "Nymbus Labs", href: "/labs/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "Launch a digital brand", href: "/solutions/launch-digital-brand/" },
      { title: "Enter a new market", href: "/solutions/new-market/" },
      { title: "Accelerate M&A", href: "/solutions/accelerate-ma/" },
      { title: "Private label banking", href: "/solutions/private-label/" },
      { title: "Deploy a parallel core", href: "/solutions/parallel-core/" },
      { title: "Modernize your core", href: "/solutions/modernize-core/" },
      { title: "Launch a de novo bank", href: "/solutions/de-novo/" },
      { title: "Community banks", href: "/solutions/community-banks/" },
      { title: "Credit unions", href: "/solutions/credit-unions/" },
      { title: "De novo banks", href: "/solutions/de-novo-banks/" },
      { title: "Fintechs", href: "/solutions/fintechs/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Insights", href: "/insights/" },
      { title: "Customers", href: "/customers/" },
      { title: "Partners", href: "/partners/" },
      { title: "Product releases", href: "/product-releases/" },
      { title: "AI", href: "/ai/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Nymbus", href: "/about/" },
      { title: "CUSO", href: "/cuso/" },
      { title: "Jobs", href: "/careers/" },
      { title: "News", href: "/news/" },
      { title: "Press", href: "/press/" },
      { title: "Contact sales", href: "/contact/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy policy", href: "/privacy-policy/" },
      { title: "Terms of service", href: "/legal-information/master-agreement/" },
    ],
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/nymbus",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Twitter",
    href: "https://twitter.com/NymbusCore",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    title: "Medium",
    href: "https://medium.com/@nymbuslabs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

const securityBadges = [
  { alt: "SOC 1", src: "/images/security/soc1.png" },
  { alt: "SOC 2", src: "/images/security/soc2.png" },
  { alt: "PCI-DSS", src: "/images/security/pci-dss.png" },
  { alt: "Penetration Tested", src: "/images/security/pen-test.png" },
  { alt: "GDPR", src: "/images/security/gdpr.png" },
  { alt: "CCPA", src: "/images/security/ccpa.png" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container-site py-16 md:py-20">
        {/* Top section: Logo + Columns */}
        <div className="grid grid-cols-12 gap-8">
          {/* Logo column */}
          <div className="col-span-12 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logomark.min.svg"
                alt="Nymbus logomark"
                width={29}
                height={22}
                className="h-7 w-auto"
              />
            </Link>
          </div>

          {/* Link columns */}
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-neutral-900 text-sm font-semibold mb-4">
                    {column.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors no-underline"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-12 pt-8 border-t border-neutral-100">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {securityBadges.map((badge) => (
              <figure key={badge.alt} className="m-0">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </figure>
            ))}
          </div>

          {/* Bottom row: copyright, address, social */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-neutral-400 text-xs">
              <span>© {currentYear} NYMBUS, All rights reserved.</span>
              <span>208 N Laura St, 8th & 9th floor, Jacksonville, FL 32202</span>
              <a
                href="tel:+18552107874"
                className="text-neutral-400 hover:text-neutral-700 transition-colors no-underline"
              >
                +1 (855) 210-7874
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-700 transition-colors no-underline"
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
