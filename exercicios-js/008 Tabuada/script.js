function calcular() {
    var numero = window.document.getElementById('txtn')
    var n = Number(numero.value)
    var res = window.document.getElementById('res')
    if (n <= 0) {
        res.innerHTML = 'Digite um número válido!'
    } else {
        res.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            res.appendChild(item)
        }
    }
}