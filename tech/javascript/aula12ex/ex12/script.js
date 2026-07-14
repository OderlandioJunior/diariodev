function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        img.src = 'foto_manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#515154'
    }
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
}


