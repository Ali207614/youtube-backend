

setting.onsubmit = async (event) => {
	event.preventDefault()
	let formData = new FormData()
	formData.append("file" , file.files[0])
	formData.append("userName" , username.value)
	let response = await request('/setting', 'POST', formData)	
	if(response.token) {
		window.localStorage.setItem('token', response.token)
		window.location = '/'
	}
	else{
		console.log('error')
	}
}

