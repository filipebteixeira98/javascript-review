function experiencia(anos) {
	switch(anos){
		case anos <= 1:
			return 'Iniciante';
		case anos <= 3:
			return 'Intermediário';
		case anos <= 6:
			return 'Avançado';
		case anos >= 7:
			return 'Jedi Master';
		default: 
			return 'Quantidade inválida!';
	}
}

var anosEstudo = 7;

