/**
 * 实现 new
 */
export function customNew<T>(constructor: Function,...args:any[]):T {
  // 创建一个空对象，继承constructor原型
  const obj = Object.create(constructor.prototype)
  // 将obj作为this，执行constructor，传入参数
  constructor.apply(obj,args)
  // 返回obj
  return obj
}


class Foo{
  name: string
  city: string
  n:number

  constructor(name:string,n:number) {
    this.name = name
    this.city = '北京'
    this.n = n
  }
  getName() {
    return this.name
  }
}

// const f = new Foo('sss',100)
const f = customNew<Foo>(Foo,'aaa',100)
console.log(f)
console.log(f.getName())

