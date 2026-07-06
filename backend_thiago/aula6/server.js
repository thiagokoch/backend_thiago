const express = require("express");
const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 100 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
});

app.post("/produtos", (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.put("/produtos/:id", (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
    const indice = produtos.findIndex(p => p.id == req.params.id);

    if (indice == -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produtos.splice(indice, 1);

    res.json({ mensagem: "Produto removido" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
