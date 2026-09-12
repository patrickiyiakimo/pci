import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  dark: "bg-ink text-white hover:bg-contrast",
  white: "bg-white text-accent-dark hover:bg-ice",
  outline: "border border-contrast/20 text-contrast hover:border-accent hover:text-accent",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-contrast hover:text-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

    if (isExternal) {
      return (
        <a href={href} className={classes} onClick={onClick} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
