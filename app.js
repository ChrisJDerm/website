const { error } = require('console')
const fs = require('fs')
const http = require('http');
const { url } = require('inspector');
const port = 3000;

//RequestMap holds request keys to matching functions 
const RequestMap = new Map();
RequestMap.set('/', LoadMainPage)
RequestMap.set('/style.css', LoadMainPageStyle)
RequestMap.set('/MainPage.js', LoadMainPageJS)

function LoadMainPage(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('MainPage/index.html', function(error, data){
        if(error){
            error404(res)
        } else {
            res.write(data)
        }
        res.end()
    })
}

function LoadMainPageStyle(req, res){
    res.writeHead(200, { 'Content-Type': 'text/css'})
    fs.readFile('MainPage/style.css', function(error, data){
        if(error){
            error404(res)
        } else {
            res.write(data)
        }
        res.end()
    })
}

function LoadMainPageJS(req, res){
    res.writeHead(200, { 'Content-Type': 'text/javascript'})
    fs.readFile('MainPage/MainPage.js', function(error, data){
        if(error){
            error404(res)
        } else {
            res.write(data)
        }
        res.end()
    })
}

const server = http.createServer(function(req, res){
    var address = new URL(req.url, `http://${req.headers.host}`);
    //console.log(address.pathname)
    if(RequestMap.get(address.pathname) != undefined){
        RequestMap.get(address.pathname)(req, res)
    } else {
        if(error){
            error404(res)
        }
        res.end()
    }
});

//Print 404 error and send 404 header
function error404(response){
    response.writeHead(404)
    response.write('Error: File Not Found')
}

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong: ', error)
    } else {
        console.log('Server listening on port ' + port)
    }
});