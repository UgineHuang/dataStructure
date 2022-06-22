import {addBatchNo} from '@/utils/WMS/batch'

describe("批次记录", () => {
  it("情况1", () => {
    const res = addBatchNo('FH123',null)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':1}));
  });
  it("情况2", () => {
    const batchInfo = `{"FH123":1}`
    const res = addBatchNo('FH123',batchInfo)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':2}));
  });
  it("情况3", () => {
    const batchInfo = `{"FH123":2}`
    const res = addBatchNo('FH111',batchInfo)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':2,'FH111':1}));
  });
});
