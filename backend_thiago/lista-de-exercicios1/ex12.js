function calcular(a, b, operacao){
    return operacao(a, b)
}

console.log(calcular(5, 3, (a, b) => a + b))
console.log(calcular(5, 3, (a, b) => a - b))
console.log(calcular(5, 3, (a, b) => a * b))
