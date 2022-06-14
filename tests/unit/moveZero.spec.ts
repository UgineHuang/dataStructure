import {moveZero3} from '@/utils/dataStructure/moveZero'

describe("移动0到数组末尾", () => {
  it("正常情况", () => {
    const arr = [1,0,3,4,0,0,0,11,13]
    moveZero3(arr)
    expect(arr).toEqual([1,3,4,11,13,0,0,0,0]);
  });
  it("没有0的情况", () => {
    const arr = [1,3,4,11,13]
    moveZero3(arr)
    expect(arr).toEqual([1,3,4,11,13]);
  });
  it("全是0的情况", () => {
    const arr = [0,0,0,0,0]
    moveZero3(arr)
    expect(arr).toEqual([0,0,0,0,0]);
  });

});


