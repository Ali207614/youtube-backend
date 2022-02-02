


authForm.onsubmit = async (event) => {
	event.preventDefault()

	let newUser = {
		userName: username.value,
		password: password.value
	}
	let response = await request('/login', 'POST', newUser)
	console.log(response)
	if(response.token) {
		window.localStorage.setItem('token', response.token)
		window.location = '/'
	} else {
		error.textContent = response.message
	}
}
