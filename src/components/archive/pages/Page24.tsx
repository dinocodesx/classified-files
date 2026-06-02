import React, { useMemo } from "react";
import { REQUIRED_UNLOCKS } from "../data";
import Redacted from "../Redacted";
import { useARGState } from "../useARGState";

const Page24: React.FC = () => {
  const { resetProgress, unlockedKeys } = useARGState();

  // Boolean variable to check if all codes are answered
  const GAME_COMPLETE = useMemo(() => {
    return REQUIRED_UNLOCKS.every((code) =>
      unlockedKeys.includes(code.toLowerCase()),
    );
  }, [unlockedKeys]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Header Stamp */}
      <div
        className="stamp-classified"
        style={{ fontSize: "24px", marginBottom: "10px", alignSelf: "center" }}
      >
        {GAME_COMPLETE ? "END OF FILE" : "OPERATION INCOMPLETE"}
      </div>

      <div className="body-text">
        <>
          <div className="indent">
            The archive has been successfully purged. The digital ghost of EBE-1
            has been isolated and the dimensional bridge collapsed at the cost
            of the Dulce facility and all personnel within. The Year 2026 will
            not be the year of the Harvest. Not this time.
          </div>
          <div className="indent">
            However, the signal persists in the background radiation of the
            universe. It is a fundamental law of physics now, a ghost frequency
            that will eventually find another way in. We have bought ourselves
            time, perhaps a century, perhaps only a decade.
          </div>
          <div className="indent">
            Thank you for collaborating. By decoding these redacted sections,
            you have helped reconstruct the memory of what was lost. The truth
            has been <Redacted unlockCode="PRESERVED">█████████</Redacted>{" "}
            within this secure archival layer, away from the eyes of the Hive.
          </div>

          {/* Dynamic Section requested by user */}
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid var(--paper-dark)",
              background: "rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "var(--classify-red)",
                textTransform: "uppercase",
              }}
            >
              {GAME_COMPLETE ? "OPERATIONAL SUCCESS" : "OPERATION INCOMPLETE"}:
              PROJECT STARFALL
            </div>
            <div style={{ marginTop: "10px" }}>UNLOCKED DATA FRAGMENT:</div>
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
            <div style={{ marginTop: "10px", fontSize: "11px" }}>
              The "Anchor" in Antarctica remains silent. We have buried it under
              a million tons of ice. If it ever begins to vibrate again, seek
              the stars, for the Earth will no longer be ours.
            </div>
          </div>

          <div className="indent" style={{ marginTop: "20px" }}>
            Stay vigilant. Stay analog. Stay human.
          </div>
        </>
      </div>

      {/* Reset Button */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={resetProgress}
          className="stamp-classified"
          style={{
            cursor: "pointer",
            background: "transparent",
            fontSize: "11px",
            padding: "3px 10px",
            opacity: 0.8,
          }}
        >
          RESET ARCHIVE
        </button>
      </div>

      {/* Footer */}
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
