import {createLinkList,reverseLinkList,LinkListNode} from '@/utils/dataStructure/reverse-linkList'

describe("反转数组", () => {
  it("单个元素", () => {
    const node:LinkListNode = {value:100}
    expect(reverseLinkList(node)).toEqual({value:100});
  });
  it("多个元素", () => {
    const arr = [100,200,300]
    const list:LinkListNode = createLinkList(arr)
    expect(reverseLinkList(list)).toEqual(createLinkList(arr.reverse()));
  });
});
