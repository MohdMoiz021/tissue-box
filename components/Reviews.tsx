import WaveDivider from "./WaveDivider";

const reviews = [
  {
    name: "Amira H.",
    role: "Verified Amazon buyer",
    quote:
      "Softest tissues I've bought in years. My toddler stopped fighting me at nose-wipe time, which feels like a miracle.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    role: "Verified Amazon buyer",
    quote:
      "The Aloe box saved my nose during flu season. No redness, no roughness, even after the tenth blow of the day.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Verified Amazon buyer",
    quote:
      "I keep the travel packs in every bag, car, and jacket pocket. Sturdy enough that they never fall apart mid-use.",
    rating: 4,
  },
  {
    name: "Marcus T.",
    role: "Verified Amazon buyer",
    quote:
      "Ordered the family box on a whim and now it's a standing subscription. Genuinely lasts longer than other brands.",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-bloom" : "fill-ink/10"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.5 6 0.8-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.8l6-0.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-pine">
              What people say
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              40,000 boxes in, and counting.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
            <p className="font-display text-3xl text-ink">4.8</p>
            <div>
              <Stars rating={5} />
              <p className="text-xs text-ink/60">Average Amazon rating</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl bg-white p-7 shadow-sm shadow-ink/5"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-ink/80">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine/10 font-display text-sm text-pine-dark">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-xs text-ink/50">{review.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <WaveDivider fill="#33473A" />
    </section>
  );
}
