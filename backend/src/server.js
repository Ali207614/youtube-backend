const express = require("express")
const cors = require('cors')
const path = require("path")
const fileupload = require("express-fileupload")
const  { host , PORT } = require("./config.js")
const app = express()
const auth = require("./middlewares/auth.js")

app.use(fileupload())

app.use(cors())
app.use( express.json() )
app.use(express.static(path.join(process.cwd(), 'src', 'public' , 'img')))
app.use(express.static(path.join(process.cwd(), 'src', 'public' , 'video')))
app.use(auth)
const modules = require("./modules")
app.use(modules)


app.listen(PORT , () => console.log('Server is running on http://' + host + ':' + PORT))