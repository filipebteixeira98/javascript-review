function checkAge(age) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			return age >= 18 ? resolve() : reject();
		}, 2000);
	});
}

checkAge(15)
	.then(function() {
		console.log('Of age');
	})
	.catch(function(){
		console.log('Minor');
	});
