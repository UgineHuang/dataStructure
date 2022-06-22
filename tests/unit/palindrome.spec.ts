import { findPalindrome3 } from '@/utils/dataStructure/palindrome';

describe("快速排序", () => {
  it("正常情况", () => {
    expect(findPalindrome3(200).length).toBe(28);
  });
  it("max小于等于0", () => {
    expect(findPalindrome3(0)).toEqual([]);
  });

});

