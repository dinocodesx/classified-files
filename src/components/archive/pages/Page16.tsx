import React from "react";
import Redacted from "../Redacted";

const Page16: React.FC = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid var(--classify-red)",
          padding: "8px 12px",
          marginBottom: 12,
          position: "relative",
          transform: "rotate(-0.5deg)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "var(--classify-red)",
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          DECLASSIFIED IN FULL
          <br />
          Authority: EO 13526
          <br />
          Date of Review: 14 January 1998
          <br />
          Reviewed by: <Redacted>████████</Redacted>, Chief Declassification Officer
        </div>
      </div>
      <div className="section-label">ARCHIVAL RECORD & DEPOSITION</div>
      <div className="body-text">
        <p className="indent">
          This file constitutes the complete record of Operation GREY MANTLE
          (January–June 1974), Station Vienna. It is deposited in the Historical
          Intelligence Collection and may be reviewed by authorised researchers
          subject to standard access procedures.
        </p>
        <p className="indent">
          Sixteen documents are held in this file. All have been reviewed under the
          standard declassification framework. Portions remain withheld as
          indicated by the redactions in the body of the record. The withheld
          portions relate to source protection (certain identifying details of
          CARDINAL and of unnamed personnel), technical collection methods, and
          the identity of the foreign intelligence service referenced on pages
          8–14.
        </p>
        <div className="section-label">NOTE FROM THE RECORDS OFFICE</div>
        <p className="indent">
          The Records Management Division certifies that this file is complete
          as received. No documents have been withdrawn or destroyed since
          original deposit. This record is classified UNCLASSIFIED upon release,
          subject to the redactions noted herein. Freedom of Information Act (FOIA) requests pertaining to the withheld segments are subject to exemption (b)(1) protecting national security information.
        </p>
        <p className="indent" style={{ marginTop: 8 }}>
          This file has been digitised and assigned accession number{" "}
          <strong>HIC-1974-GM-001</strong>. Physical originals are held in
          secure storage. Scheduled for permanent retention; exempt from automatic destruction protocols.
        </p>
      </div>
      <div style={{ marginTop: 12, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 9,
            letterSpacing: "0.25em",
            color: "var(--ink-faded)",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          END OF FILE
        </div>
        <div style={{ height: 1, background: "var(--paper-dark)", margin: "4px 0" }} />
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 8,
            letterSpacing: "0.2em",
            color: "var(--ink-faded)",
            textTransform: "uppercase",
          }}
        >
          Records Management Division · Historical Intelligence Collection
        </div>
      </div>
    </div>
  );
};

export default Page16;
