// import puppetteer from 'puppeteer';

// jest.setTimeout(30000);

// describe('valid card', () => {
//   let browser = null;
//   let page = null;
//   const baseUrl = 'http://localhost:9000';

//   beforeAll(async () => {
//     browser = await puppetteer.launch({
//       headless: false,
//       slowMo: 100,
//       devtools: true,
//     });
//     page = await browser.newPage();
//   });

//   afterAll(async () => {
//     await browser.close();
//   });

//   test('should add .cardvisible class for valid card', async () => {
//     await page.goto(baseUrl);
//     const form = await page.$('form');
//     const input = await form.$('input');
//     await input.type('5555555555554444');
//     const submit = await form.$('button');
//     submit.click();
//     await page.waitFor('[data-title= master].cardvisible');
//   });
// });
