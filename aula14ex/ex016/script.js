function contar() {
    let  inicio = document.querySelector('#fini');
    let  fim = document.querySelector('#ffim');
    let  passo = document.querySelector('#fpasso');
    let  res = document.querySelector('#res');
    let  n1 = Number(inicio.value);
    let  n2 = Number(fim.value);
    let  n3 = Number(passo.value);
    if (n1 == 0 || n2 == 0 || n3 == 0) {
        window.alert('[ERRO] Digite os valores novamente!');
    } else {
        res.innerHTML = 'Contando: ';
        if (n1 < n2) {
            //Contagem crescente
            while (n1 <= n2) {
                res.innerHTML += n1 + ' \u{1F449} ';
                n1 = n1 + n3;
            }
        }    
        else {
            //Contagem decrescente
            while (n1 >= n2) {
                res.innerHTML += n1 + ' \u{1F449} ';
                n1 = n1 - n3;
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}