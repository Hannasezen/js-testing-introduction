const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

//unit tests
test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
  /*const text1 = generateText('', null);
  expect(text1).toBe(' (null years old)');
  const text2 = generateText();
  expect(text2).toBe('undefined (undefined years old)');*/
});

//inegration tests
test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

//end2end or UI tests
test('shoild create element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    //slowMo: 80,
    //args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///D:/anya/js/tests/max/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '29');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Anna (29 years old)');
}, 10000);
