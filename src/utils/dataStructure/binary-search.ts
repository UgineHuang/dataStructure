/**
 * 二分查找
 */

/**
 * 循环
 * @param arr
 * @param target
 */
export function binarySearch1(arr:number[],target:number):number{
  const length = arr.length
  if(!length) return -1
  let startIndex = 0 //起始位置
  let endIndex = length-1 //结束位置
  while(startIndex<endIndex) {
    const midIndex = Math.floor((startIndex+endIndex)/2)
    const midValue = arr[midIndex]
    if(target<midValue) {
      // 继续 左侧 查找
      endIndex = midIndex-1
    } else if(target>midValue) {
      // 继续 右侧 查找
      startIndex = midIndex+1
    } else {
      return midIndex
    }
  }
  return -1
}

/**
 * 递归
 * @param arr
 * @param target
 * @param startIndex
 * @param endIndex
 */
export function binarySearch2(arr:number[],target:number,startIndex?:number,endIndex?:number):number{
  const length = arr.length
  if(!length) return -1
  if(!startIndex) startIndex = 0
  if(!endIndex) endIndex = length-1
  if(startIndex>endIndex) return -1
  const midIndex = Math.floor((startIndex+endIndex)/2)
  const midValue = arr[midIndex]
  if(target<midValue) {
    return binarySearch2(arr,target,startIndex,midIndex-1)
  } else if(target>midValue) {
    return binarySearch2(arr,target,midIndex+1,endIndex)
  } else {
    return midIndex
  }
  return -1
}
