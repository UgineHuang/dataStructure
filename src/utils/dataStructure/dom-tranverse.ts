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
 * 深度优先遍历
 * @param root
 */
//  function depthFirstTraverse(root:Node) {
//   visitNode(root)
//   const childNodes = root.childNodes
//   if(childNodes.length) {
// 	  childNodes.forEach(child=>{
// 		  depthFirstTraverse(child) // 递归
// 	  })
//   }
// }

/**
 * 广度优先遍历 需要用到栈结构
 */
// function breadthFirstTranverse(root:Node) {
//   const queue:Node[] = [] //数组VS链表的性能
//   //  根节点入队
//   queue.unshift(root)
//   while(queue.length>0) {
//     const node = queue.pop()
//     if(node){
//       visitNode(node)
//       const childNodes = node.childNodes
//       childNodes.forEach(child=>{
//         queue.unshift(child)
//       })
//     }
//   }
// }

function breadthFirstTranverse1(root:Node) {
  const queue:Node[] = [] //数组VS链表的性能1
  //  根节点入队
  queue.unshift(root)
  while(queue.length>0) {
    const  curNode = queue.pop()
    if(!curNode) break
    visitNode(curNode)
    // 子节点入队
    const childNodes = curNode.childNodes
    if(childNodes.length) {
      childNodes.forEach(child=>queue.unshift(child))
    }
  }
}

const box = document.getElementById('box')
console.log(box?.children)
console.log(box?.childNodes)
if(box !== null)  breadthFirstTranverse1(box)
