# ART de ONE

Highlight text, build tables, and ask AI — all inside Obsidian.

---

## Features

### ✦ AI Assistant
Select any text, right-click, and choose **Ask ART de ONE** to open the AI panel. Ask questions, get explanations, and apply the response back to your note — in full or as a partial selection.

- Works with any OpenAI-compatible API endpoint
- Streams responses in real time
- Switch models on the fly from the modal header
- Apply the full response or select a portion to apply only that part
- Retry, Copy, or Cancel at any time

### ⬛ Highlight
Select text and press `Cmd+Shift+H` (Mac) or `Ctrl+Shift+H` (Windows/Linux) to highlight in one of six colors. Click a color swatch to apply instantly. Click the same color again to remove the highlight.

**Available colors:** Yellow · Green · Blue · Pink · Orange · Purple

### ⊞ Table Tools
Insert tables with a visual grid picker, and edit them with a floating toolbar that appears whenever your cursor is inside a table.

**Toolbar actions:**
- Add row below
- Add column right
- Delete row
- Delete column
- Format / align table

All table edits support **Undo** (`Cmd+Z`) and **Redo** (`Cmd+Shift+Z`).

---

## Installation

### Manual

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](../../releases/latest)
2. In your vault, open `.obsidian/plugins/`
3. Create a new folder named `art-de-one`
4. Copy the three files into that folder
5. In Obsidian → Settings → Community Plugins → disable **Restricted Mode**
6. Enable **ART de ONE** in the installed plugins list

### Community Plugin Directory

Search for **ART de ONE** in Obsidian → Settings → Community Plugins → Browse.

---

## Setup

### AI Configuration

1. Go to **Settings → ART de ONE**
2. Enter your **API Base URL** (e.g. `https://api.openai.com/v1`)
3. Enter your **API Key**
4. Enter a **Default Model** (e.g. `gpt-4o-mini`, `claude-sonnet-4-6`)
5. Click **Test Connection** to verify
6. Optionally add more models to the **Saved Models** list — these appear in the modal dropdown

Any OpenAI-compatible endpoint works, including local models via Ollama, LM Studio, or similar.

---

## Usage

| Feature | How to trigger |
|---|---|
| Ask AI | Select text → Right-click → **Ask ART de ONE** |
| Ask AI (no selection) | Click the ART de ONE icon in the left sidebar |
| Highlight | Select text → `Cmd/Ctrl+Shift+H` → pick a color |
| Insert Table | Sidebar icon → **Insert Table**, or Command Palette |
| Table toolbar | Place cursor inside any Markdown table |
| Undo table edit | `Cmd/Ctrl+Z` |

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Cmd+Shift+H` / `Ctrl+Shift+H` | Highlight selected text |
| `Escape` | Close AI modal without applying |

---

## Settings Reference

| Setting | Description | Default |
|---|---|---|
| API Base URL | Your OpenAI-compatible endpoint | `https://api.openai.com/v1` |
| API Key | Your API key (stored locally) | — |
| Default Model | Model used when the plugin opens | `gpt-4o-mini` |
| Saved Models | List of models for the dropdown | — |
| System Prompt | Instruction sent to the AI on every request | Study assistant prompt |
| Max Tokens | Maximum response length | `1024` |
| Temperature | Creativity level (0 = precise, 2 = creative) | `0.7` |
| Stream responses | Show response as it generates | On |
| Default highlight color | Color pre-selected when picker opens | Yellow |

---

## Privacy

- API keys are stored locally in your vault's `.obsidian/plugins/art-de-one/data.json` file and are never sent anywhere except your configured API endpoint.
- No analytics, no telemetry, no external connections other than your own AI API calls.
- All highlight and table data stays in your Markdown files.

---

## License

MIT License. Copyright (c) 2026 ART de ONE.

---

## Author

Built by [ART de ONE](https://github.com/artdeone) — a digital creative brand based in Myanmar.
