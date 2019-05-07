function showSkills(users) {
	for(user of users) {
		console.log('O ' + user.nome + ' possui as habilidades: ' + user.habilidades.join(', '));
	}
}

var users = [
	{
		nome: 'Diego',
		habilidades: ['Javascript', 'ReactJS', 'Redux']
	},
	{
		nome: 'Gabriel',
		habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
	}
];

showSkills(users);