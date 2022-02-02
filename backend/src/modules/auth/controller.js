const model = require('./model.js')
const { sign } = require('../../lib/jwt')



const POST = async (req, res) => {
	try{
		let user = await model.validate( req.body )
		if(user) {
			res.status(200).json({
				message: "user validet",
				token: sign(user)
			})
			
		} else {
			console.log('error')
		}
	}
	catch(err){
		console.log(err)
	}
}


const INSERT = async (req,res) => {
	console.log(req.body)
	try{
		let user = await model.insert( req.body )
		if(user) {
			res.status(200).json({
				message: "The user has been declered!",
				token: sign(user)
			})
			
		} else {
			console.log('error')
		}
	}
	catch(err){
		console.log(err)
	}
}



module.exports = {
	POST,
	INSERT
}