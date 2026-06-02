import React from "react";

interface ArchiveFolderProps {
  page: number;
  totalPAGES: number;
  goPrev: () => void;
  goNext: () => void;
  children: React.ReactNode;
}

const ArchiveFolder: React.FC<ArchiveFolderProps> = ({
  page,
  totalPAGES,
  goPrev,
  goNext,
  children,
}) => {
  const tabs = ["01", "04", "07", "10", "13", "16", "19", "22"].map((t, i) => ({
    label: t,
    active: i === Math.floor(page / 3),
  }));

  return (
    <div className="scene">
      <div className="folder-outer">
        {/* Folder tabs */}
        <div className="folder-tabs">
          {tabs.map((t, i) => (
            <div key={i} className={`folder-tab${t.active ? " active" : ""}`}>
              {t.label}
            </div>
          ))}
        </div>

        {/* Hole punches */}
        <div className="hole-punches">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="hole" />
          ))}
        </div>

        {/* Binder clip */}
        <div className="binder-clip">
          <div className="clip-body" />
          <div className="clip-arm left" />
          <div className="clip-arm right" />
        </div>

        {/* Paper stack */}
        <div className="paper-stack">
          <div className="page-peek page-peek-1" />
          <div className="page-peek page-peek-2" />

          {/* Paperclip SVG */}
          <svg
            className="paperclip-svg"
            width="28"
            height="58"
            viewBox="0 0 28 58"
          >
            <path
              d="M14 4 C8 4 4 8 4 14 L4 44 C4 52 8 56 14 56 C20 56 24 52 24 44 L24 16 C24 10 20 6 14 6 C9 6 6 10 6 16 L6 42 C6 48 9 51 14 51 C19 51 22 48 22 44 L22 20"
              fill="none"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {children}
        </div>

        {/* Navigation arrows */}
        {page > 0 && <div className="nav-arrow left">◂◂</div>}
        {page < totalPAGES - 1 && <div className="nav-arrow right">▸▸</div>}

        {/* Click zones */}
        {page > 0 && (
          <div
            className="click-zone prev"
            onClick={goPrev}
            title="Previous page"
          />
        )}
        {page < totalPAGES - 1 && (
          <div className="click-zone next" onClick={goNext} title="Next page" />
        )}

        {/* Progress */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((page + 1) / totalPAGES) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArchiveFolder;
