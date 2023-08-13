var socket = io("http://192.168.1.100:80");

window.onload = init()

function init(){
    window.document.getElementById('username').innerText = window.sessionStorage.getItem("User")

    window.document.getElementById("ReturnMenu").onclick = function LoadMainMenu(){
        makeGetRequest('/MainMenu.html', (res)=> {})
        window.location = "/MainMenu.html"
    }
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