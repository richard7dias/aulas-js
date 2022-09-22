function contador() {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var int = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var it = Number(int.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        res.innerHTML = `Impossível contar! Preencha todos os campos.`
    } else {
        res.innerHTML = 'Contando: <br>'
        if (it <= 0) {
            window.alert('Não é possível o intervalo ser 0. Considerando 1.')
            it = 1
        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += it) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (var c = i; c >= f; c -= it) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
