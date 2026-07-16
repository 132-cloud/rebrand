export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Load Lora and neue-haas-grotesk-text from Google Fonts for V2 design */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Lora:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .v2-layout { background: white; overflow-x: hidden; }
        .v2-layout ~ footer { display: none; }
        header:has(~ main .v2-layout) { display: none; }
      `}</style>
      <div className="v2-layout">
        {children}
      </div>
    </>
  );
}
