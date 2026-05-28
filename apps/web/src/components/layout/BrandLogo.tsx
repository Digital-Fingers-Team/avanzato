import Image from "next/image";

export default function BrandLogo({
  variant = "mark",
  className = "",
  priority = false,
}: {
  variant?: "mark" | "wordmark";
  className?: string;
  priority?: boolean;
}) {
  const isWordmark = variant === "wordmark";

  return (
    <Image
      src={isWordmark ? "/logo+name.png" : "/mini-logo.png"}
      alt="Avanzato logo"
      width={isWordmark ? 240 : 48}
      height={isWordmark ? 96 : 48}
      priority={priority}
      sizes={isWordmark ? "240px" : "48px"}
      className={`object-contain ${className}`}
    />
  );
}
