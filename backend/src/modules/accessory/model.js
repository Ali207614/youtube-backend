const { fetch, fetchAll } = require("../../lib/postgres.js")

const GETVIDEO = `
    select
         * from 
    followers
    WHERE following_id = $1 AND follower_id = $2
`

const INSERTFOLLOW = `
INSERT INTO followers ( 
	following_id,
	follower_id
) VALUES 
($1,$2)

`
const DELETEFOLLOW = `
DELETE from followers
WHERE following_id = $1 AND follower_id = $2
`
const COMMENTVIDEO = `
INSERT INTO comments  ( 
	comment_text,
	user_id,
	video_id
) VALUES 
($1 , $2 , $3);
`
const GETCOMMENT = `
select
    c.*,
    u.user_img,
    u.user_username
 from comments c
 INNER JOIN users u ON u.user_id = c.user_id
 WHERE c.video_id = $1;

`


const follow = async ({following} , {userId}) => {
    let follow = await fetch(GETVIDEO , following , userId)
    return follow
}

const insertFollow = async({following} , { userId}) => {
    let insertFollow = await fetch(INSERTFOLLOW , following , userId)
    return insertFollow
}

const deleteFollow = async({following} , { userId}) => {
    let delFollow = await fetch(DELETEFOLLOW , following , userId)
    return delFollow
}

const comment = async({title , videoId} , { userId}) => {
    let commentVideo = await fetch(COMMENTVIDEO , title , userId , videoId)
    return commentVideo
}

const getcomment  = async({ videoId}) => {
    let getComment = await fetchAll(GETCOMMENT ,  videoId)
    return getComment
}
module.exports =  {
    follow,
    insertFollow,
    deleteFollow,
    comment,
    getcomment
}
