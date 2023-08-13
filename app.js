//Includes
const { Console } = require('console');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


//Default port
const port = 80;

//RequestMap holds URL/Path pair 
const RequestMap = new Map();
RequestMap.set('/', '/Welcome/index.html');
RequestMap.set('/style.css', '/Welcome/style.css');
RequestMap.set('/Welcome.js', '/Welcome/Welcome.js');
RequestMap.set('/MainMenu.html', '/MainMenu/MainMenu.html');
RequestMap.set('/MainMenu.css', '/MainMenu/MainStyle.css');
RequestMap.set('/MainMenu.js', '/MainMenu/MainMenu.js');
RequestMap.set('/client.js', '/client.js');
RequestMap.set('/ChatScreen.html', '/ChatScreen/ChatScreen.html')
RequestMap.set('/ChatScreen.css', '/ChatScreen/ChatScreen.css')
RequestMap.set('/ChatScreen.js', '/ChatScreen/ChatScreen.js')
RequestMap.set('/socket.io/socket.io.js', '/node_modules/socket.io/client-dist/socket.io.js')

//Handle all HTML/CSS/JS GET requests
app.get(/(\/+$|\.html|\.css|\.js)/, (req, res) => {
    //console.log('Request Received: ' + req.url)
    var path
    if(RequestMap.get(req.url) === undefined){
        path = req.url
    } else {
        path = RequestMap.get(req.url)
    }
    console.log(path)
    res.sendFile(__dirname + path, function(err){
        if(err){
            console.log(err)
        } else {
            //console.log('Sent: ' + req.url) //maybe send js file with alert?
        }
    })
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

//Establish server on port
server.listen(port, () => {
    console.log('Listening on port ' + String(port))
});