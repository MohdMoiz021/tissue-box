const links = [
  { href: "#products", label: "Products" },
  { href: "#reviews", label: "Reviews" },
  { href: "#amazon", label: "Order on Amazon" },
  { href: "#about", label: "About" },
];

export default function NavBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-display italic text-2xl text-pine-dark">
          Yobysin
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition hover:text-pine-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#amazon"
          className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-pine-dark"
        >
          Shop Now
        </a>
      </nav>
    </header>
  );
}
