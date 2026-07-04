export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-6 py-6.5 md:px-8">
      <div className="mx-auto flex max-w-295 items-center justify-between text-[12.5px] text-slate-soft">
        <span className="font-mono">© 2026 Ernesto</span>
        <div className="flex gap-5">
          <a href="#" className="text-slate transition-colors hover:text-ink">
            GitHub
          </a>
          <a href="#" className="text-slate transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a
            href="mailto:ernesto-av@hotmail.com"
            className="text-slate transition-colors hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
