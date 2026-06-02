import React from "react";
import Redacted from "../Redacted";

const Page14: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">SUBJECT</span>
        <span className="form-value">
          INTERROGATION LOG — EBE-1 (TRANSCRIPT)
        </span>
      </div>
      <div className="section-label">
        INTERROGATOR: AGENT BLACKWOOD (REINSTATED)
      </div>
      <div className="body-text">
        <div className="indent">
          Note: Agent Blackwood was reinstated specifically for this
          interrogation due to his "unique rapport" with the subject. Emotional
          dampeners were administered to both parties.
        </div>
        <div>
          <strong>BLACKWOOD:</strong> Why did you come here? Why now?
        </div>
        <div>
          <strong>EBE-1:</strong> [Vibration interpreted as: The season is
          right. The <Redacted unlockCode="HARVEST">Harvest</Redacted> is
          ready.]
        </div>
        <div>
          <strong>BLACKWOOD:</strong> Harvest what? Resources? Water? We are a
          sovereign planet.
        </div>
        <div>
          <strong>EBE-1:</strong> [Vibration interpreted as: We do not want your
          stone or your water. We require{" "}
          <Redacted unlockCode="CONSCIOUSNESS">The Resonance of Soul</Redacted>.
          Your species has reached the point of maximum variance. You are ripe
          for collection.]
        </div>
        <div>
          <strong>BLACKWOOD:</strong> We will fight you. We have weapons you
          haven't seen.
        </div>
        <div>
          <strong>EBE-1:</strong> [Vibration interpreted as:{" "}
          <Redacted unlockCode="INEVITABLE">
            You are already harvested. You just haven't realized the separation
            has begun.
          </Redacted>{" "}
          The signal is not an invitation. It is a leash.]
        </div>
        <div className="indent" style={{ marginTop: "10px" }}>
          At this point, EBE-1's eyes turned a brilliant silver, and Blackwood
          suffered a localized seizure. The session was terminated immediately.
        </div>
      </div>
    </div>
  );
};

export default Page14;
