import React from "react";
import Redacted from "../Redacted";

const Page12: React.FC = () => {
  return (
    <div>
      <div className="section-label">ASSET REASSIGNMENT — DIRECTIVE 74-09</div>
      <div className="body-text">
        <p className="indent">
          Effective immediately, primary handling of asset CARDINAL is
          transferred from Station Vienna (Field) to Section VII Headquarters.
        </p>
        <div className="form-row">
          <span className="form-label">ASSIGNED CASE OFFICER</span>
          <span className="form-value">
            Agent <Redacted>████████</Redacted>
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">CONTACT PROTOCOL</span>
          <span className="form-value">
            <Redacted>7-OMEGA</Redacted> (Authorized)
          </span>
        </div>
        <p className="indent">
          Field Agent R. is to provide a final briefing and hand over all
          encryption keys by 30 APR 1974. Further field contact with CARDINAL
          without express authorization from the Director is prohibited.
        </p>
      </div>
    </div>
  );
};

export default Page12;
