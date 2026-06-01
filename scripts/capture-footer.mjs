import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const URL = 'file://' + path.join(ROOT, 'index.html');
const OUT = path.join(ROOT, 'screenshots', 'progress');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.addStyleTag({ content: '.reveal { opacity: 1 !important; transform: none !important; }' });
  await page.waitForTimeout(1500);

  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log('Total height:', h);

  // CTA final
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight - 1800));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/09-cta-final.png`, fullPage: false });

  // Footer
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight - 900));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/10-footer-real.png`, fullPage: false });

  await browser.close();
})();
