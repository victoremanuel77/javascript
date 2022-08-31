let num = [20, 300, 40];
num[3] = 15;
num.push(70);
num.sort(function(a, b){return   a-b});
console.log(num);
console.log(`O vetor tem ${num.length} elementos`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(70);
if (pos == -1) {
    console.log('O valor não foi encontrado.');
} else {
    console.log('O valor está na posição ' + pos);
}
