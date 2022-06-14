/**
 * 将数组中的0移动到末尾，其他顺序不变，只在原数组上操作
 */

/**
 * 数组原生api splice实现
 * @param arr
 * @returns
 */
export function moveZero1(arr:number[]):void {
  const length = arr.length
  if(length===0) return
  let zeroLength = 0
  for(let i = 0;i<length-zeroLength;i++) {
    if(arr[i]===0) {
      arr.push(0)
      arr.splice(i,1)
      i--
      zeroLength++
    }
  }
}
/**
 * 双指针实现
 * 找到第一个为0的索引，及其后面最近一个不为0的索引，两者进行交换，重复这一操作
 * @param arr
 * @returns
 */

export function moveZero3(arr:number[]):void {
  const length = arr.length
  if(length===0) return
  let i = 0
  while(i<length) {
    if(arr[i]===0 && i+1<length) {
      for(let k=i+1;k<length;k++) {
        if(arr[k]!==0){
            arr[i] = arr[k]
            arr[k] = 0
            i++
            if(k===length-1) i=length
            break
        }
        if(k===length-1) i=length
      }
    }else {
      i++
    }
  }
}
/**
 * 双指针实现-更为简洁的思路
 * 遍历数组，数组中的首个0元素作为标的，与最近不为0的元素进行位置交换
 * @param arr
 * @returns
 */
export function moveZero2(arr:number[]):void {
  const length = arr.length
  if(length===0) return
  let i
  let j = -1 // 指向第一个0
  for(i=0;i<length;i++) {
  debugger
    if(arr[i]===0) {
      // 第一个0
      if(j<0) {
        j=i
      }
    }
    if(arr[i] !== 0 && j>=0) {
      // 交换
      const n = arr[j]
      arr[j] = arr[i]
      arr[i] = n
      j++
    }
  }
}
