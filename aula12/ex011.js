var idade = 72; 
if (idade < 16) {
    console.log('Não Vota');
} 
else if (idade < 18 || idade > 70 ) {
        console.log('Voto Facultativo');
}
else {
    console.log('Voto Obrigatório');
}