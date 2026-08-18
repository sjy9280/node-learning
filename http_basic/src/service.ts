import http from 'node:http';

const routes = {
  "/user":"user",
  "/detail":"detail",
}

const server = http.createServer((req, res) => {
  const {url} = req;

  if(url === '/favicon.ico'){
    return;
  }

  console.log(url);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  const content = routes[url as keyof typeof routes];
  const html = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>http basic</title>
   </head>
   <body>
   <h1>Hello World ----${content}</h1>
   </body>
   </html>
   `;
  res.write(html);
  res.end();
});


server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
