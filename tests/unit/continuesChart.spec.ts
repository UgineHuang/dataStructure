/**
 * 求连续最长字符和次数
 */
 import {  findContinuesChart2 } from '@/utils/dataStructure/continuesChart';

 describe("求连续最长字符和次数", () => {
   it("正常情况", () => {
    const str = 'avcdeeeeee1e1253'
     const res = findContinuesChart2(str)
     expect(res).toEqual({char: 'e',length:6});
   });
   it("空字符串", () => {
    const str = ''
    const res = findContinuesChart2(str)
    expect(res).toEqual({char: null,length:0});
   });
   it("无连续字符", () => {
    const str = 'abcde'
    const res = findContinuesChart2(str)
    expect(res).toEqual({char: 'a',length:1});
   });
   it("全部连续字符", () => {
    const str = 'aaa'
    const res = findContinuesChart2(str)
    expect(res).toEqual({char: 'a',length:3});
  });
 });
