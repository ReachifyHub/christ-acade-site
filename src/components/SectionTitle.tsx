
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  textColor?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  alignment = "center",
  textColor = "text-school-primary",
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-2xl mb-12 ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <p className="text-school-secondary font-medium uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${textColor} mb-4`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-school-secondary ${alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""}`}></div>
    </div>
  );
};

export default SectionTitle;
