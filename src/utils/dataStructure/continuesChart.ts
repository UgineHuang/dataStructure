export interface Result {
  char: string|null,
  length: number
}
/**
 *
 * @param str 嵌套循环 求连续最多的字符和次数 O(n)
 * @returns
 */
export function findContinuesChart1(str:string):Result {
  const res:Result = {
    char: null,
    length:0
  }
  const length = str.length
  if(length===0) return res

  let tempLength = 0 // 临时记录当前连续字符的长度
  for(let i=0;i<length;i++) {
    tempLength = 0
    for(let j=i;j<length;j++) {
      if(str[i]===str[j]) {
        tempLength++
      }
      if(str[i]!==str[j] || j === length-1) {
        if(tempLength>res.length) {
          res.char = str[i]
          res.length = tempLength
        }
        if(i<length-1) {
          i=j-1
        }
        break
      }
    }
  }
  return res
}

/**
 *
 * @param str 双指针 O(n)
 * @returns
 */
export function findContinuesChart2(str:string):Result {
  const res:Result = {
    char: null,
    length:0
  }
  const length = str.length
  if(length===0) return res

  let tempLength = 0 // 临时记录当前连续字符的长度
  let i = 0
  let j = 0
  for(i;i<length;i++) {
    if(str[i]===str[j]) {
      tempLength++
    }
    if(str[i]!==str[j] || i ===length-1) {
      if(tempLength>res.length) {
        res.char = str[j]
        res.length = tempLength
      }
      tempLength = 0
      if(i<length-1) {
        j = i
        i--
      }
    }
  }

  return res
}
