const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const file = fs.readFileSync('public/index.html');
  res.end(file);
});

server.listen(3000, () => {
  console.log('Listening on port 3000')
});
