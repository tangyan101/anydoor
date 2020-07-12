const path = require('path');

const mimeTypes = {
'text' : 'text/plain',
'html' : 'text/html',
'jpg':'image/jpeg',
'jpeg':'image/jpeg',
'png':'image/png',
'json':'application/json',
'js':'application/javascript',
}

module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLocaleLowerCase()

  if(!ext){
    ext = filePath;
  }

  return mimeTypes[ext] || mimeTypes['text']
}

