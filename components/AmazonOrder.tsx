import WaveDivider from "./WaveDivider";

export default function AmazonOrder() {
  return (
    <section id="amazon" className="relative bg-pine-dark py-20 text-paper md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-paper/60">
          Fast, reliable delivery
        </p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">
          Prefer one-click ordering? <br className="hidden md:block" />
          Find every Yobysin box on Amazon.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-paper/70">
          Prime shipping, easy subscribe-and-save discounts, and hassle-free
          returns — all through the store you already trust.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full bg-[#FF9900] px-8 py-4 text-base font-semibold text-ink shadow-lg shadow-black/20 transition hover:brightness-105"
          >
            Buy Now on Amazon
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-8 py-4 text-base font-semibold text-paper transition hover:border-paper/60"
          >
            Compare products
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-paper/10 pt-10 text-left sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Prime</p>
            <p className="mt-1 text-sm text-paper/60">1–2 day shipping on every box</p>
          </div>
          <div>
            <p className="font-display text-2xl">Subscribe &amp; Save</p>
            <p className="mt-1 text-sm text-paper/60">Up to 15% off recurring orders</p>
          </div>
          <div>
            <p className="font-display text-2xl">Easy Returns</p>
            <p className="mt-1 text-sm text-paper/60">30-day hassle-free policy</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <WaveDivider fill="#FFFFFF" />
      </div>
    </section>
  );
}
