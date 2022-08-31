let amigo = {nome: 'Lucas', sexo: 'masculino', idade: 19,
envelhecer (a){
    console.log('Envelheceu')
    this.idade += a;
}}
amigo.envelhecer(3)
console.log(`${amigo.nome} tem ${amigo.idade} anos`);