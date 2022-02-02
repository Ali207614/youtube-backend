const { fetch, fetchAll } = require("../../lib/postgres.js")

const GETUSER = `

select 
    user_id,
    user_username ,
    user_email , user_contact , 
    user_age , user_img from users
WHERE user_id = $1;
`



const getUser = async ({userId}) => {
    let user = await fetch(GETUSER, userId)
    return user
}



module.exports =  {
    getUser
}
