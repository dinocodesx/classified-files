import React from "react";
import Redacted from "../Redacted";

const Page24: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        className="stamp-classified"
        style={{ fontSize: "24px", marginBottom: "10px", alignSelf: "center" }}
      >
        END OF FILE
      </div>

      <div className="section-label">FINAL ASSESSMENT — THE WITNESS</div>

      <div className="body-text">
        <p className="indent">
          The archive has been successfully purged. The digital ghost of EBE-1
          has been isolated and the dimensional bridge collapsed at the cost of
          the Dulce facility and all personnel within. The Year 2026 will not be
          the year of the Harvest. Not this time.
        </p>
        <p className="indent">
          However, the signal persists in the background radiation of the
          universe. It is a fundamental law of physics now, a ghost frequency
          that will eventually find another way in. We have bought ourselves
          time, perhaps a century, perhaps only a decade.
        </p>
        <p className="indent">
          Thank you for collaborating. By decoding these redacted sections, you
          have helped reconstruct the memory of what was lost. The truth has
          been <Redacted unlockCode="PRESERVED">█████████</Redacted> within this
          secure archival layer, away from the eyes of the Hive.
        </p>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid var(--paper-dark)",
            background: "rgba(0,0,0,0.03)",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "var(--classify-red)",
            }}
          >
            OPERATIONAL SUCCESS: PROJECT STARFALL
          </p>
          <p style={{ marginTop: "10px" }}>UNLOCKED DATA FRAGMENT:</p>
          <code
            style={{
              fontSize: "10px",
              display: "block",
              marginTop: "5px",
              wordBreak: "break-all",
            }}
          >
            PROJECT_STARFALL_SUCCESS_0x74A1_AUTH_VANCE_STATION_DULCE_STATUS_CLOSED
          </code>
          <p style={{ marginTop: "10px", fontSize: "11px" }}>
            The "Anchor" in Antarctica remains silent. We have buried it under a
            million tons of ice. If it ever begins to vibrate again, seek the
            stars, for the Earth will no longer be ours.
          </p>
        </div>

        <p className="indent" style={{ marginTop: "20px" }}>
          Stay vigilant. Stay analog. Stay human.
        </p>
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div className="signature">The Witness</div>
        <div style={{ textAlign: "right", fontSize: "10px", opacity: 0.5 }}>
          ARCHIVE CLOSED: 02 JUN 2026
          <br />
          ENCRYPTION: QUANTUM-LATTICE-7
        </div>
      </div>
    </div>
  );
};

export default Page24;
