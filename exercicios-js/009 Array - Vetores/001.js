let vet = [1, 5, 9, 3, 7, 0]
console.log(`Meus valores são: ${vet}`)
console.log(`Meu vetor tem ${vet.length} posições.`)
console.log(`Mostre o vetor na posição 0: ${vet[0]}, e da posição 2: ${vet[2]}.`)
console.log(`Meu vetor em ordem é: ${vet.sort()}`)

//Adicionando o número 3 por último no vetor:
vet.push(3)
console.log(`Adicionando o número 3 por último no vetor: ${vet}.`)

// Para pesquisar as valores nas posições nos arrays:
let pos = vet.indexOf(3)
console.log(`O número 3 está na posição ${pos}.`)

// Se não existir o valor no vetor, o programa retorna -1. ex:
let pos2 = vet.indexOf(4)
if (pos2 == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos2}`)
}