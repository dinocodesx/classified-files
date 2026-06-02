import React, { useMemo } from "react";
import { REQUIRED_UNLOCKS } from "../data";
import Redacted from "../Redacted";
import { useARGState } from "../useARGState";

const Page24: React.FC = () => {
  const { resetProgress, unlockedKeys } = useARGState();

  // Completion logic: Check if all 65 codes from pages 1-23 are unlocked
  const isComplete = useMemo(() => {
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
        {isComplete ? "END OF FILE" : "OPERATION INCOMPLETE"}
      </div>

      {/* Section Label */}
      <div className="section-label">
        {isComplete ? "FINAL ASSESSMENT — THE WITNESS" : "STATUS: RESTRICTED"}
      </div>

      <div className="body-text">
        {!isComplete ? (
          /* INCOMPLETE VIEW */
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <div className="indent">
              Access to the final assessment is restricted. Multiple data
              fragments remain encrypted within the Starfall Archive.
            </div>
            <div className="indent" style={{ marginTop: "20px" }}>
              Return to previous pages and ensure all redacted sections have
              been successfully decoded. The Archive requires a complete
              reconstruction of the 1974-2026 timeline to authorize the final
              purge sequence.
            </div>
            <div
              style={{
                marginTop: "40px",
                fontSize: "12px",
                color: "var(--blue-tab)",
              }}
            >
              PROGRESS: {unlockedKeys.length} / {REQUIRED_UNLOCKS.length} CODES
              DECODED
            </div>
          </div>
        ) : (
          /* COMPLETE VIEW - Matches Screenshot 1 */
          <>
            <div className="indent">
              The archive has been successfully purged. The digital ghost of
              EBE-1 has been isolated and the dimensional bridge collapsed at
              the cost of the Dulce facility and all personnel within. The Year
              2026 will not be the year of the Harvest. Not this time.
            </div>
            <div className="indent">
              However, the signal persists in the background radiation of the
              universe. It is a fundamental law of physics now, a ghost
              frequency that will eventually find another way in. We have bought
              ourselves time, perhaps a century, perhaps only a decade.
            </div>
            <div className="indent">
              Thank you for collaborating. By decoding these redacted sections,
              you have helped reconstruct the memory of what was lost. The truth
              has been <Redacted unlockCode="PRESERVED">█████████</Redacted>{" "}
              within this secure archival layer, away from the eyes of the Hive.
            </div>

            {/* Dynamic Section from Screenshot 2 */}
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
                OPERATIONAL SUCCESS: PROJECT STARFALL
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
                The "Anchor" in Antarctica remains silent. We have buried it
                under a million tons of ice. If it ever begins to vibrate again,
                seek the stars, for the Earth will no longer be ours.
              </div>
            </div>

            <div className="indent" style={{ marginTop: "20px" }}>
              Stay vigilant. Stay analog. Stay human.
            </div>
          </>
        )}
      </div>

      {/* Reset Button - Always available or at bottom of complete */}
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

      {/* Footer - Always visible to maintain content design */}
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
