import React from "react";
import Redacted from "../Redacted";

const Page13: React.FC = () => {
  return (
    <div>
      <div className="section-label">LIAISON CABLE — OUTBOUND</div>
      <div className="body-text">
        <div className="form-row">
          <span className="form-label">DESTINATION</span>
          <span className="form-value">Station Munich (<Redacted>BND</Redacted> Liaison)</span>
        </div>
        <div className="form-row">
          <span className="form-label">REFERENCE</span>
          <span className="form-value">IDENT-REQ-1974-2291</span>
        </div>
        <p className="indent">We are requesting immediate lateral assistance from your counterparts at the <Redacted>Bundesnachrichtendienst</Redacted> regarding an unidentified male observed conducting counter-surveillance in Vienna on 14 MAR 1974.</p>
        <div className="section-label">SUBJECT PROFILE</div>
        <div className="two-col" style={{ marginBottom: 12 }}>
          <div className="col-entry">
            <div className="name">PHYSICAL</div>
            <div className="sub">Male, ~40s, medium build</div>
          </div>
          <div className="col-entry">
            <div className="name">ATTIRE</div>
            <div className="sub">Grey overcoat, dark fedora</div>
          </div>
          <div className="col-entry">
            <div className="name">DISTINGUISHING</div>
            <div className="sub">Slight limp (right leg)</div>
          </div>
          <div className="col-entry">
            <div className="name">HABITS</div>
            <div className="sub">Smoked <Redacted>████</Redacted> brand</div>
          </div>
        </div>
        <p className="indent">Subject demonstrated professional trailing techniques and successfully broke contact with our surveillance team near the Ringstrasse. We suspect he may have crossed the border from East Germany or Czechoslovakia within the last two weeks.</p>
        <p className="indent">Please cross-reference the attached composite sketch with <Redacted>BND</Redacted> border transit records and known Warsaw Pact intelligence operatives operating in the DACH region. Await your prompt reply.</p>
      </div>
    </div>
  );
};
export default Page13;
