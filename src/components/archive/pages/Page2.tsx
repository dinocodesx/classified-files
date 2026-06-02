import React from "react";
import Redacted from "../Redacted";

const Page2: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">TO</span>
        <span className="form-value">
          Director of Special Operations, STARFALL HQ
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">FROM</span>
        <span className="form-value">
          Dr. Elias Thorne, Head of Technical Analysis
        </span>
      </div>
      <div className="form-row">
        <span className="form-label">SUBJECT</span>
        <span className="form-value">
          TRIANGULATION AND ATTRIBUTION — LUNAR SOURCE
        </span>
      </div>
      <div className="section-label">TECHNICAL FINDINGS</div>
      <div className="body-text">
        <div className="indent">
          Using a combination of the Goldstone array and the Parkes Observatory
          in Australia, we have achieved a high-confidence triangulation of the
          source. The signal is stationary at 0.67° N, 23.47° E. This
          corresponds exactly to the <Redacted>Tranquility Base</Redacted>{" "}
          landing site, where the Apollo 11 Lunar Module "Eagle" descended in
          1969.
        </div>
        <div className="indent">
          While the location is known, the signal power is impossible. Telemetry
          indicates a broadcast strength of roughly 50 kilowatts, which exceeds
          any hardware left behind by the Apollo missions by several orders of
          magnitude. Furthermore, the signal began abruptly, with no lead-in or
          testing phase detected by our satellite network.
        </div>
        <div className="indent">
          The pulse carries a carrier wave modulated by a sequence of prime
          numbers (2, 3, 5, 7, 11, 13...). This is a clear indicator of{" "}
          <Redacted unlockCode="INTELLIGENCE">artificial origin</Redacted>. More
          concerningly, we have detected a secondary, much weaker signal
          reflecting off the Moon's surface, originating from a deep space
          vector.
        </div>
        <div className="indent">
          The vector points toward the{" "}
          <Redacted unlockCode="VEGA">Lyra Constellation</Redacted>,
          specifically the star Vega. This suggests the Moon is not the source,
          but a relay station. Something has "turned on" an old piece of
          equipment, or used our own landing site as a mirror for a message from
          deep space.
        </div>
      </div>
    </div>
  );
};

export default Page2;
