type Props = {
  fill?: string;
  flip?: boolean;
  className?: string;
};

export default function WaveDivider({ fill = "#FFFFFF", flip = false, className = "" }: Props) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        className="wave-divider"
        preserveAspectRatio="none"
        style={{ height: "48px", width: "100%" }}
        aria-hidden="true"
      >
        <path
          d="M0,30 C150,60 300,0 450,20 C600,40 750,60 900,35 C1050,10 1150,25 1200,30 L1200,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
