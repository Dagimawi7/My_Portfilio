import { useEffect, useId, useLayoutEffect, useRef } from "react";

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 1,
  thickness = 2,
  className,
  style,
}) => {
  const rawId = useId().replace(/[:]/g, "");
  const strokeRef = useRef(null);

  const borderStyles = {
    borderRadius: style?.borderRadius ?? "inherit",
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
  };

  const glowStyles = {
    ...borderStyles,
    filter: `blur(${Math.max(1, thickness * 0.5)}px)`,
    opacity: 0.4,
  };

  const bgGlowStyle = {
    borderRadius: style?.borderRadius ?? "inherit",
    transform: "scale(1.05)",
    filter: "blur(24px)",
    opacity: 0.25,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`,
    zIndex: -1,
  };

  return (
    <div
      className={`relative isolate ${className ?? ""}`}
      style={style}
    >
      {/* Main border */}
      <div className="absolute inset-0 pointer-events-none">
        <div ref={strokeRef} className="absolute inset-0 box-border" style={borderStyles} />
        <div className="absolute inset-0 box-border" style={glowStyles} />
        <div className="absolute inset-0 box-border" style={glowStyles} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      {/* Children content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default ElectricBorder;
