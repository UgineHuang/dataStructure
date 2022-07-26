/**
 * 获取数据类型
 */
 export function getType(x:any):string{
  const originType =Object.prototype.toString.call(x)
  const spaceIndex = originType.indexOf(' ')
  const type = originType.slice(spaceIndex+1,-1)
  return type.toLowerCase()
}
// export function getType(x:any):string{
//   // 通过typeof 判断值类型和function
//   // 其余的'object','map','array'通过 instanceof 枚举
//   // 缺点：忽略某些类型 或者 新增类型时需要修改代码

//   if(typeof x==='object') {
//     if(x instanceof Map) return 'map'
//     if(x instanceof Array) return 'array'
//     if(x instanceof RegExp) return 'regexp'
//     return 'object'
//   } else {
//     return typeof x
//   }
// }
