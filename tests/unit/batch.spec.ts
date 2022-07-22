import {deleteBatchNo} from '@/utils/WMS/batch'

describe("批次记录", () => {
  it("情况1", () => {
    const res = deleteBatchNo(null)
    console.log(res)
    expect(res).toBe(null);
  });
  it("情况2", () => {
    const batchInfo = `{"FH123":1}`
    const res = deleteBatchNo(batchInfo)
    console.log(res)
    expect(res).toBe(null);
  });
  it("情况3", () => {
    const batchInfo = `{"FH123":2}`
    const res = deleteBatchNo(batchInfo)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':1}));
  });
  it("情况4", () => {
    const batchInfo = `{"FH123":2,"FH1234":1}`
    const res = deleteBatchNo(batchInfo)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':2}));
  });
  it("情况5", () => {
    const batchInfo = `{"FH123":2,"FH1234":1,"empty":5}`
    const res = deleteBatchNo(batchInfo)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':2,'empty':5}));
  });
  it("情况6", () => {
    const batchInfo = `{"FH123":2,"FH1234":2,"empty":5}`
    const res = deleteBatchNo(batchInfo)
    console.log(res)
    expect(res).toBe(JSON.stringify({'FH123':1,'FH1234':2,'empty':5}));
  });
});
