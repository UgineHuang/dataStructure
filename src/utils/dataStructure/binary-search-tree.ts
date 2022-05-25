export interface TreeNode {
  value: number,
  left: TreeNode | null,
  right:TreeNode | null
}

const arr:number[] = []

/**
 * 二叉树前序遍历
 * @param node
 */
 export function preOrderTranverse(node:TreeNode|null) {
  if(!node) return
  console.log(node.value)
  preOrderTranverse(node.left)
  preOrderTranverse(node.right)
}

/**
 * 二叉树中序遍历
 * @param node
 */
function inOrderTranverse(node:TreeNode|null) {
  if(!node) return
  inOrderTranverse(node.left)
  arr.push(node.value)
  inOrderTranverse(node.right)
}

/**
 * 二叉树后序遍历
 * @param node
 */
export function postOrderTranverse(node:TreeNode|null) {
  if(!node) return
  postOrderTranverse(node.left)
  postOrderTranverse(node.right)
  console.log(node.value)
}

/**
 * 寻找BST中的第k个小值
 * @param tree
 * @param k
 */
 export function getKthValue(tree:TreeNode,k:number) {
  inOrderTranverse(tree)
  return arr[k-1] || null
}

const BST:TreeNode = {
  value: 5,
  left: {
    value:3,
    left: {
      value:2,
      left:null,
      right:null
    },
    right: {
      value:4,
      left:null,
      right:null
    }
  },
  right:{
    value:7,
    left:{
      value:6,
      left:null,
      right:null
    },
    right:{
      value:8,
      left:null,
      right:null
    }
  }
}

// console.log('前序遍历')
// preOrderTranverse(tree)
// console.log('中序遍历')
// inOrderTranverse(tree)
// console.log('后序遍历')
// postOrderTranverse(tree)

console.log(getKthValue(BST,3))
