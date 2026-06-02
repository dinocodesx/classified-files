# 📂 Classified Files Archive

An interactive, high-fidelity digital archive for classified documents, built with **Astro** and **React**.

![Project Status](https://img.shields.io/badge/Status-Restricted-red?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 🕵️ Overview

`classified-files` is a web-based document viewer designed for immersive storytelling, Alternate Reality Games (ARGs), or digital collectibles. It simulates a "Top Secret" physical folder containing redacted intelligence reports, surveillance transcripts, and sensitive data.

The project leverages a typewriter-inspired aesthetic, using specialized typography and custom CSS to create a tactile, retro-intelligence agency feel.

## ✨ Features

- **Interactive Folder UI:** A custom-built physical folder container with page-flipping mechanics.
- **Top Secret Aesthetic:** Uses "Special Elite" and "Courier Prime" fonts for authentic typewriter rendering.
- **Redaction Components:** Built-in `<Redacted />` components for obfuscating sensitive information.
- **Keyboard Navigation:** Use `ArrowLeft` and `ArrowRight` keys to flip through the archive.
- **Dynamic Content Loading:** Centralized data management for managing dozens of archive pages efficiently.
- **ARG State Management:** Includes a specialized `ARGProvider` for tracking user interaction and narrative state.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) (v6.4+)
- **UI Library:** [React](https://react.dev) (v19+)
- **Styling:** Vanilla CSS with scoped animations
- **Type Safety:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 22.12.0)
- pnpm (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/classified-files.git
   cd classified-files
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## 📂 Project Structure

```text
/
├── src/
│   ├── components/
│   │   ├── ClassifiedArchive.tsx    # Main application entry point
│   │   └── archive/
│   │       ├── ArchiveFolder.tsx    # Visual folder container
│   │       ├── Redacted.tsx         # Redaction effect component
│   │       ├── PageRenderer.tsx     # Dynamic page switching logic
│   │       └── pages/               # Individual archive page definitions
│   ├── styles/
│   │   └── archive.css             # Core visual styling & animations
│   └── pages/
│       └── index.astro             # Main route
└── public/                         # Static assets
```

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**[TERMINATE SESSION]**
