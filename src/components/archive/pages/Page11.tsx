import React from "react";
import Redacted from "../Redacted";

const Page11: React.FC = () => {
  return (
    <div>
      <div className="notecard" style={{ marginBottom: 10 }}>
        <div className="notecard-text">
          <span className="highlight">TECH DIV NOTICE:</span> The following spectrum analysis involves highly classified collection methods. DO NOT duplicate.
        </div>
      </div>
      <div className="section-label">SIGINT EVALUATION — ANOMALOUS BURST</div>
      <div className="body-text">
        <p className="indent">On 13 MAR 1974, at 23:55 local time, Station Vienna intercepted an anomalous 4-second burst transmission on a backup frequency. Technical Division has completed its spectral analysis of the recording (TAPE-VIE-740313-C).</p>
        <div className="form-row">
          <span className="form-label">FREQUENCY</span>
          <span className="form-value"><Redacted>███.██</Redacted> MHz (UHF Band)</span>
        </div>
        <div className="form-row">
          <span className="form-label">ENCRYPTION</span>
          <span className="form-value">High-speed pulse, suspected one-time pad</span>
        </div>
        <div className="section-label">ATTRIBUTION & TRIANGULATION</div>
        <p className="indent">Triangulation arrays place the origin of the transmission within a 400-meter radius of the Innere Stadt, closely corresponding to the Volksgarten drop site used by Agent Hartmann and CARDINAL.</p>
        <p className="indent">The encryption envelope and baud rate strongly match profiles associated with <Redacted>███████</Redacted> military intelligence, specifically a known <Redacted>GRU</Redacted> variant utilized by their Directorate K operatives.</p>
        <p className="indent"><strong>CONCLUSION:</strong> It is highly probable that the March 14th exchange was subject to hostile electronic surveillance. We recommend sweeping all Station Vienna vehicles and safe houses for passive listening devices immediately.</p>
      </div>
    </div>
  );
};
export default Page11;
