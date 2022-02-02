const router = require('express').Router()
const { GET , VIDEO , USERVIDEO , POST , LIKEVIDEO , DISLIKEVIDEO , LIKE , MYVIDEO, SUBSVIDEO , MAIN_SEARCH ,FOLLOWER} = require('./controller.js')

router.route('/api/video')
	.get( GET )
        
router.route('/single/:videoId')
	.get( VIDEO )

router.route('/api/myVideo')
	.get( MYVIDEO )

router.route('/subs/:userId')	
		.get( SUBSVIDEO )


router.route('/search')
	.get( MAIN_SEARCH )

router.route('/follower')
	.get(FOLLOWER)


router.route('/like/:videoId')
	.get( LIKE )

router.route('/user/video/:userId')
	.get( USERVIDEO )

router.route("/api/upload")
	.post( POST )

router.route("/api/video/like/:videoId")
	.post( LIKEVIDEO )

	
router.route("/api/video/dislike/:videoId")
	.post( DISLIKEVIDEO )
module.exports = router