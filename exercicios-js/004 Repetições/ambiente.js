console.log('Repetindo um comando:')

console.log('Com teste lógico primeiro e execução depois:')
var c = 1
while (c <= 5) {
    console.log(`Passo ${c}`)
    c++
}

console.log('Com teste lógico por último e execução primeiro:')
var c = 1
do {
    console.log(`${c}`)
    c++
} while (c <= 5)