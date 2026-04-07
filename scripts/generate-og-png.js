import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const svg = readFileSync(resolve(root, 'public/og-image.svg'));

await sharp(svg)
  .resize(1200, 630)
  .png()
  .toFile(resolve(root, 'public/og-image.png'));

console.log('Generated public/og-image.png (1200×630)');
