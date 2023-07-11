const { error } = require('console')
const express = require('express')
const http = require('http');
const { url } = require('inspector');
const app = express()
const port = 80;


//RequestMap holds request keys to matching functions 
const RequestMap = new Map();
RequestMap.set('/', 'MainPage/index.html')
RequestMap.set('/style.css', 'MainPage/style.css')
//RequestMap.set('/MainPage.js', LoadMainPageJS)

// app.get('/', (req, res) => {
//     res.sendFile('MainPage/index.html', {"root":"C:/Website"})
// })

app.get(/./, (req, res) => {
    res.sendFile(RequestMap.get(req.url), {"root":"C:/Website"})
})

// app.get(/(\.html)/, (req, res) => {
//     res.sendFile(RequestMap.get(req.url), {"root":"C:/Website"})
// })

// app.get(/(\.css)/, (req, res) => {
//     res.sendFile(RequestMap.get(req.url), {"root":"C:/Website", "headers":"Content-Type: text/css"})
// })

// app.get(/(\.js)/, (req, res) => {
//     res.send
// })

app.listen(port, () => {
    console.log('Listening on port ' + String(port))
})

// function LoadMainPage(req, res){
//     res.writeHead(200, { 'Content-Type': 'text/html'})
//     fs.readFile('MainPage/index.html', function(error, data){
//         if(error){
//             error404(res)
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }

// function LoadMainPageStyle(req, res){
//     res.writeHead(200, { 'Content-Type': 'text/css'})
//     fs.readFile('MainPage/style.css', function(error, data){
//         if(error){
//             error404(res)
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }

// function LoadMainPageJS(req, res){
//     res.writeHead(200, { 'Content-Type': 'text/javascript'})
//     fs.readFile('MainPage/MainPage.js', function(error, data){
//         if(error){
//             error404(res)
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// }

// const server = http.createServer(function(req, res){
//     var address = new URL(req.url, `http://${req.headers.host}`);
//     //console.log(address.pathname)
//     if(RequestMap.get(address.pathname) != undefined){
//         RequestMap.get(address.pathname)(req, res)
//     } else {
//         if(error){
//             error404(res)
//         }
//         res.end()
//     }
// });

//Print 404 error and send 404 header
function error404(response){
    response.writeHead(404)
    response.write('Error: File Not Found')
}

// server.listen(port, function(error){
//     if(error){
//         console.log('Something went wrong: ', error)
//     } else {
//         console.log('Server listening on port ' + port)
//     }
// });