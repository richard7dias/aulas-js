function soma(n1 = 0, n2 = 0) { // O =0 está ali para o js sempre reconhecer um número, por exemplo, se não houver nenhum número no n2, somente dizer o n1, o n2 vai ser considerado 0 e o programa vai rodar somando 0
    return n1 + n2
}

console.log(soma(2, 8))