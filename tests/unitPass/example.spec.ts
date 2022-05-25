import {rotate1,rotate2} from '@/utils/dataStructure/rotateN'

describe("数组旋转", () => {
  it("正常情况", () => {
    expect(rotate2([1,2,3,4,5,6,7],3)).toEqual([5,6,7,1,2,3,4]);
  });
  it("数组为空", () => {
    expect(rotate2([],3)).toEqual([]);
  });
  it("k不为数字", () => {
  // @ts-ignore
    expect(rotate2([1,2,3,4,5,6],'abc')).toEqual([1,2,3,4,5,6]);
  });
  it("k为0", () => {
      expect(rotate2([1,2,3,4,5,6],0)).toEqual([1,2,3,4,5,6]);
    });
});
