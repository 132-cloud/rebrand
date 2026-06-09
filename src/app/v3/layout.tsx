export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .v3-layout { background: #000; overflow-x: hidden; }
        .v3-layout ~ footer { display: none; }
        header:has(~ main .v3-layout) { display: none; }
      `}</style>
      <div className="v3-layout">
        {children}
      </div>
    </>
  );
}
