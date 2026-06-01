import React from "react";
import Redacted from "../Redacted";

const Page14: React.FC = () => {
  return (
    <div>
      <div className="section-label">SURVEILLANCE LOG — POST-OPERATIONAL</div>
      <div className="body-text">
        <div className="form-row">
          <span className="form-label">DATE</span>
          <span className="form-value">22 APR 1974</span>
        </div>
        <div className="form-row">
          <span className="form-label">LOCATION</span>
          <span className="form-value">Volksgarten — Sector 4 (Drop Site)</span>
        </div>
        <p className="indent">
          Continuous monitoring of the established drop site between 0800 and
          2000 hours. No signal markers detected. No activity from asset
          CARDINAL.
        </p>
        <div className="form-row">
          <span className="form-label">SUSPICIOUS ACTIVITY</span>
          <span className="form-value">
            Vehicle <Redacted>W-7741</Redacted> (Black Sedan)
          </span>
        </div>
        <p className="indent">
          Subject vehicle noted passing the north entrance at 0915 and again at
          1740. Plates belong to a shell corporation with no registered
          offices. Surveillance team suggests the site may be under active
          observation by hostile elements.
        </p>
      </div>
    </div>
  );
};

export default Page14;
