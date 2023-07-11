const request = new XMLHttpRequest();

window.onload = init()

function init(){
    console.log(window.document.title)
    window.document.getElementById("WelcomeButton").onclick = function LoadMainMenu(){
        console.log("Requesting")
        request.open('GET', '/MainMenu.html')
        request.send()
        window.location = "/MainMenu.html"
    }
}