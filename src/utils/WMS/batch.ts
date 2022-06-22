export function addBatchNo(batchNo:string, batchInfo:string|null) {
  if (!batchNo && !batchInfo) return null
  if (batchInfo) {
    const batchObj = JSON.parse(batchInfo)
    let isInObj = false
    for (const batch in batchObj) {
      if (batch === batchNo) {
        isInObj = true
        batchObj[batch]++
      }
    }
    if (!isInObj) {
      batchObj[batchNo] = 1
    }
    return JSON.stringify(batchObj)
  } else {
    return JSON.stringify({ [batchNo]: 1 })
  }
}
