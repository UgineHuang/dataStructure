const http = require('http')
const fork = require('child_process').fork

const server = http.createServer((req,res)=>{
  if(req.url === '/get-sum') {
    console.info('主进程 id',process.pid)
    // 开启子进程
    const computedProcess = fork('./src/views/nodeJS/computed.js')
    computedProcess.send('开始计算')
    computedProcess.on('message',data=>{
      console.info('主进程接受到的信息',data)
    res.end('sum is' + data)
    })
    computedProcess.on('close',()=>{
      console.info('子进程因报错而退出')
      computedProcess.kill()
      res.end('error')
    })
  }
})
server.listen(3000,()=>{
  console.info('localhost:3000')
})


