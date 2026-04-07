import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const svg = readFileSync(resolve(root, 'public/og-image.svg'), 'utf-8');

// Candidate Tamil font paths across platforms.
// resvg/fontdb supports TTC (font collections) natively.
const tamilFontCandidates = [
  // macOS
  '/System/Library/Fonts/Supplemental/Tamil Sangam MN.ttc',
  '/System/Library/Fonts/Supplemental/Tamil MN.ttc',
  // Linux (Ubuntu/Debian)
  '/usr/share/fonts/truetype/noto/NotoSansTamil-Regular.ttf',
  '/usr/share/fonts/truetype/lohit-tamil/Lohit-Tamil.ttf',
];
const fontFiles = tamilFontCandidates.filter(existsSync);

const resvg = new Resvg(svg, {
  font: {
    loadSystemFonts: true,
    fontFiles,
  },
});

const pngData = resvg.render().asPng();
writeFileSync(resolve(root, 'public/og-image.png'), pngData);
console.log('Generated public/og-image.png (1200×630)');
