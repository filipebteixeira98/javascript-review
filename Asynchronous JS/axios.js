axios.get('https://api.github.com/users/filipebteixeira98')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});