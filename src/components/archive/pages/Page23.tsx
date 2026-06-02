import React from "react";
import Redacted from "../Redacted";

const Page23: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">STATUS</span>
        <span className="form-value">
          SYSTEM FAILURE — CORE MELTDOWN IMMINENT
        </span>
      </div>
      <div className="section-label">
        FINAL LOG — PROJECT STARFALL MAIN DIVIDE
      </div>
      <div className="body-text">
        <p className="indent">
          They are in the room. I can hear the{" "}
          <Redacted unlockCode="SINGING">Singing Ice</Redacted> through the air
          vents. The security cameras are showing static, but I can see their
          shadows on the wall. They don't walk; they flow.
        </p>
        <p className="indent">
          The Director is gone. I watched him try to fight, but he just{" "}
          <Redacted unlockCode="DISSOLVED">Dissolved into static</Redacted> and
          light. He didn't even scream. He just looked... peaceful. That's the
          scariest part.
        </p>
        <p className="indent">
          To whoever finds this file: the truth is not out there in the stars.
          It's <Redacted unlockCode="INSIDE">Inside your DNA</Redacted>. They
          are coming for their inheritance, and we are just the temporary
          tenants of this reality.
        </p>
        <p className="indent">
          I've initiated the purge. The final key to collapse the bridge is{" "}
          <Redacted unlockCode="STARFALL">████████</Redacted>. Use it now. Use
          it before you forget who you are.
        </p>
        <p className="indent">
          I am recording this as my last act as a human. My name was... I can't
          remember. The singing is so beautiful.
        </p>
      </div>
    </div>
  );
};

export default Page23;
