function experience(time) {
	switch(time) {
		case time <= 1:
			return 'Iniciante';
		case time <= 3:
			return 'Intermediário';
		case time <= 6:
			return 'Avançado';
		case time >= 7:
			return 'Jedi Master';
		default: 
			return 'Quantidade inválida!';
	}
}

var time = 7;

console.log(experience(time));