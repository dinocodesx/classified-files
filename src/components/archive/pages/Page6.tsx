import React from "react";

const Page6: React.FC = () => {
  return (
    <div>
      <div className="section-label">NATURE OF INCIDENT</div>
      <div className="body-text">
        <p className="indent">
          Following receipt of Agent Hartmann's field memorandum (DOC-7741-B),
          the Internal Security Branch has opened a formal investigation into
          the presence of the unidentified third party at the GREY MANTLE
          exchange on 14 March 1974.
        </p>
        <p className="indent">
          The investigation (designated ISB-74-GREYMANTLE) will proceed on three
          parallel tracks:
        </p>
      </div>
      <div className="two-col" style={{ marginBottom: 10 }}>
        <div className="col-entry">
          <div className="name" style={{ fontSize: 11 }}>
            Track A: Identification
          </div>
          <div className="sub">
            Physical composite, surveillance records, local liaison inquiry.
          </div>
        </div>
        <div className="col-entry">
          <div className="name" style={{ fontSize: 11 }}>
            Track B: Signals Review
          </div>
          <div className="sub">
            Full audit of all SIGINT bearing on 11–14 MAR 1974 period.
          </div>
        </div>
        <div className="col-entry">
          <div className="name" style={{ fontSize: 11 }}>
            Track C: Asset Security
          </div>
          <div className="sub">
            Assessment of CARDINAL exposure and protective options.
          </div>
        </div>
        <div className="col-entry">
          <div className="name" style={{ fontSize: 11 }}>
            Track D: Internal Review
          </div>
          <div className="sub">
            Operational security audit — Station Vienna, preceding 90 days.
          </div>
        </div>
      </div>
      <div className="section-label">INTERIM MEASURES</div>
      <div className="body-text">
        <p className="indent">
          Pending the outcome of the investigation, the following interim
          measures are in effect: all contact with CARDINAL is SUSPENDED; cipher
          protocols for Station Vienna are rotated with immediate effect; and
          access to the GREY MANTLE file is restricted to personnel on the
          enclosed BIGOT list only. A full status briefing will be prepared
          within ten working days.
        </p>
      </div>
    </div>
  );
};

export default Page6;
