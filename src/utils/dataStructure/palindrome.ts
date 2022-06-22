/**
 * 查询1-max的所有对称数-数组反转
 */
export function findPalindrome1(max:number):number[] {
  const res: number[] = []
  if(max<=0) return res
  for(let i=1;i<=max;i++) {
    const s = i.toString()
    if(s === s.split('').reverse().join('')) {
      res.push(i)
    }
  }
  return res
}

/**
 * 查询1-max的所有对称数-字符串前后比较
 */
export function findPalindrome2(max:number):number[] {
  const res: number[] = []
  if(max<=0) return res
  for(let i=1;i<=max;i++) {
    const s = i.toString()
    const length = s.length
    // 字符串首位比较
    let flag = true
    let startIndex = 0
    let endIndex = length-1
    while(startIndex<endIndex) {
      if(s[startIndex]!== s[endIndex]) {
        flag = false
        break
      } else {
        startIndex++
        endIndex--
      }
    }
    if(flag) res.push(i)
  }
  return res
}


/**
 * 查询1-max的所有对称数-翻转数字
 */
 export function findPalindrome3(max:number):number[] {
  const res: number[] = []
  if(max<=0) return res
  for(let i=1;i<=max;i++) {
    let n = i
    let rev = 0 //翻转数
    while(n>0) {
      rev = rev*10+n%10
      n = Math.floor(n/10)
    }
    if(i===rev) res.push(i)
  }
  return res
}
