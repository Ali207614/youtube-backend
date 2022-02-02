let host = 'http://localhost:4500'
async function request (url, method, body) {
    let token = window.localStorage.getItem('token');
    let response = await fetch(host + url, {
            method,
            headers: {
                token,
            },
            body: body
        })
	let parsedResponse = await response.json()
	return parsedResponse
}
