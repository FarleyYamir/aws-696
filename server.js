import Express from 'express'
import path from 'path'

const app = Express()
const dir = path.resolve()
const dir_front = "front-react/build"

app.use(Express.static(dir_front))

app.listen('5001', function(){
    console.log("Server has started")
})

app.get('/', function(req, res){
    res.sendFile(dir + "/" + dir_front + "index.html")
})

app.get("/home", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get('/register_page', function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/consult_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/contact_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.post("/register_user", function(req, res){
    console.log("Registro realizado");
})
