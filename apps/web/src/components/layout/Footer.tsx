import BrandLogo from "@/components/layout/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center text-sm text-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">
        <BrandLogo variant="wordmark" className="mb-4 h-20 w-56" />
        <p>&copy; {new Date().getFullYear()} Avanzato Agency. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="mailto:baraasaad007@gmail.com" className="hover:text-soft">Email</a>
          <a href="https://wa.me/201036016057" className="hover:text-soft">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
