import { format2 } from '@/utils/dataStructure/thousand-format';

describe("数字千分位格式化", () => {
  it("正常情况", () => {
    expect(format2(123400323)).toBe('123,400,323');
  });
  it("小于千位", () => {
    expect(format2(0)).toBe('0');
    expect(format2(10)).toBe('10');
  });
  it("非整数", () => {
    expect(format2(123400.323)).toBe('123,400');
  });
});
