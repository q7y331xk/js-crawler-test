import puppeteer from "puppeteer";
import * as cheerio from 'cheerio';
import fs from 'fs';

const TARGET_URL = 'https://korean.alibaba.com/p-detail/Brazilian-60437753329.html?spm=a27aq.rank_detail.6404617500.2.4c3039d2hlSgXS&cardType=101001155&cardId=10001220831';

/**
 * web-driver 설치랑, 한글 지원 폰트 설치로 보여지는건 개선가능, 근데 크롤링 개발할때 필요한거고, 실제 돌릴떄는 안보이게 함(headless: true)
 * 아마 속도도 개선 될듯?
 */

jest.setTimeout(60 * 1000)
describe('My First Test ',() => {
  test('Launch the Broswer', async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto(TARGET_URL)
    const html = await page.content();

    const $ = cheerio.load(html);
    const srcs: string[] = [];
    $('img').map((i, el) => {
      el.attributes.map((c) =>{
        if (c.name === 'data-src') {
          const src = c.value.replace('//', '');
          srcs.push(src);
        }
      })
    });
    fs.writeFileSync('./persistence/img-srcs', srcs.join('\n'))
    expect(srcs.length > 0).toBe(true);
    expect(srcs[0]).toMatch('s.alicdn.com');
  })
})