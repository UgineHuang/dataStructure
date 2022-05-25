import { binarySearch1, binarySearch2 } from '@/utils/dataStructure/binary-search';

describe("二分查找", () => {
  it("正常情况", () => {
    const arr = [10,20,30,40,50]
    const target = 40
    const index = binarySearch1(arr,target)
    expect(index).toBe(3);
  });
  it("空数组", () => {

    expect(binarySearch1([],30)).toBe(-1);
  });
  it("找不到target", () => {
    const arr = [10,20,30,40,50]
    const target = 5
    const index = binarySearch1(arr,target)
    expect(index).toBe(-1);
  });
});
