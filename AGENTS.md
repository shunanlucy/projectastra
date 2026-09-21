# AGENTS.md — INSTRUCTIONS FOR AI AGENTS WORKING ON PROJECT ASTRA

> **MANDATORY**: Before viewing or modifying any code in this repository, read this file and [`PROJECT_MEMORY.md`](file:///d:/PROJECTS/PROJECT%20ASTRA/PROJECT_MEMORY.md).

## Ultra-Low Token Usage Rules (DO NOT SKIP):
1. **Never read whole files**: `index.html` (1,100 lines), `styles.css` (3,700 lines), `script.js` (750 lines). View files only with bounded line ranges (`StartLine` and `EndLine`) or search with `grep_search`.
2. **Text / Translations Updates**:
   - English & Hindi UI texts are located in [`data/i18n.js`](file:///d:/PROJECTS/PROJECT%20ASTRA/data/i18n.js).
   - Edit *only* `data/i18n.js` when modifying copy or translations. Do not touch `script.js` or `index.html`.
3. **Kundli Answers / Focus Updates**:
   - Sample Kundli roadmap answers are located in [`data/roadmaps.js`](file:///d:/PROJECTS/PROJECT%20ASTRA/data/roadmaps.js).
4. **Horoscopes & Rashi Data Updates**:
   - 12 Rashi transit metrics, audio advice, and remedies are located in [`data/rashis.js`](file:///d:/PROJECTS/PROJECT%20ASTRA/data/rashis.js).
5. **Design Aesthetics**:
   - Strict Liquid Silver Chrome & Platinum color scheme (NO yellow or gold).
   - Pure square architectural design (`border-radius: 0 !important;` on all UI elements).
   - 100% Indian-relatable tone (Career, Marriage, Money; Zero fear traps, zero gemstone selling, zero spam calls).
