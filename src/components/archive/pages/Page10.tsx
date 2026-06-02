import React from "react";
import Redacted from "../Redacted";

const Page10: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">SUBJECT</span>
        <span className="form-value">LINGUISTIC ANALYSIS — ATTEMPT 1</span>
      </div>
      <div className="section-label">
        CRYPTO-LINGUISTICS REPORT — SARAH JENKINS
      </div>
      <div className="body-text">
        <div className="indent">
          The sounds produced by EBE-1, while in its rhythmic trance state, are
          not vocalized. There is no air movement from its respiratory slit
          during these events. Instead, the "sounds" are{" "}
          <Redacted unlockCode="TELEPATHIC">
            emitted directly as electromagnetic waves
          </Redacted>{" "}
          on the 1.4 GHz band, which the human auditory cortex interprets as
          high-fidelity sound through a process of bio-magnetic induction.
        </div>
        <div className="indent">
          The recurring pattern we've identified as "The Message" has been
          slowed down by 400% for human comprehension. It contains a repeating
          set of three syllables that resonate with a strange, metallic timbre:{" "}
          <Redacted unlockCode="KHORA">KHO-RA-NA</Redacted>. When these
          syllables are converted into spectral density maps, they reveal a
          complex fractal pattern.
        </div>
        <div className="indent">
          Using the frequency analysis tools at Langley, we've mapped the
          internal timing of these syllables to a mathematical constant. The
          value is <Redacted unlockCode="1.618">1.618</Redacted> (The Golden
          Ratio), maintained to the 12th decimal place. They aren't just
          speaking; they are speaking in pure geometry. The message is not a
          plea for help or a greeting; it is a declaration of presence.
        </div>
        <div className="indent">
          Jenkins' Note: I feel as if the signal is not something I am listening
          to, but something that is listening to me. Whenever I close my eyes, I
          see the syllables as light.
        </div>
      </div>
    </div>
  );
};

export default Page10;
