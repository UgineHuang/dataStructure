/**
 * @description 两个栈 - 实现一个队列
 */
export class MyQueue {
  private stack1:number[] = []
  private stack2:number[] = []

  /**
   * 入队
   * @param n
   */
  add(n:number) {
    this.stack1.push(n)
  }
  /**
   * 出队
   * @returns
   */
  delete():number|null {
    let res:any = null
    const stack1 = this.stack1
    const stack2 = this.stack2
    while(stack1.length) {
      const n = stack1.pop()
      if(n!=null) {
        stack2.push(n)
      }
    }
    res = stack2.pop()
    while(stack2.length) {
      const n = stack2.pop()
      if(n!=null) {
        stack1.push(n)
      }
    }
    return res || null
  }
  get length():number {
    return this.stack1.length
  }
}
