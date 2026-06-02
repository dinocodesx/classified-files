import React from "react";
import Redacted from "../Redacted";

const Page4: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">LOCATION</span>
        <span className="form-value">COYOTE SPRINGS, NEVADA — SECTOR 4</span>
      </div>
      <div className="form-row">
        <span className="form-label">TIME</span>
        <span className="form-value">02:14 PST</span>
      </div>
      <div className="section-label">FIELD REPORT — KINETIC IMPACT EVENT</div>
      <div className="body-text">
        <p className="indent">
          At 02:14 local time, a high-velocity object entered the atmosphere over central Nevada, creating a sonic boom that was heard as far away as Las Vegas. Despite the magnitude of the entry, the object was not tracked by NORAD or the PAVE PAWS radar until it was within 50 miles of the surface, suggesting an advanced cloaking or low-observable technology.
        </p>
        <p className="indent">
          Impact occurred 12 miles North-East of the Coyote Springs substation, creating a crater roughly 40 feet in diameter. First responders from Project STARFALL (Team <Redacted unlockCode="PHOENIX">PHOENIX</Redacted>), already stationed in the vicinity for a "military exercise," reached the site within 40 minutes and established a 5-mile perimeter.
        </p>
        <p className="indent">
          The object is approximately 14 feet in length, ovoid in shape, and composed of a dark, non-reflective material that appears to absorb light. There are no visible propulsion ports or entry hatches. It is currently <Redacted unlockCode="GLOWING">emitting a faint violet light</Redacted> that pulses in sync with the Lunar signal. The surrounding sand has been vitrified into a glass-like substance, indicating an extremely high impact temperature.
        </p>
        <p className="indent">
          Geiger counters show normal background levels, but magnetic sensors are fluctuating wildly. Personnel report a metallic taste in their mouths when approaching the crater rim.
        </p>
      </div>
    </div>
  );
};

export default Page4;
