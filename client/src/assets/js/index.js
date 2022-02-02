let roWrap = document.querySelector(".row-wrap")
let userText = document.querySelector("#head-link-user h3")
let user = document.querySelector("#head-link-user ")
let accountMenu = document.querySelector(".account-menu")
let sub = document.querySelector(".sub")
let link = 'http://localhost:4500/'







async function users () {
    let token = window.localStorage.getItem('token');
    if(token){
        let response = await request('/', 'GET')
        console.log(response)
        let img = document.createElement("img")
        img.src = link + response.user_img
        img.setAttribute("class" , "user_img")
        user.appendChild(img)

    }else{
        let loginEl = document.createElement("a") 
        loginEl.setAttribute("href","/login")
        loginEl.textContent = 'login'
        user.style.display= "none"
        login.append(loginEl)
       
    }
}
users()

async function follow () {
        let response = await request('/follower', 'GET')
        for(let item of response){
            let a = document.createElement("a")
            a.setAttribute("href" ,'/subs?userId='+item.user_id)
            let image = document.createElement("img")
            let text = document.createElement('p')
            image.src = link + item.user_img
            text.textContent = item.user_username
            a.append(image)
            a.append(text)
            image.setAttribute("class", 'chanel-img')
            a.setAttribute("class" , 'sidebar-link')
            sub.append(a)
        }

  
}
follow()

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

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

async function video () {
	let response = await request('/api/video', 'GET')
    console.log(response)
    roWrap.innerHTML = null
    myFunc(shuffle(response))
}
video()

user.addEventListener("click" ,function(){
    accountMenu.classList.toggle("show")
})




formSearch.onsubmit = async (event) => {
	event.preventDefault()
    

	let response = await request('/search?key=' + searchInput.value.toLowerCase() , "GET")
    roWrap.innerHTML = null
    myFunc(response)
}

formSearch.onkeyup = async(event) => {
    event.preventDefault
    keyup.innerHTML = null
    let response = await request('/search?key=' + searchInput.value.toLowerCase() , "GET")
    for(let item of response){
        let a = document.createElement("button")
        a.classList.add('searchLink')
        a.textContent = item.video_title
        a.addEventListener('click' ,async function(){
            roWrap.innerHTML = null
	        let response = await request('/search?key=' +   a.textContent.toLowerCase() , "GET")
            myFunc(response)
        })
        keyup.append(a)
    }
    if(searchInput.value == ''){
        keyup.innerHTML = null
    }
}