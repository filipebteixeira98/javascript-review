var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function renderRepositories(repositories) {
	listElement.innerHTML = '';
	
	for(repo of repositories) {
		var liElement = document.createElement('li');
		var textElement = document.createTextNode(repo.name);

		liElement.appendChild(textElement);
		listElement.appendChild(liElement);
	}
}

function renderLoading() {
	listElement.innerHTML = '';

	var loadingElement = document.createElement('li');
	var textElement = document.createTextNode('Loading...');

	loadingElement.appendChild(textElement);
	listElement.appendChild(loadingElement);
}

function renderError(err) {
	listElement.innerHTML = '';

	var errorElement = document.createElement('li');
	var textElement = document.createTextNode(err);

	errorElement.style.color = '#FF0';

	errorElement.appendChild(textElement);
	listElement.appendChild(errorElement);
}

function listRepositories() {
	var user = inputElement.value;

	if(!user) return;

	renderLoading();

	axios.get('https://api.github.com/users/' + user + '/repos')
		.then(function(response) {
			renderRepositories(response.data);
		})
		.catch(function(error) {
			renderError(error);
		});
}