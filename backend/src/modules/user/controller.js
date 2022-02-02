const model = require('./model.js')
const { sign } = require('../../lib/jwt.js')



const GET = async (req, res) => {
	try{
		let user = await model.getUser( req.userInfo )
		res.json(user)
	}
	catch(err){
		console.log(err)
	}
}




module.exports = {
	GET
}