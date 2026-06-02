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
        <p className="indent">
          At 04:12 GMT on October 12, 1974, the Goldstone Deep Space
          Communications Complex, part of NASA's Deep Space Network, detected a
          rhythmic, non-random signal originating from the Mare Tranquillitatis.
          The signal was initially dismissed as localized interference, but
          persistent monitoring across multiple baseline arrays confirmed its
          extraterrestrial origin.
        </p>
        <p className="indent">
          The signal, designated <strong>STARFALL-1</strong>, exhibits a
          repeating frequency of 1420.4 MHz, precisely matching the hydrogen
          line but with a significant sideband modulation that suggests
          intentional encoding. Initial analysis by the{" "}
          <Redacted unlockCode="SETI">
            Search for Extraterrestrial Intelligence
          </Redacted>{" "}
          team indicates the signal contains embedded binary structures,
          specifically a 7x7 grid that repeats every 14 seconds.
        </p>
        <p className="indent">
          Authorization for "Project STARFALL" has been granted under
          Presidential Directive 14-A, moving all detection data out of civilian
          hands and into the Department of Special Operations. All telemetry,
          magnetic tapes, and handwritten logs regarding this intercept are
          hereby classified <strong>ULTRA TOP SECRET</strong>.
        </p>
        <p className="indent">
          Staff at Goldstone have been issued Level 5 non-disclosure agreements.
          Any unauthorized discussion of the "Lunar Pulse" will be treated as an
          act of espionage against the United States.
        </p>
      </div>
    </div>
  );
};

export default Page1;
