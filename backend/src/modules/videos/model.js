const { fetch, fetchAll } = require("../../lib/postgres.js")
const path = require("path")

const GETVIDEO = `
select
v.* ,
u.user_username ,
u.user_img
from videos v
INNER JOIN users u ON v.user_id = u.user_id;
`

const SINGLEVIDEO = `
    select 
        * 
    from videos 
    WHERE video_id = $1
`

const USERVIDEO =`
    select * from videos 
    WHERE user_id = $1
`

const COUNTLIKE = `
    select 
        COUNT(*) as like
        from likes 
    WHERE video_id = $1 AND is_liked = true;
`
const COUNTDISLIKE = `
    select 
        COUNT(*) AS dislike
        from likes 
    WHERE video_id = $1 AND is_liked = false;
`

const USERLIKE = `
    select 
        *
    from likes 
    WHERE video_id = $1 AND user_id = $2
`

const SUBSCRIPTION = `
    select 
        *
    from followers
    WHERE following_id = $1 AND follower_id = $2
`
const VIDEOUPLOAD = `
INSERT INTO videos ( 
	video_title,
	video_link,
	video_poster,
	user_id
) VALUES 
($1, $2 ,$3 , $4)
`
const INSERTLIKE = `
INSERT INTO likes ( 
	is_liked, 
	video_id,
	user_id 
) VALUES 
(true, $1 ,$2)
`

const INSERTDISLIKE = `
INSERT INTO likes ( 
	is_liked, 
	video_id,
	user_id 
) VALUES 
(false, $1 ,$2)
`


const UPDATELIKE =`

UPDATE  likes 
set is_liked = true
WHERE video_id = $1 AND user_id = $2

`

const UPDATEDISLIKE = `
UPDATE  likes 
set is_liked = false
WHERE video_id = $1 AND user_id = $2
`

const DELETELIKE = `
    DELETE from likes
    WHERE video_id = $1 AND user_id = $2
`
const MYVIDEO = `
select
v.* ,
u.user_username ,
u.user_img
from videos v
INNER JOIN users u ON v.user_id = u.user_id
WHERE v.user_id = $1
`
const SEARCH = `
select DISTINCT ON (v.*)
   v.*,
    u.user_username ,
    u.user_img
from videos v
INNER JOIN users u ON v.user_id = u.user_id
WHERE LOWER(video_title) LIKE $1 
ORDER BY v.*
`
const FOLLOWUSER = `
select 
u.user_id,
u.user_username,
u.user_img
from followers f
INNER JOIN users u ON u.user_id = f.following_id
WHERE f.follower_id = $1; 
`

const getVideo = async () => {
    let video = await fetchAll(GETVIDEO)
    return video
}

const myVideo = async ({userId}) => {
    let video = await fetchAll(MYVIDEO , userId)
    return video
}


const subsVideo = async ({userId}) => {
    let video = await fetchAll(MYVIDEO , userId)
    return video
}
const search = async ({key}) => {
    let video = await fetchAll(SEARCH ,'%' + key + '%')
    return video
}

const likeVid = async({videoId} , {userId}) => {
    let single = await fetch(SINGLEVIDEO , videoId)
    let follow = await fetch(SUBSCRIPTION , single.user_id , userId)
    let userLike = await fetch(USERLIKE , videoId , userId)
    return [follow , userLike]
}
const singleVideo = async({videoId} ) => {
    let single = await fetch(SINGLEVIDEO , videoId)
    let countLike = await fetch(COUNTLIKE ,videoId )
    let countDislike = await fetch(COUNTDISLIKE , videoId)
    return [single , countLike , countDislike] 
}

const userVideo = async( {userId} ) => {
    let userVId = await fetchAll(USERVIDEO , userId)
    return userVId
}
const follow = async( {userId} ) => {
    let userVId = await fetchAll(FOLLOWUSER , userId)
    return userVId
}

const upload = async ({ title }, { video , poster} , {userId}) => {
	let videoName = video.name.replace(/\s/g," ")
	let posterName = poster.name.replace(/\s/g," ")
	let videoUpload = await fetch(VIDEOUPLOAD, title, videoName , posterName , userId )
	video.mv(path.join(process.cwd(),'src', "public" , 'video' , videoName) , (err) =>{
		if(err){
			console.log(err)
		}	
	})
    poster.mv(path.join(process.cwd(),'src', "public" , 'img' , posterName) , (err) =>{
		if(err){
			console.log(err)
		}	
	})
	return videoUpload
}


const likeVideo = async({videoId} , {userId}) => {
    return await fetch(USERLIKE , videoId , userId)
}

const insertLike = async({videoId} , {userId}) => {
    return await fetch(INSERTLIKE , +videoId , +userId)
}

const updateLike = async({videoId} , {userId}) => {
    return await fetch( UPDATELIKE , videoId , userId)
}

const deleteLike = async({videoId} , {userId}) => {
    return await fetch( DELETELIKE , videoId , userId)
}


const disLikeVideo = async({videoId} , {userId}) => {
    return await fetch(USERLIKE , +videoId , +userId)
}

const insertDisLike = async({videoId} , {userId}) => {
    return await fetch(INSERTDISLIKE , +videoId , +userId)

}

const updateDislike = async({videoId} , {userId}) => {
    return await fetch(UPDATEDISLIKE , +videoId , +userId)
}

const deleteDislike = async({videoId} , {userId}) => {
    return await fetch(DELETELIKE , videoId , userId)
}

module.exports =  {
    getVideo,
    singleVideo,
    userVideo,
    upload,
    likeVideo,
    insertLike,
    updateLike,
    deleteLike,
    disLikeVideo,
    insertDisLike,
    updateDislike,
    deleteDislike,
    likeVid,
    myVideo,
    search,
    follow,
    subsVideo
}
