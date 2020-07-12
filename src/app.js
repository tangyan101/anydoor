const http = require('http');
const config = require('./config/defaultConfig')
const chalk = require('chalk');
const path = require('path');
const route = require('./helper/route');

const log = console.log;
const server = http.createServer((req, res) => {
  // res.write(JSON.stringify(req))
  // res.end(config.root)
  const filePath = path.join(config.root, req.url);
  route(req, res, filePath);
});


server.listen(config.port, config.hostname, () => {
  log( chalk.green(`http://${config.hostname}:${config.port}`) );
})
