function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#txtano');
    var res = document.querySelector('#res');
    if (fano.value.length == 0 || Number(fano.value) >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.querySelector('#txtsexo');
        var idade = ano - Number(fano.value);
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');
        if (fsex.value === 'Masculino') {
            genero = 'Homem';
            if (idade >= 0 && idade < 3){
                //Bebê
                genero = 'Bebê';
                imagem.setAttribute('src', 'imagens/menino-bebe.jpg');
            }  else if(idade < 12) {
                //Criança
                genero = 'Menino';
                imagem.setAttribute('src', 'imagens/menino.jpg');
            } else if (idade < 19) {
                //Adolescente
                imagem.setAttribute('src', 'imagens/homem-adolescente.jpg');
            } else if (idade < 30) {
                //Jovem
                imagem.setAttribute('src', 'imagens/homem-jovem.jpg');
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'imagens/adulto.jpg');
            } else {
                // Idoso
                imagem.setAttribute('src', 'imagens/idoso.jpg');
            }
        } else if (fsex.value === 'Feminino') {
            genero = 'Mulher';
            if (idade >= 0 && idade < 3) {
                //Bebê
                genero = 'Bebê';
                imagem.setAttribute('src', 'imagens/menina-bebe.jpg');
            } else if (idade < 12) {
                //Criança
                genero = 'Menina';
                imagem.setAttribute('src', 'imagens/menina.jpg');
            } else if (idade < 19) {
                //Adolescente
                imagem.setAttribute('src', 'imagens/mulher-adolescente.jpg');
            } else if (idade < 30) {
                //Jovem
                imagem.setAttribute('src', 'imagens/mulher-jovem.jpg');
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'imagens/adulta.jpg');
            } else {
                // Idoso
                imagem.setAttribute('src', 'imagens/idosa.jpg');
            }
        }
        imagem.style.marginTop = '10px';
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos: ${genero} de ${idade} anos`; 
        res.appendChild(imagem);   
    }
}