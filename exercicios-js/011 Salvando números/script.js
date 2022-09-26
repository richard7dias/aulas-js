let num = document.getElementById('ntxt')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if (n <= 100 && n >= 1) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(Number(num.value)) && !inList(Number(num.value), valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Erro! Número inválido ou já preenchido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Nenhum valor adicionado.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            media = soma / tot
        }
        res.innerHTML += `<p>Ao todo, temos ${tot} números.</p>`
        res.innerHTML += `<p>O maior número é o ${maior}.</p>`
        res.innerHTML += `<p>O menor número é o ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números é de ${soma}.</p>`
        res.innerHTML += `<p>A média entre os números é ${media}.</p>`
    }
}