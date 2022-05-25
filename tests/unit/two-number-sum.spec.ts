import {findTwoNumbers2} from '@/utils/dataStructure/two-number-sum'

describe("两数之和", () => {
  it("正常情况", () => {
    const arr = [1,2,4,7,11,15]
    const target = 15
    expect(findTwoNumbers2(arr,target)).toEqual([4,11]);
  });
  it("空数组", () => {
    expect(findTwoNumbers2([],15)).toEqual([]);
  });
  it("找不到", () => {
    expect(findTwoNumbers2([1,2,4,7,11,15],100)).toEqual([]);
  });
});
