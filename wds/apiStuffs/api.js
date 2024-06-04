// #1
fetch("https://jsonplaceholder.typicode.com/users", {
	method: "POST",
	headers: {
		"Content-Type": "applicatin/json"
	},
	body: JSON.stringify({
		name: "User 1"
	})
}).then((res) => {
		return res.json()
	})
	.then((data) => console.log(data))
	.catch((error) => console.log("Error"))

    // #2
