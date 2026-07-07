import TissueBoxArt from "./TissueBoxArt";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center md:px-10">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">
            Our story
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Started in a kitchen, tested on a family of six.
          </h2>
          <p className="mt-5 text-ink/70">
            Yobysin began in 2019 when our founder couldn't find a tissue
            gentle enough for her son's eczema-prone skin. What started as a
            small batch of plant-fiber prototypes, hand-tested by neighbors
            and cousins, is now a household name shipped from a single
            family-run mill.
          </p>
          <p className="mt-4 text-ink/70">
            We still make every decision the same way we did on day one: hold
            it up to a cheek before it goes in a box.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink/50">Founded</dt>
              <dd className="mt-1 font-display text-2xl text-ink">2019</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink/50">Source</dt>
              <dd className="mt-1 font-display text-2xl text-ink">FSC pulp</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink/50">Made in</dt>
              <dd className="mt-1 font-display text-2xl text-ink">USA</dd>
            </div>
          </dl>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <TissueBoxArt
            boxColor="#D9A6A0"
            lidColor="#B87C74"
            className="w-full max-w-sm animate-drift"
          />
        </div>
      </div>
    </section>
  );
}
