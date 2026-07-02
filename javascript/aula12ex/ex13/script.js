function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var inputAno = document.getElementById('ano');
    var resultado = document.getElementById('resultado');
    if (inputAno.value.length == 0 || inputAno.value > ano || inputAno.value < 1916) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var inputSexo = document.getElementsByName('opcaoSexo');
        var idade = ano - Number(inputAno.value);
        var genero = ''
        var img = document.createElement('img');
            img.setAttribute('id', 'foto')
        if (inputSexo[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_homem_bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto_homem_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto_homem_adulto.png')
            } else {
                img.setAttribute('src', 'foto_homem_idoso.png')
            }
        } else {
            var genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_mulher_bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto_mulher_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto_mulher_adulto.png')
            } else {
                img.setAttribute('src', 'foto_mulher_idoso.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detecamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}