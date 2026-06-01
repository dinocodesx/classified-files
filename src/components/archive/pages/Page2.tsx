import React from "react";
import Redacted from "../Redacted";

const Page2: React.FC = () => {
  return (
    <div>
      <div
        className="notecard"
        style={{ marginBottom: 10, position: "relative" }}
      >
        <div className="notecard-text">
          <span className="highlight">NOTE:</span> Pages 2–4 of this memorandum
          contain sensitive personnel identifiers. Handle under Protocol
          9-DELTA. Do not reproduce without written authorization from the
          Director's office.
          <br />
          Ref: <span className="highlight">STANDING ORDER 1141-F</span>
        </div>
      </div>
      <div className="section-label">CONTINUED FROM PAGE 1</div>
      <div className="body-text">
        <p className="indent">
          The individual — a male, approximately 40 years of age, medium build,
          grey overcoat — appeared to observe the exchange for no fewer than
          twelve minutes before departing eastward on foot. Agent{" "}
          <Redacted>████████</Redacted> attempted a tail but lost contact near
          the Ringstrasse at approximately 14:22 local time.
        </p>
        <p className="indent">
          I have forwarded physical descriptions and a hand-rendered composite
          to the Identification Bureau under cover of separate correspondence
          (IDENT-REQ-1974-2291). I urge that this be treated as priority.
        </p>
        <div className="section-label">ASSET ASSESSMENT</div>
        <p className="indent">
          CARDINAL's reliability remains, in my assessment, exceptional. The
          materials delivered conform to the specifications communicated via
          channel <Redacted>███</Redacted>-ECHO in February. Authentication
          codes verified against our master register — all indicators positive.
        </p>
        <p className="indent">
          That said, CARDINAL expressed increasing anxiety about the security of
          the existing arrangement. He has requested a change of contact
          protocol by next quarter. I consider this request reasonable given the
          circumstances described above.
        </p>
      </div>
    </div>
  );
};

export default Page2;
