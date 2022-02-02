const router = require('express').Router()
const { POST , INSERT } = require('./controller.js')

router.route('/login')
	.post( POST )


router.route('/register')
	.post( INSERT )


module.exports = router