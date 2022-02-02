const router = require('express').Router()
const { GET ,COMMENT , GETCOMMENT} = require('./controller.js')

router.route('/subscription/:following')
	.post( GET )
    
router.route('/comment')
	.post( COMMENT )
	
router.route('/comment/:videoId')
	.get( GETCOMMENT )


module.exports = router