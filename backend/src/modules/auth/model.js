const { fetch, fetchAll } = require("../../lib/postgres.js")

const VALIDATE = `

SELECT 
		user_id
FROM users 
WHERE user_username = $1 AND 
user_password = crypt($2, user_password)
`

const INSERT = `


INSERT INTO users ( 
	user_username, 
	user_password, 
	user_email, 
	user_age,
	user_contact 
) VALUES 
($1 , crypt($2, gen_salt('bf')) , $3 , $4 , $5)
returning *
`
const insert = async ({username, password , email ,age ,  contact }) => {
    console.log(username, password , email ,age ,  contact)
   try{
        let user = await fetch(INSERT, username, password , email ,age ,contact )
        return user
   }
   catch(err){
       console.log(err)
   }
}





const validate = async ({userName, password}) => {
    let user = await fetch(VALIDATE, userName, password)
    return user
}



module.exports =  {
    insert,
    validate,
}
