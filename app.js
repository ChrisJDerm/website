const http = require('http');

//Express
const express = require('express')
const app = express()

//Parsers
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json({type: String})
const urlencodedParser = bodyParser.urlencoded({ extended: false})

//Default port
const port = 80;

//RequestMap holds URL/Path pair 
const RequestMap = new Map();
RequestMap.set('/', 'Welcome/index.html')
RequestMap.set('/style.css', 'Welcome/style.css')
RequestMap.set('/Welcome.js', 'Welcome/Welcome.js')
RequestMap.set('/MainMenu.html', 'MainMenu/MainMenu.html')
RequestMap.set('/MainMenu.css', 'MainMenu/MainMenu.css')
RequestMap.set('/MainMenu.js', 'MainMenu/MainMenu.js')

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
})

//Read and store username data
app.post('/user', jsonParser, (req, res) => {
    //console.log("Host: " + req.headers.host)
    //console.log("Username: " + (req.body['name']))
    Hostmap.set(req.headers.host, req.body['name'])
    //console.log("Map check: " + Hostmap.get(req.headers.host))
})

app.get('/user', (req, res) => {
    res.send(Hostmap.get(req.headers.host))
})

//Establish server on port
app.listen(port, () => {
    console.log('Listening on port ' + String(port))
})