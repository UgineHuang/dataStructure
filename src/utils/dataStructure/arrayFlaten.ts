/**
 * 数组扁平化-减少一层嵌套
 * @param arr
 * @returns
 */
export function flaten1(arr:any[]):any[] {
  const res:any[] =[]
  arr.forEach(item=>{
    if(Array.isArray(item)){
      item.forEach((n)=>res.push(n))
    } else {
      res.push(item)
    }
  })
  return res
}

export function flaten2(arr:any[]):any[]{
  let res:any[]=[]
  arr.forEach(item=>{
    res = res.concat(item)
  })
  return res
}
/**
 * 数组扁平化-深度扁平化
 * @param arr
 * @returns
 */
export function flatenDeep1(arr:any[]):any[] {
  const res:any[] =[]
  arr.forEach(item=>{
    if(Array.isArray(item)) {
      const flatItem = flatenDeep1(item) // 递归
      flatItem.forEach((n)=>{res.push(n)})
    } else {
      res.push(item)
    }
  })
  return res
}

// export function flatenDeep2(arr:any[],res:any[]):any[] {
//   arr.forEach(item=>{
//     if(Array.isArray(item)) {
//       res = res.concat(flatenDeep2(item,res))
//     } else {
//       res = res.concat(item)
//     }
//   })
//   return res
// }

export function flatenDeep2(arr:any[]):any[] {
  let res:any[]=[]
  arr.forEach(item=>{
    if(Array.isArray(item)) {
      const flatItem = flatenDeep1(item) // 递归
      res = res.concat(flatItem)
    } else {
      res = res.concat(item)
    }
  })
  return res
}
