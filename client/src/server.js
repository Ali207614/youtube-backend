const express = require("express")
const app = express()
const fileupload = require("express-fileupload")
const path = require("path")
const cors = require('cors')
const  { host , PORT } = require("./config.js")


app.use(fileupload())
app.use( function (req, res, next)  {
    res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')
	next()
})
app.use( express.json() )	

app.use(express.static(path.join(__dirname , "assets" , 'js' )))
app.use(express.static(path.join(__dirname , "assets" , 'style' )))
app.use(express.static(path.join(__dirname , "assets" , 'images' )))

app.use(cors())

const modules = require('./modules')
app.use(modules)



app.listen(PORT , () => console.log('Server is running on http://' + host + ':' + PORT))