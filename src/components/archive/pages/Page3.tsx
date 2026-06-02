import React from "react";
import Redacted from "../Redacted";

const Page3: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">CLASSIFICATION</span>
        <span className="form-value">COSMIC TOP SECRET</span>
      </div>
      <div className="form-row">
        <span className="form-label">DATE</span>
        <span className="form-value">19 OCT 1974</span>
      </div>
      <div className="section-label">PROJECT STARFALL — PERSONNEL CLEARANCE LIST</div>
      <div className="body-text">
        <p>The following personnel are the only individuals authorized for Section 7 Access. Access to the raw telemetry tapes and E.B.E. observation decks is restricted to this list without exception.</p>
        <div className="two-col" style={{marginTop: '10px'}}>
          <div className="col-entry">
            <div className="name">GEN. ARTHUR VANCE</div>
            <div className="sub">COMMANDER, PROJECT STARFALL. RESPONSIBLE FOR ALL KINETIC AND CONTAINMENT ASSETS.</div>
          </div>
          <div className="col-entry">
            <div className="name">DR. ELIAS THORNE</div>
            <div className="sub">CHIEF SCIENTIFIC OFFICER. LEAD ON PHYSICAL ANALYSIS AND LUNAR TELEMETRY.</div>
          </div>
          <div className="col-entry">
            <div className="name">AGENT K. <Redacted unlockCode="BLACKWOOD">BLACKWOOD</Redacted></div>
            <div className="sub">FIELD OPERATIONS LEAD. LIAISON TO SITE CONTAINMENT AND RECOVERY.</div>
          </div>
          <div className="col-entry">
            <div className="name">MS. SARAH JENKINS</div>
            <div className="sub">CHIEF CRYPTO-LINGUISTICS. TASKED WITH DECODING THE STARFALL-1 SIGNAL.</div>
          </div>
        </div>
        <p style={{marginTop: '15px'}} className="indent">
          All personnel above have been subjected to Stage 4 psychological screening and polygraph testing. Total isolation of "The Pulse" data is mandatory. Any leak, whether intentional or accidental, will be prosecuted under the National Security Act of 1947. 
        </p>
        <p className="indent">
          Note: Support staff for Team Phoenix and Team Voss are authorized for "Need-to-Know" compartmentalized data only. Full narrative awareness is restricted to the <Redacted>Council of Seven</Redacted>.
        </p>
      </div>
    </div>
  );
};

export default Page3;
