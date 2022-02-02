const model = require('./model.js')


const GET = async (req, res) => {
	try{
		let follow = await model.follow(req.params ,req.userInfo);

		if(!follow) {
			let insertFollow = await model.insertFollow(req.params , req.userInfo)
			follow = await model.follow(req.params ,req.userInfo)
			return res.json({follow: true})
		}
		let deleteFollow = await model.deleteFollow(req.params , req.userInfo)
		res.json({follow: false})

	}
	catch(err){
		console.log(err)
	}
}

const COMMENT = async (req, res) => {
	try{
		let comment = await model.comment(req.body ,req.userInfo);
		res.json(comment)
	}
	catch(err){
		console.log(err)
	}
}
const GETCOMMENT = async (req,res) => {
	try{
		let comment = await model.getcomment(req.params);
		res.json(comment)
	}
	catch(err){
		console.log(err)
	}
}

module.exports = {
	GET,
	COMMENT,
	GETCOMMENT
}