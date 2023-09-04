window.onload = init()

function init(){
    window.document.getElementById('username').innerText = window.sessionStorage.getItem("User")


    window.document.getElementById("ReturnMenu").onclick = function LoadMainMenu(){
        //makeGetRequest('/MainMenu.html', (res)=> {})
        window.location = "/MainMenu.html"
    }

    window.document.getElementById('EnterChat').onclick = function LoadChat(){
        //makeGetRequest('/ChatScreen.html', (res) => {})
        window.location = "/ChatScreen.html"
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