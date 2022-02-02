const model = require('./model.js')
const { sign } = require('../../lib/jwt')


const GET = async (req, res) => {
	try{
		let video = await model.getVideo()
		res.json(video)
	}
	catch(err){
		console.log(err)
	}
}
const MYVIDEO = async (req,res) => {
	try{
		let video = await model.myVideo(req.userInfo)
		res.json(video)
	}
	catch(err){
		console.log(err)
	}
}
const SUBSVIDEO = async (req,res) => {
	try{
		let video = await model.subsVideo(req.params)
		res.json(video)
	}
	catch(err){
		console.log(err)
	}
}

const MAIN_SEARCH = async (req,res) => {
	try{
		let video = await model.search(req.query)
		res.json(video)
	}
	catch(err){
		console.log(err)
	}
}

const VIDEO = async (req,res) => {
	try{
		let video = await model.singleVideo(req.params);
		res.json(video);
	}
	catch(err){
		res.json({
			message: "video kelishda error"
		})
		console.log(err)
	}
}
const LIKE = async (req,res) => {
	try{
		let like = await model.likeVid(req.params , req.userInfo);
		res.json(like);
	}
	catch(err){
		res.json({
			message: "like kelishda error"
		})
		console.log(err)
	}
}

const USERVIDEO = async (req,res) => {
	try{
		let userVideo = await model.userVideo(req.params);
		res.json(userVideo);
	}
	catch(err){
		res.json({
			message: "video kelishda error"
		})
		console.log(err)
	}
}


const POST = async (req, res) => {
	try{
		let upload = await model.upload( req.body , req.files , req.userInfo)
		if(upload) {
			res.status(200).json({
				message: "The todo has been declered!",
				token: sign(upload)
			})
			
		} else {
			console.log('error')
		}
	}
	catch(err){
		console.log(err)
	}

}


const LIKEVIDEO = async (req, res) => {
	
	try{
		let getLIkeVideo = await model.likeVideo(req.params , req.userInfo)
		if(!getLIkeVideo){
			let insertLike = await model.insertLike(req.params , req.userInfo)
			 getLIkeVideo = await model.likeVideo(req.params , req.userInfo)
			 return res.json(getLIkeVideo)
		}
		if(!getLIkeVideo.is_liked){
			let updateLike = await model.updateLike(req.params , req.userInfo)
			delete getLIkeVideo.is_liked;
			return res.json({...getLIkeVideo, is_liked: true})
		}
		let deleteLike = await model.deleteLike(req.params , req.userInfo)
		res.json(null)
	}
	catch(err){
		console.log(err)
	}
}

const DISLIKEVIDEO = async (req, res) => {
	try{
		let getDisLikeVideo = await model.disLikeVideo(req.params , req.userInfo)
		if(!getDisLikeVideo){
			let insertDis = await model.insertDisLike(req.params , req.userInfo)
			getDisLikeVideo = await model.disLikeVideo(req.params , req.userInfo)
			return res.json(getDisLikeVideo)
		}
		if(getDisLikeVideo.is_liked){
			let updateDislike = await model.updateDislike(req.params , req.userInfo)
			delete getDisLikeVideo.is_liked
			return res.json({ ...getDisLikeVideo , is_liked :false})
		}
		let deleteDislike = await model.deleteDislike(req.params , req.userInfo)
		res.json(null)

	}
	catch(err){
		console.log(err)
	}
}

const FOLLOWER = async (req, res) => {
	try{
		let follower = await model.follow( req.userInfo)
		res.json(follower)
	}
	catch(err){
		console.log(err)
	}
}

module.exports = {
	GET,
	VIDEO,
	USERVIDEO,
	POST,
	LIKEVIDEO,
	DISLIKEVIDEO,
	LIKE,
	MYVIDEO,
	MAIN_SEARCH,
	FOLLOWER,
	SUBSVIDEO
}