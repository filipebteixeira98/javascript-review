function showMsg(address) {
	return 'O usuário mora em ' + address.cidade + ' / ' + address.uf + ', no bairro ' + address.bairro + ', na rua "' + address.rua + '" com nº ' + address.numero + '.';
}

var address = {
	rua: 'Rua dos pinheiros',
	numero: 1293,
	bairro: 'Centro',
	cidade: 'São Paulo',
	uf: 'SP'
};

console.log(showMsg(address));