import React from "react";
import Redacted from "../Redacted";

const Page3: React.FC = () => {
  return (
    <div>
      <div className="section-label">ACTIVE OPERATIVES — STATION VIENNA</div>
      <div className="two-col" style={{ marginBottom: 12 }}>
        <div className="col-entry">
          <div className="name">Agent R. HARTMANN</div>
          <div className="sub">→ Lead / Case Officer</div>
        </div>
        <div className="col-entry">
          <div className="name">
            Agent D. <Redacted style={{ fontSize: 11 }}>██████</Redacted>
          </div>
          <div className="sub">→ Surveillance Lead</div>
        </div>
        <div className="col-entry">
          <div className="name">CARDINAL (Asset)</div>
          <div className="sub">→ Primary Source, Vienna</div>
        </div>
        <div className="col-entry">
          <div className="name">UNKNOWN / THIRD PARTY</div>
          <div className="sub">→ Status: Under Investigation</div>
        </div>
        <div className="col-entry">
          <div className="name">
            Technician <Redacted style={{ fontSize: 11 }}>████</Redacted>
          </div>
          <div className="sub">→ Signals / Encryption</div>
        </div>
        <div className="col-entry">
          <div className="name">
            Director <Redacted style={{ fontSize: 11 }}>████████</Redacted>
          </div>
          <div className="sub">→ Section VII, Langley</div>
        </div>
      </div>
      <div className="section-label">ASSET — CARDINAL</div>
      <div className="body-text">
        <p className="indent">
          CARDINAL has been a registered source since 1969. Background:
          Mid-level civil servant in the <Redacted>████████████</Redacted>{" "}
          Ministry of Trade. Access to: diplomatic cables, trade negotiation
          briefings, and limited military procurement summaries. Motivation
          assessed as financial, with secondary ideological component.
        </p>
        <p className="indent">
          Reliability rating: <strong>A-2</strong>. No prior instances of
          fabrication detected. Current contact frequency: Bi-monthly.
        </p>
      </div>
    </div>
  );
};

export default Page3;
