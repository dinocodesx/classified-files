import React from "react";
import Redacted from "../Redacted";

const Page5: React.FC = () => {
  return (
    <div>
      <div className="section-label">
        PRELIMINARY PHYSICAL ANALYSIS — OBJECT STARFALL-B
      </div>
      <div className="body-text">
        <p>
          Analysis conducted in-situ by Dr. Thorne and Team Phoenix using
          portable spectrometry and ultrasound equipment.
        </p>
        <ul style={{ listStyle: "none", paddingLeft: "1em" }}>
          <li>
            <strong>Mass:</strong> 2,450 kg (Estimate based on displacement and
            soil compression).
          </li>
          <li>
            <strong>Composition:</strong> Unknown alloy. Initial mass-spec shows
            trace amounts of{" "}
            <Redacted unlockCode="ELEMENT-115">Moscovium</Redacted> and other
            heavy elements not found on the periodic table.
          </li>
          <li>
            <strong>Temperature:</strong> Constant -18°C despite the desert
            heat. The object is a perfect heat-sink.
          </li>
          <li>
            <strong>Radiation:</strong> Negligible gamma/beta, but high{" "}
            <Redacted unlockCode="NEUTRINO">Neutrino</Redacted> emission,
            consistent with theoretical FTL propulsion systems.
          </li>
        </ul>
        <p className="indent" style={{ marginTop: "15px" }}>
          The object shows no visible seams, rivets, or propulsion systems. It
          appears to be carved from a single block of material, or perhaps
          grown. Ultrasound pings reveal a hollow interior with three distinct
          "cavities," though no method of entry has been discovered.
        </p>
        <p className="indent">
          At 05:00, a low-frequency hum (approx 40Hz) was recorded by seismic
          sensors. This frequency matches the{" "}
          <Redacted unlockCode="PULSE">Pulse</Redacted> periodicity detected
          from the Moon. We believe the object is acting as a terrestrial node
          for the Lunar relay.
        </p>
        <p className="indent">
          Dr. Thorne has advised against using kinetic tools to open the craft,
          fearing a localized spatial collapse or energy release.
        </p>
      </div>
    </div>
  );
};

export default Page5;
