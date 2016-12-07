var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
      break
    case '/css/style.css':
      sendFile(res, 'css/style.css', 'text/css')
      break
    case '/phaser.min.js':
      sendFile(res, 'phaser.min.js', 'text/javascript')
      break
    case '/js/boot.js':
      sendFile(res, 'js/boot.js', 'text/javascript')
      break
    case '/js/game.js':
      sendFile(res, 'js/game.js', 'text/javascript')
      break
    case '/js/play.js':
      sendFile(res, 'js/play.js', 'text/javascript')
      break
    case '/js/load.js':
      sendFile(res, 'js/load.js', 'text/javascript')
      break
    case '/img/entrance.png':
      sendFile(res, 'img/entrance.png','image/png')
      break
    case '/img/final.png':
      sendFile(res, 'img/final.png','image/png')
      break
    case '/img/gamepanel.png':
      sendFile(res, 'img/gamepanel.png','image/png')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines


function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
