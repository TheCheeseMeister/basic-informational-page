const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    let path = req.url === '/' ? './index.html' : req.url === '/about' ? './about.html' : req.url === '/contact-me' ? './contact-me.html' : './404.html';

    fs.readFile(path, function(err, data) {
        if (err) {
            console.log(404);
            fs.readFile('./404.html', (err, data) => {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            })
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);