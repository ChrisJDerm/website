const express = require('express')
const http = require('http');
const app = express()
const port = 80;

//RequestMap holds path/path pair 
const RequestMap = new Map();
RequestMap.set('/', 'Welcome/index.html')
RequestMap.set('/style.css', 'Welcome/style.css')
RequestMap.set('/Welcome.js', 'Welcome/Welcome.js')
RequestMap.set('/MainMenu.html', 'MainMenu/MainMenu.html')
RequestMap.set('/MainMenu.css', 'MainMenu/MainMenu.css')
RequestMap.set('/MainMenu.js', 'MainMenu/MainMenu.js')

//Handle all HTML/CSS/JS GET requests
app.get(/(\/|\.html|\.css|\.js)/, (req, res) => {
    console.log('Request Received')
    res.sendFile(RequestMap.get(req.url), {"root":"C:/Website"}, function(err){
        if(err){
            console.log('Error: ' + err)
        } else {
            console.log('Sent: ' + req.url)
        }
    })
})

//Establish server on port
app.listen(port, () => {
    console.log('Listening on port ' + String(port))
})