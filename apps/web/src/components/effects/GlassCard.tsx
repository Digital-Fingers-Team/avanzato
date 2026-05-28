export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-accent-purple/30 hover:bg-white/10 hover:shadow-lg hover:shadow-accent-purple/10 ${className}`}
    >
      {children}
    </div>
  );
}
