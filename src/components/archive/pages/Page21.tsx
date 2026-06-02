import React from "react";
import Redacted from "../Redacted";

const Page21: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">TOP SECRET</span>
        <span className="form-value">EYES ONLY — OPERATION CHRONOS</span>
      </div>
      <div className="section-label">TEMPORAL DISTORTION REPORT</div>
      <div className="body-text">
        <p className="indent">
          We found a way back. Or so we thought. The project was called Operation Chronos, a last-ditch effort to stop the Starfall signal before it ever reached the Moon in 1974.
        </p>
        <p className="indent">
          The device recovered from the Antarctica site, known as "The Anchor," is not just a beacon. It is a <Redacted unlockCode="TIME-BRIDGE">Time Bridge</Redacted>. But as our physicists discovered too late, it is locked in a temporal loop. It only goes one way: forward, following the expansion of the universe.
        </p>
        <p className="indent">
          The aliens aren't from another galaxy. They are from <Redacted unlockCode="THE-FUTURE">The Future</Redacted>. They are the remnants of humanity, thousands of years from now, after the <Redacted unlockCode="EXTINCTION">Great Extinction</Redacted>. They are a dying race of digital ghosts trying to harvest the "original" biological consciousness of their own past to rebuild their dead souls.
        </p>
        <p className="indent">
          We aren't being invaded by aliens. We are being cannibalized by our own descendants. The Starfall is the loop closing.
        </p>
      </div>
    </div>
  );
};

export default Page21;
