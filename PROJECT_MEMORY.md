# PROJECT ASTRA — SYSTEM MEMORY & DEVELOPER WORKFLOW

> **Core Mandate**: This repository is optimized for **Ultra-Low Token Consumption** during updates and maintenance. Always consult this memory file before reading or editing source code.

---

## 1. Project Overview & Product Vision
**ASTRA** is a modern, honest, Indian-relatable astrology platform offering direct, 3-point practical Kundli summaries and live consultations.
- **Key Differentiator**: Solves modern Indian problems (IT/Corporate job switches, salary hikes, arranged vs love marriage, family compatibility, business decisions, moving abroad).
- **Zero-Fear Guarantee**: Strictly avoids fear-mongering (No Kaal Sarp / Manglik panic traps, no ₹15,000 gemstone upsells, no 50-page confusing Sanskrit PDFs, no spam calls).
- **Tone**: Plain everyday Indian English + natural conversational Hindi.

---

## 2. Architecture & Modular Setup (Low Token Strategy)

Previously, all dictionaries, sample data, and astrological calculations were bundled into a monolithic 1,660-line `script.js` and a 3,700-line `styles.css`.
To ensure **every future update uses minimum tokens (80–90% reduction)**, the codebase is modularized:

```
d:\PROJECTS\PROJECT ASTRA\
├── data/
│   ├── i18n.js          # Bilingual UI texts (English & Hindi) [~380 lines]
│   ├── roadmaps.js      # Sample 3-Point Kundli answers [~200 lines]
│   └── rashis.js        # 12 Rashi transit data & Astrologer quotes [~260 lines]
├── assets/              # Icons, badges, visual media
├── index.html           # Single-page fluid responsive layout [~1,100 lines]
├── styles.css           # Silver Chrome, crisp square & fluid responsive styles [~3,700 lines]
├── script.js            # Pure UI logic, event listeners, audio & modal controllers [~750 lines]
├── server.js            # Node static web server (Port 3000)
├── AGENTS.md            # Agent quick instruction pointer
├── PROJECT_MEMORY.md    # Full project memory, section index & update workflows
└── .agents/rules/
    └── token-efficiency.md # Active Antigravity token constraint rule
```

### Script Loading Sequence (in `index.html`):
```html
<script src="data/i18n.js"></script>
<script src="data/roadmaps.js"></script>
<script src="data/rashis.js"></script>
<script src="script.js"></script>
```

---

## 3. Fast Update Cheat Sheet (Minimize Token Usage)

### Case A: "Change a button label / heading / UI text"
- **DO NOT** read `index.html` or `script.js`.
- Open `data/i18n.js`.
- Locate key using `grep_search` or line offset (e.g. `heroBadge`, `navSanctuary`).
- Edit only the relevant English and Hindi strings with `replace_file_content`.
- **Tokens used: < 150 tokens.**

### Case B: "Change Kundli answers or add a new focus area"
- **DO NOT** read `script.js`.
- Open `data/roadmaps.js`.
- Add/modify the focus key (`career`, `love`, `wealth`, `abroad`) with point1, point2, point3 in `en` and `hi`.
- **Tokens used: < 200 tokens.**

### Case C: "Update Rashi daily horoscope / meters / remedies"
- **DO NOT** touch `script.js` or `index.html`.
- Open `data/rashis.js`.
- Find the zodiac sign ID (e.g. `aries`, `taurus`, `scorpio`) and edit `peace`, `karma`, `caution`, or remedy notes.
- **Tokens used: < 180 tokens.**

### Case D: "Tweak styling or responsive layout"
- Check Section 4 below to find the exact CSS line block.
- Read only a 30-50 line slice around that selector.
- Apply targeted edit with `replace_file_content`.
- **Tokens used: < 250 tokens.**

---

## 4. UI Section Map & Element ID Index

| Section / Component | Key HTML IDs / Classes | Purpose & Contents |
| :--- | :--- | :--- |
| **Top Announcement** | `#gochar-pill`, `.top-transit-bar` | Daily Gochar snippet with Moon transit |
| **Header & Nav** | `#site-header`, `#lang-toggle`, `#sound-toggle`, `#mobile-menu-btn`, `#mobile-drawer` | Navigation, English/Hindi switch, soft chime audio |
| **3D Scroll Hero Journey** | `#hero`, `#hero-scroll-canvas`, `#canvas-stage-wrap`, `#btn-open-kundli-form` | Apple-style scroll canvas scrubbing 60 frames from main.mp4 (Gemini logo removed): Hand ➔ Rising Kundli ➔ "Check Free Kundli" CTA |
| **Horoscope Explorer** | `#cosmic-explorer`, `#rashi-grid`, `#meter-peace-val`, `#remedy-card` | 12 Rashi selector, Mind & Focus, Peak Timing, Stress meters |
| **3 Life Pillars Showcase** | `#life-pillars`, `.pillar-showcase-card` | Dedicated 3-Card visual showcase (Career, Love/Marriage, Wealth) with action CTAs |
| **Philosophy & Standards** | `#contrast`, `.standards-grid`, `.standard-card` | 4 ASTRA Principles (1-Screen Concrete Answers, Simple Language, Sensible Advisors, Upfront Rates) |
| **Sample Roadmap** | *(Removed per user preference)* | Replaced by direct interactive modal previews via CTA |
| **Astrologer Guides** | `#guides`, `.guides-grid`, `.guide-card`, `.voice-preview-btn` | Dr. Saurabh Kulkarni, Ananya Vashistha, Raghavendra Mishra |
| **Pricing Tiles** | `#pricing`, `.pricing-grid`, `.pricing-tile` | Flat rates: ₹0 Free Kundli, ₹99 Single Question, ₹249 15-min Call |
| **FAQ Accordion** | `#faq`, `.faq-item`, `.faq-question`, `.faq-answer` | 4 collapsible FAQs answering real doubts |
| **Modals** | `#kundli-form-modal`, `#roadmap-modal`, `#satvik-modal`, `#checkout-modal` | Kundli Form Details, Kundli 3-Point Results, Simple Daily Habits, Booking Call |

---

## 5. Design System Tokens & Aesthetic Standards

- **Color Palette**:
  - Backgrounds: `#F8FAFC` (Brushed Platinum), `#F1F5F9` (Mist)
  - Text: `#0F172A` (Obsidian Charcoal), `#475569` (Balanced Slate), `#94A3B8` (Muted)
  - Metallics: `#CBD5E1` (Liquid Chrome), `#E2E8F0` (Silver Surface), `#FFFFFF` (Specular White)
  - Accent: `#38BDF8` (Cool Sky Blue glint)
  - **Forbidden**: No gold, yellow, or mustard colors.
- **Architectural Square Geometry**:
  - `border-radius: 0 !important;` on all cards, buttons, inputs, modals, and badges.
  - Exceptions: Only astronomical bodies (planets, moon, halo) retain `border-radius: 50%`.
- **Button Styling**:
  - `.btn-heaven`: Silver metallic liquid chrome gradient (`linear-gradient(135deg, #FFFFFF, #E2E8F0, #CBD5E1)`), slate-900 bold text, 1px `#CBD5E1` border, 3D glint.
- **Fluid Responsiveness**:
  - `clamp()` used for typography, container padding, and spacing.
  - Smooth breakpoint scaling down to 320px screens.

---

## 6. Language & Copywriting Rules

- **English Rules**:
  - Always use simple, direct words: "Direct Answers", "Job Switch", "Marriage Timing", "Salary Hike", "Simple Daily Habit".
  - Avoid AI fluff like "Celestial Sanctuary", "Vedic Wisdom & Clarity Portal", "Ethereal Harmony", "Inner Blueprint".
- **Hindi Rules**:
  - Natural spoken conversational Hindi (as spoken in Delhi/Mumbai/Bengaluru corporate & household conversations).
  - Clear, comforting, and grounded in common Indian experiences.
