/**
 * 快速排序使用splice
 */
export function quickSort1(arr:number[]):number[] {
  const length = arr.length
  if(length===0) return arr
  const midIndex = Math.floor(length/2)
  const midValue = arr.splice(midIndex,1)[0]
  const left:number[]=[]
  const right:number[]=[]
// 注意：不能直接使用length，因为arr的splice已修改原数组
  for(let i=0; i<arr.length;i++) {
    const n = arr[i]
    if(arr[i]<midValue) {
      left.push(n)
    } else {
      right.push(n)
    }
  }
  return quickSort1(left).concat([midValue],quickSort1(right))
}

/**
 * 快速排序使用slice
 */
export function quickSort2(arr:number[]):number[] {
  const length = arr.length
  if(length===0) return arr
  const midIndex = Math.floor(length/2)
  const midValue = arr.slice(midIndex,midIndex+1)[0]
  const left:number[]=[]
  const right:number[]=[]
  for(let i=0; i<length;i++) {
    if(i!==midIndex) {
      const n = arr[i]
      if(arr[i]<midValue) {
        left.push(n)
      } else {
        right.push(n)
      }
    }
  }
  return quickSort1(left).concat([midValue],quickSort1(right))
}
