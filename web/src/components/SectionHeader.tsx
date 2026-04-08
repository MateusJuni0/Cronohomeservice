interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="mb-3 text-xs font-medium tracking-[0.25em] uppercase" style={{ color: "#E67E22" }}>
        {eyebrow}
      </p>
      <h2
        className="font-serif text-2xl font-light leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
        style={{ color: "#FFFFFF" }}
      >
        {title}
      </h2>
      <span
        className={`mt-3 mb-3 block h-[2px] w-10 sm:mt-5 sm:mb-4 sm:w-12 ${centered ? "mx-auto" : ""}`}
        style={{ background: "#E67E22" }}
      />
      {subtitle && (
        <p
          className={`text-sm sm:text-base ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}
          style={{ color: "#D6D3D1" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
