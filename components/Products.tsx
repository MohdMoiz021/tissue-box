import TissueBoxArt from "./TissueBoxArt";
import WaveDivider from "./WaveDivider";

const products = [
  {
    name: "Classic Soft",
    tagline: "The everyday essential",
    price: "$4.99",
    boxColor: "#4C6B57",
    lidColor: "#33473A",
    features: ["3-ply strength", "180 tissues", "Unscented"],
  },
  {
    name: "Aloe & Vitamin E",
    tagline: "For sensitive, sniffly noses",
    price: "$5.99",
    boxColor: "#D9A6A0",
    lidColor: "#B87C74",
    features: ["Aloe-infused", "150 tissues", "Extra gentle"],
  },
  {
    name: "Travel Pack",
    tagline: "Softness that fits your pocket",
    price: "$2.49",
    boxColor: "#7C93A8",
    lidColor: "#57738A",
    features: ["Pocket-size", "30 tissues", "6-pack bundle"],
  },
  {
    name: "Family Box",
    tagline: "Built for a full house",
    price: "$8.99",
    boxColor: "#8A7355",
    lidColor: "#6B5A42",
    features: ["3-ply strength", "320 tissues", "Best value"],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-white pb-8 pt-4">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pine">
            The collection
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            One family, four ways to be gentle.
          </h2>
          <p className="mt-4 text-ink/70">
            Every box is cut from the same soft, plant-based fiber — pick the
            size and finish that fits where it lives.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col rounded-3xl border border-ink/5 bg-paper p-6 transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5"
            >
              <TissueBoxArt
                boxColor={product.boxColor}
                lidColor={product.lidColor}
                className="mx-auto h-40 w-40"
              />
              <h3 className="mt-6 font-display text-xl text-ink">{product.name}</h3>
              <p className="mt-1 text-sm text-ink/60">{product.tagline}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-pine" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
                <span className="font-display text-lg text-ink">{product.price}</span>
                <a
                  href="#amazon"
                  className="text-sm font-semibold text-pine-dark transition hover:text-pine"
                >
                  Buy on Amazon →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fill="#F3F2EE" />
    </section>
  );
}
