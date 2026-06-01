import React from "react";
import Redacted from "../Redacted";

const Page8: React.FC = () => {
  return (
    <div>
      <div className="section-label">FINDINGS TO DATE</div>
      <div className="body-text">
        <p className="indent">
          The Internal Security Branch submits this interim report on
          investigation ISB-74-GREYMANTLE, fourteen days from opening.
        </p>
        <div className="form-row">
          <span className="form-label">TRACK A</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Physical composite circulated. One partial match identified in
            liaison database — a <Redacted>█████████</Redacted> national,
            occupation unverified, known to frequent Vienna. Currently under
            passive surveillance. No confirmation of connection to any
            intelligence service as yet.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">TRACK B</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            SIGINT audit complete. The anomalous burst transmission of 13 MAR
            has been identified as a probable covert reporting signal.
            Encryption pattern does not match any friendly service. Pattern
            forwarded to Technical Division for further analysis.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">TRACK C</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            No direct evidence of compromise to CARDINAL. Asset remains in
            place. Cover assessed as intact at this time. Recommend resumption
            of contact per revised protocol once Track A resolved.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">TRACK D</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Internal audit of Station Vienna — ongoing. Three personnel flagged
            for follow-up interviews. No findings of deliberate misconduct to
            date. Administrative security lapses noted and addressed.
          </span>
        </div>
      </div>
      <div className="section-label">ASSESSMENT</div>
      <div className="body-text">
        <p className="indent">
          The investigation is ONGOING. The evidence is consistent with
          surveillance by an unknown hostile intelligence service, but no firm
          attribution can be made at this stage. Recommend continued suspension
          of GREY MANTLE activities pending full resolution.
        </p>
      </div>
    </div>
  );
};

export default Page8;
