import React, { useState } from "react";
import { useARGState } from "./useARGState";

interface RedactedProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  unlockCode?: string;
}

const Redacted: React.FC<RedactedProps> = ({
  children,
  className = "",
  style,
  unlockCode,
}) => {
  const { isUnlocked, unlock } = useARGState();
  const [isTyping, setIsTyping] = useState(false);
  const [guess, setGuess] = useState("");
  const [isError, setIsError] = useState(false);

  const unlocked = unlockCode ? isUnlocked(unlockCode) : false;

  const handleClick = () => {
    if (unlockCode && !unlocked) {
      setIsTyping(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlockCode && guess.trim().toLowerCase() === unlockCode.toLowerCase()) {
      unlock(unlockCode);
      setIsTyping(false);
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 500);
    }
  };

  if (isTyping) {
    return (
      <form
        onSubmit={handleSubmit}
        className="redacted-input-form"
        style={{ display: "inline-block" }}
      >
        <input
          autoFocus
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onBlur={() => setIsTyping(false)}
          className={`redacted-input ${isError ? "error" : ""}`}
          placeholder="ENTER CODE"
        />
      </form>
    );
  }

  return (
    <span
      onClick={handleClick}
      className={`redacted ${className} ${unlocked ? "unlocked" : ""} ${
        unlockCode && !unlocked ? "interactive" : ""
      }`}
      style={{
        backgroundColor: unlocked ? "transparent" : "var(--ink)",
        color: unlocked ? "inherit" : "transparent",
        borderRadius: "1px",
        padding: "0 2px",
        display: "inline-block",
        letterSpacing: unlocked ? "normal" : "0.05em",
        cursor: unlockCode && !unlocked ? "pointer" : "default",
        ...style,
      }}
    >
      {unlocked ? children : children || "████████"}
    </span>
  );
};

export default Redacted;
