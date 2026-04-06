# Family Relationship Calculator

A mobile-first web app for calculating family relationship terms in **Traditional Chinese (Taiwan)** and **Tamil**. Build a relationship chain step by step — like a calculator — and get the correct kinship term with pronunciation.

## What it does

Press family relation buttons to build a chain, then press **=** to calculate the result.

**Example:** 媽媽 → 的 → 妹妹 → 的 → 女兒 → **=** → **表妹** *(biǎo mèi)*

When the result depends on whether the relative is older or younger than you (e.g. cousins), the app prompts you to select before showing the final term.

Switching languages mid-calculation preserves the chain and translates the result in place.

## Features

- **Calculator-style UI** optimised for iPhone — large touch targets, dark theme
- **Traditional Chinese** with pinyin romanisation (Taiwan dialect)
- **Tamil** with romanisation; English labels on input buttons
- **Age disambiguation** — prompts older/younger when the term depends on it
- **🔊 Text-to-speech** via the Web Speech API (`zh-TW` / `ta-IN` locales)
- **Live language switching** — toggle between 中文 and தமிழ் without losing your input
- **Gender toggle** (👨 / 👩) for perspective-sensitive terms

## Relationship coverage

| Depth | Examples |
|---|---|
| 1 step | Parents, siblings, spouse, children |
| 2 steps | Grandparents, aunts/uncles (all 8 variants), in-laws, nieces/nephews, grandchildren, aunt/uncle spouses |
| 3 steps | Cousins — 堂 (paternal) vs 表 (maternal); Tamil parallel vs cross cousins (மச்சான்/மச்சினி) |
| 4 steps | Cousin spouses (表嫂, 堂弟媳, அண்ணி …), niece/nephew spouses |

Aunt and uncle spouses are also covered (伯母, 嬸嬸, 姑丈, 姨丈, 舅媽, மாமி, பெரியம்மா …).

## Tech stack

- **React 19** + **Vite**
- **Tailwind CSS v4**
- No backend — fully static, works offline after first load

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser, or point your phone at the same local address.

```bash
npm run build   # production build → dist/
npm run preview # preview the production build locally
```

## Project structure

```
src/
├── App.jsx                  # State, layout, speech synthesis
├── components/
│   ├── ButtonGrid.jsx       # 3×4 relation button grid
│   ├── ChainDisplay.jsx     # Relationship chain with intermediate terms
│   ├── ResultDisplay.jsx    # Result term + pinyin / romanisation
│   └── AgeSelector.jsx      # Older / younger disambiguation prompt
├── data/
│   ├── chinese.js           # Traditional Chinese lookup table + button definitions
│   └── tamil.js             # Tamil lookup table + button definitions
└── utils/
    └── calculator.js        # Path lookup + subpath specialisation logic
```

## Notes

- Speech synthesis quality depends on the voices installed on the device. `zh-TW` and `ta-IN` voices are available on iOS by default; Android and desktop vary.
- Kinship terms vary by region and family tradition. Results reflect standard Taiwan Mandarin and common Tamil usage.
