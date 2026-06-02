const aluno ={
    nome: "Thiago",
    idade: 18,
    cidade: "Cascavel",
    curso: "D.S"
};

console.log(`O aluno ${aluno.nome}, de ${aluno.idade} anos, da cidade de ${aluno.cidade} cursa ${aluno.curso} no CEEP`)

aluno.cidade= "California";

console.log(`O aluno ${aluno.nome}, de ${aluno.idade} anos, da cidade de ${aluno.cidade} cursa ${aluno.curso} no CEEP`)
