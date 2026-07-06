function podeVotar(idade){
    return idade >= 16
}

const readline = require("readline-sync")

let idade = Number(readline.question("Digite sua idade: "))

if(podeVotar(idade)){
    console.log("Pode votar")
}else{
    console.log("Nao pode votar")
}
