window.onload = init()

function init(){
    // makeGetRequest('/user', (res) => {
    //     window.document.getElementById('username').innerText = res
    // })


    window.document.getElementById("ReturnMenu").onclick = function LoadMainMenu(){
        //console.log("Requesting")
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