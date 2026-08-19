import net from 'node:net'

const server = net.createServer((socket) => {
  // 监听
  console.log('server connected')

  socket.on('data', (data) => {
    console.log('data',data.toString())
  })

  socket.on('end', () => {
    console.log('server disconnected')
  })

  socket.on('error', (error) => {
    console.log('error',error)
  })
})

server.listen(3001, () => {
  console.log('tcp server is running on port 3001')
})