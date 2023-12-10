const bodyParser = require("body-parser")
const express = require("express")
const hbs = require("hbs")
const app = express()
require("dotenv").config()
const hbs = require("hbs")


app.set("view engine", "hbs")
app.use(bodyParser.json())
app.listen(process.env.PORT, ()=>{console.log("http://localhost:"+4000)})

app.get("/", (req, res)=>{res.render("index")})