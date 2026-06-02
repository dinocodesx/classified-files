import React from "react";
import Redacted from "../Redacted";

const Page7: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">ASSET ID</span>
        <span className="form-value">
          E.B.E. — 1 (Extraterrestrial Biological Entity)
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">CONDITION</span>
        <span className="form-value">STABLE / UNCONSCIOUS</span>
      </div>
      <div className="section-label">INITIAL RECOVERY REPORT</div>
      <div className="body-text">
        <div className="indent">
          The entity was recovered from the craft at 04:00 after the hull
          spontaneously opened. It is humanoid in shape, approximately 4 feet
          tall, with a disproportionately large head and large,{" "}
          <Redacted unlockCode="OBSIDIAN">obsidian-colored eyes</Redacted> that
          lack pupils or irises.
        </div>
        <div className="indent">
          The skin is a uniform light grey, porous, and lacks any visible hair,
          sweat glands, or reproductive organs. Respirations are minimal,
          approximately 3 per minute. No heartbeat was detected by conventional
          acoustic means, though a rhythmic{" "}
          <Redacted unlockCode="VIBRATION">electromagnetic vibration</Redacted>{" "}
          is present in the chest cavity, suggesting a circulatory system based
          on induction rather than pressure.
        </div>
        <div className="indent">
          The entity was wearing a form-fitting suit made of a silver-threaded
          fabric. Microscopic analysis suggests this fabric is{" "}
          <Redacted unlockCode="ORGANIC">
            grown rather than manufactured
          </Redacted>
          , and appears to be bonded directly to the skin via a series of
          subcutaneous nodes.
        </div>
        <div className="indent">
          Initial attempts to establish a baseline medical profile have failed;
          the entity's blood is a thick, amber-colored fluid that solidifies
          almost instantly when exposed to the atmosphere.
        </div>
      </div>
    </div>
  );
};

export default Page7;
