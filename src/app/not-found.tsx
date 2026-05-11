import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-site text-center">
        <h1 className="text-[4rem] md:text-[6rem] font-bold text-white/10 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          Go Home
        </Button>
      </div>
    </section>
  );
}
