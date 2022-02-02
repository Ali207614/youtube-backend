
let roWrap = document.querySelector(".row-wrap")
let link = 'http://localhost:4500/'
async function video () {
	let response = await request('/api/myVideo', 'GET')
    console.log(response)
    myFunc(response)
}
video()




function myFunc(a){
    for(let item of a){
        let a = document.createElement("a")
        let boxImg = document.createElement("div")
        
        let boxdiv = document.createElement("div")
        let img = document.createElement("img")
        let videoTitle = document.createElement('h3')
        let userName = document.createElement('p')
        let boxTitle = document.createElement("div")
        let boxUserImg = document.createElement("img")
        boxUserImg.src = link + item.user_img
        boxUserImg.setAttribute("class" , 'boxUser')
        videoTitle.textContent = item.video_title
        videoTitle.setAttribute("class" , 'video_title')
        userName.textContent = item.user_username
        userName.setAttribute("class" ,'user_name')
        a.setAttribute("class" ,'box')
        a.setAttribute("id" ,item.video_id)
        a.setAttribute("href" ,'/single?videoId='+item.video_id)
        boxImg.setAttribute("class" ,'box-img')
        img.setAttribute("class" ,'video-video')
        boxTitle.setAttribute("class",'boxTitle')
        boxdiv.setAttribute("class" , 'boxDiv')
        img.src = link + item.video_poster
        boxTitle.append(boxdiv)
        boxdiv.append(boxUserImg)
        boxImg.appendChild(img)
        boxTitle.append(videoTitle)
        boxTitle.append(userName)
        a.appendChild(boxImg)
        a.append(boxTitle)
        roWrap.appendChild(a)
        
    }
}


