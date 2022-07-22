/**
 * 数组扁平化
 */
import { flaten1, flaten2 } from '@/utils/dataStructure/arrayFlaten';

describe("数组扁平化", () => {
  it("空数组", () => {
    expect(flaten2([])).toEqual([]);
  });
  it("非嵌套数组", () => {
    expect(flaten2([1,2,3])).toEqual([1,2,3]);
  });
  it("一级嵌套", () => {
    expect(flaten2([1,2,[10,20],3])).toEqual([1,2,10,20,3]);
  });
  it("二级嵌套", () => {
    expect(flaten2([1,2,[10,[100,200],20],3])).toEqual([1,2,10,[100,200],20,3]);
  });
});
