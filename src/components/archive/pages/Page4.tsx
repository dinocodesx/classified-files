import React from "react";
import Redacted from "../Redacted";

const Page4: React.FC = () => {
  return (
    <div>
      <div className="section-label">DOCUMENTS IN EVIDENCE</div>
      <div className="body-text">
        <div className="form-row">
          <span className="form-label">ITEM 01</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Draft communiqué — <Redacted>████████</Redacted> Ministry, dated 9
            MAR 1974. Re: Trade delegation to <Redacted>████</Redacted>. 4
            pages.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">ITEM 02</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Internal memorandum — re: bilateral currency arrangement with{" "}
            <Redacted>████████████</Redacted>. Author unverified. 2 pages.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">ITEM 03</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Photographic reproduction — confidential annex to{" "}
            <Redacted>████████</Redacted> quarterly review. Provenance:
            CARDINAL. 1 page.
          </span>
        </div>
      </div>
      <div className="section-label">PRELIMINARY EVALUATION</div>
      <div className="body-text">
        <p className="indent">
          Items 01 and 02 have been forwarded to the Economic Intelligence
          Division for detailed analysis. Preliminary review indicates
          significant intelligence value with respect to{" "}
          <Redacted>████████</Redacted>'s monetary policy objectives ahead of
          the April summit.
        </p>
        <p className="indent">
          Item 03 is currently under examination by the Technical Division for
          authentication. The photographic reproduction appears to be of good
          quality; however, certain details in the lower margin require
          verification against known reference materials before conclusions can
          be drawn.
        </p>
        <p className="indent">
          Assessment of overall haul: <strong>HIGH VALUE.</strong> Recommend
          expedited analysis and distribution to cleared recipients.
        </p>
      </div>
    </div>
  );
};

export default Page4;
