export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-6 py-6.5 md:px-8">
      <div className="mx-auto flex max-w-295 items-center justify-between text-[12.5px] text-slate-soft">
        <span className="font-mono">© 2026 Ernesto</span>
        <div className="flex gap-5">
          <a
            href="https://github.com/Eavilesz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ernesto-aviles-zavala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
