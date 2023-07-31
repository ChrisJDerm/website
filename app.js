//Includes
const express = require("express");
const app = express();
const cors = require('cors');
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
app.use(cors())

//Default port
const port = 80;

//RequestMap holds URL/Path pair 
const RequestMap = new Map();
RequestMap.set('/', 'Welcome/index.html');
RequestMap.set('/style.css', 'Welcome/style.css');
RequestMap.set('/Welcome.js', 'Welcome/Welcome.js');
RequestMap.set('/MainMenu.html', 'MainMenu/MainMenu.html');
RequestMap.set('/MainMenu.css', 'MainMenu/MainMenu.css');
RequestMap.set('/MainMenu.js', 'MainMenu/MainMenu.js');
RequestMap.set('/client.js', 'client.js');
RequestMap.set('/ChatScreen.html', 'ChatScreen/ChatScreen.html')
RequestMap.set('/ChatScreen.css', 'ChatScreen/ChatScreen.css')
RequestMap.set('/ChatScreen.js', 'ChatScreen/ChatScreen.js')

//Handle all HTML/CSS/JS GET requests
app.get(/(\/+$|\.html|\.css|\.js)/, (req, res) => {
    //console.log('Request Received: ' + req.url)
    res.sendFile(RequestMap.get(req.url), {"root":"C:/Website"}, function(err){
        if(err){
            console.log('Error: ' + err)
        } else {
            //console.log('Sent: ' + req.url) //maybe send js file with alert?
        }
    })
});

io.on('connection', socket => {
    console.log(socket.id)
});

//Establish server on port
app.listen(port, () => {
    console.log('Listening on port ' + String(port))
});