import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REFERENCE_HTML = path.join(ROOT, 'reference', 'reference.html');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto('file://' + REFERENCE_HTML, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    function summarize(el) {
      if (!el) return null;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        text: (el.textContent || '').trim().slice(0, 90),
        rect: { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) },
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        background: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        borderRadius: s.borderRadius,
        border: s.border,
        textAlign: s.textAlign,
        textTransform: s.textTransform,
      };
    }

    const result = {};

    // Headings
    const h1 = document.querySelector('h1');
    result.h1 = summarize(h1);

    const h2s = Array.from(document.querySelectorAll('h2')).slice(0, 5);
    result.h2s = h2s.map(summarize);

    const h3s = Array.from(document.querySelectorAll('h3')).slice(0, 5);
    result.h3s = h3s.map(summarize);

    const ps = Array.from(document.querySelectorAll('p')).slice(0, 6);
    result.paragraphs = ps.map(summarize);

    // Buttons / links that look like CTA pills
    const allLinks = Array.from(document.querySelectorAll('a'));
    const ctas = allLinks.filter(a => {
      const s = getComputedStyle(a);
      const r = a.getBoundingClientRect();
      return parseFloat(s.borderRadius) > 10 && r.width > 80 && r.width < 400 && r.height > 30 && r.height < 80;
    }).slice(0, 6);
    result.ctas = ctas.map(summarize);

    // Body / html
    result.body = (() => {
      const b = document.body;
      const s = getComputedStyle(b);
      return {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        background: s.backgroundColor,
        color: s.color,
        width: b.clientWidth,
      };
    })();

    // Find main containers — direct children of body with widest width
    const candidates = Array.from(document.querySelectorAll('div, section, main')).slice(0, 200);
    const widths = candidates
      .map(el => ({ el, w: el.getBoundingClientRect().width }))
      .filter(o => o.w > 1100 && o.w <= 1440);
    result.likelyContainers = widths.slice(0, 5).map(o => summarize(o.el));

    // Find section blocks — look for elements with significant padding
    const sectionLike = candidates
      .map(el => {
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return { el, padTop: parseFloat(s.paddingTop), padBot: parseFloat(s.paddingBottom), h: r.height, w: r.width };
      })
      .filter(o => o.padTop > 40 && o.w > 1000)
      .sort((a, b) => b.h - a.h)
      .slice(0, 6);
    result.sections = sectionLike.map(o => summarize(o.el));

    // Navbar
    const nav = document.querySelector('nav') || document.querySelector('header');
    result.navbar = summarize(nav);

    // First image cards in hero strip
    const imgs = Array.from(document.querySelectorAll('img')).slice(0, 8);
    result.images = imgs.map(img => {
      const s = getComputedStyle(img);
      const r = img.getBoundingClientRect();
      return {
        w: Math.round(r.width),
        h: Math.round(r.height),
        radius: s.borderRadius,
        objectFit: s.objectFit,
      };
    });

    return result;
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
