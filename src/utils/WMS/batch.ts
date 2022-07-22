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

export function deleteBatchNo(batchInfo:string|null) {
  if (!batchInfo) return null
  if (batchInfo) {
    const batchObj = JSON.parse(batchInfo)
    let num = 9999
    let batchNo = '' // 数量最少的批次号
    let count = 0 // 计算共有多少个批次号
   for (const batch in batchObj) {
      count++
      if(batchObj[batch]<num) {
        num = batchObj[batch]
        batchNo = batch
      }
    }
    if(count===1 && num === 1) {
      return null
    } else {
      batchObj[batchNo]--
      if(batchObj[batchNo]===0) delete batchObj[batchNo]
    }
    return JSON.stringify(batchObj)
  } else {
    return null
  }
}

