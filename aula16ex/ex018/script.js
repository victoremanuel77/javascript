let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('p#res');
let valores = [];

//verifica se o valor está entre 1 - 100
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
//verifica se um valor já foi adicionado no array
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

btn.onclick = function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item);
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor inválido ou já adicionado a lista!');
    }   
num.value = '';
num.focus();
} 

btn2.onclick = function limparDados () {
    lista.innerHTML = '';
    res.innerHTML = '';
    valores = [];
}

btn3.onclick = function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERRO] Nenhum valor adicionado!')
    } else {
        //soma os valores do array
        let sum = 0;
        for (let i = 0; i < valores.length; i++) { 
            sum += valores[i];
        }
        //faz a média do array
        function media(somaA) { 
            return Number.parseInt(somaA / valores.length)
        }
        res.innerHTML = `<p>Foram adicionados ${valores.length} valores na lista</p>`;
        res.innerHTML += `<p>O menor valor da lista é ${Math.min.apply(Math, valores)}</p>`;
        res.innerHTML += `<p>O maior valor da lista é ${Math.max.apply(Math, valores)}</p>`;
        res.innerHTML += `<p>O resultado da soma dos valores é ${sum}</p>`;
        res.innerHTML += `<p>A média dos dos valores listados é ${media(sum)}</p>`;
       
    }
} 

