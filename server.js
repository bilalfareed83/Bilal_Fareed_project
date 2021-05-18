const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

app.post("/", (req, res) => {
    
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var result = a+b
    res.send("Calculate result" +" "+ result)
})


app.listen(3000, () => {
    console.log("server running port 3000")
})