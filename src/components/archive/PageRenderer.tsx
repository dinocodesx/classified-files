import React from "react";
import type { Page } from "./types";

interface PageRendererProps {
  current: Page;
  totalPAGES: number;
  animKey: number;
}

const PageRenderer: React.FC<PageRendererProps> = ({
  current,
  totalPAGES,
  animKey,
}) => {
  return (
    <div className="page page-animate-in" key={animKey}>
      {/* Stamp circle on some pages */}
      {current.id === 7 && (
        <div
          className="stamp-circle"
          style={{
            width: 64,
            height: 64,
            right: 16,
            bottom: 60,
            fontSize: 7,
            lineHeight: 1.1,
          }}
        >
          DIRECTOR
          <br />
          APPROVED
        </div>
      )}
      {current.id === 10 && (
        <div
          className="stamp-circle"
          style={{
            width: 72,
            height: 72,
            left: 20,
            bottom: 55,
            fontSize: 7,
            lineHeight: 1.1,
          }}
        >
          RECORDS
          <br />
          CERTIFIED
        </div>
      )}

      <div className="page-content">
        {/* Header */}
        <div className="page-header">
          <div className="page-header-left">
            <div className="agency-label">{current.agencyCode}</div>
            <div className="doc-title">{current.title}</div>
            <div style={{ marginTop: 4 }}>
              <span className="stamp-classified">{current.classification}</span>
            </div>
          </div>
          {current.blueBox && (
            <div className="blue-box">
              <div className="big">{current.blueBox.big}</div>
              {current.blueBox.lines.map((l, i) => (
                <div key={i} style={{ fontSize: 9, lineHeight: 1.3 }}>
                  {l}
                </div>
              ))}
            </div>
          )}
          <div className="page-meta">
            <strong>{current.docRef}</strong>
            <br />
            {current.date}
            <br />
            PAGE {current.id} OF {totalPAGES}
            <br />
            <span style={{ fontSize: 8, opacity: 0.7 }}>
              {current.subtitle}
            </span>
          </div>
        </div>

        {/* Page content */}
        <div style={{ flex: 1, overflow: "hidden" }}>{current.content}</div>

        {/* Footer */}
        <div className="page-footer">
          <span className="page-number">
            CLASSIFIED ARCHIVE — REF: {current.docRef}
          </span>
          <div className="page-dots">
            {Array.from({ length: totalPAGES }).map((_, i) => (
              <div
                key={i}
                className={`page-dot${i === current.id - 1 ? " active" : ""}`}
              />
            ))}
          </div>
          <span className="page-number">
            {current.id} / {totalPAGES}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageRenderer;
