import Link from "next/link";

export default function Logo({ className = "", showWordmark = true, dark = false }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-bold tracking-tight text-white">
        G
      </span>
      {showWordmark && (
        <span
          className={`text-xl font-bold tracking-tight ${
            dark ? "text-ice" : "text-contrast"
          }`}
        >
          PCI&nbsp;Apps
        </span>
      )}
    </Link>
  );
}
