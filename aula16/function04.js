function fatorial(n) {
    let fat = 1;
    for (let contador = n; contador > 1; contador--) {
        fat *= contador;
    }
    return fat
}

console.log(fatorial(6));

let fatorial2 = function fac(n) {return n<2 ? 1 : n*fac(n-1)};
console.log(fatorial2(7)); // Expressão de função


// 6! = 6 x 5 x 4 x 3 x 2 x 1

