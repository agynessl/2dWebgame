var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , qs = require('querystring')
  , path = require('path')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  if(req.method=='GET'){
    handleGET(uri.pathname,res);
  }
  else if(req.method=='POST'){
    handlePOST(req,res);
  }

})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines
function handleGET(path,res){
    //TODO:an automatic sending file server!
    // if(path=='/'){
    //   sendFile(res, 'index.html')
    // }
    // else if(ch1=='m' & ch2=='d'){
    //   sendFile(RES, path, 'text/markdown')
    // }
    // else{
    //   res.end('404 not found')
    // }


    switch(path) {
    case '/assets/play.png':
      sendFile(res, 'assets/play.png', 'image/png')
      break
    case '/assets/back.png':
      sendFile(res, 'assets/back.png', 'image/png')
      break
    case '/assets/about.png':
      sendFile(res, 'assets/about.png', 'image/png')
      break
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
    case '/js/menu.js':
      sendFile(res, 'js/menu.js', 'text/javascript')
      break
    case '/js/game.js':
      sendFile(res, 'js/game.js', 'text/javascript')
      break
    case '/js/top10.js':
      sendFile(res, 'js/top10.js', 'text/javascript')
      break
    case '/js/about.js':
      sendFile(res, 'js/about.js', 'text/javascript')
      break
    case '/js/input.js':
      sendFile(res, 'js/input.js', 'text/javascript')
      break
    case '/js/play.js':
      sendFile(res, 'js/play.js', 'text/javascript')
      break
    case '/js/load.js':
      sendFile(res, 'js/load.js', 'text/javascript')
      break
    case '/js/README.md':
      sendFile(res, 'README.md', 'text/markdown')
      break
    default:
      res.end('404 not found')
  }
}

function handlePOST(req,res){
  // var body = ''

  // req.on('data', function(d) {
  //   body += d;
  // })

  // req.on('end', function(d) {
  //   console.log(body)
  //   var post = qs.parse(body)

  //   if(post.username){
  //     console.log('hi')
  //   }
  // })
}


function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
