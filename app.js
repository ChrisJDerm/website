//Includes
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

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

//Hostmap holds Host/Username pair
const Hostmap = new Map();

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

io.on('connection', (socket) => {
    console.log('socket')
});

//Establish server on port
app.listen(port, () => {
    console.log('Listening on port ' + String(port))
});