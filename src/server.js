// src/server.js
const http = require('http');
const handleRequest = require('./routes');
const server = http.createServer(handleRequest);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
