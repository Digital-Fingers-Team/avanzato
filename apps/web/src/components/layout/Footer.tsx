export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center text-sm text-muted">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-2xl font-bold text-soft">
          Avanzato<span className="text-accent-purple">.</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Avanzato Agency. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="mailto:baraasaad007@gmail.com" className="hover:text-soft">Email</a>
          <a href="https://wa.me/201036016057" className="hover:text-soft">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
