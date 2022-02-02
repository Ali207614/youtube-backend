const router = require("express").Router()

const { HOME , SINGLE , UPDATE , UPLOAD , MYVIDEO , FOLLOW} = require("./controller.js") 

router.route("/")
        .get(HOME)
        
router.route("/single")
        .get(SINGLE)

router.route('/subs')
        .get(FOLLOW)

router.route("/")
        .get(UPDATE)
        
router.route("/upload")
        .get(UPLOAD)

router.route('/myVideo')
        .get(MYVIDEO)

module.exports = router 