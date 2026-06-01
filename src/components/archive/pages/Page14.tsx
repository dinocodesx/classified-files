import React from "react";
import Redacted from "../Redacted";

const Page14: React.FC = () => {
  return (
    <div>
      <div className="section-label">SURVEILLANCE LOG — POST OPERATION</div>
      <div className="body-text">
        <p className="indent">Following the suspension of GREY MANTLE, a skeleton surveillance team maintained intermittent overwatch of the burned Volksgarten drop site to ascertain if hostile entities were still monitoring the area.</p>
        
        <div className="form-row" style={{ marginTop: 10 }}>
          <span className="form-label">22 APR / 10:00</span>
          <span className="form-value" style={{ fontSize: 10 }}>Site clear. No sign of CARDINAL or the unidentified third party. Routine civilian foot traffic.</span>
        </div>
        <div className="form-row">
          <span className="form-label">24 APR / 14:15</span>
          <span className="form-value" style={{ fontSize: 10 }}>Vehicle identified: Black Mercedes sedan, plates <Redacted>W-7741</Redacted>, parked adjacent to the north entrance. Remained idling for 45 minutes before departing. Plates trace to a shell company in <Redacted>████████</Redacted>.</span>
        </div>
        <div className="form-row">
          <span className="form-label">28 APR / 09:30</span>
          <span className="form-value" style={{ fontSize: 10 }}>Same vehicle (<Redacted>W-7741</Redacted>) spotted circling the perimeter. Two occupants, faces obscured. Surveillance team broke contact to avoid burning our own observation post.</span>
        </div>
        <div className="form-row">
          <span className="form-label">02 MAY / 16:00</span>
          <span className="form-value" style={{ fontSize: 10 }}>Area deemed permanently compromised. All remaining observational assets withdrawn. Recommend no further allied personnel approach this sector until further notice.</span>
        </div>
      </div>
    </div>
  );
};
export default Page14;
