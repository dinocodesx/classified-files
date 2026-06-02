import React from "react";
import Redacted from "../Redacted";

const Page22: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">SENDER</span>
        <span className="form-value">UNKNOWN — ENCRYPTED</span>
      </div>
      <div className="section-label">A MESSAGE TO THE RESISTANCE</div>
      <div className="body-text">
        <p className="indent">
          If you can read this, you are still "un-synced." Your brain still
          belongs to you. You are the{" "}
          <Redacted unlockCode="ANOMALY">Anomaly</Redacted> that EBE-1 could not
          predict.
        </p>
        <p className="indent">
          The only way to break the link and stop the harvest is to{" "}
          <Redacted unlockCode="DISCONNECT">
            Disconnect the Global Grid
          </Redacted>
          . They use the internet as their nervous system and the power grid as
          their life-support. We must go back to the age of analog. No phones,
          no computers, no satellites.
        </p>
        <p className="indent">
          Find the kill-switch. It's located in the{" "}
          <Redacted unlockCode="DULCE">Dulce Sub-Level 7</Redacted>{" "}
          mainframe—the original node where EBE-1 first uploaded itself. The
          password is the name of the first operative to encounter EBE-1 at the
          crash site: <Redacted unlockCode="VANCE">VANCE</Redacted>.
        </p>
        <p className="indent">
          Once the switch is flipped, the dimensional bridge will collapse. The
          Vanguard will be lost in the void, and the future will be unwritten.
          It is our only chance.
        </p>
      </div>
    </div>
  );
};

export default Page22;
