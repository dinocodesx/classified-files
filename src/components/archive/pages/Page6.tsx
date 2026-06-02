import React from "react";
import Redacted from "../Redacted";

const Page6: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">STATUS</span>
        <span className="form-value">CRITICAL — CONTAINMENT PROTOCOL EPSILON</span>
      </div>
      <div className="section-label">SITE SECURITY LOG — COYOTE SPRINGS</div>
      <div className="body-text">
        <p className="indent">
          The entire 10-mile radius around the impact site has been designated a "National Wildlife Refuge" and closed to all civilian and non-authorized military personnel. Armed patrols are authorized to use lethal force against trespassers.
        </p>
        <p className="indent">
          At 22:30, the hull of the object began to <Redacted unlockCode="TRANSLUCENT">become translucent</Redacted>, revealing a complex internal lattice. Sensors detected movement within the central cavity—a biological signature that defies our current understanding of metabolism. The interior air appears to be a mixture of xenon and an unknown gaseous catalyst.
        </p>
        <p className="indent">
          A biological signature has been confirmed. We have life. Requesting immediate deployment of the <Redacted unlockCode="BIOHAZARD">Biological Containment Team</Redacted> from Groom Lake. Medical personnel are to be equipped with lead-lined breathing apparatus.
        </p>
        <p className="indent">
          The object is no longer stationary; it is vibrating at a frequency that is causing structural damage to our temporary containment dome. We are witnessing an activation sequence.
        </p>
        <div className="stamp-circle" style={{top: '60%', right: '10%'}}>
          SECURED<br/>LEVEL 9
        </div>
      </div>
    </div>
  );
};

export default Page6;
