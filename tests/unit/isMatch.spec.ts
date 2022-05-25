import {MatchBrackey} from '@/utils/dataStructure/isMatch'

describe("字符串括号匹配", () => {
  it("正常情况", () => {
    expect(MatchBrackey('{a[b(c)d]e}f')).toBe(true);
  });
  it("不匹配", () => {
    expect(MatchBrackey('{a[b[(c)d]e}f')).toBe(false);
  });
  it("顺序不一致", () => {
    expect(MatchBrackey('{a[b(c)d}e]f')).toBe(false);
  });
  it("空字符串", () => {
    // @ts-ignore
      expect(MatchBrackey('')).toBe(true);
    });
  it("非字符串", () => {
  // @ts-ignore
    expect(MatchBrackey(22)).toBe(false);
  });
});
