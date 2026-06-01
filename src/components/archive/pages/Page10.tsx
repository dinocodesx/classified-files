import React from "react";
import Redacted from "../Redacted";

const Page10: React.FC = () => {
  return (
    <div>
      <div className="section-label">FINANCIAL AUDIT — STATION VIENNA</div>
      <div className="body-text">
        <p className="indent">
          Audit of discretionary funds for Q1-Q2 1974 complete. All
          expenditures related to Operation GREY MANTLE have been verified
          against station receipts.
        </p>
        <div className="form-row">
          <span className="form-label">DISBURSEMENT TO CARDINAL</span>
          <span className="form-value">
            <Redacted>█████</Redacted> USD
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">OPERATIONAL OVERHEAD</span>
          <span className="form-value">
            <Redacted>████</Redacted> USD
          </span>
        </div>
        <p className="indent">
          Total operational costs remain within the authorized discretionary
          limit for the Vienna sector.
        </p>
      </div>
    </div>
  );
};

export default Page10;
