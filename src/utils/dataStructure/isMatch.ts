function isMatch(left:string,right:string): Boolean{
  if(left==='{'&&right==='}') return true
  if(left==='['&&right===']') return true
  if(left==='('&&right===')') return true
  return false
}
/**
 * 判断字符串是否括号匹配
 * @param str
 * @returns
 */
export function MatchBrackey(str:string):Boolean{
  if(typeof str !== 'string') return false
  const length = str.length
  if(length===0) return true
  const stack = []
  const leftSymbols = '{[('
  const rightSymbols = '}])'
  for(let i = 0;i<length;i++) {
    const s = str[i]
    if(leftSymbols.includes(s)){
      stack.push(s)
    } else if(rightSymbols.includes(s)) {
      const top = stack[stack.length-1]
      if(isMatch(top,s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length===0
}
