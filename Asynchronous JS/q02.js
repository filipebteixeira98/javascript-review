var myPromise = function() {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://api.github.com/users/filipebteixeira98');
		xhr.send(null);

		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {

			}
		};
	});
};