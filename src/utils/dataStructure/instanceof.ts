/**
 * 实现instanceof
 */
export function myInstanceof(instance:any,origin:any) {
  if(instance===null) return false
  const type = typeof instance
  if(type !== 'object' && type !=='function') {
    // 值类型
    return false
  }
  let tempInstance = instance
  while(tempInstance) {
    debugger
    if(tempInstance.__proto__ === origin.prototype) {
      return true
    }
    // 未匹配
    tempInstance = tempInstance.__proto__
  }
  return false
}
class Foo{}
const f = new Foo()
console.log(myInstanceof(f,Object))

