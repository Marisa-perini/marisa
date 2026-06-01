import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const URL = 'file://' + path.join(ROOT, 'index.html');
const OUT = path.join(ROOT, 'screenshots', 'progress');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);

  // Força todos os reveals a ficarem visíveis (para screenshot)
  await page.addStyleTag({ content: '.reveal { opacity: 1 !important; transform: none !important; }' });
  await page.waitForTimeout(500);

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  // Full page
  await page.screenshot({ path: `${OUT}/00-full.png`, fullPage: true });

  // Navbar + Hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/01-navbar-hero.png`, fullPage: false });

  // Sections progressively
  const steps = [900, 1800, 2700, 3600, 4500, 5400];
  const names = ['02-photo-strip-diferenciais','03-hero-sec-depoimentos','04-numeros-modalidades','05-processo','06-faq','07-galeria-manifesto'];

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] > totalHeight) break;
    await page.evaluate((y) => window.scrollTo(0, y), steps[i]);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/${names[i]}.png`, fullPage: false });
  }

  // Footer
  await page.evaluate((h) => window.scrollTo(0, h), totalHeight);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/08-footer.png`, fullPage: false });

  console.log('Total height:', totalHeight, 'px');
  await browser.close();
})();
