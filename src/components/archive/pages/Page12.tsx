import React from "react";
import Redacted from "../Redacted";

const Page12: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">FROM</span>
        <span className="form-value">General Arthur Vance</span>
      </div>
      <div className="form-row">
        <span className="form-label">TO</span>
        <span className="form-value">The Joint Chiefs of Staff</span>
      </div>
      <div className="section-label">
        DIRECTOR'S BRIEFING — PROJECT STARFALL STATUS
      </div>
      <div className="body-text">
        <div className="indent">
          Gentlemen, we are no longer in a "research and discovery" phase. We
          have officially entered a "defense and containment" phase. The events
          at Coyote Springs and the subsequent behavior of EBE-1 suggest an
          intent that is far from benign.
        </div>
        <div className="indent">
          The Lunar Pulse has increased in intensity by 40% in the last 72
          hours. Our satellite reconnaissance (Project HEXAGON) has confirmed
          the presence of three additional{" "}
          <Redacted unlockCode="CLOAKED">cloaked vessels</Redacted> currently in
          High Earth Orbit. They are maintaining a perfect triangular formation
          exactly 120 degrees apart, with the Coyote Springs site at the center
          of the triangle.
        </div>
        <div className="indent">
          EBE-1 has regained consciousness and has shown a terrifying level of
          adaptability. It has refused all biological nourishment but has
          requested access to our{" "}
          <Redacted unlockCode="RADAR">Global Radar Network</Redacted> via its
          telepathic interface. It claims it can "stop the signal" and prevent
          the arrival of the main fleet. I do not trust it. I believe it is
          seeking to map our planetary defenses before the next impact event.
        </div>
        <div className="indent">
          I am requesting authorization for the immediate activation of the
          "Star-Shield" orbital kinetic platforms. We must be prepared to strike
          the HEO vessels if they descend further.
        </div>
      </div>
    </div>
  );
};

export default Page12;
