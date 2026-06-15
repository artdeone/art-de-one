var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CourseCompanionPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var ICONS = {
  highlight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l-6 6v3h3l6-6"/><path d="M13 8l5-5 3 3-5 5"/><path d="M9 11l4 4"/><path d="M14 6l4 4"/></svg>`,
  table: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
  "table-row": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="12" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="10" y1="20" x2="14" y2="20"/></svg>`,
  "table-col": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="12" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="20" y1="10" x2="20" y2="14"/></svg>`,
  "table-del-row": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="12" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="10" y1="20" x2="14" y2="20"/></svg>`,
  "table-del-col": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="12" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="18" y1="12" x2="22" y2="12"/></svg>`,
  "ai-spark": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z"/><path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  apply: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  retry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  model: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
};
function setIcon(el, iconName) {
  el.innerHTML = ICONS[iconName];
}
var HIGHLIGHT_COLORS = [
  { name: "yellow", value: "#FFF176" },
  { name: "green", value: "#B9F6CA" },
  { name: "blue", value: "#B3E5FC" },
  { name: "pink", value: "#F8BBD0" },
  { name: "orange", value: "#FFE0B2" },
  { name: "purple", value: "#E1BEE7" }
];
var DEFAULT_SETTINGS = {
  apiBaseURL: "https://api.openai.com/v1",
  apiKey: "",
  defaultModel: "gpt-4o-mini",
  savedModels: ["gpt-4o-mini", "gpt-4o"],
  systemPrompt: "You are a helpful study assistant. Answer clearly and concisely.",
  maxTokens: 1024,
  temperature: 0.7,
  streamResponses: true,
  lastHighlightColor: "#FFF176",
  defaultHighlightColor: "#FFF176"
};
var CourseCompanionPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.highlightPopover = null;
    this.tableToolbar = null;
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new CourseCompanionSettingTab(this.app, this));
    this.addCommand({
      id: "highlight-selection",
      name: "Highlight selection",
      hotkeys: [{ modifiers: ["Mod", "Shift"], key: "h" }],
      editorCallback: (editor) => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (view)
          this.openHighlightPicker(editor, view);
      }
    });
    this.addCommand({
      id: "insert-table",
      name: "Table: Insert table",
      editorCallback: (editor) => {
        new TableGridPicker(this.app, (rows, cols) => {
          this.insertTable(editor, rows, cols);
        }).open();
      }
    });
    this.addCommand({
      id: "add-row-below",
      name: "Table: Add row below",
      editorCallback: (editor) => this.tableAddRowBelow(editor)
    });
    this.addCommand({
      id: "add-col-right",
      name: "Table: Add column right",
      editorCallback: (editor) => this.tableAddColRight(editor)
    });
    this.addCommand({
      id: "delete-row",
      name: "Table: Delete row",
      editorCallback: (editor) => this.tableDeleteRow(editor)
    });
    this.addCommand({
      id: "delete-col",
      name: "Table: Delete column",
      editorCallback: (editor) => this.tableDeleteCol(editor)
    });
    this.addCommand({
      id: "format-table",
      name: "Table: Format (align pipes)",
      editorCallback: (editor) => this.tableFormat(editor)
    });
    this.addCommand({
      id: "ask-ai",
      name: "Ask AI about selection",
      editorCallback: (editor) => {
        const selection = editor.getSelection();
        new AIModal(this.app, this, selection, (replacement) => {
          if (replacement)
            editor.replaceSelection(replacement);
        }).open();
      }
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        const sel = editor.getSelection();
        if (sel && sel.trim().length > 0) {
          menu.addItem((item) => {
            item.setTitle("Ask AI").setIcon("sparkles").onClick(() => {
              new AIModal(this.app, this, sel, (replacement) => {
                if (replacement)
                  editor.replaceSelection(replacement);
              }).open();
            });
          });
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.updateTableToolbar())
    );
    this.registerEvent(
      this.app.workspace.on("editor-change", () => this.updateTableToolbar())
    );
    this.registerDomEvent(document, "selectionchange", () => {
      window.setTimeout(() => this.updateTableToolbar(), 30);
    });
    this.registerDomEvent(document, "mousedown", (evt) => {
      if (this.highlightPopover && !this.highlightPopover.containsTarget(evt.target)) {
        this.closeHighlightPopover();
      }
    });
  }
  onunload() {
    this.closeHighlightPopover();
    if (this.tableToolbar) {
      this.tableToolbar.destroy();
      this.tableToolbar = null;
    }
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data != null ? data : {});
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  openHighlightPicker(editor, view) {
    this.closeHighlightPopover();
    const sel = editor.getSelection();
    if (!sel) {
      new import_obsidian.Notice("Select some text first");
      return;
    }
    const stripRe = /^<mark style="background:\s*[^"]*;?">([\s\S]*)<\/mark>$/;
    const m = sel.match(stripRe);
    if (m) {
      editor.replaceSelection(m[1]);
      return;
    }
    const popover = new HighlightPopover(
      view.contentEl,
      this.settings.lastHighlightColor,
      async (color) => {
        const currentSel = editor.getSelection() || sel;
        editor.replaceSelection(
          `<mark style="background: ${color};">${currentSel}</mark>`
        );
        this.settings.lastHighlightColor = color;
        await this.saveSettings();
        this.closeHighlightPopover();
      }
    );
    popover.show();
    this.highlightPopover = popover;
  }
  closeHighlightPopover() {
    if (this.highlightPopover) {
      this.highlightPopover.destroy();
      this.highlightPopover = null;
    }
  }
  isTableRow(line) {
    return /^\s*\|.*\|\s*$/.test(line);
  }
  isSeparatorRow(line) {
    return /^\s*\|?\s*:?-{3,}.*\|/.test(line) && /-/.test(line);
  }
  findTableBounds(editor, lineNo) {
    const totalLines = editor.lineCount();
    if (!this.isTableRow(editor.getLine(lineNo)))
      return null;
    let start = lineNo;
    let end = lineNo;
    while (start > 0 && this.isTableRow(editor.getLine(start - 1)))
      start--;
    while (end < totalLines - 1 && this.isTableRow(editor.getLine(end + 1)))
      end++;
    return { start, end };
  }
  parseTableLine(line) {
    let l = line.trim();
    if (l.startsWith("|"))
      l = l.slice(1);
    if (l.endsWith("|"))
      l = l.slice(0, -1);
    return l.split("|").map((c) => c.trim());
  }
  buildTableLine(cells) {
    return "| " + cells.join(" | ") + " |";
  }
  insertTable(editor, rows, cols) {
    const header = this.buildTableLine(new Array(cols).fill("Header"));
    const sep = "| " + new Array(cols).fill("---").join(" | ") + " |";
    const body = [];
    for (let r = 0; r < rows; r++) {
      body.push(this.buildTableLine(new Array(cols).fill("   ")));
    }
    const tableStr = [header, sep, ...body].join("\n") + "\n";
    editor.replaceSelection(tableStr);
  }
  tableAddRowBelow(editor) {
    const cur = editor.getCursor();
    const bounds = this.findTableBounds(editor, cur.line);
    if (!bounds) {
      new import_obsidian.Notice("Cursor is not inside a table");
      return;
    }
    const headerCells = this.parseTableLine(editor.getLine(bounds.start));
    const newRow = this.buildTableLine(new Array(headerCells.length).fill("   "));
    const insertAfter = cur.line < bounds.start + 2 ? bounds.start + 1 : cur.line;
    editor.replaceRange(newRow + "\n", { line: insertAfter + 1, ch: 0 });
  }
  tableAddColRight(editor) {
    const cur = editor.getCursor();
    const bounds = this.findTableBounds(editor, cur.line);
    if (!bounds) {
      new import_obsidian.Notice("Cursor is not inside a table");
      return;
    }
    const line = editor.getLine(cur.line);
    const colIdx = this.colIndexAt(line, cur.ch);
    const newLines = [];
    for (let i = bounds.start; i <= bounds.end; i++) {
      const raw = editor.getLine(i);
      if (this.isSeparatorRow(raw)) {
        const cells = this.parseTableLine(raw);
        cells.splice(colIdx + 1, 0, "---");
        newLines.push("| " + cells.join(" | ") + " |");
      } else {
        const cells = this.parseTableLine(raw);
        cells.splice(colIdx + 1, 0, "   ");
        newLines.push(this.buildTableLine(cells));
      }
    }
    editor.replaceRange(
      newLines.join("\n"),
      { line: bounds.start, ch: 0 },
      { line: bounds.end, ch: editor.getLine(bounds.end).length }
    );
  }
  tableDeleteRow(editor) {
    const cur = editor.getCursor();
    const bounds = this.findTableBounds(editor, cur.line);
    if (!bounds) {
      new import_obsidian.Notice("Cursor is not inside a table");
      return;
    }
    if (cur.line === bounds.start || cur.line === bounds.start + 1) {
      new import_obsidian.Notice("Cannot delete header or separator");
      return;
    }
    editor.replaceRange(
      "",
      { line: cur.line, ch: 0 },
      { line: cur.line + 1, ch: 0 }
    );
  }
  tableDeleteCol(editor) {
    const cur = editor.getCursor();
    const bounds = this.findTableBounds(editor, cur.line);
    if (!bounds) {
      new import_obsidian.Notice("Cursor is not inside a table");
      return;
    }
    const line = editor.getLine(cur.line);
    const colIdx = this.colIndexAt(line, cur.ch);
    const newLines = [];
    for (let i = bounds.start; i <= bounds.end; i++) {
      const raw = editor.getLine(i);
      const cells = this.parseTableLine(raw);
      if (cells.length <= 1) {
        newLines.push(raw);
        continue;
      }
      cells.splice(colIdx, 1);
      if (this.isSeparatorRow(raw)) {
        newLines.push("| " + cells.join(" | ") + " |");
      } else {
        newLines.push(this.buildTableLine(cells));
      }
    }
    editor.replaceRange(
      newLines.join("\n"),
      { line: bounds.start, ch: 0 },
      { line: bounds.end, ch: editor.getLine(bounds.end).length }
    );
  }
  tableFormat(editor) {
    const cur = editor.getCursor();
    const bounds = this.findTableBounds(editor, cur.line);
    if (!bounds) {
      new import_obsidian.Notice("Cursor is not inside a table");
      return;
    }
    const rows = [];
    const sepIdx = [];
    for (let i = bounds.start; i <= bounds.end; i++) {
      const raw = editor.getLine(i);
      rows.push(this.parseTableLine(raw));
      if (this.isSeparatorRow(raw))
        sepIdx.push(i - bounds.start);
    }
    const colCount = Math.max(...rows.map((r) => r.length));
    const widths = new Array(colCount).fill(0);
    rows.forEach((r, ri) => {
      var _a;
      if (sepIdx.includes(ri))
        return;
      for (let c = 0; c < colCount; c++) {
        const cell = (_a = r[c]) != null ? _a : "";
        if (cell.length > widths[c])
          widths[c] = cell.length;
      }
    });
    const formatted = rows.map((r, ri) => {
      if (sepIdx.includes(ri)) {
        const cells2 = new Array(colCount).fill(0).map((_, c) => "-".repeat(Math.max(3, widths[c])));
        return "| " + cells2.join(" | ") + " |";
      }
      const cells = new Array(colCount).fill(0).map((_, c) => {
        var _a;
        const v = (_a = r[c]) != null ? _a : "";
        return v + " ".repeat(widths[c] - v.length);
      });
      return "| " + cells.join(" | ") + " |";
    });
    editor.replaceRange(
      formatted.join("\n"),
      { line: bounds.start, ch: 0 },
      { line: bounds.end, ch: editor.getLine(bounds.end).length }
    );
  }
  colIndexAt(line, ch) {
    let count = 0;
    for (let i = 0; i < Math.min(ch, line.length); i++) {
      if (line[i] === "|")
        count++;
    }
    return Math.max(0, count - 1);
  }
  updateTableToolbar() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (!view) {
      if (this.tableToolbar)
        this.tableToolbar.hide();
      return;
    }
    const editor = view.editor;
    const cur = editor.getCursor();
    const line = editor.getLine(cur.line);
    if (!line || !this.isTableRow(line)) {
      if (this.tableToolbar)
        this.tableToolbar.hide();
      return;
    }
    if (!this.tableToolbar) {
      this.tableToolbar = new TableToolbar(view.contentEl, this);
    }
    this.tableToolbar.showNear(view, editor, cur);
  }
};
var HighlightPopover = class {
  constructor(parent, currentColor, onPick) {
    this.parent = parent;
    this.el = document.createElement("div");
    this.el.className = "cc-highlight-popover";
    HIGHLIGHT_COLORS.forEach((c) => {
      const sw = document.createElement("button");
      sw.className = "cc-swatch";
      sw.style.background = c.value;
      sw.setAttribute("aria-label", c.name);
      if (c.value.toLowerCase() === currentColor.toLowerCase()) {
        sw.classList.add("cc-selected");
      }
      sw.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        onPick(c.value);
      });
      this.el.appendChild(sw);
    });
  }
  show() {
    this.parent.appendChild(this.el);
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const rect = sel.getRangeAt(0).getBoundingClientRect();
      const parentRect = this.parent.getBoundingClientRect();
      this.el.style.left = `${rect.left - parentRect.left}px`;
      this.el.style.top = `${rect.bottom - parentRect.top + 4}px`;
    } else {
      this.el.style.left = "50%";
      this.el.style.top = "40%";
    }
    requestAnimationFrame(() => this.el.classList.add("cc-visible"));
  }
  containsTarget(target) {
    if (!target)
      return false;
    return this.el.contains(target);
  }
  destroy() {
    this.el.remove();
  }
};
var TableGridPicker = class extends import_obsidian.Modal {
  constructor(app, onPick) {
    super(app);
    this.rows = 0;
    this.cols = 0;
    this.onPick = onPick;
  }
  onOpen() {
    const { contentEl, modalEl } = this;
    modalEl.addClass("cc-modal");
    contentEl.empty();
    contentEl.addClass("cc-grid-picker");
    const title = contentEl.createDiv({ cls: "cc-grid-title" });
    title.setText("Insert table");
    const label = contentEl.createDiv({ cls: "cc-grid-label" });
    label.setText("0 \xD7 0");
    const grid = contentEl.createDiv({ cls: "cc-grid" });
    const cells = [];
    const SIZE = 8;
    for (let r = 0; r < SIZE; r++) {
      const row = [];
      for (let c = 0; c < SIZE; c++) {
        const cell = grid.createDiv({ cls: "cc-grid-cell" });
        cell.dataset.row = String(r);
        cell.dataset.col = String(c);
        cell.addEventListener("mouseenter", () => {
          this.rows = r + 1;
          this.cols = c + 1;
          label.setText(`${this.rows} \xD7 ${this.cols}`);
          for (let rr = 0; rr < SIZE; rr++) {
            for (let cc = 0; cc < SIZE; cc++) {
              cells[rr][cc].toggleClass(
                "cc-grid-active",
                rr <= r && cc <= c
              );
            }
          }
        });
        cell.addEventListener("click", () => {
          if (this.rows > 0 && this.cols > 0) {
            this.onPick(this.rows, this.cols);
            this.close();
          }
        });
        row.push(cell);
      }
      cells.push(row);
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
var TableToolbar = class {
  constructor(parent, plugin) {
    this.visible = false;
    this.parent = parent;
    this.plugin = plugin;
    this.el = document.createElement("div");
    this.el.className = "cc-table-toolbar";
    this.buildButtons();
    this.parent.appendChild(this.el);
  }
  buildButtons() {
    const mkBtn = (icon, label, action) => {
      const b = document.createElement("button");
      b.className = "cc-tb-btn";
      b.setAttribute("aria-label", label);
      b.title = label;
      setIcon(b, icon);
      b.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        action();
      });
      return b;
    };
    const getEditor = () => {
      const v = this.plugin.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      return v ? v.editor : null;
    };
    this.el.appendChild(
      mkBtn("table-row", "Add row below", () => {
        const e = getEditor();
        if (e)
          this.plugin.tableAddRowBelow(e);
      })
    );
    this.el.appendChild(
      mkBtn("table-col", "Add column right", () => {
        const e = getEditor();
        if (e)
          this.plugin.tableAddColRight(e);
      })
    );
    const divider = document.createElement("div");
    divider.className = "cc-tb-divider";
    this.el.appendChild(divider);
    this.el.appendChild(
      mkBtn("table-del-row", "Delete row", () => {
        const e = getEditor();
        if (e)
          this.plugin.tableDeleteRow(e);
      })
    );
    this.el.appendChild(
      mkBtn("table-del-col", "Delete column", () => {
        const e = getEditor();
        if (e)
          this.plugin.tableDeleteCol(e);
      })
    );
    const divider2 = document.createElement("div");
    divider2.className = "cc-tb-divider";
    this.el.appendChild(divider2);
    this.el.appendChild(
      mkBtn("table", "Format table", () => {
        const e = getEditor();
        if (e)
          this.plugin.tableFormat(e);
      })
    );
  }
  showNear(view, editor, cursor) {
    try {
      const cm = editor.cm;
      const coords = (cm == null ? void 0 : cm.coordsAtPos) ? cm.coordsAtPos(editor.posToOffset(cursor)) : null;
      const parentRect = this.parent.getBoundingClientRect();
      let top = 60;
      let left = 60;
      if (coords) {
        top = coords.top - parentRect.top - 44;
        left = coords.left - parentRect.left;
        if (top < 4)
          top = coords.bottom - parentRect.top + 8;
      }
      this.el.style.top = `${Math.max(4, top)}px`;
      this.el.style.left = `${Math.max(4, left)}px`;
    } catch (e) {
    }
    if (!this.visible) {
      this.el.classList.add("cc-visible");
      this.visible = true;
    }
  }
  hide() {
    if (this.visible) {
      this.el.classList.remove("cc-visible");
      this.visible = false;
    }
  }
  destroy() {
    this.el.remove();
  }
};
var AIModal = class extends import_obsidian.Modal {
  constructor(app, plugin, selectedText, onApply) {
    super(app);
    this.abortController = null;
    this.responseText = "";
    this.lastQuestion = "";
    this.plugin = plugin;
    this.selectedText = selectedText;
    this.onApply = onApply;
    this.currentModel = plugin.settings.defaultModel;
  }
  onOpen() {
    const { contentEl, modalEl } = this;
    modalEl.addClass("cc-modal");
    modalEl.addClass("cc-ai-modal");
    contentEl.empty();
    const header = contentEl.createDiv({ cls: "cc-ai-header" });
    const titleWrap = header.createDiv({ cls: "cc-ai-title" });
    const sparkEl = titleWrap.createSpan({ cls: "cc-ai-icon" });
    setIcon(sparkEl, "ai-spark");
    titleWrap.createSpan({ text: "Course Companion AI" });
    const modelWrap = header.createDiv({ cls: "cc-model-wrap" });
    const modelIcon = modelWrap.createSpan({ cls: "cc-model-icon" });
    setIcon(modelIcon, "model");
    this.modelSelect = modelWrap.createEl("select", { cls: "cc-model-select" });
    this.populateModels();
    this.modelSelect.addEventListener("change", () => {
      this.currentModel = this.modelSelect.value;
    });
    this.errorBanner = contentEl.createDiv({ cls: "cc-error-banner cc-hidden" });
    if (this.selectedText && this.selectedText.trim().length > 0) {
      const ctxLabel = contentEl.createDiv({ cls: "cc-section-label" });
      ctxLabel.setText("Selected text");
      const ctxBox = contentEl.createDiv({ cls: "cc-context-box" });
      ctxBox.setText(this.selectedText);
    }
    const qLabel = contentEl.createDiv({ cls: "cc-section-label" });
    qLabel.setText("Your question");
    const inputRow = contentEl.createDiv({ cls: "cc-input-row" });
    this.inputEl = inputRow.createEl("textarea", { cls: "cc-input" });
    this.inputEl.rows = 2;
    this.inputEl.placeholder = "Ask anything about the selected text...";
    if (this.selectedText && this.selectedText.trim().length > 0) {
      this.inputEl.value = `Explain this: ${this.selectedText.substring(0, 200)}`;
    }
    this.inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        void this.send();
      }
    });
    this.sendBtn = inputRow.createEl("button", { cls: "cc-btn cc-btn-primary cc-send-btn" });
    const sendIc = this.sendBtn.createSpan();
    setIcon(sendIc, "send");
    this.sendBtn.createSpan({ text: " Send" });
    this.sendBtn.addEventListener("click", () => void this.send());
    const respLabel = contentEl.createDiv({ cls: "cc-section-label" });
    respLabel.setText("Response");
    this.responseEl = contentEl.createDiv({ cls: "cc-response" });
    this.responseEl.setText("");
    const footer = contentEl.createDiv({ cls: "cc-ai-footer" });
    const leftFooter = footer.createDiv({ cls: "cc-footer-left" });
    const rightFooter = footer.createDiv({ cls: "cc-footer-right" });
    const cancelBtn = leftFooter.createEl("button", { cls: "cc-btn cc-btn-ghost" });
    const cancelIc = cancelBtn.createSpan();
    setIcon(cancelIc, "cancel");
    cancelBtn.createSpan({ text: " Cancel" });
    cancelBtn.addEventListener("click", () => this.close());
    this.retryBtn = rightFooter.createEl("button", { cls: "cc-btn cc-btn-ghost cc-hidden" });
    const retryIc = this.retryBtn.createSpan();
    setIcon(retryIc, "retry");
    this.retryBtn.createSpan({ text: " Retry" });
    this.retryBtn.addEventListener("click", () => void this.retry());
    this.copyBtn = rightFooter.createEl("button", { cls: "cc-btn cc-btn-ghost cc-hidden" });
    const copyIc = this.copyBtn.createSpan();
    setIcon(copyIc, "copy");
    this.copyBtn.createSpan({ text: " Copy" });
    this.copyBtn.addEventListener("click", () => this.copyResponse());
    this.applyBtn = rightFooter.createEl("button", { cls: "cc-btn cc-btn-primary cc-hidden" });
    const applyIc = this.applyBtn.createSpan();
    setIcon(applyIc, "apply");
    this.applyBtn.createSpan({ text: " Apply" });
    this.applyBtn.addEventListener("click", () => this.applyResponse());
    this.scope.register([], "Escape", () => {
      this.close();
      return false;
    });
    setTimeout(() => this.inputEl.focus(), 80);
  }
  onClose() {
    if (this.abortController) {
      try {
        this.abortController.abort();
      } catch (e) {
      }
      this.abortController = null;
    }
    this.contentEl.empty();
  }
  populateModels() {
    this.modelSelect.empty();
    const models = this.plugin.settings.savedModels.length > 0 ? this.plugin.settings.savedModels : [this.plugin.settings.defaultModel];
    let foundCurrent = false;
    for (const m of models) {
      const opt = this.modelSelect.createEl("option", { text: m, value: m });
      if (m === this.currentModel) {
        opt.selected = true;
        foundCurrent = true;
      }
    }
    if (!foundCurrent && this.currentModel) {
      const opt = this.modelSelect.createEl("option", {
        text: this.currentModel,
        value: this.currentModel
      });
      opt.selected = true;
    }
  }
  showError(msg) {
    this.errorBanner.removeClass("cc-hidden");
    this.errorBanner.setText(`\u2717 ${msg}`);
  }
  clearError() {
    this.errorBanner.addClass("cc-hidden");
    this.errorBanner.setText("");
  }
  setStreaming(streaming) {
    if (streaming)
      this.responseEl.classList.add("cc-streaming");
    else
      this.responseEl.classList.remove("cc-streaming");
  }
  async send() {
    const question = this.inputEl.value.trim();
    if (!question) {
      this.showError("Please enter a question");
      return;
    }
    this.lastQuestion = question;
    await this.runRequest(question);
  }
  async retry() {
    if (!this.lastQuestion)
      return;
    await this.runRequest(this.lastQuestion);
  }
  async runRequest(question) {
    var _a, _b, _c, _d;
    this.clearError();
    this.responseText = "";
    this.responseEl.setText("");
    this.applyBtn.addClass("cc-hidden");
    this.copyBtn.addClass("cc-hidden");
    this.retryBtn.addClass("cc-hidden");
    this.sendBtn.setAttribute("disabled", "true");
    this.setStreaming(true);
    const settings = this.plugin.settings;
    if (!settings.apiBaseURL || !settings.apiKey) {
      this.setStreaming(false);
      this.sendBtn.removeAttribute("disabled");
      this.showError("Set API Base URL and API Key in plugin settings");
      return;
    }
    const userMessage = this.selectedText ? `Context:
"""
${this.selectedText}
"""

Question: ${question}` : question;
    const url = `${settings.apiBaseURL.replace(/\/$/, "")}/chat/completions`;
    const body = {
      model: this.currentModel,
      messages: [
        { role: "system", content: settings.systemPrompt },
        { role: "user", content: userMessage }
      ],
      stream: settings.streamResponses,
      max_tokens: settings.maxTokens,
      temperature: settings.temperature
    };
    if (this.abortController) {
      try {
        this.abortController.abort();
      } catch (e) {
      }
    }
    this.abortController = new AbortController();
    try {
      const resp = await fetch(url, {
        method: "POST",
        signal: this.abortController.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${settings.apiKey}`
        },
        body: JSON.stringify(body)
      });
      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${text.slice(0, 300)}`);
      }
      if (settings.streamResponses && resp.body) {
        await this.readStream(resp.body);
      } else {
        const json = await resp.json();
        const content = (_d = (_c = (_b = (_a = json == null ? void 0 : json.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) != null ? _d : "";
        this.responseText = content;
        this.responseEl.setText(content);
      }
      this.finishResponse();
    } catch (err) {
      if ((err == null ? void 0 : err.name) === "AbortError") {
        this.setStreaming(false);
        this.sendBtn.removeAttribute("disabled");
        return;
      }
      const message = err instanceof Error ? err.message : String(err);
      this.showError(message);
      this.setStreaming(false);
      this.sendBtn.removeAttribute("disabled");
      this.retryBtn.removeClass("cc-hidden");
    }
  }
  async readStream(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done)
        break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = (_a = lines.pop()) != null ? _a : "";
      for (const raw of lines) {
        const line = raw.trim();
        if (!line)
          continue;
        if (!line.startsWith("data:"))
          continue;
        const data = line.slice(5).trim();
        if (data === "[DONE]")
          continue;
        try {
          const parsed = JSON.parse(data);
          const delta = (_i = (_h = (_d = (_c = (_b = parsed == null ? void 0 : parsed.choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.delta) == null ? void 0 : _d.content) != null ? _h : (_g = (_f = (_e = parsed == null ? void 0 : parsed.choices) == null ? void 0 : _e[0]) == null ? void 0 : _f.message) == null ? void 0 : _g.content) != null ? _i : "";
          if (delta) {
            this.responseText += delta;
            this.responseEl.setText(this.responseText);
          }
        } catch (e) {
        }
      }
    }
  }
  finishResponse() {
    this.setStreaming(false);
    this.sendBtn.removeAttribute("disabled");
    if (this.responseText.length > 0) {
      this.applyBtn.removeClass("cc-hidden");
      this.copyBtn.removeClass("cc-hidden");
      this.retryBtn.removeClass("cc-hidden");
    }
  }
  copyResponse() {
    try {
      void navigator.clipboard.writeText(this.responseText);
      new import_obsidian.Notice("Copied to clipboard");
    } catch (e) {
      new import_obsidian.Notice("Copy failed");
    }
  }
  applyResponse() {
    this.onApply(this.responseText);
    this.close();
  }
};
var CourseCompanionSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("cc-settings");
    containerEl.createEl("h2", { text: "AI Configuration" });
    new import_obsidian.Setting(containerEl).setName("API Base URL").setDesc("OpenAI-compatible endpoint").addText(
      (t) => t.setPlaceholder("https://api.openai.com/v1").setValue(this.plugin.settings.apiBaseURL).onChange(async (v) => {
        this.plugin.settings.apiBaseURL = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("API Key").setDesc("Stored locally in plugin data").addText((t) => {
      t.setPlaceholder("sk-...").setValue(this.plugin.settings.apiKey).onChange(async (v) => {
        this.plugin.settings.apiKey = v;
        await this.plugin.saveSettings();
      });
      t.inputEl.type = "password";
    });
    new import_obsidian.Setting(containerEl).setName("Default Model").setDesc("Used when modal opens").addText(
      (t) => t.setPlaceholder("gpt-4o-mini").setValue(this.plugin.settings.defaultModel).onChange(async (v) => {
        this.plugin.settings.defaultModel = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("System Prompt").setDesc("Sent as the system message").addTextArea((t) => {
      t.setValue(this.plugin.settings.systemPrompt).onChange(async (v) => {
        this.plugin.settings.systemPrompt = v;
        await this.plugin.saveSettings();
      });
      t.inputEl.rows = 4;
      t.inputEl.classList.add("cc-textarea");
    });
    new import_obsidian.Setting(containerEl).setName("Max Tokens").setDesc("100\u20138000").addText((t) => {
      t.setValue(String(this.plugin.settings.maxTokens)).onChange(async (v) => {
        const n = parseInt(v, 10);
        if (!isNaN(n) && n >= 100 && n <= 8e3) {
          this.plugin.settings.maxTokens = n;
          await this.plugin.saveSettings();
        }
      });
      t.inputEl.type = "number";
      t.inputEl.min = "100";
      t.inputEl.max = "8000";
    });
    new import_obsidian.Setting(containerEl).setName("Temperature").setDesc("0.0\u20132.0").addSlider(
      (s) => s.setLimits(0, 2, 0.1).setValue(this.plugin.settings.temperature).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.temperature = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Stream responses").setDesc("Show AI output as it generates").addToggle(
      (t) => t.setValue(this.plugin.settings.streamResponses).onChange(async (v) => {
        this.plugin.settings.streamResponses = v;
        await this.plugin.saveSettings();
      })
    );
    const testWrap = containerEl.createDiv({ cls: "cc-test-wrap" });
    const testBtn = testWrap.createEl("button", { cls: "cc-btn cc-btn-primary", text: "Test Connection" });
    const testResult = testWrap.createSpan({ cls: "cc-test-result" });
    testBtn.addEventListener("click", async () => {
      testResult.setText("Testing...");
      testResult.removeClass("cc-success");
      testResult.removeClass("cc-error");
      try {
        const s = this.plugin.settings;
        if (!s.apiBaseURL || !s.apiKey) {
          testResult.addClass("cc-error");
          testResult.setText("\u2717 Missing API Base URL or API Key");
          return;
        }
        const resp = await fetch(`${s.apiBaseURL.replace(/\/$/, "")}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.apiKey}`
          },
          body: JSON.stringify({
            model: s.defaultModel,
            messages: [{ role: "user", content: "ping" }],
            max_tokens: 4
          })
        });
        if (resp.ok) {
          testResult.addClass("cc-success");
          testResult.setText("\u2713 Connected");
        } else {
          testResult.addClass("cc-error");
          testResult.setText(`\u2717 Error: HTTP ${resp.status}`);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        testResult.addClass("cc-error");
        testResult.setText(`\u2717 Error: ${message}`);
      }
    });
    containerEl.createEl("h2", { text: "Saved Models" });
    const modelsList = containerEl.createDiv({ cls: "cc-models-list" });
    const renderModels = () => {
      modelsList.empty();
      this.plugin.settings.savedModels.forEach((m, idx) => {
        const row = modelsList.createDiv({ cls: "cc-model-row" });
        row.createSpan({ text: m, cls: "cc-model-name" });
        const del = row.createEl("button", { cls: "cc-icon-btn" });
        setIcon(del, "cancel");
        del.title = "Remove";
        del.addEventListener("click", async () => {
          this.plugin.settings.savedModels.splice(idx, 1);
          await this.plugin.saveSettings();
          renderModels();
        });
      });
    };
    renderModels();
    const addRow = containerEl.createDiv({ cls: "cc-add-model-row" });
    const addInput = addRow.createEl("input", { cls: "cc-add-model-input" });
    addInput.placeholder = "New model name (e.g. gpt-4o)";
    const addBtn = addRow.createEl("button", { cls: "cc-btn cc-btn-primary", text: "+ Add Model" });
    addBtn.addEventListener("click", async () => {
      const v = addInput.value.trim();
      if (!v)
        return;
      if (this.plugin.settings.savedModels.includes(v)) {
        new import_obsidian.Notice("Model already saved");
        return;
      }
      this.plugin.settings.savedModels.push(v);
      await this.plugin.saveSettings();
      addInput.value = "";
      renderModels();
    });
    containerEl.createEl("h2", { text: "Highlight" });
    const hLabel = containerEl.createDiv({ cls: "cc-section-label" });
    hLabel.setText("Default highlight color");
    const swatchRow = containerEl.createDiv({ cls: "cc-swatch-row" });
    HIGHLIGHT_COLORS.forEach((c) => {
      const sw = swatchRow.createEl("button", { cls: "cc-swatch" });
      sw.style.background = c.value;
      sw.setAttribute("aria-label", c.name);
      if (c.value === this.plugin.settings.defaultHighlightColor) {
        sw.classList.add("cc-selected");
      }
      sw.addEventListener("click", async () => {
        this.plugin.settings.defaultHighlightColor = c.value;
        this.plugin.settings.lastHighlightColor = c.value;
        await this.plugin.saveSettings();
        swatchRow.querySelectorAll(".cc-swatch").forEach((el) => el.classList.remove("cc-selected"));
        sw.classList.add("cc-selected");
      });
    });
    containerEl.createEl("h2", { text: "Shortcuts" });
    const shortcuts = containerEl.createDiv({ cls: "cc-shortcuts" });
    const rows = [
      ["Highlight selection", "Ctrl/Cmd + Shift + H"],
      ["Insert table", "Command Palette \u2192 Table: Insert table"],
      ["Ask AI", "Command Palette \u2192 Ask AI about selection / Right-click"]
    ];
    rows.forEach(([label, key]) => {
      const r = shortcuts.createDiv({ cls: "cc-shortcut-row" });
      r.createSpan({ cls: "cc-shortcut-label", text: label });
      r.createSpan({ cls: "cc-shortcut-key", text: key });
    });
  }
};
