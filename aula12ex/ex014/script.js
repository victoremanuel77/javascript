function carregar() {
    var msg = document.querySelector('#msg');
    var foto = document.querySelector('#imagem');
    var data = new Date();
    var hora = data.getHours();
    var mnt = data.getMinutes(); 
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora}:${mnt} da manhã.`;
        foto.src = ('imagens/manha.jpg');
        document.body.style.background = 'rgb(224, 170, 60)';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora}:${mnt} da tarde.`
        foto.src = ('imagens/tarde.jpg');
        document.body.style.background = 'rgb(254, 150, 35)';
    } else {
        msg.innerHTML = `Agora são ${hora}:${mnt} da noite.`;
        foto.src = ('imagens/noite.jpg');
        document.body.style.background = 'rgb(12, 10, 10)';
    }
}

