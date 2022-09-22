// Para mostrar de forma mais agradável as posições de um vetor
let vet = [1, 5, 3, 7, 9, 4, 3]
for (let pos = 0; pos < vet.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${vet[pos]}.`)
}
console.log('Confira:')
console.log(vet)

// Para resumir o código, só usar o in
console.log('Resumido:')
for (let pos in vet) {
    console.log(vet[pos])
}