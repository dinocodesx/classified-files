import React from "react";

interface RedactedProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Redacted: React.FC<RedactedProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <span
      className={`redacted ${className}`}
      style={{
        backgroundColor: "var(--ink)",
        color: "transparent",
        borderRadius: "1px",
        padding: "0 2px",
        display: "inline-block",
        letterSpacing: "0.05em",
        ...style,
      }}
    >
      {children || "████████"}
    </span>
  );
};

export default Redacted;
