/**
 * 自定义instanceof
 */
 import { myInstanceof } from '@/utils/dataStructure/instanceof';

 describe("自定义instanceof", () => {
  it("null undefined", () => {
    expect(myInstanceof(null,Object)).toBe(false);
    expect(myInstanceof(undefined,Object)).toBe(false);
  });
  it("值类型", () => {
    expect(myInstanceof('aaa',String)).toBe(false);
    expect(myInstanceof(100,Number)).toBe(false);
  });
  it("引用类型", () => {
    expect(myInstanceof([],Array)).toBe(true);
    expect(myInstanceof({},Object)).toBe(true);
    expect(myInstanceof([],Object)).toBe(true);
    expect(myInstanceof({},Array)).toBe(false);
  });
  it("函数", () => {
    function fn() {console.log('sss')}
    expect(myInstanceof(fn,Function)).toBe(true);
    expect(myInstanceof(fn,Object)).toBe(true);

  });
  it("自定义", () => {
    class Foo{}
    const f = new Foo()
    expect(myInstanceof(f,Foo)).toBe(true);
    expect(myInstanceof(f,Object)).toBe(true);
  });
 })
