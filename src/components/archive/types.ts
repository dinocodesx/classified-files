import type React from "react";

export interface BlueBox {
  big: string;
  lines: string[];
}

export interface Page {
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
