export interface LinkListNode{
  value: number,
  next?: LinkListNode
}
/**
 * 反转单向链表，并返回head
 * @param listNode
 */
export function reverseLinkList(listNode:LinkListNode):LinkListNode{
  // 定义三个指针
  let prevNode:LinkListNode|undefined=undefined
  let curNode:LinkListNode|undefined=undefined
  let nextNode:LinkListNode|undefined=listNode
  // 以nextNode为主遍历链表
  while(nextNode) {
    if(curNode && !prevNode) {
      // curNode是首个元素
      delete curNode.next
    }
    if(curNode && prevNode) {
      curNode.next = prevNode
    }
    // 整体移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }
  // 末元素
    curNode!.next = prevNode
  return curNode!
}
/**
 * 根据数组创建单向链表
 * @param arr
 * @returns
 */
export function createLinkList(arr:number[]):LinkListNode {
  const length = arr.length
  if(length===0) throw new Error('arr is empty')

  let curNode: LinkListNode = {
    value: arr[length-1]
  }
  if(length===1) return curNode
  for(let i=length-2;i>=0;i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

