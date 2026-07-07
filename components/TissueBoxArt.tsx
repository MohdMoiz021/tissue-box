type Props = {
  boxColor?: string;
  lidColor?: string;
  tissueColor?: string;
  className?: string;
};

export default function TissueBoxArt({
  boxColor = "#4C6B57",
  lidColor = "#33473A",
  tissueColor = "#FFFFFF",
  className = "",
}: Props) {
  return (
    <svg
      viewBox="0 0 420 360"
      className={className}
      role="img"
      aria-label="Illustration of a Yobysin tissue box with a soft tissue rising from the opening"
    >
      {/* soft shadow */}
      <ellipse cx="210" cy="330" rx="140" ry="16" fill="#1F2421" opacity="0.08" />

      {/* box body */}
      <rect x="70" y="150" width="280" height="170" rx="18" fill={boxColor} />
      <rect x="70" y="150" width="280" height="170" rx="18" fill="url(#boxShade)" />

      {/* box lid */}
      <rect x="55" y="120" width="310" height="55" rx="16" fill={lidColor} />

      {/* oval opening */}
      <ellipse cx="210" cy="147" rx="78" ry="22" fill="#1F2421" opacity="0.25" />
      <ellipse cx="210" cy="144" rx="72" ry="18" fill="#0E1310" />

      {/* rising tissue sheet, animated */}
      <g className="origin-bottom animate-pull">
        <path
          d="M150 148
             C 165 90, 195 60, 210 55
             C 225 60, 260 88, 268 148
             C 250 130, 230 122, 210 122
             C 190 122, 168 130, 150 148 Z"
          fill={tissueColor}
        />
        <path
          d="M168 145 C 182 105, 198 84, 210 78 C 208 100, 202 128, 196 146 Z"
          fill="#EAE8E2"
          opacity="0.7"
        />
      </g>

      {/* brand mark on box */}
      <text
        x="210"
        y="250"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), serif"
        fontStyle="italic"
        fontSize="30"
        fill="#F3F2EE"
      >
        Yobysin
      </text>
      <line x1="150" y1="266" x2="270" y2="266" stroke="#F3F2EE" strokeWidth="1.5" opacity="0.6" />
      <text
        x="210"
        y="286"
        textAnchor="middle"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="11"
        letterSpacing="3"
        fill="#F3F2EE"
        opacity="0.85"
      >
        SOFT · STRONG · PLANT-BASED
      </text>

      <defs>
        <linearGradient id="boxShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
      </defs>
    </svg>
  );
}
