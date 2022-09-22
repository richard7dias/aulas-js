function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var sau = window.document.getElementById('saudacao')
    msg.innerHTML = `Agora são <strong>${hora}h${min}</strong>.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#04412f'
        sau.innerHTML = '<strong>Bom dia!</strong>'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#cebaba'
        sau.innerHTML = '<strong>Boa tarde!</strong>'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#002c55'
        sau.innerHTML = '<strong>Boa noite!</strong>'
    }
}
