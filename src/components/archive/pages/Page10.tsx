import React from "react";
import Redacted from "../Redacted";

const Page10: React.FC = () => {
  return (
    <div>
      <div className="section-label">FINANCIAL AUDIT — Q1/Q2 1974</div>
      <div className="body-text">
        <p className="indent">Pursuant to the operational pause of GREY MANTLE, a comprehensive audit of Station Vienna's discretionary accounts has been executed by the Office of the Comptroller.</p>
        <div className="form-row">
          <span className="form-label">ACCOUNT REF</span>
          <span className="form-value"><Redacted>██████</Redacted>-ECHO-99</span>
        </div>
        <div className="form-row">
          <span className="form-label">TOTAL DRAW</span>
          <span className="form-value">$42,500.00 USD (Eqv. Austrian Schillings)</span>
        </div>
        <div className="section-label">DISBURSEMENTS & EXPENSES</div>
        <p className="indent">Asset CARDINAL received three separate scheduled payments totaling $15,000.00. Funds were dispersed via blind drops using pre-arranged commercial banking proxies in <Redacted>████████</Redacted>. Receipts and dead-drop photographic confirmations match the ledger.</p>
        <p className="indent">Operational expenses for the surveillance team (Agents Hartmann and <Redacted>██████</Redacted>) including safe-house rentals, vehicle procurement, and specialized photographic equipment amounted to $27,500.00.</p>
        <div className="section-label">IRREGULARITIES</div>
        <p className="indent">A discrepancy of $450.00 was noted in the March 14th operational manifest. Hartmann attributed this to emergency counter-surveillance measures (bribes to local transit authorities) following the detection of the unknown third party. This variance has been reviewed and <strong>APPROVED</strong> by the Director of Section VII.</p>
      </div>
    </div>
  );
};
export default Page10;
