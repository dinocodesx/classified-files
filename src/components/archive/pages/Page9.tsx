import React from "react";
import Redacted from "../Redacted";

const Page9: React.FC = () => {
  return (
    <div>
      <div className="form-row">
        <span className="form-label">DEPARTMENT</span>
        <span className="form-value">XENO-BIOLOGY LAB 4 — DULCE BASE</span>
      </div>
      <div className="section-label">
        AUTOPSY OF RECOVERED BIOMASS — FRAGMENT A
      </div>
      <div className="body-text">
        <p className="indent">
          Note: Subject EBE-1 is still living and currently housed at Groom
          Lake. This report concerns the secondary biological material found
          adhered to the interior hull of the Coyote Springs craft, designated
          "Biomass Fragment A."
        </p>
        <p className="indent">
          The biomass is a{" "}
          <Redacted unlockCode="CRYSTALLINE">crystalline lattice</Redacted>{" "}
          interlaced with semi-conductive, nervous-system-like fibers. Chemical
          analysis reveals a high concentration of silicon and carbon, but the
          structural arrangement suggests it was engineered rather than evolved.
          It appears to act as a distributed biological computer, processing
          telemetry data from the craft's exterior sensors and translating it
          into a format the pilot (EBE-1) can perceive directly.
        </p>
        <p className="indent">
          When exposed to a low-voltage electrical current, the lattice emits a
          high-pitched frequency that causes{" "}
          <Redacted unlockCode="NAUSEA">intense nausea</Redacted>, sharp
          headaches, and momentary loss of motor control in 90% of lab staff. We
          have discovered that the sequence of pulses emitted by the biomass
          corresponds to a{" "}
          <Redacted unlockCode="COORDINATE">coordinate system</Redacted> that
          uses the galactic center as a fixed reference point, rather than any
          terrestrial or solar map.
        </p>
        <p className="indent">
          Furthermore, the biomass continues to grow even in a vacuum. It seems
          to draw energy from ambient electromagnetic radiation, essentially
          "eating" the radio waves and radar pings we use to monitor it.
        </p>
      </div>
    </div>
  );
};

export default Page9;
