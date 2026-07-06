const readline = require("readline-sync")

let numero = Number(readline.question("Digite um numero: "))

for(let i = numero; i >= 1; i--){
    console.log(i)
}

console.log("Fim!")
