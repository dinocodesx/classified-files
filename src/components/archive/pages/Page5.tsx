import React from "react";
import Redacted from "../Redacted";

const Page5: React.FC = () => {
  return (
    <div>
      <div className="notecard" style={{ marginBottom: 10 }}>
        <div className="notecard-text">
          <span className="highlight">COMINT HANDLING NOTICE:</span> The
          following intercept summaries are derived from signals intelligence
          collection. Distribution restricted to BIGOT list holders. Do not
          disseminate beyond authorized recipients.
        </div>
      </div>
      <div className="section-label">INTERCEPT SUMMARIES</div>
      <div className="body-text">
        <div className="form-row">
          <span className="form-label">11 MAR / 09:14</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Voice transmission on monitored frequency <Redacted>███.█</Redacted>{" "}
            MHz. Two speakers, language: <Redacted>████████</Redacted>. Content:
            reference to meeting at "the garden" on the 14th. Authentication
            phrase detected: "<Redacted>████████████</Redacted>."
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">12 MAR / 22:47</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Encrypted cable, <Redacted>████████</Redacted> origin. Partial
            decrypt achieved. References to "the arrangement" and "three items."
            No names. Decoded segment forwarded to Langley 13 MAR.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">13 MAR / 16:03</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Brief exchange, street surveillance audio near Ringstrasse. Male
            voice: "It went well. The package is clean." No further relevant
            content. Recording preserved: TAPE-VIE-740313-C.
          </span>
        </div>
        <div className="form-row">
          <span className="form-label">13 MAR / 23:55</span>
          <span className="form-value" style={{ fontSize: 10 }}>
            Anomalous signal burst on backup frequency. Duration: 4 seconds.
            Possible burst transmission. Under investigation by Technical
            Division. May indicate third-party monitoring of our operations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page5;
