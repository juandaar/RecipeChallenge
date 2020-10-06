require('dotenv').config();
const http = require('http');
const { serverConf } = require('./conf/Configuration');
const app = require('./app');

const server = http.createServer(app);

//  server
server.listen(serverConf.port || 3000, () => {
  console.log(`Server is starting on port ${serverConf.port}`);
});

module.exports = server;
