import React, { useMemo } from "react";
import { REQUIRED_UNLOCKS } from "../data";
import Redacted from "../Redacted";
import { useARGState } from "../useARGState";

const Page24: React.FC = () => {
  const { resetProgress, unlockedKeys } = useARGState();

  const GAME_COMPLETE = useMemo(() => {
    return REQUIRED_UNLOCKS.every((code) =>
      unlockedKeys.includes(code.toLowerCase()),
    );
  }, [unlockedKeys]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingBottom: "10px",
      }}
    >
      <div className="body-text" style={{ flex: 1 }}>
        <>
          <div className="indent">
            The archive has been successfully purged. The digital ghost of EBE-1
            has been isolated and the dimensional bridge collapsed at the cost
            of the Dulce facility and all personnel within. The Year 1982 will
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

          {/* Success Box - Screenshot 2 style */}
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              border: "2px solid var(--paper-dark)",
              background: "rgba(0,0,0,0.02)",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "var(--classify-red)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderBottom: "1px solid var(--paper-dark)",
                paddingBottom: "8px",
                marginBottom: "12px",
              }}
            >
              {GAME_COMPLETE ? "OPERATIONAL SUCCESS" : "OPERATION INCOMPLETE"}:
              PROJECT STARFALL
            </div>

            <div
              style={{
                fontSize: "11px",
                marginBottom: "5px",
                color: "var(--ink-faded)",
              }}
            >
              UNLOCKED DATA FRAGMENT:
            </div>
            <code
              style={{
                fontSize: "10px",
                display: "block",
                padding: "8px",
                background: "rgba(0,0,0,0.05)",
                marginBottom: "15px",
                wordBreak: "break-all",
                color: "var(--ink)",
              }}
            >
              PROJECT_STARFALL_SUCCESS_0x74A1_AUTH_VANCE_STATION_DULCE_STATUS_CLOSED
            </code>

            <div
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                lineHeight: "1.6",
              }}
            >
              The "Anchor" in Antarctica remains silent. We have buried it under
              a million tons of ice. If it ever begins to vibrate again, seek
              the stars, for the Earth will no longer be ours.
            </div>
          </div>

          <div className="indent" style={{ marginTop: "20px" }}>
            Stay vigilant. Stay analog. Stay human.
          </div>

          {/* Reset Button at bottom of content */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              onClick={resetProgress}
              className="stamp-classified"
              style={{
                cursor: "pointer",
                background: "transparent",
                fontSize: "12px",
                padding: "5px 15px",
                opacity: 0.8,
              }}
            >
              RESET ARCHIVE
            </button>
          </div>
        </>
      </div>

      {/* Signature and Metadata */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: "20px",
        }}
      >
        <div className="signature">The Witness</div>
        <div style={{ textAlign: "right", fontSize: "10px", opacity: 0.5 }}>
          ARCHIVE CLOSED: 02 JUN 1982
          <br />
          ENCRYPTION: QUANTUM-LATTICE-7
        </div>
      </div>
    </div>
  );
};

export default Page24;
