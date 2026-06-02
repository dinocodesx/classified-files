import React from "react";
import Redacted from "../Redacted";

const Page15: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">URGENCY</span>
        <span className="form-value">IMMEDIATE ACTION REQUIRED</span>
      </div>
      <div className="section-label">
        SCIENTIFIC ADVISORY — THE "SIGNAL" EFFECT
      </div>
      <div className="body-text">
        <div className="indent">
          Dr. Thorne and the team at the Signal Analysis Lab have discovered a
          horrifying truth about the Lunar Pulse. It is not a message, and it is
          not a beacon. It is a{" "}
          <Redacted unlockCode="REPROGRAMMING">Reprogramming Command</Redacted>{" "}
          operating on a quantum-biological level.
        </div>
        <div className="indent">
          The signal is specifically targeting the human limbic system, the seat
          of emotion and survival instinct. Long-term exposure to the Pulse
          leads to a progressive thinning of the pre-frontal cortex and a
          complete loss of individual will. We believe the "hallucinations" and
          "voices" reported by the recovery teams are the first stage of{" "}
          <Redacted unlockCode="ASSIMILATION">Biological Assimilation</Redacted>
          —the ego being overwritten by the Starfall hive-mind.
        </div>
        <div className="indent">
          To protect the global population, we must deploy a{" "}
          <Redacted unlockCode="FARADAY">Global Faraday Shield</Redacted>. This
          would involve the launch of hundreds of high-altitude balloons and
          satellites carrying specialized interference emitters. Project
          STARFALL can no longer remain a secret; we must go public under the
          guise of an "International Telecommunications Initiative" to secure
          the necessary industrial capacity.
        </div>
        <div className="indent">
          If we do not act within the next 18 months, the signal will become
          "fixed" in the human genome, and the harvest will be irreversible.
        </div>
      </div>
    </div>
  );
};

export default Page15;
