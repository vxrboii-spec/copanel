const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  await page.goto('https://simplebooklet.com/cpanel', { waitUntil: 'networkidle0' });

  await page.screenshot({ path: 'preview.png' });

  await browser.close();
})();
