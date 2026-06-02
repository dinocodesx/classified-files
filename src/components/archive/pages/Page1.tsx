import React from "react";
import Redacted from "../Redacted";

const Page1: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">AGENCY</span>
        <span className="form-value">
          Project STARFALL — EXTRATERRESTRIAL INTELLIGENCE DIVISION
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">MEMO TYPE</span>
        <span className="form-value">
          INITIAL DETECTION REPORT / SIGINT-74-001
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">SUBJECT</span>
        <span className="form-value">
          Anomalous Lunar Transmission — "The Pulse"
        </span>
      </div>
      <div className="section-label">INCIDENT SUMMARY</div>
      <div className="body-text">
        <div className="indent">
          At 04:12 GMT on October 12, 1974, the Goldstone Deep Space
          Communications Complex, part of NASA's Deep Space Network, detected a
          rhythmic, non-random signal originating from the Mare Tranquillitatis.
          The signal was initially dismissed as localized interference, but
          persistent monitoring across multiple baseline arrays confirmed its
          extraterrestrial origin.
        </div>
        <div className="indent">
          The signal, designated <strong>STARFALL-1</strong>, exhibits a
          repeating frequency of 1420.4 MHz, precisely matching the hydrogen
          line but with a significant sideband modulation that suggests
          intentional encoding. Initial analysis by the{" "}
          <Redacted unlockCode="SETI">
            Search for Extraterrestrial Intelligence
          </Redacted>{" "}
          team indicates the signal contains embedded binary structures,
          specifically a 7x7 grid that repeats every 14 seconds.
        </div>
        <div className="indent">
          Authorization for "Project STARFALL" has been granted under
          Presidential Directive 14-A, moving all detection data out of civilian
          hands and into the Department of Special Operations. All telemetry,
          magnetic tapes, and handwritten logs regarding this intercept are
          hereby classified <strong>ULTRA TOP SECRET</strong>.
        </div>
        <div className="indent">
          Staff at Goldstone have been issued Level 5 non-disclosure agreements.
          Any unauthorized discussion of the "Lunar Pulse" will be treated as an
          act of espionage against the United States.
        </div>
      </div>

      {/* Circular Classified Stamp - Moved UP and BOLD */}
      <div
        style={{
          position: "absolute",
          top: "70%",
          right: "30px",
          transform: "rotate(-12deg)",
          width: "160px",
          height: "160px",
          pointerEvents: "none",
          opacity: 0.8,
          zIndex: 10,
        }}
      >
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="var(--classify-red)"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--classify-red)"
            strokeWidth="1"
          />

          <defs>
            <path id="topCurve" d="M 20,50 A 30,30 0 0,1 80,50" />
            <path id="bottomCurve" d="M 20,50 A 30,30 0 0,0 80,50" />
          </defs>

          <text
            fill="var(--classify-red)"
            style={{
              fontSize: "7px",
              fontWeight: "900",
              fontFamily: "var(--font-heading)",
            }}
          >
            <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
              CLASSIFIED • CLASSIFIED
            </textPath>
          </text>

          <text
            fill="var(--classify-red)"
            style={{
              fontSize: "7px",
              fontWeight: "900",
              fontFamily: "var(--font-heading)",
            }}
          >
            <textPath
              href="#bottomCurve"
              startOffset="50%"
              textAnchor="middle"
              dominantBaseline="hanging"
            >
              CLASSIFIED • CLASSIFIED
            </textPath>
          </text>

          <line
            x1="22"
            y1="42"
            x2="78"
            y2="42"
            stroke="var(--classify-red)"
            strokeWidth="2"
          />
          <line
            x1="22"
            y1="56"
            x2="78"
            y2="56"
            stroke="var(--classify-red)"
            strokeWidth="2"
          />

          <text
            x="50"
            y="52"
            textAnchor="middle"
            fill="var(--classify-red)"
            style={{
              fontSize: "11px",
              fontWeight: "900",
              fontFamily: "var(--font-display)",
            }}
          >
            TOP SECRET
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Page1;
