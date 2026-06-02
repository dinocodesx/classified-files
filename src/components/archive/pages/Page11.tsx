import React from "react";
import Redacted from "../Redacted";

const Page11: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">ALERT LEVEL</span>
        <span className="form-value">ORANGE — POSSIBLE PSYCHOLOGICAL CONTAMINATION</span>
      </div>
      <div className="section-label">SECURITY INCIDENT ISB-74-092</div>
      <div className="body-text">
        <p className="indent">
          At 02:00 on November 5th, Agent Blackwood, a senior field lead with 12 years of service, was found in the secure communications room. He had bypassed two biometric checkpoints and was attempting to broadcast a 12-terawatt wide-band signal toward the Lunar relay point. The signal contained a scrambled version of our own encrypted mission logs.
        </p>
        <p className="indent">
          When restrained by security teams, Blackwood offered no resistance. He claimed he was "merely answering the door" and that the "caller was impatient." Medical examination showed signs of <Redacted unlockCode="OCULAR">severe ocular hemorrhaging</Redacted> and a rapid expansion of the pineal gland. 
        </p>
        <p className="indent">
          A search of his quarters revealed thousands of pages of detailed drawings, executed in what appears to be a mixture of ink and his own blood. They depict a massive, <Redacted unlockCode="PYRAMID">pyramid-shaped structure</Redacted> hidden deep beneath the ice of Queen Maud Land, Antarctica. He calls it "The Anchor" and claims it has been vibrating for ten thousand years, waiting for the Starfall signal to "wake it up."
        </p>
        <p className="indent">
          Blackwood has been placed in solitary confinement under 24-hour observation. He continues to hum the KHORANA sequence.
        </p>
      </div>
    </div>
  );
};

export default Page11;
