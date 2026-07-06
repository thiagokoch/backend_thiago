let alunos = [
    {nome: "Thiago", nota: 8},
    {nome: "Pelé", nota: 6},
    {nome: "Neymar", nota: 9},
    {nome: "CR7", nota: 5},
    {nome: "Messi", nota: 7}
]

let boletim = alunos.map(aluno => {
    return {
        ...aluno,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    }
})

let aprovados = boletim.filter(aluno => aluno.situacao == "Aprovado")

let somaNotas = 0

alunos.forEach(aluno => {
    somaNotas += aluno.nota
})

let media = somaNotas / alunos.length

console.log(boletim)
console.log("Aprovados:", aprovados.length)
console.log("Média da turma:", media)
