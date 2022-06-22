import {addBatchNo} from '@/utils/WMS/batch'

describe("批次记录", () => {
  it("正常情况", () => {
    const res = addBatchNo('FH123',null)
    expect(res).toBe(JSON.stringify({'FH123':1}));
  });
});
