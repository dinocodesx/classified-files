import React, { useState, useCallback, useEffect } from 'react';

interface BlueBox {
  big: string;
  lines: string[];
}

interface Page {
  id: number;
  title: string;
  subtitle: string;
  agencyCode: string;
  docRef: string;
  date: string;
  classification: string;
  blueBox: BlueBox | null;
  content: React.ReactNode;
}

const PAGES: Page[] = [
  {
    id: 1,
    title: "MEMORANDUM OF RECORD",
    subtitle: "CLASSIFIED CORRESPONDENCE — INTERNAL",
    agencyCode: "DEPT. OF SPECIAL OPERATIONS",
    docRef: "DOC-7741-B",
    date: "14 MAR 1974",
    classification: "TOP SECRET",
    blueBox: { big: "14", lines: ["MARCH", "1974"] },
    content: (
      <div>
        <div className="form-row">
          <span className="form-label">TO</span>
          <span className="form-value">Director, Section VII — Foreign Intelligence</span>
        </div>
        <div className="form-row">
          <span className="form-label">FROM</span>
          <span className="form-value">Agent R. <span className="redacted">████████</span>, Station Vienna</span>
        </div>
        <div className="form-row">
          <span className="form-label">SUBJECT</span>
          <span className="form-value">Operation GREY MANTLE — Status Report</span>
        </div>
        <div className="form-row">
          <span className="form-label">PRIORITY</span>
          <span className="form-value">EYES ONLY — URGENT</span>
        </div>
        <div className="section-label">BODY OF CORRESPONDENCE</div>
        <div className="body-text">
          <p className="indent">I write to you from Station Vienna with matters of the gravest urgency. As of the date of this transmission, Operation GREY MANTLE has entered a critical phase which requires your immediate attention and authorization to proceed.</p>
          <p className="indent">The asset known to you as CARDINAL has made contact. The location was as arranged — the third bench from the north entrance of the Volksgarten. The exchange proceeded without incident, and the materials described in my prior communication (reference <strong>DOC-7698-A</strong>) are now in secure custody.</p>
          <p className="indent">However, there are complications I must disclose. Our surveillance team on the <span className="redacted">████</span> operation detected a third party — nationality and affiliation currently unknown — in proximity to the drop site.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="notecard" style={{marginBottom: 10, position:'relative'}}>
          <div className="notecard-text">
            <span className="highlight">NOTE:</span> Pages 2–4 of this memorandum contain sensitive personnel identifiers. Handle under Protocol 9-DELTA. Do not reproduce without written authorization from the Director's office.<br/>
            Ref: <span className="highlight">STANDING ORDER 1141-F</span>
          </div>
        </div>
        <div className="section-label">CONTINUED FROM PAGE 1</div>
        <div className="body-text">
          <p className="indent">The individual — a male, approximately 40 years of age, medium build, grey overcoat — appeared to observe the exchange for no fewer than twelve minutes before departing eastward on foot. Agent <span className="redacted">████████</span> attempted a tail but lost contact near the Ringstrasse at approximately 14:22 local time.</p>
          <p className="indent">I have forwarded physical descriptions and a hand-rendered composite to the Identification Bureau under cover of separate correspondence (IDENT-REQ-1974-2291). I urge that this be treated as priority.</p>
          <div className="section-label">ASSET ASSESSMENT</div>
          <p className="indent">CARDINAL's reliability remains, in my assessment, exceptional. The materials delivered conform to the specifications communicated via channel <span className="redacted">███</span>-ECHO in February. Authentication codes verified against our master register — all indicators positive.</p>
          <p className="indent">That said, CARDINAL expressed increasing anxiety about the security of the existing arrangement. He has requested a change of contact protocol by next quarter. I consider this request reasonable given the circumstances described above.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="section-label">ACTIVE OPERATIVES — STATION VIENNA</div>
        <div className="two-col" style={{marginBottom: 12}}>
          <div className="col-entry">
            <div className="name">Agent R. HARTMANN</div>
            <div className="sub">→ Lead / Case Officer</div>
          </div>
          <div className="col-entry">
            <div className="name">Agent D. <span style={{background: '#1a1208', color:'transparent', borderRadius:1, padding:'0 2px', display:'inline-block', fontSize:11}}>██████</span></div>
            <div className="sub">→ Surveillance Lead</div>
          </div>
          <div className="col-entry">
            <div className="name">CARDINAL (Asset)</div>
            <div className="sub">→ Primary Source, Vienna</div>
          </div>
          <div className="col-entry">
            <div className="name">UNKNOWN / THIRD PARTY</div>
            <div className="sub">→ Status: Under Investigation</div>
          </div>
          <div className="col-entry">
            <div className="name">Technician <span style={{background:'#1a1208', color:'transparent', borderRadius:1, padding:'0 2px', display:'inline-block', fontSize:11}}>████</span></div>
            <div className="sub">→ Signals / Encryption</div>
          </div>
          <div className="col-entry">
            <div className="name">Director <span style={{background:'#1a1208', color:'transparent', borderRadius:1, padding:'0 2px', display:'inline-block', fontSize:11}}>████████</span></div>
            <div className="sub">→ Section VII, Langley</div>
          </div>
        </div>
        <div className="section-label">ASSET — CARDINAL</div>
        <div className="body-text">
          <p className="indent">CARDINAL has been a registered source since 1969. Background: Mid-level civil servant in the <span className="redacted">████████████</span> Ministry of Trade. Access to: diplomatic cables, trade negotiation briefings, and limited military procurement summaries. Motivation assessed as financial, with secondary ideological component.</p>
          <p className="indent">Reliability rating: <strong>A-2</strong>. No prior instances of fabrication detected. Current contact frequency: Bi-monthly.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="section-label">DOCUMENTS IN EVIDENCE</div>
        <div className="body-text">
          <div className="form-row">
            <span className="form-label">ITEM 01</span>
            <span className="form-value" style={{fontSize:10}}>Draft communiqué — <span className="redacted">████████</span> Ministry, dated 9 MAR 1974. Re: Trade delegation to <span className="redacted">████</span>. 4 pages.</span>
          </div>
          <div className="form-row">
            <span className="form-label">ITEM 02</span>
            <span className="form-value" style={{fontSize:10}}>Internal memorandum — re: bilateral currency arrangement with <span className="redacted">████████████</span>. Author unverified. 2 pages.</span>
          </div>
          <div className="form-row">
            <span className="form-label">ITEM 03</span>
            <span className="form-value" style={{fontSize:10}}>Photographic reproduction — confidential annex to <span className="redacted">████████</span> quarterly review. Provenance: CARDINAL. 1 page.</span>
          </div>
        </div>
        <div className="section-label">PRELIMINARY EVALUATION</div>
        <div className="body-text">
          <p className="indent">Items 01 and 02 have been forwarded to the Economic Intelligence Division for detailed analysis. Preliminary review indicates significant intelligence value with respect to <span className="redacted">████████</span>'s monetary policy objectives ahead of the April summit.</p>
          <p className="indent">Item 03 is currently under examination by the Technical Division for authentication. The photographic reproduction appears to be of good quality; however, certain details in the lower margin require verification against known reference materials before conclusions can be drawn.</p>
          <p className="indent">Assessment of overall haul: <strong>HIGH VALUE.</strong> Recommend expedited analysis and distribution to cleared recipients.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="notecard" style={{marginBottom:10}}>
          <div className="notecard-text">
            <span className="highlight">COMINT HANDLING NOTICE:</span> The following intercept summaries are derived from signals intelligence collection. Distribution restricted to BIGOT list holders. Do not disseminate beyond authorized recipients.
          </div>
        </div>
        <div className="section-label">INTERCEPT SUMMARIES</div>
        <div className="body-text">
          <div className="form-row">
            <span className="form-label">11 MAR / 09:14</span>
            <span className="form-value" style={{fontSize:10}}>Voice transmission on monitored frequency <span className="redacted">███.█</span> MHz. Two speakers, language: <span className="redacted">████████</span>. Content: reference to meeting at "the garden" on the 14th. Authentication phrase detected: "<span className="redacted">████████████</span>."</span>
          </div>
          <div className="form-row">
            <span className="form-label">12 MAR / 22:47</span>
            <span className="form-value" style={{fontSize:10}}>Encrypted cable, <span className="redacted">████████</span> origin. Partial decrypt achieved. References to "the arrangement" and "three items." No names. Decoded segment forwarded to Langley 13 MAR.</span>
          </div>
          <div className="form-row">
            <span className="form-label">13 MAR / 16:03</span>
            <span className="form-value" style={{fontSize:10}}>Brief exchange, street surveillance audio near Ringstrasse. Male voice: "It went well. The package is clean." No further relevant content. Recording preserved: TAPE-VIE-740313-C.</span>
          </div>
          <div className="form-row">
            <span className="form-label">13 MAR / 23:55</span>
            <span className="form-value" style={{fontSize:10}}>Anomalous signal burst on backup frequency. Duration: 4 seconds. Possible burst transmission. Under investigation by Technical Division. May indicate third-party monitoring of our operations.</span>
          </div>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="section-label">NATURE OF INCIDENT</div>
        <div className="body-text">
          <p className="indent">Following receipt of Agent Hartmann's field memorandum (DOC-7741-B), the Internal Security Branch has opened a formal investigation into the presence of the unidentified third party at the GREY MANTLE exchange on 14 March 1974.</p>
          <p className="indent">The investigation (designated ISB-74-GREYMANTLE) will proceed on three parallel tracks:</p>
        </div>
        <div className="two-col" style={{marginBottom:10}}>
          <div className="col-entry">
            <div className="name" style={{fontSize:11}}>Track A: Identification</div>
            <div className="sub">Physical composite, surveillance records, local liaison inquiry.</div>
          </div>
          <div className="col-entry">
            <div className="name" style={{fontSize:11}}>Track B: Signals Review</div>
            <div className="sub">Full audit of all SIGINT bearing on 11–14 MAR 1974 period.</div>
          </div>
          <div className="col-entry">
            <div className="name" style={{fontSize:11}}>Track C: Asset Security</div>
            <div className="sub">Assessment of CARDINAL exposure and protective options.</div>
          </div>
          <div className="col-entry">
            <div className="name" style={{fontSize:11}}>Track D: Internal Review</div>
            <div className="sub">Operational security audit — Station Vienna, preceding 90 days.</div>
          </div>
        </div>
        <div className="section-label">INTERIM MEASURES</div>
        <div className="body-text">
          <p className="indent">Pending the outcome of the investigation, the following interim measures are in effect: all contact with CARDINAL is SUSPENDED; cipher protocols for Station Vienna are rotated with immediate effect; and access to the GREY MANTLE file is restricted to personnel on the enclosed BIGOT list only. A full status briefing will be prepared within ten working days.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="form-row">
          <span className="form-label">TO</span>
          <span className="form-value">Agent R. Hartmann, Station Vienna</span>
        </div>
        <div className="form-row">
          <span className="form-label">FROM</span>
          <span className="form-value">Director <span className="redacted">████████████</span>, Section VII</span>
        </div>
        <div className="section-label">DIRECTIVE</div>
        <div className="body-text">
          <p className="indent">Your memorandum of 14 March has been received, reviewed, and actioned. The Director commends your handling of the exchange and your prompt disclosure of the security anomaly. Such vigilance is the mark of a competent officer.</p>
          <p className="indent">You are hereby authorized to continue in your role as Case Officer for CARDINAL, subject to the security protocols imposed by the Internal Security Branch under reference ISB-74-GREYMANTLE. You will cooperate fully with all aspects of that investigation.</p>
          <p className="indent">With regard to CARDINAL's request for amended contact protocols — this is approved in principle. You are to propose a revised arrangement and submit it to this office for authorization before implementation. Bear in mind that continuity of access is paramount; do not allow security precautions to rupture the relationship.</p>
          <div className="section-label">ON THE THIRD PARTY</div>
          <p className="indent">The question of the unidentified observer is of the highest concern to this office. Until the matter is resolved, I must ask you to assume the worst and act accordingly. If at any point you assess that CARDINAL or Station Vienna has been compromised, you are authorized to invoke <strong>Protocol IRON CURTAIN</strong> without prior consultation.</p>
          <p>You have my full confidence, Hartmann. Do not fail us.</p>
          <div style={{marginTop: 14}}>
            <span className="signature">— <span className="redacted" style={{fontFamily:'Special Elite',fontSize:18}}>████████</span></span>
          </div>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="section-label">FINDINGS TO DATE</div>
        <div className="body-text">
          <p className="indent">The Internal Security Branch submits this interim report on investigation ISB-74-GREYMANTLE, fourteen days from opening.</p>
          <div className="form-row">
            <span className="form-label">TRACK A</span>
            <span className="form-value" style={{fontSize:10}}>Physical composite circulated. One partial match identified in liaison database — a <span className="redacted">█████████</span> national, occupation unverified, known to frequent Vienna. Currently under passive surveillance. No confirmation of connection to any intelligence service as yet.</span>
          </div>
          <div className="form-row">
            <span className="form-label">TRACK B</span>
            <span className="form-value" style={{fontSize:10}}>SIGINT audit complete. The anomalous burst transmission of 13 MAR has been identified as a probable covert reporting signal. Encryption pattern does not match any friendly service. Pattern forwarded to Technical Division for further analysis.</span>
          </div>
          <div className="form-row">
            <span className="form-label">TRACK C</span>
            <span className="form-value" style={{fontSize:10}}>No direct evidence of compromise to CARDINAL. Asset remains in place. Cover assessed as intact at this time. Recommend resumption of contact per revised protocol once Track A resolved.</span>
          </div>
          <div className="form-row">
            <span className="form-label">TRACK D</span>
            <span className="form-value" style={{fontSize:10}}>Internal audit of Station Vienna — ongoing. Three personnel flagged for follow-up interviews. No findings of deliberate misconduct to date. Administrative security lapses noted and addressed.</span>
          </div>
        </div>
        <div className="section-label">ASSESSMENT</div>
        <div className="body-text">
          <p className="indent">The investigation is ONGOING. The evidence is consistent with surveillance by an unknown hostile intelligence service, but no firm attribution can be made at this stage. Recommend continued suspension of GREY MANTLE activities pending full resolution.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div className="section-label">OPERATIONAL SUMMARY</div>
        <div className="body-text">
          <p className="indent">Operation GREY MANTLE is hereby formally closed, effective 1 June 1974. This report constitutes the official summary of the operation's final status and is prepared for archival deposit.</p>
          <p className="indent">The operation, initiated in January 1974 in response to intelligence opportunities identified through asset CARDINAL, achieved its primary objectives. Three documents of assessed high intelligence value were successfully obtained and exploited. The intelligence contributed to briefings related to the April summit (reference: <span className="redacted">████████████</span>) and is assessed to have provided material advantage in those proceedings.</p>
          <div className="section-label">DISPOSITION OF MATTERS ARISING</div>
          <p className="indent">The unidentified third party observed at the March exchange was, following extended investigation, assessed to be an officer of a <span className="redacted">████████</span> service acting in a coincidental surveillance capacity unrelated to GREY MANTLE. The risk to CARDINAL and to Station Vienna is assessed as LOW.</p>
          <p className="indent">Asset CARDINAL has been successfully transitioned to a revised contact protocol and remains active and productive. His current handler is <span className="redacted">████████</span>, who assumed the role in May 1974 following Hartmann's transfer.</p>
          <p className="indent">Agent Hartmann is commended for his professionalism throughout this operation and has been recommended for accelerated promotion.</p>
        </div>
      </div>
    ),
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
    content: (
      <div>
        <div style={{
          border: '2px solid var(--classify-red)',
          padding: '8px 12px',
          marginBottom: 12,
          position: 'relative',
          transform: 'rotate(-0.5deg)'
        }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'var(--classify-red)',
            textTransform: 'uppercase',
            lineHeight: 1.4
          }}>
            DECLASSIFIED IN FULL<br/>
            Authority: EO 13526<br/>
            Date of Review: 14 January 1998<br/>
            Reviewed by: <span style={{background:'var(--ink)', color:'transparent', padding:'0 2px', borderRadius:1}}>████████</span>, Chief Declassification Officer
          </div>
        </div>
        <div className="section-label">ARCHIVAL RECORD</div>
        <div className="body-text">
          <p className="indent">This file constitutes the complete record of Operation GREY MANTLE (January–June 1974), Station Vienna. It is deposited in the Historical Intelligence Collection and may be reviewed by authorised researchers subject to standard access procedures.</p>
          <p className="indent">Ten documents are held in this file. All have been reviewed under the standard declassification framework. Portions remain withheld as indicated by the redactions in the body of the record. The withheld portions relate to source protection (certain identifying details of CARDINAL and of unnamed personnel), technical collection methods, and the identity of the foreign intelligence service referenced on pages 8–9.</p>
          <div className="section-label">NOTE FROM THE RECORDS OFFICE</div>
          <p className="indent">The Records Management Division certifies that this file is complete as received. No documents have been withdrawn or destroyed since original deposit. This record is classified UNCLASSIFIED upon release, subject to the redactions noted herein.</p>
          <p className="indent" style={{marginTop: 8}}>This file has been digitised and assigned accession number <strong>HIC-1974-GM-001</strong>. Physical originals are held in secure storage.</p>
        </div>
        <div style={{marginTop: 12, textAlign: 'center'}}>
          <div style={{fontFamily:'var(--font-heading)', fontSize:9, letterSpacing:'0.25em', color:'var(--ink-faded)', textTransform:'uppercase', marginBottom:4}}>END OF FILE</div>
          <div style={{height:1, background:'var(--paper-dark)', margin:'4px 0'}}/>
          <div style={{fontFamily:'var(--font-heading)', fontSize:8, letterSpacing:'0.2em', color:'var(--ink-faded)', textTransform:'uppercase'}}>Records Management Division · Historical Intelligence Collection</div>
        </div>
      </div>
    ),
  },
];

export default function ClassifiedArchive() {
  const [page, setPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goNext = useCallback(() => {
    if (page < PAGES.length - 1) {
      setPage(p => p + 1);
      setAnimKey(k => k + 1);
    }
  }, [page]);

  const goPrev = useCallback(() => {
    if (page > 0) {
      setPage(p => p - 1);
      setAnimKey(k => k + 1);
    }
  }, [page]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  const current = PAGES[page];
  const tabs = ['03','04','05','06','07','08','09'].map((t, i) => ({
    label: t,
    active: i === Math.floor(page / 1.5)
  }));

  return (
    <div className="scene">
      <div className="folder-outer">
        {/* Folder tabs */}
        <div className="folder-tabs">
          {tabs.map((t, i) => (
            <div key={i} className={`folder-tab${t.active ? ' active' : ''}`}>{t.label}</div>
          ))}
        </div>

        {/* Hole punches */}
        <div className="hole-punches">
          {Array.from({length: 9}).map((_, i) => (
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
          <svg className="paperclip-svg" width="28" height="58" viewBox="0 0 28 58">
            <path d="M14 4 C8 4 4 8 4 14 L4 44 C4 52 8 56 14 56 C20 56 24 52 24 44 L24 16 C24 10 20 6 14 6 C9 6 6 10 6 16 L6 42 C6 48 9 51 14 51 C19 51 22 48 22 44 L22 20"
              fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          {/* Main page */}
          <div className="page page-animate-in" key={animKey}>
            {/* Stamp circle on some pages */}
            {page === 6 && (
              <div className="stamp-circle" style={{width:64, height:64, right:16, bottom:60, fontSize:7, lineHeight:1.1}}>
                DIRECTOR<br/>APPROVED
              </div>
            )}
            {page === 9 && (
              <div className="stamp-circle" style={{width:72, height:72, left:20, bottom:55, fontSize:7, lineHeight:1.1}}>
                RECORDS<br/>CERTIFIED
              </div>
            )}

            <div className="page-content">
              {/* Header */}
              <div className="page-header">
                <div className="page-header-left">
                  <div className="agency-label">{current.agencyCode}</div>
                  <div className="doc-title">{current.title}</div>
                  <div style={{marginTop:4}}>
                    <span className="stamp-classified">{current.classification}</span>
                  </div>
                </div>
                {current.blueBox && (
                  <div className="blue-box">
                    <div className="big">{current.blueBox.big}</div>
                    {current.blueBox.lines.map((l, i) => (
                      <div key={i} style={{fontSize:9, lineHeight:1.3}}>{l}</div>
                    ))}
                  </div>
                )}
                <div className="page-meta">
                  <strong>{current.docRef}</strong><br/>
                  {current.date}<br/>
                  PAGE {current.id} OF {PAGES.length}<br/>
                  <span style={{fontSize:8, opacity:0.7}}>{current.subtitle}</span>
                </div>
              </div>

              {/* Page content */}
              <div style={{flex:1, overflow:'hidden'}}>
                {current.content}
              </div>

              {/* Footer */}
              <div className="page-footer">
                <span className="page-number">CLASSIFIED ARCHIVE — REF: {current.docRef}</span>
                <div className="page-dots">
                  {PAGES.map((_, i) => (
                    <div key={i} className={`page-dot${i === page ? ' active' : ''}`} />
                  ))}
                </div>
                <span className="page-number">{current.id} / {PAGES.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        {page > 0 && <div className="nav-arrow left">◂◂</div>}
        {page < PAGES.length - 1 && <div className="nav-arrow right">▸▸</div>}

        {/* Click zones */}
        {page > 0 && <div className="click-zone prev" onClick={goPrev} title="Previous page" />}
        {page < PAGES.length - 1 && <div className="click-zone next" onClick={goNext} title="Next page" />}

        {/* Progress */}
        <div className="progress-bar">
          <div className="progress-fill" style={{width: `${((page+1)/PAGES.length)*100}%`}} />
        </div>
      </div>
    </div>
  );
}
