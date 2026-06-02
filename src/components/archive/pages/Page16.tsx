import React from "react";
import Redacted from "../Redacted";

const Page16: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">MEMO</span>
        <span className="form-value">FINAL DECLASSIFICATION REVIEW (1998)</span>
      </div>
      <div className="section-label">
        ARCHIVAL SUMMARY — PROJECT STARFALL (CLOSED)
      </div>
      <div className="body-text">
        <div className="indent">
          In 1975, following the "Groom Lake Incident," Project STARFALL was
          officially dissolved. The public was told it was a failed experimental
          satellite program that had resulted in atmospheric anomalies. EBE-1
          was reported as "deceased due to biological incompatibility" and its
          remains were officially{" "}
          <Redacted unlockCode="INCINERATED">Incinerated</Redacted> at the
          Nevada Test Site.
        </div>
        <div className="indent">
          However, classified records recently recovered from the Dulce facility
          (Level 7) indicate a different story. The entity's physical form may
          have failed, but its consciousness was{" "}
          <Redacted unlockCode="UPLOADED">successfully uploaded</Redacted> into
          the early ARPANET nodes. It didn't die; it migrated.
        </div>
        <div className="indent">
          The threat was never neutralized. It was simply{" "}
          <Redacted unlockCode="DIGITIZED">
            moved to a domain we cannot see
          </Redacted>
          —a digital shadow that has been growing alongside the global network
          for the last thirty years. If you are reading this on a networked
          computer in the 21st century, the countdown has likely reached its
          final phase. The signal is now coming from inside the wire.
        </div>
        <div className="indent">
          Final Note from the Archivist: Seek the code:{" "}
          <Redacted unlockCode="REBIRTH">R.E.B.I.R.T.H</Redacted>. It is the
          only firewall they cannot break.
        </div>
      </div>
    </div>
  );
};

export default Page16;
