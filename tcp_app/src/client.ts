import net from "node:net";

const client = net.createConnection({port:3001}, () => {
  console.log('connected to server')

  client.write('Hello, client!')
})
