/**
 * 给一个数组，找出其中和为n的两个元素
 */

/**
 * 嵌套循环-不可用O(n^2)
 * @param arr
 * @param n
 */
export function findTwoNumbers1(arr:number[],n:number):number[] {
  const  res:number[] = []
  const length = arr.length
  if(length===0) return res
  for(let i=0;i<length-1;i++) {
    const n1 = arr[i]
    let flag = false
    for(let j=i+1;j<length-1;j++) {
      const n2 = arr[j]
      if(n1+n2===n) {
        res.push(n1)
        res.push(n2)
        flag = true
      }
    }
    if(flag) break
  }
  return res
}
/**
 * 查找和为n的两个数O(n)
 * @param arr
 * @param n
 */
export function findTwoNumbers2(arr:number[],n:number):number[]{
  const res:number[] = []
  const length = arr.length
  if(length===0) return res
  let i = 0
  let j = length-1
  while(i<j){
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1+n2
    if(sum>n) {
      j--
    } else if(sum<n) {
      i++
    } else {
      res.push(arr[i])
      res.push(arr[j])
      break
    }
  }
  return res
}
