import axios from 'axios';
import * as cheerio from 'cheerio';

const TARGET_URL = 'https://korean.alibaba.com/p-detail/Brazilian-60437753329.html?spm=a27aq.rank_detail.6404617500.2.4c3039d2hlSgXS&cardType=101001155&cardId=10001220831';
const H1_RESULT = '브라질 머리 hd 레이스 정면 가발, 흑인 여성을 위한 자연적인 사람의 모발 가발, KBL pre pluck 금발 사람의 모발 레이스 정면 가발 납품업자<span id="title-tag"></span'

const html = '<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>'

describe('html-parsing', () => {
  test('should be Apple', () => {
    const $ = cheerio.load(html);
    const test = $('li.apple', 'ul#fruits').text();
    expect(test).toBe('Apple');
  })

  test(`h1 tag in div#container with TARGET_URL = ${TARGET_URL}`, async () => {
    const { data } = await axios.get(TARGET_URL);
    const $ = cheerio.load(data);
    const h1 = $('h1', 'div#container').html();
    expect(h1).toMatch(H1_RESULT);
  })
})
