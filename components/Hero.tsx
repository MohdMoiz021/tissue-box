import TissueBoxArt from "./TissueBoxArt";
import WaveDivider from "./WaveDivider";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-32 pb-16 md:pt-40">
      {/* soft ambient blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-72 w-72 rounded-blob bg-bloom/25 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 bottom-0 h-80 w-80 rounded-blob bg-mist/25 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-pine/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-pine-dark">
            Softness, delivered
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
            Every pull should feel like{" "}
            <span className="italic text-pine">the first one.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Yobysin tissues are three-ply, plant-based, and dermatologist tested —
            made for the faces that catch every sneeze, tear, and spill in your
            house.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-pine/20 transition hover:bg-pine-dark"
            >
              Explore products
            </a>
            <a
              href="#amazon"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine-dark"
            >
              Order on Amazon →
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-ink/60">
            <div>
              <p className="font-display text-2xl text-ink">40,000+</p>
              <p>5-star reviews</p>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <p className="font-display text-2xl text-ink">100%</p>
              <p>plant-based fiber</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <TissueBoxArt className="w-full drop-shadow-xl" />
        </div>
      </div>

      <div className="mt-16">
        <WaveDivider fill="#FFFFFF" />
      </div>
    </section>
  );
}
