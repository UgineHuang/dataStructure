import { switchLetterCase2 } from '@/utils/dataStructure/switchLetterCase';

describe("切换字母大小写", () => {
  it("正常情况", () => {
    expect(switchLetterCase2('12AbCdEfG')).toBe('12aBcDeFg');
  });
  it("空字符串", () => {
    expect(switchLetterCase2('')).toBe('');
  });
  it("非字母", () => {
    expect(switchLetterCase2('12好的多喝点')).toBe('12好的多喝点');
  });
});
