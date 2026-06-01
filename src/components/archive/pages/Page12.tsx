import React from "react";
import Redacted from "../Redacted";

const Page12: React.FC = () => {
  return (
    <div>
      <div className="section-label">DIRECTIVE: ASSET REASSIGNMENT</div>
      <div className="body-text">
        <div className="form-row">
          <span className="form-label">ASSET</span>
          <span className="form-value">CARDINAL (Vienna Source)</span>
        </div>
        <div className="form-row">
          <span className="form-label">NEW HANDLER</span>
          <span className="form-value">Agent <Redacted>████████</Redacted> (Arriving 12 APR)</span>
        </div>
        <p className="indent">Given the detection of a potential hostile surveillance element during the March 14th exchange, Agent Hartmann is ordered to initiate a controlled handover of asset CARDINAL.</p>
        <div className="section-label">HANDOVER PROTOCOL</div>
        <p className="indent">CARDINAL has expressed significant anxiety regarding his personal security. The handover must be conducted with extreme delicacy to prevent the asset from panicking and breaking contact. Hartmann is to introduce the new handler under the alias "Herr <Redacted>█████</Redacted>", operating under the cover of a Swiss trade attaché.</p>
        <p className="indent">Effective immediately, the Volksgarten location is burned. All future physical exchanges will utilize <strong>Protocol 7-OMEGA</strong>. The new primary drop site will be located within the confines of the Zentralfriedhof (Central Cemetery), utilizing Sector <Redacted>██</Redacted> for dead-letter transfers.</p>
        <p className="indent">If CARDINAL fails to appear for the initial handover meeting, Station Vienna is not to attempt direct contact at his place of employment. We cannot risk blowing his cover entirely.</p>
      </div>
    </div>
  );
};
export default Page12;
