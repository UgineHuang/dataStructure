/**
 * 将一个数组旋转k步
 * */
 export function rotate1(arr:number[],k:number): number[] {
  const length = arr.length
  if(!k && length===0) return arr
  // k小于数组长度时，step=k;k等于数组长度时，step=0;k大于数组长度时，step=k%length
  const step = Math.abs(k%length)
  for(let i = 0; i<step;i++) {
    const n = arr.pop()
    if(n) {
      arr.unshift(n)
    }
  }
  return arr
}

export function rotate2(arr:number[],k:number): number[] {
  const length = arr.length
  if(!k && length===0) return arr
  // k小于数组长度时，step=k;k等于数组长度时，step=0;k大于数组长度时，step=k%length
  const step = Math.abs(k%length)
  if(step) {
    const part1 = arr.slice(-step)
    const part2 = arr.slice(0,length-step)
    return part1.concat(part2)
  } else {
    return arr
  }
}

