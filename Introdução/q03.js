function temHabilidades(skills) {
	return skills.indexOf('Javascript') !== -1;
}

var skills = ['Javascript', 'ReactJS', 'React Native'];

console.log(temHabilidades(skills));