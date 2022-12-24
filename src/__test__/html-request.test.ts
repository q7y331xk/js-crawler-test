import axios from 'axios';

/**
 * target url을 읽어와서, 실제로 제목이 있는지 확인
 */

const TARGET_URL = 'https://korean.alibaba.com/p-detail/Brazilian-60437753329.html?spm=a27aq.rank_detail.6404617500.2.4c3039d2hlSgXS&cardType=101001155&cardId=10001220831';
const TARGET_TITLE = '브라질 머리 hd 레이스 정면 가발, 흑인 여성을 위한 자연적인 사람의 모발 가발, KBL pre pluck 금발 사람의 모발 레이스 정면 가발 납품업자';

describe('html  request', () => {
  test(`crawling with ${TARGET_URL}\nmatch title`, async () => {
    const { data } = await axios.get(TARGET_URL);
    expect(data).toMatch(`${TARGET_TITLE}`);
  })
})