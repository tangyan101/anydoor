const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require('../config/defaultConfig');
const mime = require('./mime.js');
const tplpath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplpath);
const compile = Handlebars.compile(source.toString());

module.exports = async function(req, res, filePath){
  try{
    const stats = await stat(filePath);
    // 如果是文件
    if(stats.isFile()) {
      const contentType = mime(filePath);
      res.writeHead(200, {'Content-Type' : contentType + '; charset=UFT8'});
      const rs = fs.createReadStream(filePath);
      rs.pipe(res);
      // 如果是目录
    } else if(stats.isDirectory()){
      const files = await readdir(filePath);
      res.writeHead(200, {'Content-Type' : 'text/html;charset=UFT8'});
      const dir = path.relative(config.root, filePath);
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files : files.map(file => {
          return {
            file,
            icon: mime(file)
          }
        })
      }
      res.end(compile(data))
    }
  }catch(error){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end(`${filePath} is not a directory or file`);
  }
}
