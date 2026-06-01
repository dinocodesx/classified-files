import React from "react";
import Redacted from "../Redacted";

const Page7: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">TO</span>
        <span className="form-value">Agent R. Hartmann, Station Vienna</span>
      </div>
      <div className="form-row">
        <span className="form-label">FROM</span>
        <span className="form-value">
          Director <Redacted>████████████</Redacted>, Section VII
        </span>
      </div>
      <div className="section-label">DIRECTIVE</div>
      <div className="body-text">
        <p className="indent">
          Your memorandum of 14 March has been received, reviewed, and actioned.
          The Director commends your handling of the exchange and your prompt
          disclosure of the security anomaly. Such vigilance is the mark of a
          competent officer.
        </p>
        <p className="indent">
          You are hereby authorized to continue in your role as Case Officer for
          CARDINAL, subject to the security protocols imposed by the Internal
          Security Branch under reference ISB-74-GREYMANTLE. You will cooperate
          fully with all aspects of that investigation.
        </p>
        <p className="indent">
          With regard to CARDINAL's request for amended contact protocols — this
          is approved in principle. You are to propose a revised arrangement and
          submit it to this office for authorization before implementation. Bear
          in mind that continuity of access is paramount; do not allow security
          precautions to rupture the relationship.
        </p>
        <div className="section-label">ON THE THIRD PARTY</div>
        <p className="indent">
          The question of the unidentified observer is of the highest concern to
          this office. Until the matter is resolved, I must ask you to assume
          the worst and act accordingly. If at any point you assess that
          CARDINAL or Station Vienna has been compromised, you are authorized to
          invoke <strong>Protocol IRON CURTAIN</strong> without prior
          consultation.
        </p>
        <p>You have my full confidence, Hartmann. Do not fail us.</p>
        <div style={{ marginTop: 14 }}>
          <span className="signature">
            —{" "}
            <Redacted style={{ fontFamily: "Special Elite", fontSize: 18 }}>
              ████████
            </Redacted>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page7;
