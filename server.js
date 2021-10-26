const express= require("express")
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
const app = express()

const port = process.env.PORT || 3001 

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(port , function(){
    console.log("app is listening on port:",port)
}  )