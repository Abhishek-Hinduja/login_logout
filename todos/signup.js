
let Signup = document.getElementById("Signup")

Signup.addEventListener("click", function(e){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let request = new XMLHttpRequest()
    request.open("post", "/signup")
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify({user_email : email,
        user_password:password}))

    request.addEventListener("load", function(){
        window.location.href = "/"
    })
})


