var agora = new Date()
var h = agora.getHours()
var m = agora.getMinutes()
console.log(`Agora são ${h} horas e ${m} minutos.`)
if (h < 6) {
    console.log('Boa madrugada!')
} else if (h < 12) {
    console.log('Bom dia!')
} else if (h < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}