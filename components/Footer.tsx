const links = [
  { href: "#products", label: "Products" },
  { href: "#reviews", label: "Reviews" },
  { href: "#amazon", label: "Order on Amazon" },
  { href: "#about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="bg-paper py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left md:px-10">
        <div>
          <p className="font-display italic text-2xl text-pine-dark">Yobysin</p>
          <p className="mt-1 text-sm text-ink/60">Softness, delivered since 2019.</p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-ink/70 hover:text-pine-dark">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink/40">
          © {new Date().getFullYear()} Yobysin Tissues. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
