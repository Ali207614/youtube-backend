const render = require("../../lib/render.js")

const HOME = (req,res) => {
    res.sendFile(render("index.html"))
}

const SINGLE = (req,res) => {
    res.sendFile(render("single-page.html"))
}

const UPDATE = (req,res) => {
    res.sendFile(render("settingPage.html"))
}
const UPLOAD = (req,res) => {
    res.sendFile(render("uploadPage.html"))
}

const MYVIDEO = (req,res) => {
    res.sendFile(render("myVideo.html"))
}
const FOLLOW = (req,res) => {
    res.sendFile(render("follower.html"))
}

module.exports = { HOME , SINGLE , UPDATE , UPLOAD , MYVIDEO ,FOLLOW}