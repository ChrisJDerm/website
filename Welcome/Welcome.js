const request = new XMLHttpRequest();

window.onload = init()

function init(){
    window.document.addEventListener("keyup", (event) => {
        var username = window.document.getElementById('username').value
        console.log(username)
        var userJSON = {name : username}
        console.log(JSON.stringify(userJSON))
        if(event.key === "Enter"){
            if(username === ""){
                alert("Please enter a username") //implement record previous name
            } else {
                console.log("Loging name: " + username)
                GlobalUser = username
                // request.open('POST', '/user', true)
                // request.send(JSON.stringify(userJSON))
                window.location = '/MainMenu.html'
            }
        }
    })
}