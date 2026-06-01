import React from "react";
import Redacted from "../Redacted";

const Page13: React.FC = () => {
  return (
    <div>
      <div className="section-label">LIAISON REQUEST — SECTION VII / BND</div>
      <div className="body-text">
        <p className="indent">
          Formal request dispatched to liaison officers at the{" "}
          <Redacted>BND</Redacted> regarding an unidentified individual observed
          at the Volksgarten site on 14 MAR 1974.
        </p>
        <div className="form-row">
          <span className="form-label">REFERENCE NUMBER</span>
          <span className="form-value">
            <Redacted>IDENT-REQ-1974-2291</Redacted>
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">SUBJECT DESCRIPTION</span>
          <span className="form-value">
            Male, approx. 45-50, grey wool overcoat, rimless spectacles.
          </span>
        </div>
        <p className="indent">
          BND archives indicate a possible match with a low-level diplomatic
          courier based in Bonn. Awaiting further confirmation and photographic
          comparison.
        </p>
      </div>
    </div>
  );
};

export default Page13;
