/**
 * 用链表实现队列
 */
 export interface LinkListNode{
  value: number,
  next: LinkListNode | null
}

export class QueueWithList {
  private len = 0
  private head:LinkListNode|null = null
  private tail:LinkListNode|null = null
  /**
   * 入队
   */
  add(n:number) {
    const newNode:LinkListNode = {
      value: n,
      next: null
    }
    if(!this.head) {
      this.head = newNode
    }
    if(this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.len++
  }
   /**
   * 出队
   */
  delete():number|null {
    const headNode = this.head
    if(!headNode) return null
    if(this.len<0) return null
    // 取值
    const value = headNode.value
    this.head = headNode.next
    this.len--
    return value
  }
  /**
   * 长度单独存储，不能遍历获取，否则时间复杂度较高O(n)
   */
  get length(): number {
    return this.len
  }
}
