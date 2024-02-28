const express = require("express")

const app = express()
const bodyParser = require('body-parser');

var session = require("express-session")
const port = 3000

let todo = []
app.use(session({
    secret:'keyboard cat'
}))




app.use(express.static("todos"))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/process-form', (req, res) => {
    const userPassword = req.body.user_password;
    const userEmail = req.body.user_email;

    const existingUser = todo.find(user => user.email === userEmail);

    if (existingUser && existingUser.password === userPassword) {
        res.send(`Welcome, ${userEmail}`);
    
    } else {
    todo.push({
        email : userEmail,
        password : userPassword
    })

    res.send(`
    <script>
        alert('Invalid email or password. Please try again.');
        window.location.href = '/';
    </script>
`);
}
});

app.post("/signup", (req,res)=>{
    console.log((req.body))
    const userEmail = req.body.user_email;
    const userPassword = req.body.user_password;

    todo.push({
        email:userEmail,
        password:userPassword
    })

    res.end('<script>window.location.href = \'/\';</script>');

    
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})