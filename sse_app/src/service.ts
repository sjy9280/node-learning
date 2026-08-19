import http from 'node:http'

let count = 0
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'access-control-allow-origin': '*',
    'content-type': 'text/event-stream'
  })

  if(req.url === '/sse') {
    console.log('sse request'+count)
    res.write('data: Hello, client!')
    
    setInterval(() => {
      res.end(`data: ${count++}`)
    }, 1000)

    // res.end('hello world')
  }
})

server.listen(3001, () => {
  console.log('http server is running on port 3001')
})