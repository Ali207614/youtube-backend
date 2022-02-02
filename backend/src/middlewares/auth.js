const { verify } = require('../lib/jwt.js')





module.exports = async ( req, res, next ) => {
    try{
        const { token } = req.headers;
        if((req.url == '/login' || req.url == '/register') && token == 'null') {
            return next()
        }
        else if((req.url == '/api/video' ) && token == 'null'){
            return next()
        }
        // else if((req.url.includes('/single') || req.url.includes('/user/video') || req.url.includes('/single')) && token == 'null') {
        //     return next()
        // }

        const payload = verify(token);
        let userId = payload.user_id
        req.userInfo = {
            userId,
        }
        next()
     }
     catch(err){
         console.log(err)
         res.json({ message: "Tokenin yo'q"})
     }

}