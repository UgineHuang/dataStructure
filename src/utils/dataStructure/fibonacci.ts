/**
 * 斐波那契数列-递归实现
 * 缺点：存在大量的重复计算，n=100时就已经卡了
 */
export function fibonacci1(n:number):number {
  if(n===0) return 0
  if(n===1) return 1
  return fibonacci1(n-1) +fibonacci1(n-2)
}

/**
 * 斐波那契数列-循环实现
 */
 export function fibonacci2(n:number):number {
  if(n===0) return 0
  if(n===1) return 1
  let n1 = 0
  let n2 = 1
  let res = 0
  for(let i= 1;i<n;i++) {
    res = n1+n2
    n1 = n2
    n2 = res
  }
  return res
}
