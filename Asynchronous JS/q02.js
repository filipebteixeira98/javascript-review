var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function renderRepositories(repositories) {
	for(repo of repositories) {
		var liElement = document.createElement('li');
		var textElement = document.createTextNode(repo.name);

		liElement.appendChild(textElement);
		listElement.appendChild(liElement);
	}
}

function listRepositories() {
	var user = inputElement.value;

	if(!user) return;

	axios.get('https://api.github.com/users/' + user + '/repos')
		.then(function(response) {
			renderRepositories(response.data);
		})
		.catch(function(error) {
			console.warn(error);
		});
}