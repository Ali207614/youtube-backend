const render = require("../../lib/render.js")

const LOGIN = (req,res) => {
    res.sendFile(render("login.html"))
}
const REGISTER = (req,res) => {
    res.sendFile(render("register.html"))
}

module.exports = { LOGIN , REGISTER}