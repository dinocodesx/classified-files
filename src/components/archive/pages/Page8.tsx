import React from "react";
import Redacted from "../Redacted";

const Page8: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">SUBJECT</span>
        <span className="form-value">QUARANTINE OBSERVATION — DAY 1</span>
      </div>
      <div className="section-label">MEDICAL LOG — DR. HELEN VOSS</div>
      <div className="body-text">
        <p className="indent">
          EBE-1 has been placed in a pressurized xenon-oxygen atmosphere within the high-security medical wing of Groom Lake. Monitoring is constant.
        </p>
        <p className="indent">
          While technically unconscious, the entity appears to be communicating. Not through vocalization, but by some form of induction. EEG readings show massive, structured bursts of activity every time the <Redacted unlockCode="MOON">Lunar Pulse</Redacted> hits our receiver. It is as if the entity's brain is being used as a processing node for the signal.
        </p>
        <p className="indent">
          We have observed a strange phenomenon: personnel in proximity to the quarantine glass have reported <Redacted unlockCode="AUDITORY">auditory hallucinations</Redacted>. They describe a sound like "shattering glass" or "singing ice," followed by a sense of deep, existential dread.
        </p>
        <p className="indent">
          One technician has been removed from duty after attempting to <Redacted unlockCode="OPEN">open the airlock</Redacted> without authorization. When questioned, he claimed the entity was "suffocating in the dark" and that he "needed to let the light in." He has no memory of the incident.
        </p>
        <p className="indent">
          Recommendation: All medical staff are to be rotated every 4 hours to minimize cognitive drift.
        </p>
      </div>
    </div>
  );
};

export default Page8;
