export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .v4-layout { background: #000; overflow-x: hidden; }
        .v4-layout ~ footer { display: none; }
        
        /* Header logo swap on Guide theme */
        body.is-guide-theme header .hidden.md\\:block {
          display: none !important;
        }
        body.is-guide-theme header .flex-shrink-0::after {
          content: '';
          display: block;
          width: 120px;
          height: 24px;
          background: url('/images/Logo (7).svg') no-repeat center / contain;
        }
        body.is-guide-theme header .flex-shrink-0 svg {
          display: none !important;
        }
        
        /* Header nav text color: black */
        body.is-guide-theme header nav button {
          color: #171216 !important;
        }
        body.is-guide-theme header nav button:hover {
          color: #000 !important;
          background-color: rgba(0,0,0,0.04) !important;
        }
        
        /* Contact sales: black text, rounded */
        body.is-guide-theme header a[href="/contact"],
        body.is-guide-theme header a[href="/contact/"] {
          color: #171216 !important;
          border-color: rgba(0,0,0,0.2) !important;
          border-radius: 9999px !important;
        }
        body.is-guide-theme header a[href="/contact"]:hover,
        body.is-guide-theme header a[href="/contact/"]:hover {
          background-color: rgba(0,0,0,0.04) !important;
          color: #000 !important;
        }
        
        /* See a demo: black fill, white text, rounded */
        body.is-guide-theme header a[href="/request-demo"],
        body.is-guide-theme header a[href="/request-demo/"] {
          background-color: #000 !important;
          color: #fff !important;
          border-radius: 9999px !important;
        }
        body.is-guide-theme header a[href="/request-demo"]:hover,
        body.is-guide-theme header a[href="/request-demo/"]:hover {
          background-color: #333 !important;
        }

        /* Header dropdown white background on Guide theme */
        body.is-guide-theme .bg-charcoal-dark {
          background-color: #ffffff !important;
          border-color: rgba(0,0,0,0.08) !important;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08) !important;
        }
        body.is-guide-theme .bg-charcoal-dark h4 {
          color: rgba(0,0,0,0.4) !important;
        }
        body.is-guide-theme .bg-charcoal-dark .text-white {
          color: #171216 !important;
        }
        body.is-guide-theme .bg-charcoal-dark .text-white\\/40 {
          color: rgba(0,0,0,0.5) !important;
        }
        body.is-guide-theme .bg-charcoal-dark [class*="text-white/40"],
        body.is-guide-theme .bg-charcoal-dark [class*="text-xs"] {
          color: rgba(0,0,0,0.45) !important;
        }
        body.is-guide-theme .bg-charcoal-dark a:hover {
          background-color: rgba(0,0,0,0.04) !important;
        }

        /* Proof strip: blue values → black */
        .theme-guide .text-\\[\\#0065ff\\] {
          color: #000000 !important;
        }

        /* Logo strip + proof strip: white background */
        .theme-guide section.bg-white {
          background-color: #ffffff !important;
        }
        .theme-guide #logo-bar {
          background-color: #ffffff !important;
          background-image: none !important;
        }

        /* Governed AI Approach card: liquid glass effect */
        .theme-guide a[href="/ai"][class*="rounded-2xl"],
        .theme-guide a[href="/ai/"][class*="rounded-2xl"] {
          background: rgba(219, 219, 219, 0.4) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid #ffffff !important;
        }
        /* Hide the animated pulse border in Guide theme */
        .theme-guide .relative.rounded-2xl > .absolute {
          display: none !important;
        }

        /* Platform overview heading: black */
        .theme-guide .section-padding.bg-charcoal-dark h4 .font-bold {
          color: #000000 !important;
        }

        /* Architecture diagram heading: black */
        .theme-guide #architecture-diagram h4 .font-bold {
          color: #000000 !important;
        }

        /* Scrolled header: white background instead of grey */
        body.is-guide-theme header[class*="bg-charcoal-dark"] {
          background-color: rgba(255, 255, 255, 0.95) !important;
          border-color: rgba(0,0,0,0.06) !important;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06) !important;
        }
      `}</style>
      <div className="v4-layout">
        {children}
      </div>
    </>
  );
}
