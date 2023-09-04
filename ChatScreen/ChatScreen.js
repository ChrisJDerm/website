var socket = io(self.location.host);


window.onload = init()

function init(){
    var chat = window.document.getElementById('chat')

    window.document.getElementById('username').innerText = window.sessionStorage.getItem("User")

    window.document.getElementById("ReturnMenu").onclick = function LoadMainMenu(){
        makeGetRequest('/MainMenu.html', (res)=> {})
        window.location = "/MainMenu.html"
    }

    window.document.addEventListener("keyup", (event) => {
        if(event.key === 'Enter'){
            console.log("Enter key pressed")
            socket.emit("message", window.document.getElementById('typing').value, window.sessionStorage.getItem("User"))
            window.document.getElementById('typing').value = ""
        }
    })

    socket.on('message-update', (msg, user) => {
        var message = document.createElement('li')
        message.textContent = user + ": " + msg
        chat.appendChild(message)
    })
}

function makeGetRequest(url, callback){

    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            callback(request.response);
        }
    };

    request.open('GET', url, true)
    request.send()
}