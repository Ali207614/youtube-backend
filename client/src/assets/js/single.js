let video = document.querySelector(".video-video")
let singleRight = document.querySelector(".single-right")
let singleUser = document.querySelector("#head-link-user ")
let like = document.querySelector("#like")
let liked = document.querySelector(".liked")
let add = document.querySelector(".add")
let remove = document.querySelector(".remove")
let allComments = document.querySelector(".all-comments")
let token = window.localStorage.getItem('token');

let link = 'http://localhost:4500/'

async function single () {
    let id = window.location.href.split('?')[1].split('=')[1]
	let response = await request(`/single/${id}`, 'GET');
    let likeResponse =await request(`/like/${id}`, 'GET')
    console.log(likeResponse)
    console.log(response)
    video.src = link + response[0].video_link
    let userResponse = await request(`/user/video/${response[0].user_id}`,'GET')
    for(let item of userResponse){
        let a = document.createElement("a")
        let singleBox = document.createElement("div")
        let img = document.createElement("img")
        img.src = link + item.video_poster
        singleBox.setAttribute("class" , 'single-box-img')
        img.setAttribute("class" , 'video-video')
        a.setAttribute("class" , 'single-box')
        a.setAttribute("href" ,'/single?videoId='+item.video_id)
        a.append(singleBox)
        singleBox.append(img)
        singleRight.append(a)
    }

     
    if(token){
        if(likeResponse[1]){
            if(likeResponse[1].is_liked == true){
                like.classList.add("show")
            }
            else{
                dislike.classList.add("show")
            }
            console.log('man')
        }
            
        if(likeResponse[0]){
            followEvent(add, {follow: true})
        }else {
            followEvent(add, {follow: false})
        }
        like.addEventListener('click', async () => {
            let obj = await request(`/api/video/like/${response[0].video_id}`, "POST", {E: "HELLO"});
            likeEvent(like, dislike, obj);
        });
    
        dislike.addEventListener('click', async () => {
            let obj = await request(`/api/video/dislike/${response[0].video_id}`, "POST", {E: "HELLO"});
            likeEvent(like, dislike, obj);
        });
    
        add.addEventListener('click' , async function(){
            let follow = await request(`/subscription/${response[0].user_id}` , "POST" , {E:'HELLO'})
            followEvent(add , follow)
        })
    }

    else{
        console.log('tokening yoq bratish')
    }

}
single()


if(token){
    async function users () {
        let response = await request('/', 'GET')
        let img = document.createElement("img")
        img.src = link + response.user_img
        img.setAttribute("class" , "user_img")
        singleUser.appendChild(img)
    }
    users()
}
else{
    let loginEl = document.createElement("a") 
    loginEl.setAttribute("href","/login")
    loginEl.textContent = 'login'
    singleUser.style.display= "none"
    login.append(loginEl)
}



function likeEvent (like, dislike, obj) {
    if(!obj){
        like.classList.remove('show');
        dislike.classList.remove('show');
    } else if(obj.is_liked){
        like.classList.add('show');
        dislike.classList.remove('show');
    } else {
        like.classList.remove('show');
        dislike.classList.add('show');
    }
}

function followEvent (subs,obj){
    if(obj.follow){
        subs.classList.add("show")
        subs.textContent = 'follow qilding'
    }
    else{
        subs.classList.remove("show")
        subs.textContent = 'follow qilish'
    }
}


comment.onsubmit = async (event) => {

    let id = window.location.href.split('?')[1].split('=')[1]
	event.preventDefault()
	let commentTitle = {
        title : title.value,
        videoId:id
	}
    title.value = ''
	let response = await request('/comment', 'POST', commentTitle)	
}





async function commentFunc () {
    let id = window.location.href.split('?')[1].split('=')[1]

    let getComment = await request(`/comment/${id}`,'GET')
    for(let item of getComment){
        let span = document.createElement("div")
        let p = document.createElement("p")
        let username = document.createElement("p")
        let userImg = document.createElement("img")
        let div = document.createElement("div")
        div.setAttribute('class' , 'commentDiv')
        userImg.setAttribute('class' , 'commentImg')
        p.setAttribute("class" , 'title')
        span.setAttribute("class" , 'commentBox')
        userImg.src =link+ item.user_img
        username.textContent = item.user_username
        p.textContent = item.comment_text
        div.append(userImg)
        div.append(username)
        span.append(div)
        span.append(p)
        allComments.append(span)
    }
    console.log(getComment)
    
}
commentFunc()