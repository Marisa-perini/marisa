import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const REFERENCE_HTML = path.join(ROOT, 'reference', 'reference.html');
const OUT_DIR = path.join(ROOT, 'screenshots', 'reference');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  await page.goto('file://' + REFERENCE_HTML, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  // Full page
  await page.screenshot({
    path: path.join(OUT_DIR, 'reference-full.png'),
    fullPage: true,
  });

  // Viewport only (top fold)
  await page.screenshot({
    path: path.join(OUT_DIR, 'reference-viewport.png'),
    fullPage: false,
  });

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log('Page total height:', totalHeight);

  // Scroll segments and capture
  const segments = [
    { name: 'reference-01-navbar-hero', y: 0, h: 900 },
    { name: 'reference-02-section-a', y: 900, h: 900 },
    { name: 'reference-03-section-b', y: 1800, h: 900 },
    { name: 'reference-04-section-c', y: 2700, h: 900 },
    { name: 'reference-05-section-d', y: 3600, h: 900 },
    { name: 'reference-06-section-e', y: 4500, h: 900 },
    { name: 'reference-07-section-f', y: 5400, h: 900 },
    { name: 'reference-08-footer', y: Math.max(0, totalHeight - 900), h: 900 },
  ];

  for (const seg of segments) {
    if (seg.y > totalHeight) continue;
    await page.evaluate((y) => window.scrollTo(0, y), seg.y);
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(OUT_DIR, seg.name + '.png'),
      fullPage: false,
    });
  }

  await browser.close();
  console.log('Reference captured.');
})();
