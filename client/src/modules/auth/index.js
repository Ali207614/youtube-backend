const router = require("express").Router()

const { LOGIN , REGISTER} = require("./controller.js") 

router.route("/login")
        .get( LOGIN )

router.route("/register")
        .get(REGISTER)

module.exports = router 