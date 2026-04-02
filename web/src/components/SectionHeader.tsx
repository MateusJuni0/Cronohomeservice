interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="mb-3 text-xs font-medium tracking-[0.25em] text-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <span className={`mt-5 mb-4 block h-[2px] w-12 bg-gold ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-muted text-base ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
