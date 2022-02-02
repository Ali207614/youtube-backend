setting.onsubmit = async (event) => {
	event.preventDefault()
	let formData = new FormData()
	formData.append("video" , video.files[0])
	formData.append("poster" , poster.files[0])
	formData.append("title" , title.value)
	let response = await request('/api/upload', 'POST', formData)
    console.log(response)	
	if(response.token) {
		window.localStorage.setItem('token', response.token)
		window.location = '/'
	}
	else{
		console.log('error')
	}
}