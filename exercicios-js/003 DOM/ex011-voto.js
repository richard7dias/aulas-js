var i = 79
console.log(`Você tem ${i} anos.`)
if (i < 16) {
    console.log('Não vota.')
} else if (i < 18 || i > 65) {
    console.log('Voto opicional.')
} else {
    console.log('Voto obrgatório')
}