/**
 * 获取数据类型
 */
 import { getType } from '@/utils/dataStructure/get-type';

 describe("获取数据类型", () => {
    it("null", () => {
      expect(getType(null)).toBe('null');
    });
    it("undefined", () => {
      expect(getType(undefined)).toBe('undefined');
    });
    it("number", () => {
      expect(getType(100)).toBe('number');
      expect(getType(NaN)).toBe('number');
      expect(getType(Infinity)).toBe('number');
      expect(getType(-Infinity)).toBe('number');
    });
    it("string", () => {
      expect(getType('sss')).toBe('string');
    });

    it("boolean", () => {
      expect(getType(true)).toBe('boolean');
    });
    it("Symbol", () => {
      expect(getType(Symbol())).toBe('symbol');
    });
    it("bigint", () => {
      expect(getType(BigInt(100))).toBe('bigint');
    });
    it("object", () => {
      expect(getType({x:9})).toBe('object');
    });
    it("array", () => {
      expect(getType([1,2,3])).toBe('array');
    });
    it("function", () => {
      expect(getType(()=>{console.info()})).toBe('function');
      expect(getType(class Foo{})).toBe('function');

    });
    it("map", () => {
      expect(getType(new Map())).toBe('map');
    });
    it("weakmap", () => {
      expect(getType(new WeakMap())).toBe('weakmap');
    });
    it("set", () => {
      expect(getType(new Set())).toBe('set');
    });
    it("weakset", () => {
      expect(getType(new WeakSet())).toBe('weakset');
    });
    it("date", () => {
      expect(getType(new Date())).toBe('date');
    });
    it("regexp", () => {
      expect(getType(new RegExp('/^sss/'))).toBe('regexp');
    });
    it("error", () => {
      expect(getType(new Error())).toBe('error');
    });
    it("promise", () => {
      expect(getType(Promise.resolve())).toBe('promise');
    });
 });
