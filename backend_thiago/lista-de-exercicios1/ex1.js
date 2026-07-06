const input = require('readline-sync')
const temp = input.question("qual o número da temperatura pra conversão?")
let fahrenheit = temp * 1.8 + 32
console.log(`${temp}°C corresponde a ${fahrenheit}°F`)
