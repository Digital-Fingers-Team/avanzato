export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-gradient-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple bg-[length:300%_100%] bg-clip-text text-transparent">
      {children}
    </span>
  );
}
