import http from 'node:http';
import crypto from 'node:crypto';

// ws 链接，需要经历几个阶段
// 1. 通过http创建一个server
// 2. 升级协议，将http协议升级为ws协议
// 3. ws链接
// 4. ws通信

// 1. 通过http创建一个server
const server = http.createServer((req, res) => {
  console.log('http server created',http.STATUS_CODES)
  const errorCode = 400
  res.writeHead(errorCode,{
    'Content-Type': 'text/plain',
  })
  res.end('你不能这样访问，因为我是一个ws请求')
})

// // 2. 升级协议，将http协议升级为ws协议
server.on('upgrade', (req, socket, head) => {
  // 升级响应头
  // socket ,套接字，是网络连接的端点，可以用来发送和接收数据,双工流
  const key = req.headers['sec-websocket-key']
  console.log('key',key)
  const acceptValue = generateAcceptKey(key)
  console.log('acceptValue',acceptValue)
  const resHeaders = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    'Sec-WebSocket-Accept: ' + acceptValue
  ]
  socket.write(resHeaders.join('\r\n')+"\r\n\r\n")


  // 数据接收
socket.on('data', (data) => {
  // 数据帧
  console.log('data', parseWebSocketFrameToString(data))
  const frame = generateWebSocketFrame('pong')
  socket.write(frame)
})

})


// // 4. ws通信
// ws.on('message', (message) => {
//     console.log('ws通信', message)
// })

server.listen(3001, () => {
  console.log('http server is running on port 3001')
})

function generateAcceptKey(secWebSocketKey: string) {
  return crypto.createHash('sha1').update(secWebSocketKey + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',"binary").digest('base64')
}

function generateWebSocketFrame(data: string) {
  const message = Buffer.from(data)
  // 转换为websocket数据帧
  const frame = Buffer.alloc(message.length + 2)
  frame[0] = 0x81
  frame[1] = data.length
  message.copy(frame, 2)
  return frame
}

function parseWebSocketFrameToString(frame: Buffer): string {
  if (frame.length < 2) {
    return ''
  }

  const secondByte = frame[1]
  const isMasked = (secondByte & 0x80) !== 0
  let payloadLength = secondByte & 0x7f
  let offset = 2

  if (payloadLength === 126) {
    if (frame.length < 4) return ''
    payloadLength = frame.readUInt16BE(2)
    offset = 4
  } else if (payloadLength === 127) {
    if (frame.length < 10) return ''
    payloadLength = Number(frame.readBigUInt64BE(2))
    offset = 10
  }

  let maskingKey: Buffer | null = null
  if (isMasked) {
    if (frame.length < offset + 4) return ''
    maskingKey = frame.subarray(offset, offset + 4)
    offset += 4
  }

  if (frame.length < offset + payloadLength) {
    return ''
  }

  const payload = frame.subarray(offset, offset + payloadLength)

  if (maskingKey) {
    const unmasked = Buffer.alloc(payloadLength)
    for (let i = 0; i < payloadLength; i++) {
      unmasked[i] = payload[i] ^ maskingKey[i % 4]
    }
    return unmasked.toString('utf8')
  }

  return payload.toString('utf8')
}