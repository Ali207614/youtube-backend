

authForm.onsubmit = async (event) => {
	event.preventDefault()
	let newUser = {
		username : username.value,
		password : password.value,
		email:email.value,
		age:age.value,
		contact:contact.value
	}

	let response = await request('/register', 'POST', newUser)	
	if(response.token) {
		window.localStorage.setItem('token', response.token)
		window.location = '/'
	}
	else{
		error.textContent = response.message
	}
}
