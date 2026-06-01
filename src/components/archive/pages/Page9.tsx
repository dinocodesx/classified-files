import React from "react";
import Redacted from "../Redacted";

const Page9: React.FC = () => {
  return (
    <div>
      <div className="section-label">OPERATIONAL SUMMARY</div>
      <div className="body-text">
        <p className="indent">
          Operation GREY MANTLE is hereby formally closed, effective 1 June
          1974. This report constitutes the official summary of the operation's
          final status and is prepared for archival deposit.
        </p>
        <p className="indent">
          The operation, initiated in January 1974 in response to intelligence
          opportunities identified through asset CARDINAL, achieved its primary
          objectives. Three documents of assessed high intelligence value were
          successfully obtained and exploited. The intelligence contributed to
          briefings related to the April summit (reference:{" "}
          <Redacted>████████████</Redacted>) and is assessed to have provided
          material advantage in those proceedings.
        </p>
        <div className="section-label">DISPOSITION OF MATTERS ARISING</div>
        <p className="indent">
          The unidentified third party observed at the March exchange was,
          following extended investigation, assessed to be an officer of a{" "}
          <Redacted>████████</Redacted> service acting in a coincidental
          surveillance capacity unrelated to GREY MANTLE. The risk to CARDINAL
          and to Station Vienna is assessed as LOW.
        </p>
        <p className="indent">
          Asset CARDINAL has been successfully transitioned to a revised contact
          protocol and remains active and productive. His current handler is{" "}
          <Redacted>████████</Redacted>, who assumed the role in May 1974
          following Hartmann's transfer.
        </p>
        <p className="indent">
          Agent Hartmann is commended for his professionalism throughout this
          operation and has been recommended for accelerated promotion.
        </p>
      </div>
    </div>
  );
};

export default Page9;
