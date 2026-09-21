# CRITICAL TOKEN-EFFICIENCY WORKFLOW FOR PROJECT ASTRA

## Rule 1: Consult PROJECT_MEMORY.md / AGENTS.md First
- Never load or read full source files blindly.
- Use `PROJECT_MEMORY.md` to find the exact file and component selector or line range.

## Rule 2: NEVER View or Replace Entire Files
- `index.html` is ~1,100 lines.
- `styles.css` is ~3,700 lines.
- `script.js` is ~750 lines.
- **NEVER** use `view_file` without `StartLine` and `EndLine` parameters. Always limit your view window to 30-80 lines.
- **NEVER** use `write_to_file` to overwrite existing files. Always use `replace_file_content` targeting small, exact blocks (less than 40 lines).
- Use `grep_search` with specific query strings to locate sections in seconds without reading through the file.

## Rule 3: Use Dedicated Modular Data Files for Content Updates
All textual content, translations, horoscope details, and Kundli recommendations have been modularized to minimize token usage:
1. **Translations & UI Texts (EN / HI)**:
   - File: `data/i18n.js` (~380 lines)
   - Do NOT touch `script.js` or `index.html` for text updates. Just update the key in `data/i18n.js`.
2. **Kundli 3-Point Advice (Career, Love/Marriage, Money, Abroad)**:
   - File: `data/roadmaps.js` (~200 lines)
   - Contains all mock and template Kundli answers.
3. **Daily Horoscopes, Rashi Transits & Astrologer Audio Quotes**:
   - File: `data/rashis.js` (~260 lines)
   - Contains all 12 Rashi metrics, notes, habits, and astrologer speech texts.

## Rule 4: Design & Style Rules (Strict Constraints)
- **Palette**: Strictly Liquid Silver Chrome, Platinum, Slate Gray, Cool Azure, and Obsidian Black Slate. **NO gold or yellow colors.**
- **Geometry**: Strict crisp square borders (`border-radius: 0 !important` except astronomical planets/spheres).
- **Tone**: 100% Indian-relatable, everyday simple English and conversational Hindi. Zero fake fear, no Manglik/Kaal Sarp panic, no ₹15,000 gemstone sales, no 50-page boring PDFs.
