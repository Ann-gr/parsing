const { chromium } = require('playwright');
const path = require('path');
const dirName = path.join(__dirname, './screenshots');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos'
    }
  });
  // Open new page
  const page = await context.newPage();
  // Go to https://gravernu.ru/
  await page.goto('https://gravernu.ru/');
  await page.screenshot({ path: `${dirName}/mainpage.png`})
  // Click text=Лазерная гравировка
  await page.click('text=Лазерная гравировка');
  await page.screenshot({ path: `${dirName}/laser.png`})
  // assert.equal(page.url(), 'https://gravernu.ru/lazernaya-gravirovka/');
  // Click text=Подарки и сувениры
  await page.click('text=Подарки и сувениры');
  await page.screenshot({ path: `${dirName}/presents.png`})
  // assert.equal(page.url(), 'https://gravernu.ru/lazernaya-gravirovka/podarki-i-suveniryi/');
  // ---------------------
  await context.close();
  await browser.close();
})();