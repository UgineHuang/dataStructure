const http = require('http')
const cpuCoreLength = require('os').cpus().length
const cluster = require('cluster')

if(cluster.isMaster) {
  for(let i=0;i<cpuCoreLength;i++) {
    cluster.fork() // 开启子进程
  }
  cluster.on('exist', worker =>{
    console.info('子进程退出')
    cluster.fork()
  })
} else {
  // 多个子进程，共享一个tcp链接，提供一份网络服务
  const server = http.createServer((req,res)=>{
    res.writeHead(200)
    res.end('done')
  })
  server.listen(3000,()=>{
    console.info('localhost:3000')
  })
}
// cookie是HTPP规范，而token是自定义传递
// cookie会默认被浏览器存储，而token需自己存储
// JWT

