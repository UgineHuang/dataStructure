import { getKthValue,TreeNode } from '@/utils/dataStructure/binary-search-tree';

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
describe("二分查找", () => {
  it("正常情况", () => {
    expect(getKthValue(BST,3)).toBe(4);
  });
  it("k不再正常范围内", () => {
    expect(getKthValue(BST,0)).toBeNull();
    expect(getKthValue(BST,100)).toBeNull();
  });
});
