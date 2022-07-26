/**
 * dom树的深度遍历
 */
function visitNode(n:Node) {
  if(n instanceof Comment) {
    // 注释
    console.info('Commend node ---',n.textContent)
  }
  if(n instanceof Text) {
    // 文本
    console.info('Text node ---',n.textContent)
  }
  if(n instanceof HTMLElement ) {
    // element
    console.info('Element node ---',`<${n.tagName.toLowerCase()}>`)
  }
}
/**
 * 深度优先遍历-递归
 * @param root
 */
//  function depthFirstTraverse1(root:Node) {
//   visitNode(root)
//   const childNodes = root.childNodes
//   if(childNodes.length) {
// 	  childNodes.forEach(child=>{
// 		  depthFirstTraverse1(child) // 递归
// 	  })
//   }
// }
/**
 * 深度优先遍历-栈
 * @param root
 */
 function depthFirstTraverse2(root:Node) {
  const stack:Node[] = []
  // 根节点入栈
  stack.push(root)
  while(stack.length>0) {
    const curNode = stack.pop()
    if(!curNode) break
    visitNode(curNode)
    const childNodes = curNode.childNodes
    if(childNodes.length) {
      Array.from(childNodes).reverse().forEach(child=>stack.push(child))
    }
  }
}

/**
 * 广度优先遍历 需要用到栈结构
 */
// function breadthFirstTranverse1(root:Node) {
//   const queue:Node[] = [] //数组VS链表的性能1
//   //  根节点入队
//   queue.unshift(root)
//   while(queue.length>0) {
//     const  curNode = queue.pop()
//     if(!curNode) break
//     visitNode(curNode)
//     // 子节点入队
//     const childNodes = curNode.childNodes
//     if(childNodes.length) {
//       childNodes.forEach(child=>queue.unshift(child))
//     }
//   }
// }

const box = document.getElementById('box')
// console.log(box?.children)
// console.log(box?.childNodes)
if(box !== null)  depthFirstTraverse2(box)
