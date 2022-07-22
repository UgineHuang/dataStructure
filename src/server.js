const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server;

// 创建 websocket 服务器 监听在 3000 端口
const wss = new WebSocketServer({port: 3000})
const wsList = []

// 服务器被客户端连接
wss.on('connection', (ws) => {
  // 通过 ws 对象，就可以获取到客户端发送过来的信息和主动推送信息给客户端
  console.info('connected')
  wsList.push(ws)
  ws.on('message',msg=>{
    console.log(msg.toString())
  })
})
