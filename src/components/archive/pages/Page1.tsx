import React from "react";
import Redacted from "../Redacted";

const Page1: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">TO</span>
        <span className="form-value">
          Director, Section VII — Foreign Intelligence
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">FROM</span>
        <span className="form-value">
          Agent R. <Redacted>████████</Redacted>, Station Vienna
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">SUBJECT</span>
        <span className="form-value">
          Operation GREY MANTLE — Status Report
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">PRIORITY</span>
        <span className="form-value">EYES ONLY — URGENT</span>
      </div>
      <div className="section-label">BODY OF CORRESPONDENCE</div>
      <div className="body-text">
        <p className="indent">
          I write to you from Station Vienna with matters of the gravest
          urgency. As of the date of this transmission, Operation GREY MANTLE
          has entered a critical phase which requires your immediate attention
          and authorization to proceed.
        </p>
        <p className="indent">
          The asset known to you as CARDINAL has made contact. The location was
          as arranged — the third bench from the north entrance of the
          Volksgarten. The exchange proceeded without incident, and the
          materials described in my prior communication (reference{" "}
          <strong>DOC-7698-A</strong>) are now in secure custody.
        </p>
        <p className="indent">
          However, there are complications I must disclose. Our surveillance
          team on the <Redacted>████</Redacted> operation detected a third party
          — nationality and affiliation currently unknown — in proximity to the
          drop site.
        </p>
      </div>
    </div>
  );
};

export default Page1;
