/**
 * 数组扁平化
 */
import { flatenDeep1, flatenDeep2 } from '@/utils/dataStructure/arrayFlaten';

describe("数组扁平化", () => {
  it("空数组", () => {
    expect(flatenDeep2([])).toEqual([]);
  });
  it("非嵌套数组", () => {
    expect(flatenDeep2([1,2,3])).toEqual([1,2,3]);
  });
  it("一级嵌套", () => {
    expect(flatenDeep2([1,2,[10,20],3])).toEqual([1,2,10,20,3]);
  });
  it("二级嵌套", () => {
    expect(flatenDeep2([1,2,[10,[100,200],20],3])).toEqual([1,2,10,100,200,20,3]);
  });
  it("三级嵌套", () => {
    expect(flatenDeep1([1,2,[10,[100,['a',[{x:9}],'b'],200],20],3])).toEqual([1,2,10,100,'a',{x:9},'b',200,20,3]);
  });
});
