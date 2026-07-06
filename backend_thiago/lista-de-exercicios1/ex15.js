let produtos = [
    {id: 1, nome: "Mouse", preco: 50},
    {id: 2, nome: "Teclado", preco: 120},
    {id: 3, nome: "Monitor", preco: 900},
    {id: 4, nome: "Webcam", preco: 150},
    {id: 5, nome: "Headset", preco: 200}
]

console.log(produtos.find(produto => produto.id == 3))

console.log(produtos.filter(produto => produto.preco > 100))

console.log(produtos.map(produto => produto.nome))

produtos.forEach(produto => {
    console.log(`${produto.nome} - R$${produto.preco}`)
})
