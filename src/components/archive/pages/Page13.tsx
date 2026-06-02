import React from "react";
import Redacted from "../Redacted";

const Page13: React.FC = () => {
  return (
    <div>
      <div className="section-label">TECHNICAL RECOVERY — THE "BLACK BOX"</div>
      <div className="body-text">
        <p className="indent">
          Recovery teams at the Dulce facility have successfully opened the primary data core from the Coyote Springs craft. It does not use magnetic tape, optical discs, or silicon storage. The architecture is entirely alien to our current computer science.
        </p>
        <p className="indent">
          The core is a sphere of <Redacted unlockCode="METALLIC-HYDROGEN">Metallic Hydrogen</Redacted> kept under extreme pressure by a localized gravity field. Information is stored as quantum fluctuations—spin-states of individual atoms—within the sphere. This allows for a data density that is theoretically infinite.
        </p>
        <p className="indent">
          We have managed to extract a single visual data fragment. It is not a photo, but a multi-dimensional map. It shows a fleet of thousands of similar ovoid craft, currently positioned in the Oort cloud. The date-stamp, when translated from their base-60 temporal system, corresponds to <Redacted unlockCode="2026">June 2026</Redacted>.
        </p>
        <p className="indent">
          The craft we recovered in Nevada was not a scout. It was a <Redacted unlockCode="VANGUARD">Vanguard</Redacted>—a lighthouse meant to guide the others through the dimensional fold. They aren't looking for a home; they are coming to reclaim a territory.
        </p>
      </div>
    </div>
  );
};

export default Page13;
