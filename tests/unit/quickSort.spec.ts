import { quickSort1 } from '@/utils/dataStructure/quickSort';

describe("快速排序", () => {
  it("正常情况", () => {
    const arr = [1,6,2,7,3,8,4,9,5]
    expect(quickSort1(arr)).toEqual([1,2,3,4,5,6,7,8,9]);
  });
  it("有负数", () => {
    const arr = [-2,2,-3,1,4,0]
    expect(quickSort1(arr)).toEqual([-3,-2,0,1,2,4]);
  });
  it("相同元素", () => {
    const arr = [2,2,2,2,]
    expect(quickSort1(arr)).toEqual([2,2,2,2,]);
  });
  it("空数组", () => {
    const arr: number[] = []
    expect(quickSort1(arr)).toEqual([]);
  });
});
