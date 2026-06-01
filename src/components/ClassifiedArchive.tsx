import { useCallback, useEffect, useState } from "react";
import ArchiveFolder from "./archive/ArchiveFolder";
import PageRenderer from "./archive/PageRenderer";
import { PAGES } from "./archive/data";

export default function ClassifiedArchive() {
  const [page, setPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goNext = useCallback(() => {
    if (page < PAGES.length - 1) {
      setPage((p) => p + 1);
      setAnimKey((k) => k + 1);
    }
  }, [page]);

  const goPrev = useCallback(() => {
    if (page > 0) {
      setPage((p) => p - 1);
      setAnimKey((k) => k + 1);
    }
  }, [page]);

  useEffect(() => {
    const handler = (e: any) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return (
    <ArchiveFolder
      page={page}
      totalPAGES={PAGES.length}
      goPrev={goPrev}
      goNext={goNext}
    >
      <PageRenderer
        current={PAGES[page]}
        totalPAGES={PAGES.length}
        animKey={animKey}
      />
    </ArchiveFolder>
  );
}
