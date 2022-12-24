import * as puppeteer from 'puppeteer'

const open = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  setTimeout(() => {}, 3000)
  await browser.close(); // ➐ 작업이 완료되면 브라우저 종료
}

open();