import Page1 from "./pages/Page1";
import Page10 from "./pages/Page10";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import type { Page } from "./types";

export const PAGES: Page[] = [
  {
    id: 1,
    title: "MEMORANDUM OF RECORD",
    subtitle: "CLASSIFIED CORRESPONDENCE — INTERNAL",
    agencyCode: "DEPT. OF SPECIAL OPERATIONS",
    docRef: "DOC-7741-B",
    date: "14 MAR 1974",
    classification: "TOP SECRET",
    blueBox: { big: "14", lines: ["MARCH", "1974"] },
    content: <Page1 />,
  },
  {
    id: 2,
    title: "FIELD REPORT — CONTINUATION",
    subtitle: "OPERATION GREY MANTLE",
    agencyCode: "DEPT. OF SPECIAL OPERATIONS",
    docRef: "DOC-7741-B / P.2",
    date: "14 MAR 1974",
    classification: "TOP SECRET",
    blueBox: null,
    content: <Page2 />,
  },
  {
    id: 3,
    title: "PERSONNEL — OPERATIVE LISTING",
    subtitle: "OPERATION GREY MANTLE",
    agencyCode: "DEPT. OF SPECIAL OPERATIONS",
    docRef: "DOC-7741-C",
    date: "14 MAR 1974",
    classification: "TOP SECRET",
    blueBox: null,
    content: <Page3 />,
  },
  {
    id: 4,
    title: "INTELLIGENCE ASSESSMENT",
    subtitle: "MATERIALS FROM CARDINAL — EVALUATION",
    agencyCode: "DEPT. OF SPECIAL OPERATIONS",
    docRef: "DOC-7742-A",
    date: "16 MAR 1974",
    classification: "SECRET",
    blueBox: { big: "3", lines: ["DOCUMENTS", "RECEIVED"] },
    content: <Page4 />,
  },
  {
    id: 5,
    title: "SIGNALS INTELLIGENCE LOG",
    subtitle: "INTERCEPT RECORD — STATION VIENNA",
    agencyCode: "SIGNALS INTELLIGENCE DIVISION",
    docRef: "SIGINT-1974-0394",
    date: "11–13 MAR 1974",
    classification: "TOP SECRET / COMINT",
    blueBox: { big: "14", lines: ["INTERCEPTS", "LOGGED"] },
    content: <Page5 />,
  },
  {
    id: 6,
    title: "SECURITY INCIDENT REPORT",
    subtitle: "POSSIBLE COMPROMISE — INVESTIGATION OPENED",
    agencyCode: "INTERNAL SECURITY BRANCH",
    docRef: "ISB-1974-0071",
    date: "17 MAR 1974",
    classification: "TOP SECRET",
    blueBox: { big: "P6", lines: ["SECURITY", "INCIDENT"] },
    content: <Page6 />,
  },
  {
    id: 7,
    title: "DIRECTOR'S RESPONSE",
    subtitle: "AUTHORIZATION & INSTRUCTION — SECTION VII",
    agencyCode: "SECTION VII — FOREIGN INTELLIGENCE",
    docRef: "DIR-VII-0219",
    date: "19 MAR 1974",
    classification: "TOP SECRET",
    blueBox: { big: "19", lines: ["MAR", "1974"] },
    content: <Page7 />,
  },
  {
    id: 8,
    title: "INVESTIGATION FINDINGS",
    subtitle: "ISB-74-GREYMANTLE — INTERIM REPORT",
    agencyCode: "INTERNAL SECURITY BRANCH",
    docRef: "ISB-1974-0071-R",
    date: "28 MAR 1974",
    classification: "TOP SECRET",
    blueBox: { big: "14", lines: ["DAYS", "ELAPSED"] },
    content: <Page8 />,
  },
  {
    id: 9,
    title: "OPERATION CLOSURE REPORT",
    subtitle: "GREY MANTLE — FINAL STATUS",
    agencyCode: "DEPT. OF SPECIAL OPERATIONS",
    docRef: "DOC-7741-Z",
    date: "04 JUN 1974",
    classification: "SECRET",
    blueBox: { big: "JUN", lines: ["1974", "FINAL"] },
    content: <Page9 />,
  },
  {
    id: 10,
    title: "ARCHIVAL RECORD",
    subtitle: "DECLASSIFICATION REVIEW — CASE FILE COMPLETE",
    agencyCode: "RECORDS MANAGEMENT DIVISION",
    docRef: "ARCH-1974-GREY",
    date: "REVIEWED: 1998",
    classification: "DECLASSIFIED",
    blueBox: { big: "EOF", lines: ["END OF", "FILE"] },
    content: <Page10 />,
  },
];
