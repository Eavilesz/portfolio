import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/your-username", label: "GitHub" },
  { href: "https://linkedin.com/in/your-username", label: "LinkedIn" },
  { href: "mailto:hello@yourdomain.com", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Ernesto Aviles.
        </p>

        <nav className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
